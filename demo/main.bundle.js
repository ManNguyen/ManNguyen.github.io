webpackJsonp([1,4],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-bio',
            template: __webpack_require__(670),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], BioComponent);
    return BioComponent;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/bio.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionComponent = (function () {
    function CollectionComponent() {
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-collection',
            template: __webpack_require__(672),
            styles: [__webpack_require__(667), __webpack_require__(368)]
        }), 
        __metadata('design:paramtypes', [])
    ], CollectionComponent);
    return CollectionComponent;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/collection.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.currentLocation = 0;
        this.imgSrcList = [
            "../../assets/background1.jpg",
            "../../assets/background2.jpg",
            "../../assets/background3.jpg",
            "../../assets/background4.jpg",
        ];
    }
    HomeComponent.prototype.GoForwards = function () {
        if (this.currentLocation == this.imgSrcList.length - 1)
            this.currentLocation = 0;
        else
            this.currentLocation += 1;
    };
    HomeComponent.prototype.GoBackwards = function () {
        if (this.currentLocation == 0)
            this.currentLocation = this.imgSrcList.length - 1;
        else
            this.currentLocation -= 1;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(673),
            styles: [__webpack_require__(668), __webpack_require__(368)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/home.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeIn {\r\n  0%   {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  0%   {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes  slideIn {\r\n  0%{\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n  70%{\r\n    -webkit-transform: translateX(10%);\r\n            transform: translateX(10%);\r\n  }\r\n  100%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}\r\n@keyframes  slideIn {\r\n  0%{\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n  70%{\r\n    -webkit-transform: translateX(10%);\r\n            transform: translateX(10%);\r\n  }\r\n  100%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes wiggle {\r\n\r\n  0%,100%{\r\n    -webkit-transform: translateX(-25%);\r\n            transform: translateX(-25%);\r\n  }\r\n  50%{\r\n    -webkit-transform: translateX(25%);\r\n            transform: translateX(25%);\r\n  }\r\n\r\n}\r\n@keyframes wiggle {\r\n\r\n  0%,100%{\r\n    -webkit-transform: translateX(-25%);\r\n            transform: translateX(-25%);\r\n  }\r\n  50%{\r\n    -webkit-transform: translateX(25%);\r\n            transform: translateX(25%);\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(669),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bio_bio_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_collection_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bio_bio_component__["a" /* BioComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_9__collection_collection_component__["a" /* CollectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio_bio_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_collection_component__ = __webpack_require__(329);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




// Route Configuration
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'bio', component: __WEBPACK_IMPORTED_MODULE_2__bio_bio_component__["a" /* BioComponent */] },
    { path: 'collection', component: __WEBPACK_IMPORTED_MODULE_3__collection_collection_component__["a" /* CollectionComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/app.routes.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
        this.currentLocation = 0;
        this.imgSrcList = [
            "../../assets/KyoPhoto_5.jpg",
            "../../assets/KyoPhoto_1.jpg",
            "../../assets/KyoPhoto_2.jpg",
            "../../assets/KyoPhoto_3.jpg",
            "../../assets/KyoPhoto_4.jpg",
        ];
    }
    CarouselComponent.prototype.GoForwards = function () {
        if (this.currentLocation == this.imgSrcList.length - 1)
            this.currentLocation = 0;
        else
            this.currentLocation += 1;
    };
    CarouselComponent.prototype.GoBackwards = function () {
        if (this.currentLocation == 0)
            this.currentLocation = this.imgSrcList.length - 1;
        else
            this.currentLocation -= 1;
    };
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__(671),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/carousel.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=G:/GIT/AnnieNguyenWebsite/src/environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = ".navbar-default{\r\n    color: #eee;\r\n    background-color: white;\r\n    height: 80px;\r\n}\r\n.navbar-default div{\r\n    height: 80px;\r\n}\r\n\r\n.nav.navbar-nav a{\r\n    text-transform: uppercase;\r\n    /*border: 1px solid #f8f8f8;*/\r\n\r\n}\r\n.nav.navbar-nav a:hover, .nav.navbar-nav a:focus {\r\n    color: #black;\r\n}\r\n.nav.navbar-nav li{\r\n  display: inline-block;\r\nposition: relative;\r\npadding-bottom: 3px;\r\n\r\n}\r\n.nav.navbar-nav li:after{\r\n    content: '';\r\n  \tdisplay: block;\r\n  \tmargin: auto;\r\n  \theight: 3px;\r\n  \twidth: 0px;\r\n  \tbackground: transparent;\r\n  \t-webkit-transition: width .5s ease, background-color .5s ease;\r\n  \ttransition: width .5s ease, background-color .5s ease;\r\n}\r\n.nav.navbar-nav li:hover:after {\r\n\twidth: 100%;\r\n\tbackground: #f50000;\r\n}\r\n.navbar-brand{\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  -webkit-transition: color 0.6s;\r\n  transition: color 0.6s;\r\n  padding: 0;\r\n  padding-left: 50px;;\r\n}\r\n\r\n.navbar-brand img{\r\n  height: 80px;\r\n}\r\n.nav.navbar-nav{\r\n  margin-top: 15px;\r\n}\r\n.nav.navbar-nav li{\r\n  margin: 0 15px 0 15px;\r\n}\r\n\r\n.navbar-brand {\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  left: 50%;\r\n  position: absolute;\r\n}\r\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ".canvas{\r\n  height:100%;\r\n  overflow: hidden;\r\n  position:relative;\r\n}\r\n#btn-go-left,#btn-go-right{\r\n  font-size: 5vh;\r\n  opacity: 0.4;\r\n  position:absolute;\r\n  top:45%;\r\n}\r\n#btn-go-left:hover,#btn-go-right:hover{\r\n  opacity: 0.8;\r\n}\r\n#btn-go-left{\r\n  left: 5%;\r\n  -webkit-animation: wiggle 5s ease-in-out infinite;\r\n          animation: wiggle 5s ease-in-out infinite;\r\n}\r\n#btn-go-right{\r\n  right:5%;\r\n  -webkit-animation: wiggle 5s 2.5s ease-in-out infinite;\r\n          animation: wiggle 5s 2.5s ease-in-out infinite;\r\n}\r\n#btn-go-left a,#btn-go-right a{\r\n    color: black;\r\n    -webkit-transition:opacity 2s;\r\n    transition: opacity 2s;\r\n}\r\n\r\n#frame{\r\n  padding-top: 10px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n#frame img{\r\n  box-shadow: 0px 0px 24px -3px black;\r\n  margin: auto;\r\n  height: 90vh;\r\n  -webkit-transition:opacity 0.5s;\r\n  transition: opacity 0.5s;\r\n}\r\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".home-view {\r\n  position: absolute;\r\n  top: 80px;\r\n  bottom: 0px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n#BioContainer{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-animation: slideIn 1s ease-in-out forwards;\r\n          animation: slideIn 1s ease-in-out forwards;\r\n}\r\n#BioContainer> .container{\r\n  margin-top: 5%;\r\n  background-color: white;\r\n  border: 1px solid;\r\n  position: relative;\r\n}\r\n#BioContainer #avatar{\r\n  display: block;\r\n  width: 60%;\r\n  margin: 5px auto 15px auto;\r\n  border-radius: 50%;\r\n\r\n}\r\n#BioContainer p{\r\n    text-align: justify;\r\n}\r\n#ContactBar{\r\n  position: absolute;\r\n  top:20%;\r\n  left:100%;\r\n  padding: 0;\r\n  list-style: none;\r\n\r\n}\r\n#ContactBar a{\r\n  opacity: 0.6;\r\n  -webkit-transition: opacity 0.4s;\r\n  transition: opacity 0.4s;\r\n}\r\n#ContactBar a:hover{\r\n  opacity: 0.9;\r\n}\r\n\r\n#ContactBar img{\r\n  width: 40px;\r\n\r\n}\r\n#TextContainer{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  text-align: right;\r\n}\r\n#TextContainer h1{\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 2s forwards;\r\n          animation: fadeIn 2s forwards;\r\n}\r\n#TextContainer p{\r\n  text-align: justify;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 1s 0.5s forwards;\r\n          animation: fadeIn 1s 0.5s forwards;\r\n}\r\n#ImageContainer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 2;\r\n      -ms-flex: 2;\r\n          flex: 2;\r\n  text-align: center;\r\n}\r\n\r\n#ImageContainer>.component {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "#frame {\r\n  width: 100%;\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  top:80px;\r\n}\r\n#frame img{\r\n  box-shadow: 0px 0px 24px -3px black;\r\n  margin: auto;\r\n  display: block;\r\n  height: 100%;\r\n  -webkit-transition: opacity 0.5s;\r\n  transition: opacity 0.5s;\r\n}\r\n#btn-go-left,#btn-go-right{\r\n  font-size: 5vh;\r\n  opacity: 0.4;\r\n  position:absolute;\r\n  top:45%;\r\n}\r\n#btn-go-left:hover,#btn-go-right:hover{\r\n  opacity: 0.8;\r\n}\r\n#btn-go-left{\r\n  left: 5%;\r\n  -webkit-animation: wiggle 5s ease-in-out infinite;\r\n          animation: wiggle 5s ease-in-out infinite;\r\n}\r\n#btn-go-right{\r\n  right:5%;\r\n  -webkit-animation: wiggle 5s 2.5s ease-in-out infinite;\r\n          animation: wiggle 5s 2.5s ease-in-out infinite;\r\n}\r\n#btn-go-left a,#btn-go-right a{\r\n    color: black;\r\n    -webkit-transition: opacity 2s;\r\n    transition: opacity 2s;\r\n}\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"margin-bottom: 0;\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"../assets/logo.svg\" height=\"100\"></a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-left\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav \">\r\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\r\n        <li><a [routerLink]=\"['/bio']\">Bio</a></li>\r\n        <li class=\"dropdown\">\r\n          <a a [routerLink]=\"['/collection']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Wedding</a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Action</a></li>\r\n            <li><a href=\"#\">Another action</a></li>\r\n            <li><a href=\"#\">Something else here</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Separated link</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#\">Contact</a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container-fluid -->\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"container well\">\n\n  <h1>Bio</h1>\n\n  <p>Annie Nguyen began her career in haute couture after she graduated from the Fashion Institute of Technology where she won the Critic Award in the Spring of 2003. After graduation, Annie began working for several distinguished companies such as Liz Claiborne, George Simonton, and Impression. In 2007, Annie left to establish her own brand known as NG Fashion and is officially changed to Annie.N.</p>\n  <p>From a young age, she developed a strong passion for sewing and designing. Annie signature style focuses on classic designs that are still fashion forward with clean intricate cuts, excellent fits and high quality fabrication. Whether it is her delicate embroidery, dramatic dress trains, or fine beaded fabric details, each piece exudes art characteristic from her inspiration and creativity that to turn each gown into a masterpiece</p>\n  <p>“Everything I do is from my heart and soul: I believe fashion can’t simply be summed up as expressions of modernity, difference, fashion awareness, or the need to fit in, but that it’s also a more private method of expressing confidence of spirit, comfort and love. I enjoy watching people be happy through inspiration by my outlook on everything that has happened in my life. I observe Fashion, touch it, feel it, see it, consider it, and then share it with others by designing a beautiful style to help build confidence. When you are confident, you have perseverance, and perseverance brings you success and ultimately happiness; this is what is important in life. I design for cosmopolitan women who feel desirable and who strive for beauty day and night.” – Annie Nguyen</p>\n</div>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas\">\r\n  <!-- <ul class=\"slides\">\r\n    <li *ngFor=\"let item of imgSrcList; let i = index; trackBy: trackByFn\"><img src=\"{{item}}\"></li>\r\n  </ul> -->\r\n  <div id=\"frame\">\r\n    <a (click)=\"GoForwards()\">\r\n    <img src=\"{{imgSrcList[currentLocation]}}\"></a>\r\n    <!-- <img /> -->\r\n  </div>\r\n  <div id=\"btn-go-left\">\r\n    <a (click)=\"GoBackwards()\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\r\n  </div>\r\n  <div id=\"btn-go-right\">\r\n    <a (click)=\"GoForwards()\"><i  class=\"glyphicon glyphicon-chevron-right\"></i></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-view\">\n  <div id=\"BioContainer\">\n    <div class=\"container\" style=\"width:90%\">\n      <img id=\"avatar\" src=\"../../assets/annie.n.jpg\" />\n      <p>“Everything I do is from my heart and soul: I believe fashion can’t simply be summed up as expressions of modernity, difference, fashion awareness, or the need to fit in, but that it’s also a more private method of expressing confidence of spirit,\n        comfort and love. I enjoy watching people be happy through inspiration by my outlook on everything that has happened in my life. I observe Fashion, touch it, feel it, see it, consider it, and then share it with others by designing a beautiful\n        style to help build confidence. When you are confident, you have perseverance, and perseverance brings you success and ultimately happiness; this is what is important in life. I design for cosmopolitan women who feel desirable and who strive for\n        beauty day and night.” – Annie Nguyen</p>\n      <ul id=\"ContactBar\">\n        <li>\n        <a href=\"http://Www.facebook.com/annienguyenfashion\"><img src=\"../../assets/social_media/Facebook.svg\" /></a>\n        </li>\n        <li>\n          <a href=\"https://www.instagram.com/annienguyenfashion/\"><img src=\"../../assets/social_media/Instagram.svg\" /></a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n  <div id=\"TextContainer\">\n    <div class=\"container\" style=\"width:90%;margin-right:0;\">\n      <h1>\n          Wedding\n      </h1>\n\n\n    <p>“True love is hard to find, but true love is one of a kind.” This collection was inspired by different kind of true love. Each gown tell a different love story from our bride. It is unique in its own way however carries a common theme of classic style that love will last as long as we all shall live.</p>\n    </div>\n  </div>\n  <div id=\"ImageContainer\">\n    <app-carousel class=\"component\" style=\"height=100%\"></app-carousel>\n  </div>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div id=\"frame\">\r\n  <a (click)=\"GoForwards()\">\r\n  <img src=\"{{imgSrcList[currentLocation]}}\"></a>\r\n</div>\r\n<div id=\"btn-go-left\">\r\n  <a (click)=\"GoBackwards()\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\r\n</div>\r\n<div id=\"btn-go-right\">\r\n  <a (click)=\"GoForwards()\"><i  class=\"glyphicon glyphicon-chevron-right\"></i></a>\r\n</div>\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[692]);
//# sourceMappingURL=main.bundle.map