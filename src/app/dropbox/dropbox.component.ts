import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-dropbox",
  templateUrl: "./dropbox.component.html",
  styleUrls: ["./dropbox.component.css"]
})
export class DropboxComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private socket: Socket) {}

  ngOnInit() {
    this.socket.on("connect", () => {
      console.log(window.location.hash);
      if (window.location.hash != null) {
        this.socket.emit("dropbox-token", window.location.hash);
        this.router.navigateByUrl("/home");
      }
    });
  }
  ngOnDestroy() {
    this.socket.removeListener("connect");
  }
}
