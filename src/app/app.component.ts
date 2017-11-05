import { Component, Injectable } from '@angular/core';
// import { Socket } from 'socket.io';
import { ConfigComponent } from './config/config.component';
import { MatDialog, MatDialogRef } from '@angular/material';

// import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  constructor(
    // private socket: Socket,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    console.log('app component initiated');
    // this.socket.fromEvent('message').subscribe( (m) => {
    //   console.log('message', m);
    // });
  }
  openConfig(){
    this.dialog.open(ConfigComponent, {});
  }
}


// import { MatSidenav } from '@angular/material';
// , public Sidenav: MatSidenav