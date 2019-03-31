import SerialPortLib from "serialport";
import Readline from "@serialport/parser-readline";
import EventEmitter from "events";

export const serialPortsList = () => SerialPortLib.list();

export class SerialPort {
  constructor(portName) {
    this.listening = true;
    this.emitter = new EventEmitter();
    this.port = new SerialPortLib(
      portName,
      {
        baudRate: 9600
      },
      err => {
        if (err) console.error("Error: ", err);
        this.emitter.emit("serial-port-connected");
      }
    );
    const parser = this.port.pipe(new Readline());

    parser.on("data", data => {
      if (data.trim() === "press" && this.listening) {
        this.emitter.emit("press");
        this.listening = false;
        setTimeout(() => {
          this.listening =true;
        }, 5000);
      }
    });
  }
}
