webpackJsonp([1,4],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
        this.title = 'Hello from Angular2, new thing added';
        //called first time before the ngOnInit()
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-aboutme',
            template: __webpack_require__(665),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
//# sourceMappingURL=G:/GIT/GitHubPage/src/aboutme.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyQuotesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyQuotesComponent = (function () {
    function MyQuotesComponent() {
        //called first time before the ngOnInit()
    }
    MyQuotesComponent.prototype.ngOnInit = function () {
    };
    MyQuotesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-myquotes',
            template: __webpack_require__(667),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyQuotesComponent);
    return MyQuotesComponent;
}());
//# sourceMappingURL=G:/GIT/GitHubPage/src/myquotes.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
        //called first time before the ngOnInit()
    }
    ResumeComponent.prototype.ngOnInit = function () {
        console.log("jeezx");
    };
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__(668),
            styles: [__webpack_require__(368)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeComponent);
    return ResumeComponent;
}());
//# sourceMappingURL=G:/GIT/GitHubPage/src/resume.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "#MainView{\r\n  position: absolute;\r\n  top:0px;bottom:0px;left:0px;right:0px;\r\n}\r\n\r\n#NavBar{\r\n  height:100%;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 0px;\r\n}\r\n.navbar-brand{\r\n  float: none;\r\n  display: block;\r\n  margin: auto;\r\n  color: inherit;\r\n}\r\n.nav ul li{\r\n  width:100%;\r\n  background-color: inherit;\r\n}\r\n.nav li{\r\n  position: relative;\r\n  display: block;\r\n}\r\n.nav li a{\r\n  position: relative;\r\n  display: block;\r\n  -webkit-transition: background-color 0.4s, color 0.4s;\r\n  transition: background-color 0.4s, color 0.4s;\r\n}\r\n.nav li a:hover{\r\n  color:  #3B3F42;\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n\r\n.nav>li>a{\r\n  font-size:16px;\r\n  color: inherit;\r\n  padding-right: 25px;\r\n}\r\n\r\n.nav>li>a:focus{\r\n  color:  #3B3F42;\r\n}\r\n.nav>li>ul{\r\n  padding: 0px;\r\n  list-style: none;\r\n  background-color:  #60666B;\r\n}\r\n.nav>li>ul>li{\r\n  padding: 0px;\r\n  text-align: right;\r\n\r\n}\r\n.nav>li>ul>li>a{\r\n  font-size:14px;\r\n  padding:5px 20px 5px 0;\r\n  color: whitesmoke;\r\n}\r\n.nav>li>ul>li>a:hover{\r\n  color:  #3B3F42;\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n.circle{\r\n      border-radius: 50%;\r\n  -webkit-transition: border 0.2s;\r\n  transition: border 0.2s;\r\n  border: 2px solid #3B3F42;\r\n}\r\n.circle:hover{\r\n  border: 2px solid white;\r\n}\r\n#SocialMedia a {\r\n      margin: 0 10px;\r\n}\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=G:/GIT/GitHubPage/src/main.js.map

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
        this.title = 'Hello from Angular2, new thing added';
        //called first time before the ngOnInit()
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(666),
            styles: [__webpack_require__(368)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=G:/GIT/GitHubPage/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutme_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__myquotes_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(508);
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
                __WEBPACK_IMPORTED_MODULE_6__aboutme_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__myquotes_component__["a" /* MyQuotesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=G:/GIT/GitHubPage/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutme_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myquotes_component__ = __webpack_require__(329);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




// Route Configuration
var routes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__aboutme_component__["a" /* AboutMeComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_2__resume_component__["a" /* ResumeComponent */] },
    { path: 'myquotes', component: __WEBPACK_IMPORTED_MODULE_3__myquotes_component__["a" /* MyQuotesComponent */] },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=G:/GIT/GitHubPage/src/app.routes.js.map

/***/ }),

