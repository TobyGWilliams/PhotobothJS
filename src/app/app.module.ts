import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from "@angular/material";

// Libraries
import { WebcamModule } from "ngx-webcam";
import { QRCodeModule } from "angular2-qrcode";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

// Components
import { AppComponent } from "./app.component";

import { HomePageComponent } from "./home-page/home-page.component";

import { ConfigComponent } from "./config/config.component";
import { NewSerialPort } from "./config/new-serialport/new-serialport.component";
import { ModifySerialPort } from "./config/modify-serialport/modify-serialport.component";

import { DropboxComponent } from "./dropbox/dropbox.component";
import { WebcamComponent } from './webcam/webcam.component';
import { NewWebcamComponent } from './config/new-webcam/new-webcam.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FlashComponent } from './flash/flash.component';

// Sockets
const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

// Routes
const ROUTES = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "webcam",
    component: WebcamComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "dropbox",
    component: DropboxComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DropboxComponent,
    HomePageComponent,
    ModifySerialPort,
    NewSerialPort,
    WebcamComponent,
    NewWebcamComponent,
    CountdownComponent,
    FlashComponent
  ],
  entryComponents: [ConfigComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    QRCodeModule,
    RouterModule.forRoot(ROUTES),
    SocketIoModule.forRoot(config),
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
