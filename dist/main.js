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

module.exports = "router-outlet{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dropbox/dropbox.component */ "./src/app/dropbox/dropbox.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = { url: 'http://localhost:3000', options: {} };
var ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
    },
    {
        path: 'dropbox',
        component: _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_11__["DropboxComponent"],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
                _dropbox_dropbox_component__WEBPACK_IMPORTED_MODULE_11__["DropboxComponent"],
            ],
            entryComponents: [_config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES),
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"].forRoot(config),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
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

module.exports = ".filePathWrapper {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVQYXRoV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <h3>Dropbox</h3>\n  <p>\n    Connecting to dropbox will allow the automatic offloading of pictures to a\n    PhotoboothJS specific folder. No access to other files or folders is\n    requested\n  </p>\n  <div *ngIf=\"dropbox.authStatus == 'not-auth'\">\n    <a mat-raised-button color=\"primary\" href=\"{{dropbox.authUrl}}\"\n      >Connect to Dropbox</a\n    >\n  </div>\n  <div *ngIf=\"dropbox.authStatus != 'not-auth'\">\n    <p>\n      You are connected to dropbox as: <b>{{ dropbox.name }}</b> with email:\n      <b>{{ dropbox.email }}</b>\n    </p>\n    <p>\n      To deactivate the permissions, navigate to settings in dropbox and\n      de-authorised the app.\n    </p>\n  </div>\n\n  <h3>Folder Configuration</h3>\n  <p>\n    Specify and enable the target folder to capture the pictures to and monitor.\n  </p>\n  <form>\n    <mat-form-field class=\"filePathWrapper\">\n      <input matInput placeholder=\"Watch Folder\" [value]=\"filePath\" />\n    </mat-form-field>\n  </form>\n  <h3>Hardware Trigger</h3>\n  <p>Pick a GPIO pin suitable for wiring the trigger button to.</p>\n  <form>\n    <mat-form-field>\n      <input matInput placeholder=\"Pin Number\" />\n    </mat-form-field>\n  </form>\n  <h3>Countdown</h3>\n  <p>Select the countdown length.</p>\n  <form>\n    <mat-form-field>\n      <input matInput placeholder=\"Countdown length\" />\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <span class=\"fill-space\"></span>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

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
        this.dropbox = {
            authUrl: '',
            authStatus: 'not-auth',
            name: '',
            email: '',
        };
        this.filePath = '/file/to/something';
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('config component');
        this.socket.fromEvent('dropbox-authUrl').subscribe(function (m) {
            _this.dropbox.authUrl = m;
            console.log('dropbox-authUrl', m);
        });
        this.socket
            .fromEvent('dropbox-authStatus')
            .subscribe(function (message) {
            _this.dropbox.authStatus = message.status;
            _this.dropbox.name = message.name;
            _this.dropbox.email = message.email;
            console.log('dropbox-authStatus', message, _this.dropbox);
        });
        this.socket.fromEvent('file-path').subscribe(function (message) {
            _this.filePath = message;
            console.log('file-path', _this.filePath);
        });
        this.socket.emit('config-get');
    };
    ConfigComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener('dropbox-authStatus');
        this.socket.removeListener('dropbox-authUrl');
        this.socket.removeListener('file-path');
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], ConfigComponent);
    return ConfigComponent;
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

