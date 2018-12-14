import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  state = 'home';
  number = 0;
  numberofPhotos = 0;
  pictureURL: String = '';
  qrCodeURL: String = '';
  qrCodeVisible: Boolean = false;
  multiple: Boolean;
  multipleDisplay: Array<number> = [];
  pictures: Array<string> = [];
  constructor(private socket: Socket, public snackBar: MatSnackBar) {
    this.socket
      .fromEvent('countdown-start')
      .subscribe((message: Array<number>) => {
        this.state = 'start';
        this.qrCodeVisible = false;
        this.multiple = message.length > 1;
        this.multipleDisplay = message;
        console.debug('countdown-start', message, this);
      });
    this.socket
      .fromEvent('countdown-tick')
      .subscribe((message: Array<number>) => {
        this.state = 'countdown';
        this.multiple = message.length > 1;
        this.multipleDisplay = message;
        console.debug('countdown-tick', message, this);
      });
    this.socket
      .fromEvent('countdown-tick-final')
      .subscribe(({message, picture}) => {
        console.log(picture);
        this.state = 'flash';
        this.multiple = message.length > 1;
        this.multipleDisplay = message;
        console.log(message.filter((x) => !x));
        console.debug('countdown-tick-final', message, this);
      });
    this.socket
      .fromEvent('countdown-finish')
      .subscribe((message: Array<number>) => {
        this.state = 'countdown';
        setTimeout(() => {
          this.state = 'home';
          console.log('countdown finish timeout', this);
        }, 10000);
        console.debug('countdown-finish', message, this);
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
