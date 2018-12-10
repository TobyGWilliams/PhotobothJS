import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  state = 'home';
  number = 0;
  pictureURL: String = '';
  qrCodeURL: String = '';
  qrCodeVisible: Boolean = false;
  constructor(private socket: Socket, public snackBar: MatSnackBar) {
    this.socket.fromEvent('tick').subscribe((m: number) => {
      this.state = 'running';
      this.number = m;
      console.log('tick', m);
    });
    this.socket.fromEvent('tick-final').subscribe(() => {
      this.state = 'final';
      this.number = 10;
      setTimeout(() => {
        this.state = 'home';
      }, 10000);
    });
    this.socket.fromEvent('tick-start').subscribe((m: number) => {
      this.state = 'start';
      console.log('tick-start', this);
    });
    this.socket.fromEvent('file-new').subscribe((f: String) => {
      this.state = 'picture';
      this.pictureURL = f;
      console.log('file-new', this.pictureURL, this.state);
      setTimeout(() => {
        this.state = 'home';
        console.log('file-new', this);
      }, 5000);
    });
    this.socket.fromEvent('dropbox-url').subscribe((f: String) => {
      console.log('dropbox-url', f);
      this.qrCodeURL = f;
      this.qrCodeVisible = true;
    });
    this.socket.fromEvent('dropbox-login-success').subscribe((d) => {
      console.log('dropbox-login-success', d);
      this.snackBar.open('Dropbox log in success', 'dismiss', {
        duration: 5000,
      });
    });
    this.socket.fromEvent('dropbox-upload-success').subscribe((d) => {
      console.log('dropbox-upload-success', d);
      this.snackBar.open('Dropbox upload success', 'dismiss', {
        duration: 5000,
      });
    });
  }
  ngOnInit() {}
}
