(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"material-icons grey-text\" (click)=\"openConfig()\">settings</i>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MatSidenav } from '@angular/material';
var AppComponent = /** @class */ (function () {
    function AppComponent(socket, dialog) {
        this.socket = socket;
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app component initiated');
    };
    AppComponent.prototype.openConfig = function () {
        this.dialog.open(_config_config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"], {});
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _config_new_serialport_new_serialport_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config/new-serialport/new-serialport.component */ "./src/app/config/new-serialport/new-serialport.component.ts");
/* harmony import */ var _config_modify_serialport_modify_serialport_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/modify-serialport/modify-serialport.component */ "./src/app/config/modify-serialport/modify-serialport.component.ts");
/* harmony import */ var _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropbox/dropbox.component */ "./src/app/dropbox/dropbox.component.ts");
/* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./webcam/webcam.component */ "./src/app/webcam/webcam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Libraries



// Components







// Sockets
var config = { url: "http://localhost:3000", options: {} };
// Routes
var ROUTES = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "webcam",
        component: _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_16__["WebcamComponent"]
    },
    {
        path: "home",
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"]
    },
    {
        path: "dropbox",
        component: _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_15__["DropboxComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_12__["ConfigComponent"],
                _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_15__["DropboxComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                _config_modify_serialport_modify_serialport_component__WEBPACK_IMPORTED_MODULE_14__["ModifySerialPort"],
                _config_new_serialport_new_serialport_component__WEBPACK_IMPORTED_MODULE_13__["NewSerialPort"],
                _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_16__["WebcamComponent"]
            ],
            entryComponents: [_config_config_component__WEBPACK_IMPORTED_MODULE_12__["ConfigComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_8__["QRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES),
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(config),
                ngx_webcam__WEBPACK_IMPORTED_MODULE_7__["WebcamModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullWidth {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <h3>Dropbox</h3>\n  <p>\n    Connecting to dropbox will allow the automatic offloading of pictures to a\n    PhotoboothJS specific folder. No access to other files or folders is\n    requested\n  </p>\n  <div *ngIf=\"dropbox.authStatus == 'not-auth'\">\n    <a mat-raised-button color=\"primary\" href=\"{{ dropbox.authUrl }}\"\n      >Connect to Dropbox</a\n    >\n  </div>\n  <div *ngIf=\"dropbox.authStatus != 'not-auth'\">\n    <p>\n      You are connected to dropbox as: <b>{{ dropbox.name }}</b> with email:\n      <b>{{ dropbox.email }}</b>\n    </p>\n    <p>\n      To deactivate the permissions, navigate to settings in dropbox and\n      de-authorised the app.\n    </p>\n  </div>\n\n  <h3>Folder Configuration</h3>\n  <p>\n    Specify and enable the target folder to capture the pictures to and monitor.\n  </p>\n\n  <form>\n    <mat-form-field class=\"fullWidth\">\n      <input matInput placeholder=\"Watch Folder\" [value]=\"filePath\" readonly />\n    </mat-form-field>\n  </form>\n\n  <h3>Serial Port</h3>\n  <div *ngIf=\"currentSerialPort$ | async as serialPort\">\n    <modify-serialport\n      [serialPort]=\"serialPort\" (disconnectSerialPort)=\"disconnectSerialPort()\"\n    ></modify-serialport>\n  </div>\n  <div *ngIf=\"!(currentSerialPort$ | async)\">\n    <new-serialport></new-serialport>\n  </div>\n\n  <h3>Countdown</h3>\n  <p>Select the countdown length.</p>\n  <form>\n    <mat-form-field>\n      <input matInput placeholder=\"Countdown length\" />\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <span class=\"fill-space\"></span>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(socket) {
        this.socket = socket;
        this.serialPorts = [];
        this.dropbox = {
            authUrl: "",
            authStatus: "not-auth",
            name: "",
            email: ""
        };
        this.filePath = "/file/to/something";
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.fromEvent("dropbox-authUrl").subscribe(function (m) {
            _this.dropbox.authUrl = m;
            console.log("dropbox-authUrl", m);
        });
        this.socket
            .fromEvent("dropbox-authStatus")
            .subscribe(function (message) {
            _this.dropbox.authStatus = message.status;
            _this.dropbox.name = message.name;
            _this.dropbox.email = message.email;
            console.log("dropbox-authStatus", message, _this.dropbox);
        });
        this.socket.fromEvent("file-path").subscribe(function (message) {
            _this.filePath = message;
            console.log("file-path", _this.filePath);
        });
        this.currentSerialPort$ = this.socket.fromEvent("serial-ports-current");
        this.socket.emit("config-get");
    };
    ConfigComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener("dropbox-authStatus");
        this.socket.removeListener("dropbox-authUrl");
        this.socket.removeListener("file-path");
        this.socket.removeListener("serial-ports-list");
        this.socket.removeListener("serial-ports-current");
    };
    ConfigComponent.prototype.disconnectSerialPort = function () {
        this.socket.emit("serial-port-disconnect");
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-config",
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/config/modify-serialport/modify-serialport.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/config/modify-serialport/modify-serialport.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModifySerialPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifySerialPort", function() { return ModifySerialPort; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModifySerialPort = /** @class */ (function () {
    function ModifySerialPort() {
        this.disconnectSerialPort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModifySerialPort = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            inputs: ["serialPort"],
            outputs: ["disconnectSerialPort"],
            selector: "modify-serialport",
            template: "\n    <p>\n      The current serial port is: <b>{{ serialPort?.path }}</b>\n    </p>\n    <div>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"disconnectSerialPort.emit()\"\n      >\n        Disconnect\n      </button>\n    </div>\n  "
        })
    ], ModifySerialPort);
    return ModifySerialPort;
}());



