import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'new-webcam',
  templateUrl: './new-webcam.component.html',
  styleUrls: ['./new-webcam.component.css']
})
export class NewWebcamComponent implements OnInit {
  webcamStatus$: Observable<boolean>
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.webcamStatus$ = this.socket.fromEvent('webcam-status')
  }


}





