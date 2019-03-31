import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { QRCodeModule } from "angular2-qrcode";

import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatSnackBarModule,
  MatSelectModule
} from "@angular/material";
import {
  MatIconModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { MatDialogModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ConfigComponent } from "./config/config.component";
import { NewSerialPort } from "./config/new-serialport/new-serialport.component";
import { DropboxComponent } from "./dropbox/dropbox.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ModifySerialPort } from "./config/modify-serialport/modify-serialport.component";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

const ROUTES = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
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
    NewSerialPort
  ],
  entryComponents: [ConfigComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
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
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
