import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {MatSnackBar} from '@angular/material';

class CountdownResponse {
  count: number;
  numberOfPhotos: number;
}

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
    this.socket
      .fromEvent('countdown-start')
      .subscribe((message: CountdownResponse) => {
        this.state = 'start';
        console.log('countdown-start', message);
      });
    this.socket
      .fromEvent('countdown-tick')
      .subscribe((message: CountdownResponse) => {
        this.state = 'countdown';
        this.number = message.count;
        console.log('countdown-tick', message);
      });
    this.socket
      .fromEvent('countdown-tick-final')
      .subscribe((message: CountdownResponse) => {
        this.state = 'flash';
        console.log('countdown-tick-final', message);
      });
    this.socket
      .fromEvent('countdown-finish')
      .subscribe((message: CountdownResponse) => {
        this.state = 'finish';
        this.number = message.count;
        console.log('countdown-finish', message);
      });

    this.socket.fromEvent('file-new').subscribe((f: String) => {
      this.state = 'picture';
      this.pictureURL = f;
      console.log('file-new', this.pictureURL, this.state);
      setTimeout(() => {
        this.state = 'home';
        console.log('file-new', this);
      }, 30000);
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
