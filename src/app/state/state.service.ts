import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  webcam$ = new BehaviorSubject<boolean>(false)
  constructor(private socket: Socket) {
    this.socket.on('webcam-status', d => this.webcam$.next(d))
  }
  toggleWebcam() {
    this.socket.emit('webcam-enabled-toggle')
  }
}
