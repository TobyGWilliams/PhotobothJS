import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {

  constructor() {
    console.log('show flash')
  }

  ngOnInit() {
  }

}
