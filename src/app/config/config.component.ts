import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

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
  config = {
    dropboxAuthUrl: '',
    dropboxAuthStatus: '',
    dropboxName: '',
    dropboxEmail: '',
  };
  constructor(private socket: Socket) {}
  ngOnInit() {
    console.log('config component');
    this.socket.fromEvent('dropbox-authUrl').subscribe((m: string) => {
      this.config.dropboxAuthUrl = m;
      console.log('dropbox-authUrl', m);
    });

    this.socket.fromEvent('dropbox-authStatus').subscribe((m: DropboxAuth) => {
      this.config.dropboxAuthStatus = m.status;
      this.config.dropboxName = m.name;
      this.config.dropboxEmail = m.email;
      console.log('dropbox-authStatus', m, this.config);
    });

    this.socket.emit('config-get');
  }
  // ngOnDestroy(){
  //   // this.socket.removeListener('setConfig')
  // }
}
