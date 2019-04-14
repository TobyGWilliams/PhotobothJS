import { Component, OnInit, HostListener } from '@angular/core';
import { } from "@angular/core";

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  screenHeight: Number
  screenWidth: Number

  constructor() { }

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight-50;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth)
  }

}
