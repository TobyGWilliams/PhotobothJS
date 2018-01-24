import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HomePageComponent } from '../home-page/home-page.component';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {

  constructor(
    private router: Router,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.socket.on('connect', () => {
      console.log(window.location.hash)
      if(window.location.hash != null){
        this.socket.emit('dropbox-token', window.location.hash)
        this.router.navigateByUrl('/home')
      }

    })

  }

}
