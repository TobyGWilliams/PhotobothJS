import Socket from "socket.io";

import Server from "../server.js";
import { Countdown } from "../countdown";

const config = { file_path: "" };

const server = new Server(config.file_path);
const socket = new Socket(server.server);

socket.on("connection", () => {
  const countdown = new Countdown(8, 1, 3);
  countdown.emitter.on("countdown-start", e =>
    socket.emit("countdown-start", e)
  );
  countdown.emitter.on("countdown-finish", e => {
    socket.emit("countdown-finish", e);
  });
  countdown.emitter.on("countdown-tick", e => {
    socket.emit("countdown-tick", e);
  });
  countdown.emitter.on("countdown-tick-final", e => {
    socket.emit("countdown-tick-final", e);
  });
  countdown.start();
});
