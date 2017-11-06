import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countdown = false
  number = 0
  constructor(
    private socket: Socket
  ) {
    console.log('homepage component');
    this.socket.fromEvent('tick').subscribe((m: number) => {
      this.countdown = true
      this.number = m
      console.log('tick', this);
    });
    this.socket.fromEvent('tick-final').subscribe((m: number) => {
      this.countdown = false
      this.number = m
      console.log('tick-final', this)
    })
    this.socket.fromEvent('tick-start').subscribe((m: number) => {
      this.countdown = true
      console.log('tick-start', this)
    })
  }
  ngOnInit() { }
}
