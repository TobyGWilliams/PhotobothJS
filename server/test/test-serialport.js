import Serial from "../serial-port";

const port = Serial("/dev/tty.usbmodem141101");

port.emitter.on("serial-port-connected", () => {
  console.log("serial port connected");
});
