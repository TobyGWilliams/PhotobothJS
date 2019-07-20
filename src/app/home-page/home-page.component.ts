import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { MatSnackBar } from "@angular/material";
import { StateService, View } from "app/state/state.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  View = View; // expose the constants into the template

  constructor(public snackBar: MatSnackBar, public state: StateService) {}

  ngOnInit() {}
}
