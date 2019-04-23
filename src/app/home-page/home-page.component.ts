import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { MatSnackBar } from "@angular/material";
import { StateService, View } from "app/state/state.service";

class Picture {
  display: boolean;
  fileName: string;
}

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  View = View // expose the constants into the template
  // number = 0;
  // numberofPhotos = 0;
  // qrCodeURL: String = "";
  // qrCodeVisible: Boolean = false;
  // multiple: Boolean;
  // multipleDisplay: Array<number> = [];
  // pictures: Array<Picture> = [];
  // pictureURL: string;

  constructor(private socket: Socket, public snackBar: MatSnackBar, public state: StateService) { }
  ngOnInit() {
    this.state.view$.subscribe(d => console.log(d))
  }
}



//     this.pictureURL = "";
// this.socket
// .fromEvent("countdown-start")
// .subscribe((message: Array<number>) => {
//   this.state = "start";
//   this.pictures = [];
//   this.qrCodeVisible = false;
//   this.multiple = message.length > 1;
//   this.multipleDisplay = message;
//   console.debug("countdown-start", message, this);
// });

// this.socket
// .fromEvent("countdown-tick")
// .subscribe((message: Array<number>) => {
//   this.state = "countdown";
//   this.multiple = message.length > 1;
//   this.multipleDisplay = message;
//   console.debug("countdown-tick", message, this);
// });

// this.socket
// .fromEvent("countdown-tick-final")
// .subscribe(({ message, picture }) => {
//   this.state = "flash";
//   this.multiple = message.length > 1;
//   this.multipleDisplay = message;
//   const pictureIndex = message.filter(x => !x).length - 1;
//   this.pictures[pictureIndex] = { display: false, fileName: picture };
// });

// this.socket.fromEvent("camera-picture-fail").subscribe(() => {
// this.state = "home";
// console.error("camera-picture-fail");
// this.snackBar.open("Camera fail", "dismiss", {
//   duration: 5000
// });
// });

// this.socket
// .fromEvent("countdown-finish")
// .subscribe((message: Array<number>) => {
//   setTimeout(() => {
//     this.state = "home";
//   }, 30000);
//   console.debug("countdown-finish", message, this);
// });

// this.socket
// .fromEvent("camera-picture-ready")
// .subscribe((fileName: string) => {
//   if (this.multipleDisplay.length > 1) {
//     const index = this.pictures.findIndex(e => e.fileName === fileName);
//     this.pictures[index].display = true;
//   } else {
//     this.state = "picture";
//     this.pictureURL = fileName;
//   }
//   console.debug("camera-picture-ready", fileName, this);
// });

// this.socket.fromEvent("dropbox-url").subscribe((f: String) => {
// console.log("dropbox-url", f);
// this.qrCodeURL = f;
// this.qrCodeVisible = true;
// });

// this.socket.fromEvent("dropbox-login-success").subscribe(d => {
// console.log("dropbox-login-success", d);
// this.snackBar.open("Dropbox log in success", "dismiss", {
//   duration: 5000
// });
// });

// this.socket.fromEvent("dropbox-upload-success").subscribe(d => {
// console.log("dropbox-upload-success", d);
// this.snackBar.open("Dropbox upload success", "dismiss", {
//   duration: 5000
// });
// });
