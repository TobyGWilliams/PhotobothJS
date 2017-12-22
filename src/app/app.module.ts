import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QRCodeModule } from 'angular2-qrcode';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { MatIconModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfigComponent } from './config/config.component';
import { DropboxComponent } from './dropbox/dropbox.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dropbox',
    component: DropboxComponent,
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConfigComponent,
    DropboxComponent
  ],
  entryComponents: [ ConfigComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule, MatToolbarModule, MatListModule, MatButtonModule,
    MatIconModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule, MatGridListModule,
    MatDialogModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
