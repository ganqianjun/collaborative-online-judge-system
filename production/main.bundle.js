webpackJsonp([1,5],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(223),
        styles: [__webpack_require__(214)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_problem_list_problem_list_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_problem_detail_problem_detail_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_new_problem_new_problem_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */]
        ],
        providers: [{
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: 'problems/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.title = 'COJ';
        this.username = 'Qianjun';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(224),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'Easy'
});
var NewProblemComponent = (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['Easy', 'Medium', 'Hard', 'Super'];
    }
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error); });
        // to make the form empty after add a new problem
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    return NewProblemComponent;
}());
NewProblemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-problem',
        template: __webpack_require__(225),
        styles: [__webpack_require__(216)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], NewProblemComponent);

//# sourceMappingURL=new-problem.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get('api/v1/problems/${id}')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (newProblem) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'content-type': 'application/json'
        });
        return this.http.post('api/v1/problems', newProblem, headers)
            .toPromise()
            .then(function (res) {
            // call 'getProblems' to let the new problem display
            _this.getProblems();
            res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error happened: ', error);
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 5rem;\n}\n\n.starter-template {\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n\n.difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n  /*text-transform: capitalize;*/\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n  /*text-transform: capitalize;*/\n}\n\n.diff-easy {\n  background-color: #b2cfc8;\n}\n\n.diff-medium {\n  background-color: #bbbdb9;\n}\n\n.diff-hard {\n  background-color: #a6b3b0;\n}\n\n.diff-super {\n  background-color: #5b6663;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      </div>\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <form class=\"navbar-form\">\n              <button type=\"button\" class=\"btn btn-primary\">Sign in</button>\n            </form>\n          </li>\n          <li><a href=\"#\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{username}}\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">My Profile</a></li>\n              <li><a href=\"#\">My Favorite</a></li>\n              <li><a href=\"#\">My Friends</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\">Logout</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input name=\"problemName\" id=\"problemName\" class=\"form-control\"\n      type=\"text\" required placeholder=\"Please Enter Problem Name\"\n      [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea name=\"problemDesc\" id=\"problemDesc\" class=\"form-control\"\n        placeholder=\"Please Enter Problem Description\"\n        [(ngModel)]=\"newProblem.desc\" rows=\"3\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Problem Difficulty</label>\n      <select name=\"difficulty\" id=\"difficulty\" class=\"form-control\"\n        [(ngModel)]= \"newProblem.difficulty\">\n        <option *ngFor='let difficulty of difficulties' [value]='difficulty'>\n          {{ difficulty }}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\"\n        (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n  <br>\n</div>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf='problem'>\n  <div class=\"col-xs-12 col-md-4\">\n    <h2>{{problem.id}}. {{problem.name}}</h2>\n    <p>{{problem.desc}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"starter-template\">\n    <h1>Collaborative Online Judge System</h1>\n    <p class=\"lead\">\n      This is a collaborative online judge system.<br>\n      You could edit the same problem with your teammates together.\n    </p>\n  </div>\n   <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n    [routerLink]=\"['/problems', problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n        {{ toTitleCase(problem.difficulty) }}\n      </span>\n      <strong class=\"title\">\n        {{ problem.id }}. {{ toTitleCase(problem.name) }}\n      </strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    return ProblemDetailComponent;
}());
ProblemDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-problem-detail',
        template: __webpack_require__(226),
        styles: [__webpack_require__(217)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], ProblemDetailComponent);

var _a;
//# sourceMappingURL=problem-detail.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.problemsSubscription =
            this.dataService.getProblems().subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.problemsSubscription.unsubscribe();
    };
    ProblemListComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-problem-list',
        template: __webpack_require__(227),
        styles: [__webpack_require__(218)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], ProblemListComponent);

//# sourceMappingURL=problem-list.component.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.bundle.js.map