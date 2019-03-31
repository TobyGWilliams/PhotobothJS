import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";

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
  selectedSerialPort: SerialPort;
  serialPorts: Array<SerialPort> = [];
  dropbox = {
    authUrl: "",
    authStatus: "not-auth",
    name: "",
    email: ""
  };
  filePath = "/file/to/something";

  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.fromEvent("dropbox-authUrl").subscribe((m: string) => {
      this.dropbox.authUrl = m;
      console.log("dropbox-authUrl", m);
    });

    this.socket
      .fromEvent("dropbox-authStatus")
      .subscribe((message: DropboxAuth) => {
        this.dropbox.authStatus = message.status;
        this.dropbox.name = message.name;
        this.dropbox.email = message.email;
        console.log("dropbox-authStatus", message, this.dropbox);
      });

    this.socket.fromEvent("file-path").subscribe((message: string) => {
      this.filePath = message;
      console.log("file-path", this.filePath);
    });

    this.currentSerialPort$ = this.socket.fromEvent("serial-ports-current");

    this.socket.emit("config-get");
  }
  ngOnDestroy() {
    this.socket.removeListener("dropbox-authStatus");
    this.socket.removeListener("dropbox-authUrl");
    this.socket.removeListener("file-path");
    this.socket.removeListener("serial-ports-list");
    this.socket.removeListener("serial-ports-current");
  }

  disconnectSerialPort() {
    this.socket.emit("serial-port-disconnect");
  }
}
