import { StateService } from './state/state.service';
import { Component, } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ConfigComponent } from './config/config.component';
import { MatDialog, } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog, public state: StateService) { }
  ngOnInit() { }
  openConfig() {
    this.dialog.open(ConfigComponent, { width: '80vw' });
  }
}