module.exports = ".title-picture {\n  background: url('MagicMirror.svg');\n  width: 100%;\n  height: 95%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.picture {\n  width: 100%;\n  height: 95%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.flash {\n  width: 100%;\n  height: 95%;\n  background: url('flash.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.qr {\n  float: right;\n}\n.whiteText {\n  color: white;\n  text-align: center;\n}\n.quarter {\n  width: 48%;\n  height: 48%;\n  margin: auto auto;\n  display: inline-block;\n}\n.fullHeightBody {\n  height: calc(100% - 30px);\n}\n.fullHeight {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQThDO0VBQzlDLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtcGljdHVyZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvTWFnaWNNaXJyb3Iuc3ZnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5waWN0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5mbGFzaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9mbGFzaC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5xciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi53aGl0ZVRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xdWFydGVyIHtcbiAgd2lkdGg6IDQ4JTtcbiAgaGVpZ2h0OiA0OCU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZnVsbEhlaWdodEJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuXG4uZnVsbEhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qr\" *ngIf=\"qrCodeVisible\">\n  <qr-code [value]=\"qrCodeURL\" [size]=\"150\"></qr-code>\n  <div class=\"whiteText\">Scan to View</div>\n</div>\n<div class=\"title-picture\" *ngIf=\"state == 'home'\"></div>\n<div\n  class=\"picture\"\n  [style.background-image]=\"\n    'url(../../assets/number-' + multipleDisplay[0] + '.svg)'\n  \"\n  *ngIf=\"state == 'countdown' && multiple === false\"\n></div>\n<div *ngIf=\"state == 'countdown' && multiple === true\" class=\"fullHeightBody\">\n  <div *ngFor=\"let display of multipleDisplay; index as i\" class=\"quarter\">\n    <div *ngIf=\"display\" class=\"fullHeight\">\n      <div\n        class=\"picture\"\n        [style.background-image]=\"\n          display ? 'url(../../assets/number-' + display + '.svg)' : null\n        \"\n      ></div>\n    </div>\n    <div *ngIf=\"(pictures[i] || {}).display\" class=\"fullHeight\">\n      <div\n        class=\"picture\"\n        [style.background-image]=\"\n          (pictures[i] || {}).display\n            ? 'url(/picture/' + pictures[i].fileName + ')'\n            : null\n        \"\n      ></div>\n    </div>\n  </div>\n</div>\n<div\n  class=\"picture\"\n  [style.background-image]=\"'url(/picture/' + pictureURL + ')'\"\n  *ngIf=\"state == 'picture'\"\n></div>\n<div class=\"flash\" *ngIf=\"state == 'flash'\"></div>\n"

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
        this.state = 'home';
        this.number = 0;
        this.numberofPhotos = 0;
        this.qrCodeURL = '';
        this.qrCodeVisible = false;
        this.multipleDisplay = [];
        this.pictures = [];
        this.socket
            .fromEvent('countdown-start')
            .subscribe(function (message) {
            _this.state = 'start';
            _this.pictures = [];
            _this.qrCodeVisible = false;
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            console.debug('countdown-start', message, _this);
        });
        this.socket
            .fromEvent('countdown-tick')
            .subscribe(function (message) {
            _this.state = 'countdown';
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            console.debug('countdown-tick', message, _this);
        });
        this.socket
            .fromEvent('countdown-tick-final')
            .subscribe(function (_a) {
            var message = _a.message, picture = _a.picture;
            _this.state = 'flash';
            _this.multiple = message.length > 1;
            _this.multipleDisplay = message;
            var pictureIndex = message.filter(function (x) { return !x; }).length - 1;
            _this.pictures[pictureIndex] = { display: false, fileName: picture };
        });
        this.socket
            .fromEvent('countdown-finish')
            .subscribe(function (message) {
            _this.state = 'countdown';
            //setTimeout(() => {
            //  this.state = 'home';
            //}, 10000);
            console.debug('countdown-finish', message, _this);
        });
        this.socket
            .fromEvent('camera-picture-ready')
            .subscribe(function (fileName) {
            var index = _this.pictures.findIndex(function (e) { return e.fileName === fileName; });
            console.log(_this.pictures, index);
            _this.pictures[index].display = true;
        });
        this.socket.fromEvent('dropbox-url').subscribe(function (f) {
            console.log('dropbox-url', f);
            _this.qrCodeURL = f;
            _this.qrCodeVisible = true;
        });
        this.socket.fromEvent('dropbox-login-success').subscribe(function (d) {
            console.log('dropbox-login-success', d);
            _this.snackBar.open('Dropbox log in success', 'dismiss', {
                duration: 5000,
            });
        });
        this.socket.fromEvent('dropbox-upload-success').subscribe(function (d) {
            console.log('dropbox-upload-success', d);
            _this.snackBar.open('Dropbox upload success', 'dismiss', {
                duration: 5000,
            });
        });
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HomePageComponent);
    return HomePageComponent;
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