/***/ }),

/***/ "./src/app/config/new-serialport/new-serialport.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/config/new-serialport/new-serialport.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewSerialPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSerialPort", function() { return NewSerialPort; });
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewSerialPort = /** @class */ (function () {
    function NewSerialPort(socket) {
        this.socket = socket;
        this.serialPortList$ = socket.fromEvent("serial-ports-list");
    }
    NewSerialPort.prototype.connectSerialPort = function () {
        this.socket.emit("serial-port-connect", this.selectedSerialPort);
    };
    NewSerialPort = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "new-serialport",
            template: "\n    <p>Pick the serial port that the serial button is connected to.</p>\n    <form>\n      <mat-form-field class=\"fullWidth\">\n        <mat-select\n          placeholder=\"Select\"\n          [(ngModel)]=\"selectedSerialPort\"\n          name=\"serialPort\"\n        >\n          <mat-option\n            [value]=\"port\"\n            *ngFor=\"let port of (serialPortList$ | async)\"\n            >{{ port.comName }}</mat-option\n          >\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button\n          mat-raised-button\n          color=\"primary\"\n          *ngIf=\"selectedSerialPort\"\n          (click)=\"connectSerialPort()\"\n        >\n          Connect\n        </button>\n      </div>\n    </form>\n  "
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__["Socket"]])
    ], NewSerialPort);
    return NewSerialPort;
}());



/***/ }),

/***/ "./src/app/dropbox/dropbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/dropbox/dropbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb3Bib3gvZHJvcGJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dropbox/dropbox.component.html":
/*!************************************************!*\
  !*** ./src/app/dropbox/dropbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dropbox works!\n</p>\n"

/***/ }),

/***/ "./src/app/dropbox/dropbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dropbox/dropbox.component.ts ***!
  \**********************************************/
