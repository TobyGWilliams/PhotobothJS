import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

export enum View {
  HOME = 1,
  COUNTDOWN,
  FLASH
}

export interface Countdown {
  number: number,
  numberUrl: string,
}

const initialCountdownState: Countdown = {
  number: null,
  numberUrl: '',
}


@Injectable({
  providedIn: 'root'
})
export class StateService {
  view$ = new BehaviorSubject<View>(View.HOME)
  webcam$ = new BehaviorSubject<boolean>(false)
  countdown$ = new BehaviorSubject<Countdown>(initialCountdownState)

  constructor(private socket: Socket) {
    this.socket.on('webcam-status', (enable: boolean) => this.webcam$.next(enable))

    this.socket.on('countdown-start', (count: Array<number>) => {
      this.view$.next(View.COUNTDOWN);
      this.countdown$.next({
        number: null,
        numberUrl: '',
      })
    })

    this.socket.on('countdown-tick', (count: Array<number>) => this.countdown$.next({
      number: count[0],
      numberUrl: `url(../../assets/number-${ count[0] }.svg)`,
    }))

    this.socket.on('countdown-tick-final', () => {
      this.view$.next(View.FLASH)
      setTimeout(() => { this.view$.next(View.HOME) }, 1000)
    })

    this.socket.on("countdown-finish", () => {
      console.log('countdown finish')
    })

    this.socket.on("camera-picture-fail", () => {
      console.error('camera picture fail')
    })

    this.socket.on("camera-picture-ready", () => {
      console.log('camera picture ready')
    })

    this.socket.on('dropbox-url', (f: string) => {
      console.log("dropbox-url", f);
    })

    this.socket.on('dropbox-login-success', () => {
      console.log("dropbox-login-success");
    })

    this.socket.on('dropbox-upload-success', () => {
      console.log("dropbox-upload-success");
    })
  }


  toggleWebcam() {
    this.socket.emit('webcam-enabled-toggle')
  }
}
