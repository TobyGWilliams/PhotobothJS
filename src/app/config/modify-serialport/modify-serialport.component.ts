import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ConenctedSerialPort } from "./../../../models/serialport.interface";

@Component({
  inputs: ["serialPort"],
  outputs: ["disconnectSerialPort"],
  selector: "modify-serialport",
  template: `
    <p>
      The current serial port is: <b>{{ serialPort?.path }}</b>
    </p>
    <div>
      <button
        mat-raised-button
        color="primary"
        (click)="disconnectSerialPort.emit()"
      >
        Disconnect
      </button>
    </div>
  `
})
export class ModifySerialPort {
  serialPort: ConenctedSerialPort;
  disconnectSerialPort = new EventEmitter();
}