/*! exports provided: DropboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropboxComponent", function() { return DropboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropboxComponent = /** @class */ (function () {
    function DropboxComponent(router, socket) {
        this.router = router;
        this.socket = socket;
    }
    DropboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('connect', function () {
            console.log(window.location.hash);
            if (window.location.hash != null) {
                _this.socket.emit('dropbox-token', window.location.hash);
                _this.router.navigateByUrl('/home');
            }
        });
    };
    DropboxComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener('connect');
    };
    DropboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropbox',
            template: __webpack_require__(/*! ./dropbox.component.html */ "./src/app/dropbox/dropbox.component.html"),
            styles: [__webpack_require__(/*! ./dropbox.component.css */ "./src/app/dropbox/dropbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], DropboxComponent);
    return DropboxComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-picture {\n  background: url('MagicMirror.svg');\n  width: 100%;\n  height: 95%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.picture {\n  width: 100%;\n  height: 95%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.flash {\n  width: 100%;\n  height: 95%;\n  background: url('flash.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.qr {\n  position: fixed;\n  right: 0;\n}\n.whiteText {\n  color: white;\n  text-align: center;\n}\n.quarter {\n  width: 48%;\n  height: 48%;\n  margin: auto auto;\n  display: inline-block;\n}\n.fullHeightBody {\n  height: calc(100% - 30px);\n}\n.fullHeight {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQTZDO0VBQzdDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXBpY3R1cmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL01hZ2ljTWlycm9yLnN2Zyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZmxhc2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NSU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvZmxhc2gucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xufVxuLndoaXRlVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnF1YXJ0ZXIge1xuICB3aWR0aDogNDglO1xuICBoZWlnaHQ6IDQ4JTtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mdWxsSGVpZ2h0Qm9keSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG59XG5cbi5mdWxsSGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qr\" *ngIf=\"qrCodeVisible\">\n  <qr-code [value]=\"qrCodeURL\" [size]=\"150\"></qr-code>\n  <div class=\"whiteText\">Scan to View</div>\n</div>\n<div class=\"title-picture\" *ngIf=\"state == 'home'\"></div>\n<div\n  class=\"picture\"\n  [style.background-image]=\"\n    'url(../../assets/number-' + multipleDisplay[0] + '.svg)'\n  \"\n  *ngIf=\"state == 'countdown' && multiple === false\"\n></div>\n<div *ngIf=\"state == 'countdown' && multiple === true\" class=\"fullHeightBody\">\n  <div *ngFor=\"let display of multipleDisplay; index as i\" class=\"quarter\">\n    <div *ngIf=\"display\" class=\"fullHeight\">\n      <div\n        class=\"picture\"\n        [style.background-image]=\"\n          display ? 'url(../../assets/number-' + display + '.svg)' : null\n        \"\n      ></div>\n    </div>\n    <div *ngIf=\"(pictures[i] || {}).display\" class=\"fullHeight\">\n      <div\n        class=\"picture\"\n        [style.background-image]=\"\n          (pictures[i] || {}).display\n            ? 'url(/picture/' + pictures[i].fileName + ')'\n            : null\n        \"\n      ></div>\n    </div>\n  </div>\n</div>\n<div\n  class=\"picture\"\n  [style.background-image]=\"'url(/picture/' + pictureURL + ')'\"\n  *ngIf=\"state === 'picture'\"\n></div>\n<div class=\"flash\" *ngIf=\"state == 'flash'\"></div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Picture = /** @class */ (function () {
    function Picture() {
    }
    return Picture;
}());
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(socket, snackBar) {
        var _this = this;
        this.socket = socket;
        this.snackBar = snackBar;
        this.state = "home";
        this.number = 0;
        this.numberofPhotos = 0;
        this.qrCodeURL = "";
        this.qrCodeVisible = false;
        this.multipleDisplay = [];
        this.pictures = [];
        this.pictureURL = "";
        this.socket
            .fromEvent("countdown-start")
            .subscribe(function (message) {
            _this.state = "start";
            _this.pictures = [];
            _this.qrCodeVisible = false;
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            console.debug("countdown-start", message, _this);
        });
        this.socket
            .fromEvent("countdown-tick")
            .subscribe(function (message) {
            _this.state = "countdown";
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            console.debug("countdown-tick", message, _this);
        });
        this.socket
            .fromEvent("countdown-tick-final")
            .subscribe(function (_a) {
            var message = _a.message, picture = _a.picture;
            _this.state = "flash";
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            var pictureIndex = message.filter(function (x) { return !x; }).length - 1;
            _this.pictures[pictureIndex] = { display: false, fileName: picture };
        });
        this.socket.fromEvent("camera-picture-fail").subscribe(function () {
            _this.state = "home";
            console.error("camera-picture-fail");
            _this.snackBar.open("Camera fail", "dismiss", {
                duration: 5000
            });
        });
        this.socket
            .fromEvent("countdown-finish")
            .subscribe(function (message) {
            setTimeout(function () {
                _this.state = "home";
            }, 30000);
            console.debug("countdown-finish", message, _this);
        });
        this.socket
            .fromEvent("camera-picture-ready")
            .subscribe(function (fileName) {
            if (_this.multipleDisplay.length > 1) {
                var index = _this.pictures.findIndex(function (e) { return e.fileName === fileName; });
                _this.pictures[index].display = true;
            }
            else {
                _this.state = "picture";
                _this.pictureURL = fileName;
            }
            console.debug("camera-picture-ready", fileName, _this);
        });
        this.socket.fromEvent("dropbox-url").subscribe(function (f) {
            console.log("dropbox-url", f);
            _this.qrCodeURL = f;
            _this.qrCodeVisible = true;
        });
        this.socket.fromEvent("dropbox-login-success").subscribe(function (d) {
            console.log("dropbox-login-success", d);
            _this.snackBar.open("Dropbox log in success", "dismiss", {
                duration: 5000
            });
        });
        this.socket.fromEvent("dropbox-upload-success").subscribe(function (d) {
            console.log("dropbox-upload-success", d);
            _this.snackBar.open("Dropbox upload success", "dismiss", {
                duration: 5000
            });
        });
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-page",
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/webcam/webcam.component.css":
/*!*********************************************!*\
  !*** ./src/app/webcam/webcam.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmNhbS93ZWJjYW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/webcam/webcam.component.html":
/*!**********************************************!*\
  !*** ./src/app/webcam/webcam.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div width=\"100vw\">\n  <webcam></webcam>\n</div>\n"

/***/ }),

/***/ "./src/app/webcam/webcam.component.ts":
/*!********************************************!*\
  !*** ./src/app/webcam/webcam.component.ts ***!
  \********************************************/
/*! exports provided: WebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
    }
    WebcamComponent.prototype.ngOnInit = function () {
    };
    WebcamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webcam',
            template: __webpack_require__(/*! ./webcam.component.html */ "./src/app/webcam/webcam.component.html"),
            styles: [__webpack_require__(/*! ./webcam.component.css */ "./src/app/webcam/webcam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebcamComponent);
    return WebcamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/towillia/Documents/dev/photoboothjs/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map