import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  state = 'home'
  number = 0
  pictureURL: String = ''
  constructor(
    private socket: Socket
  ) {
    this.socket.fromEvent('tick').subscribe((m: number) => {
      this.state = 'running'
      this.number = m
      console.log('tick', this);
    });
    this.socket.fromEvent('tick-final').subscribe((m: number) => {
      this.state = 'final'
      this.number = 10
      console.log('tick-final', this)
      setTimeout(() => {
        this.state = 'home'
        console.log('tick-final-timeout', this)
      }, 2000)
    })
    this.socket.fromEvent('tick-start').subscribe((m: number) => {
      this.state = 'start'
      console.log('tick-start', this)
    })
    this.socket.fromEvent('file-new').subscribe((f: String) => {
      this.state = 'picture'
      this.pictureURL = f
      console.log('file-new', f);
    });
  }
  ngOnInit() { }
}
