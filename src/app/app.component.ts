import { Component, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ConfigComponent } from './config/config.component';
import { MatDialog, MatDialogRef } from '@angular/material';

// import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private socket: Socket, public dialog: MatDialog) {}
  ngOnInit() {
    console.log('app component initiated');
  }
  openConfig() {
    this.dialog.open(ConfigComponent, {});
  }
}
