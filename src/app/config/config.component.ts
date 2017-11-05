import { Component, OnInit } from '@angular/core';
// import { Socket } from 'socket.io';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config = {}
  // constructor(private socket: Socket) {}
  constructor() {}
  ngOnInit() {
    console.log('config component');
    // this.socket.fromEvent('setConfig').subscribe( (m) => {
    //   this.config = m;
    //   console.log('setConfig', m, this.config);
    // });

    // this.socket.emit('getConfig');

  }
  
  ngOnDestroy(){
    // this.socket.removeListener('setConfig')
  }


}
