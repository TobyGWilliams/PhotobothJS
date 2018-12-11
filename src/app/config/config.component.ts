import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';

export interface DropboxAuth {
  status: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  dropbox = {
    authUrl: '',
    authStatus: 'not-auth',
    name: '',
    email: '',
  };
  filePath = '/file/to/something';
  constructor(private socket: Socket) {}
  ngOnInit() {
    console.log('config component');
    this.socket.fromEvent('dropbox-authUrl').subscribe((m: string) => {
      this.dropbox.authUrl = m;
      console.log('dropbox-authUrl', m);
    });

    this.socket
      .fromEvent('dropbox-authStatus')
      .subscribe((message: DropboxAuth) => {
        this.dropbox.authStatus = message.status;
        this.dropbox.name = message.name;
        this.dropbox.email = message.email;
        console.log('dropbox-authStatus', message, this.dropbox);
      });

    this.socket.fromEvent('file-path').subscribe((message: string) => {
      this.filePath = message;
      console.log('file-path', this.filePath);
    });

    this.socket.emit('config-get');
  }
  ngOnDestroy() {
    this.socket.removeListener('dropbox-authStatus');
    this.socket.removeListener('dropbox-authUrl');
    this.socket.removeListener('file-path');
  }
}
