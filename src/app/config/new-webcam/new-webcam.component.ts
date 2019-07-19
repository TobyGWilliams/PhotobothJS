import { StateService } from './../../state/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'new-webcam',
  templateUrl: './new-webcam.component.html',
  styleUrls: ['./new-webcam.component.css']
})
export class NewWebcamComponent implements OnInit {
  constructor(private state: StateService) { }
  ngOnInit() { }
}