/***/ 509:
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
//# sourceMappingURL=G:/GIT/GitHubPage/src/environment.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "#topper{\r\n  height: 20vh;\r\n}\r\np{\r\n      margin-left: 20px;\r\n}\r\n\r\n\r\n@-webkit-keyframes drop-in {\r\n  0%{\r\n    -webkit-transform: translateY(-10px);\r\n            transform: translateY(-10px);\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n\r\n}\r\n\r\n\r\n@keyframes drop-in {\r\n  0%{\r\n    -webkit-transform: translateY(-10px);\r\n            transform: translateY(-10px);\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "#topper{\r\n  height: 20vh;\r\n}\r\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div id=\"topper\"></div>\n<div>\n  <h2 id=\"drop-in\">  I hate writing, so this is the short story</h2>\n  <p>\n  I’m an active programmer who adapt to change quickly and always excite to learn and do new things. When I was in college, I worked on a simple IoT system using Raspberri Pi and Arduino. My first task after graduated is to design ETL process, not long after that I began to work on views and forms on a window form application. One year ago, I discovered Angular, quickly felt in loved with it, and started my journey as a web developer.\n\n  </p>\n\n\n\n</div>\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div id=\"MainView\">\r\n  <nav id=\"NavBar\" class=\"col-sm-2\">\r\n    <a [routerLink]=\"['/about']\"><img class=\"circle\" style=\"margin: 40px auto 10px auto;\" src=\"https://www.gravatar.com/avatar/688a7607d8e2dcd23c9b5a5e4b7667a9?s=150\" /></a>\r\n    <a class=\"navbar-brand\" href=\"#\">mannguyen.io</a>\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    </div>\r\n    <ul class=\"nav\">\r\n      <li>\r\n        <a [routerLink]=\"['/about']\">About Me</a>\r\n      </li>\r\n      <!-- <li>\r\n        <a>Projects</a>\r\n        <ul>\r\n          <li><a [routerLink]=\"['/']\">Link 2</a></li>\r\n          <li><a [routerLink]=\"['/']\">Link 2</a></li>\r\n          <li><a [routerLink]=\"['/']\">Link 2</a></li>\r\n          <li><a [routerLink]=\"['/']\">Link 2</a></li>\r\n          <li><a [routerLink]=\"['/']\">Link 2</a></li>\r\n        </ul>\r\n      </li> -->\r\n      <li>\r\n        <a [routerLink]=\"['/resume']\">Resume</a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/myquotes']\">My favorite quotes </a>\r\n      </li>\r\n    </ul>\r\n    <!-- <div id=\"SocialMedia\">\r\n      <a [routerLink]=\"['/about']\">\r\n        <img class=\"circle\" height=\"50\" width=\"50\" src=\"..\\assets\\Vecteezy_Social_Media_Icons\\Social Media Icons\\SVG\\Circle Color\\Linkedin.svg\" />\r\n      </a>\r\n      <a [routerLink]=\"['/about']\">\r\n        <img class=\"circle\" height=\"50\" width=\"50\" src=\"..\\assets\\Vecteezy_Social_Media_Icons\\Social Media Icons\\SVG\\Circle Color\\Facebook.svg\" />\r\n      </a>\r\n    </div> -->\r\n  </nav>\r\n  <div class=\"col-sm-10\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"topper\"></div>\r\n<div style=\"border: 2px solid #EBE8D5; border-radius:10px; padding: 0px 7px 0px 7px;\"><h3 style=\"\"><a href=\"https://www.goodreads.com/user/show/28818612-minhman-nguyen\" style=\"text-decoration: none;color:#aaa;font-family:georgia,serif;font-style:italic;\">Minhman’s quotes</a></h3><br/><div id=\"gr_quote_body\">&quot;Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible,&quot;&mdash; <a title=\"Donald A. Norman quotes\" href=\"https://www.goodreads.com/author/quotes/552.Donald_A_Norman\">Donald A. Norman</a><br/><br/></div><script src=\"https://www.goodreads.com/quotes/widget/28818612-minhman-nguyen?v=2\" type=\"text/javascript\"></script><div style=\"text-align: right;\"><a href=\"https://www.goodreads.com/quotes\" style=\"color: #382110; text-decoration: none; font-size: 10px;\">Goodreads Quotes</a></div></div>\r\n\r\n<div style=\"border: 2px solid #EBE8D5; border-radius:10px; padding: 0px 7px 0px 7px;\"><h3 style=\"\"><a href=\"https://www.goodreads.com/user/show/28818612-minhman-nguyen\" style=\"text-decoration: none;color:#aaa;font-family:georgia,serif;font-style:italic;\">Minhman’s quotes</a></h3><br/><div id=\"gr_quote_body\">&quot;My dear,<br />In the midst of hate, I found there was, within me, an invincible love.<br />In the midst of tears, I found there was, within me, an invincible smile.<br />In the midst of chaos, I found there was, within me, an invincible calm.<br />I realized, through it all, that…<br />In the midst of winter, I found there was, within me, an invincible summer.<br />And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there’s something stronger – something better, pushing right back.<br /><br />Truly yours,<br />Albert Camus&quot;&mdash; <a title=\"Albert Camus quotes\" href=\"https://www.goodreads.com/author/quotes/957894.Albert_Camus\">Albert Camus</a><br/><br/></div><script src=\"https://www.goodreads.com/quotes/widget/28818612-minhman-nguyen?v=2\" type=\"text/javascript\"></script><div style=\"text-align: right;\"><a href=\"https://www.goodreads.com/quotes\" style=\"color: #382110; text-decoration: none; font-size: 10px;\">Goodreads Quotes</a></div></div>\r\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 60px 0 0 60px;\">\n<div class=\"text-center\">\n  <h3>\n    MAN MINH NGUYEN\n  </h3>\n  <h5>19 Pleasant Avenue, East Haven, CT 06512. (203)-435-6120, minhmantocden@gmail.com</h5>\n</div>\n<ul class=\"list-unstyled\">\n  <li>\n    <h5 class=\"header\"><strong>COMPUTER SKILLS</strong></h5>\n    <ul class=\"list-unstyled item\">\n      <li><strong>Programming Languages:</strong> C#, Visual Basic, Java, C, JavaScript.</li>\n      <li><strong>Databases Platforms:</strong> Microsoft SQL Server.</li>\n      <li><strong>Web Technologies:</strong> .NET Framework, JQuery, AngularJS, Bootstrap.</li>\n      <li><strong>Software skills:</strong>  Adobe Photoshop, Maptitude, Paint.Net.</li>\n      <li><strong>Computer platforms:</strong>  Windows, Linux.</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"header\"><strong>WORK EXPERIENCE</strong></h5>\n    <ul class=\"list-unstyled item\">\n      <li><strong>Media Framework LLC</strong>– New Canaan, CT</li>\n      <li><strong>Web Application Developer</strong>, December 2015 – now</li>\n      <li>\n        <ul>\n          <li>Developed a web application using JQuery, AngularJS, .NET Framework, and Microsoft SQL Server.</li>\n        </ul>\n      </li>\n      <li><strong>Windows Application Developer</strong>, January 2015 – December 2015</li>\n      <li>\n        <ul>\n          <li>Developed and maintained business windows form application, specialized in creating views and new stored procedures.</li>\n          <li>Developed a map drawing application using C# and Maptitude API.</li>\n          <li>Developed an Excel file validating and extract application.</li>\n        </ul>\n      </li>\n      <li><strong>  Computer Programmer Intern</strong>, July 2014 – August 2014</li>\n      <li>\n        <ul>\n          <li>Developed an ETL application in C# that communicate with a government server via SOAP and extract data.</li>\n          <li>Updated a web service’s database weekly.</li>\n          <li>Developed an Excel file validating and extract application.</li>\n        </ul>\n      </li>\n      <li><strong> Researcher</strong>, July 2013 – August 2013</li>\n      <li>\n        <ul>\n          <li>Developed a web scrapping application that gather needed information from websites and export to pipe delimited text file.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"header\"><strong>EDUCATION</strong></h5>\n    <ul class=\"list-unstyled item\">\n      <li><strong> University of Connecticut</strong>, Storrs, CT</li>\n      <li>Bachelor of Science in Computer Science and Engineering, Spring 2015</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"header\"><strong>   ACADEMIC PROJECTS</strong></h5>\n    <ul class=\"list-unstyled item\">\n      <li><strong> Internet based Home Automation System</strong> , Senior Design Project.</li>\n      <li>\n        <ul>\n          <li>Developed a multi-layer system using Java and MySQL that allows users control appliances at home by android phone over internet.</li>\n          <li>The system allowed service subscription and third party modifying.</li>\n        </ul>\n      </li>\n      <li><strong>  Point of Service Application</strong> , Software Engineering Course.</li>\n    </ul>\n  </li>\n  <li>\n    <h5 class=\"header\"><strong>INTERESTS</strong></h5>\n    <ul class=\"list-unstyled item\">\n      <li>Logic Quizzes Solving, Guitar Playing, Computer Hardware Assembling, Board games.</li>\n    </ul></li>\n</ul>\n\n\n</div>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[686]);
//# sourceMappingURL=main.bundle.map