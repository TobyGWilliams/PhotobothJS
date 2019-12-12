import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { StateService } from "app/state/state.service";

export interface DropboxAuth {
  status: string;
  name: string;
  email: string;
}

export interface ConenctedSerialPort {
  path;
}

export interface SerialPort {
  comName: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  locationId: string;
  vendorId: string;
  productId: string;
}

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
  currentSerialPort$: Observable<ConenctedSerialPort>;

  constructor(private state: StateService) {}

  ngOnInit() {}

  disconnectSerialPort() {
    console.log('send message to server to disconnect serial port')
  }
}
