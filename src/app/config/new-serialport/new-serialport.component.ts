import { SerialPort } from './../../../models/serialport.interface';
import { Socket } from "ngx-socket-io";
import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "new-serialport",
  template: `
    <p>Pick the serial port that the serial button is connected to.</p>
    <form>
      <mat-form-field class="fullWidth">
        <mat-select
          placeholder="Select"
          [(ngModel)]="selectedSerialPort"
          name="serialPort"
        >
          <mat-option
            [value]="port"
            *ngFor="let port of (serialPortList$ | async)"
            >{{ port.comName }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <div>
        <button
          mat-raised-button
          color="primary"
          *ngIf="selectedSerialPort"
          (click)="connectSerialPort()"
        >
          Connect
        </button>
      </div>
    </form>
  `
})
export class NewSerialPort {
  serialPortList$: Observable<Array<SerialPort>>;
  selectedSerialPort: SerialPort;

  constructor(private socket: Socket) {
    this.serialPortList$ = socket.fromEvent("serial-ports-list");
  }

  connectSerialPort() {
    this.socket.emit("serial-port-connect", this.selectedSerialPort);
  }
}
