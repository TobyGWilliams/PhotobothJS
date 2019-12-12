import { Component, OnInit, HostListener } from "@angular/core";
import {} from "@angular/core";
import { StateService } from "app/state/state.service";

@Component({
  selector: "app-webcam",
  templateUrl: "./webcam.component.html",
  styleUrls: ["./webcam.component.css"]
})
export class WebcamComponent implements OnInit {
  screenHeight: Number;
  screenWidth: Number;

  constructor(public state: StateService) {}

  ngOnInit() {
    this.getScreenSize();
    this.state.webcam$.subscribe(webcam => {
      console.log("webcam", webcam);
    });
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight - 50;
    this.screenWidth = window.innerWidth;
  }
}
