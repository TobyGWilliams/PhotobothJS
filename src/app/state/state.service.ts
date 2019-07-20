import { Socket } from "ngx-socket-io";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum View {
  HOME = 1,
  COUNTDOWN,
  FLASH
}

export interface Countdown {
  number: number;
  numberUrl: string;
}

const initialCountdownState: Countdown = {
  number: null,
  numberUrl: ""
};

@Injectable({
  providedIn: "root"
})
export class StateService {
  view$ = new BehaviorSubject<View>(View.HOME);
  webcam$ = new BehaviorSubject<boolean>(false);
  countdown$ = new BehaviorSubject<Countdown>(initialCountdownState);
  filePath$ = new BehaviorSubject<string>("/file path");

  constructor(private socket: Socket) {
    this.socket.on("state", newState => {
      console.log(newState);
      if (this.webcam$.value !== newState.webcam.enabled) {
        this.webcam$.next(newState.webcam.enabled);
      }
      if (this.filePath$.value !== newState.filePath) {
        this.filePath$.next(newState.filePath);
      }
    });
  }

  toggleWebcam() {
    this.socket.emit("webcam-enabled-toggle");
  }
}
