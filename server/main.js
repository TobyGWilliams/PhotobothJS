import Socket from "socket.io";
import jsonfile from "jsonfile";

import { serialPortsList, SerialPort } from "./serial-port";
import Server from "./server";
import { Camera } from "./camera";
import { Countdown } from "./countdown";
import { Dropbox } from "./dropbox";

const configFile = "./server/config.json";
const config = jsonfile.readFileSync(configFile);

const server = new Server(config.file_path);
const socket = new Socket(server.server);
const dropbox = new Dropbox(config.file_path);
const camera = new Camera(config.file_path);

// state
const state = {
  serialPort: null,
  countdown: {
    numberOfPhotos: 1,
    initialCountdown: 5,
    subsequentCountdown: 5
  }
};

if (config.dropboxAuthToken) {
  dropbox.setAccessToken(config.dropboxAuthToken);
}

const startCountdown = () => {
  const {
    numberOfPhotos,
    initialCountdown,
    subsequentCountdown
  } = state.countdown;

  const countdown = new Countdown(
    initialCountdown,
    numberOfPhotos,
    subsequentCountdown
  );

  countdown.emitter.on("countdown-start", message =>
    socket.emit("countdown-start", message)
  );

  countdown.emitter.on("countdown-finish", message => {
    socket.emit("countdown-finish", message);
  });

  countdown.emitter.on("countdown-tick", message => {
    socket.emit("countdown-tick", message);
  });

  countdown.emitter.on("countdown-tick-final", message => {
    const picture = camera.takePicture();
    if (picture) socket.emit("countdown-tick-final", { message, picture });
  });

  countdown.start();
};

socket.on("connection", client => {
  client.on("config-get", () => {
    socket.emit("file-path", config.file_path);
    socket.emit("dropbox-authUrl", dropbox.getLoginUrl());
    socket.emit("dropbox-authStatus", dropbox.getAuthStatus());
    socket.emit(
      "serial-ports-current",
      state.serialPort ? state.serialPort.port : null
    );
    serialPortsList().then(serialPorts => {
      socket.emit("serial-ports-list", serialPorts);
    });
  });
  client.on("dropbox-token", message => {
    if (message.match("access_token=(.*?)&") != null) {
      dropbox.setAccessToken(message.match("access_token=(.*?)&")[1]);
    } else {
      console.error("dropbox token failed", message);
    }
  });
  client.on("serial-port-connect", message => {
    if (state.serialPort) {
      console.error("serial port already connected");
    } else {
      state.serialPort = new SerialPort(message.comName);
      state.serialPort.emitter.on("press", () => {
        startCountdown();
      });
      state.serialPort.emitter.on("serial-port-connected", () => {
        socket.emit(
          "serial-ports-current",
          state.serialPort ? state.serialPort.port : null
        );
      });
    }
  });
  client.on("serial-port-disconnect", () => {
    state.serialPort.port.close();
    state.serialPort = null;
    socket.emit(
      "serial-ports-current",
      state.serialPort ? state.serialPort.port : null
    );
    serialPortsList().then(serialPorts => {
      socket.emit("serial-ports-list", serialPorts);
    });
  });
});

camera.emitter.on("camera-picture-ready", message => {
  socket.emit("camera-picture-ready", message);
  dropbox.newPicture(message);
});

camera.emitter.on("camera-picture-fail", () => {
  console.error("camera-picture-fail");
  socket.emit("camera-picture-fail");
});

dropbox.emitter.on(
  "dropbox-login-success",
  ({ status, name, email, token }) => {
    socket.emit("dropbox-login-success", { status, name, email });
    config.dropboxAuthToken = token;
    jsonfile.writeFile(configFile, config);
  }
);

dropbox.emitter.on("dropbox-login-failure", () => {
  config.dropboxAuthToken = null;
  jsonfile.writeFile(configFile, config);
});

dropbox.emitter.on("dropbox-url", message => {
  socket.emit("dropbox-url", message);
});
