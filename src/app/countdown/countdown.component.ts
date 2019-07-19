import { Component, OnInit } from '@angular/core';
import { StateService } from 'app/state/state.service';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  constructor(public state: StateService) { }

  ngOnInit() {
    this.state.countdown$.subscribe((d) => console.log(d))
  }

}
