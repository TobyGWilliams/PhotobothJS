import Socket from "socket.io";
import jsonfile from "jsonfile";

import { serialPortsList, SerialPort } from "./serial-port";
import Server from "./server";
import { Camera } from "./camera";
import { Countdown } from "./countdown";
import { Dropbox } from "./dropbox";
import State from "./state";

const configFile = "./server/config.json";
const config = jsonfile.readFileSync(configFile);

const state = new State(config.filePath);

const server = new Server(state.getFilePath());
const socket = new Socket(server.server);
const dropbox = new Dropbox(state.getFilePath());
const camera = new Camera(state.getFilePath());

state.emitter.on("state", state => {
  socket.emit("state", state);
});

if (config.dropboxAuthToken) {
  dropbox.setAccessToken(config.dropboxAuthToken);
}

socket.on("connection", client => {
  client.on("webcam-enabled-toggle", () => {
    state.webcam.enabled = !state.webcam.enabled;
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
        // startCountdown();
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

  socket.emit("state", state.state);
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
