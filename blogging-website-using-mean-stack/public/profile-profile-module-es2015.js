(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile-articles.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile-articles.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"articlesConfig\">\r\n</app-article-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile-favorites.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile-favorites.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"favoritesConfig\">\r\n</app-article-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n        <!-- Circles background -->\r\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n          \r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n      <section class=\"section\">\r\n          <div class=\"container\">\r\n            <div class=\"card card-profile shadow mt--300\">\r\n              <div class=\"px-4\">\r\n                <div class=\"row justify-content-center\">\r\n                  <div class=\"col-lg-3 order-lg-2\">\r\n                    <div class=\"card-profile-image\">\r\n                      <a href=\"javascript:void(0)\">\r\n                        <img [src]=\"profile.image\" class=\"rounded-circle\">\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\r\n                    <div class=\"card-profile-actions py-4 mt-lg-0\">\r\n                        <app-follow-button\r\n                        [hidden]=\"isUser\"\r\n                        [profile]=\"profile\"\r\n                        (toggle)=\"onToggleFollowing($event)\">\r\n                      </app-follow-button>\r\n                      <a [routerLink]=\"['/settings']\"\r\n                        [hidden]=\"!isUser\"\r\n                        class=\"btn btn-sm btn-default float-right\">\r\n                        <i class=\"ion-gear-a\"></i> Edit Profile Settings\r\n                      </a>\r\n                      <a href=\"javascript:void(0)\" [hidden]=\"isUser\" class=\"btn btn-sm btn-default float-right\">Message</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 order-lg-1\">\r\n                    <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                      <div>\r\n                        <span class=\"heading\">22</span>\r\n                        <span class=\"description\">Friends</span>\r\n                      </div>\r\n                      <div>\r\n                        <span class=\"heading\">10</span>\r\n                        <span class=\"description\">Photos</span>\r\n                      </div>\r\n                      <div>\r\n                        <span class=\"heading\">89</span>\r\n                        <span class=\"description\">Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center mt-5\">\r\n                  <h3>{{ profile.username }}\r\n                    <span class=\"font-weight-light\">, 27</span>\r\n                  </h3>\r\n                  <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\r\n                  <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>{{ profile.bio }}</div>\r\n                  <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\r\n                </div>\r\n                <div class=\"mt-2 py-2 border-top mb-5\">\r\n                  \r\n                  <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-md-10 offset-md-1\">\r\n                        <div class=\"articles-toggle\">\r\n                          <ul class=\"nav nav-pills outline-active\">\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\"\r\n                                 routerLinkActive=\"active\"\r\n                                 [routerLinkActiveOptions]=\"{ exact: true }\"\r\n                                 [routerLink]=\"['/profile', profile.username]\">\r\n                                 My Posts\r\n                              </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\"\r\n                                 routerLinkActive=\"active\"\r\n                                 [routerLinkActiveOptions]=\"{ exact: true }\"\r\n                                 [routerLink]=\"['/profile', profile.username, 'favorites']\">\r\n                                 Favorited Posts\r\n                              </a>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                        <router-outlet></router-outlet>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      \r\n</main>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile-articles.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile/profile-articles.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function() { return ProfileArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileArticlesComponent = class ProfileArticlesComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ngOnInit() {
        this.route.parent.data.subscribe((data) => {
            this.profile = data.profile;
            this.articlesConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh article load on swap
            this.articlesConfig.filters.author = this.profile.username;
        });
    }
};
ProfileArticlesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-articles',
        template: __webpack_require__(/*! raw-loader!./profile-articles.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile-articles.component.html")
    })
], ProfileArticlesComponent);



/***/ }),

/***/ "./src/app/profile/profile-favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/profile-favorites.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileFavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFavoritesComponent", function() { return ProfileFavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileFavoritesComponent = class ProfileFavoritesComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ngOnInit() {
        this.route.parent.data.subscribe((data) => {
            this.profile = data.profile;
            this.favoritesConfig.filters.favorited = this.profile.username;
        });
    }
};
ProfileFavoritesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileFavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-favorites',
        template: __webpack_require__(/*! raw-loader!./profile-favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile-favorites.component.html")
    })
], ProfileFavoritesComponent);



/***/ }),

/***/ "./src/app/profile/profile-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile/profile-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolver", function() { return ProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProfileResolver = class ProfileResolver {
    constructor(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    resolve(route, state) {
        return this.profilesService.get(route.params['username'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => this.router.navigateByUrl('/')));
    }
};
ProfileResolver.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfileResolver);



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-articles.component */ "./src/app/profile/profile-articles.component.ts");
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-favorites.component */ "./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");







const routes = [
    {
        path: ':username',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        resolve: {
            profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ProfileResolver"]
        },
        children: [
            {
                path: '',
                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_3__["ProfileArticlesComponent"]
            },
            {
                path: 'favorites',
                component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFavoritesComponent"]
            }
        ]
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProfileComponent = class ProfileComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((data) => {
            this.profile = data.profile;
            // Load the current user's data.
            return this.userService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((userData) => {
                this.currentUser = userData;
                this.isUser = (this.currentUser.username === this.profile.username);
            }));
        })).subscribe();
    }
    onToggleFollowing(following) {
        this.profile.following = following;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-page',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html")
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-articles.component */ "./src/app/profile/profile-articles.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-favorites.component */ "./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");








let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"]
        ],
        declarations: [
            _profile_articles_component__WEBPACK_IMPORTED_MODULE_2__["ProfileArticlesComponent"],
            _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
            _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFavoritesComponent"]
        ],
        providers: [
            _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ProfileResolver"]
        ]
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map