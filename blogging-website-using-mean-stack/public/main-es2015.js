(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article/article.module": [
		"./src/app/article/article.module.ts",
		"article-article-module"
	],
	"./editor/editor.module": [
		"./src/app/editor/editor.module.ts",
		"editor-editor-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings-settings-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-header></app-layout-header>\r\n  \r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-layout-footer></app-layout-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mb-25\">\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <!-- <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>{{ title }} with</small>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <br>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <app-list-errors [errors]=\"errors\"></app-list-errors> -->\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small *ngIf=\"authType == 'login'\">Sign in with credentials</small><small *ngIf=\"authType == 'register'\">Or sign up with credentials</small>\r\n              </div>\r\n              <form role=\"form\" [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\r\n                <fieldset [disabled]=\"isSubmitting\">\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\" *ngIf=\"authType == 'register'\" >\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"username\" placeholder=\"userName\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                       \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"password\"  placeholder=\"Password\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                    \r\n                  </div>\r\n                </div>\r\n                <div class=\"text-muted font-italic\" *ngIf=\"authType == 'register'\">\r\n                  <small>password strength:\r\n                    <span class=\"text-success font-weight-700\">strong</span>\r\n                  </small>\r\n                </div>\r\n                <div class=\"row my-4\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                        <span *ngIf=\"authType == 'register'\">I agree with the\r\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </span>\r\n                        <span *ngIf=\"authType == 'login'\">Remember me\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button [disabled]=\"!authForm.valid\" type=\"submit\" class=\"btn btn-primary mt-4\">{{ title }}</button>\r\n                </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n              <div class=\"col-6\">\r\n                <a href=\"javascript:void(0)\" *ngIf=\"authType == 'login'\" class=\"text-light\">\r\n                  <small>Forgot password?</small>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6 text-right\">\r\n                <a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\" class=\"text-light\"><small>Create new account</small></a> <a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\" class=\"text-light\">\r\n                  <small>Already have on account?</small>\r\n                </a>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-sm section-hero section-shaped\">\r\n      <!-- Background circles -->\r\n      <div class=\"shape shape-style-1 shape-primary\">\r\n        <span class=\"span-150\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n      </div>\r\n      <div class=\"row align-items-center justify-content-center mt-5\">\r\n          <div class=\"col-lg-6 text-center mt-5\">\r\n             <h1 class=\"display-2 font-weight-bold text-white mt-5\">\r\n                <span >Read and Write your favourite articles</span>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      \r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <app-list-errors [errors]=\"errors\"></app-list-errors>\r\n  <div class=\"home-page\">\r\n    <div class=\"container page\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"feed-toggle\">\r\n            <ul class=\"nav nav-pills outline-active\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   [ngClass]=\"{'active': listConfig.type === 'feed'}\"\r\n                   (click)=\"setListTo('feed')\">\r\n                   Your Feed\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   [ngClass]=\"{'active': listConfig.type === 'all' && !listConfig.filters.tag}\"\r\n                   (click)=\"setListTo('all')\">\r\n                   Global Feed\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" [hidden]=\"!listConfig.filters.tag\">\r\n                <a class=\"nav-link active\">\r\n                  <i class=\"ion-pound\"></i> {{ listConfig.filters.tag }}\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n  \r\n          <app-article-list [limit]=\"10\" [config]=\"listConfig\"></app-article-list>\r\n        </div>\r\n  \r\n        <div class=\"col-md-3\">\r\n          <div class=\"sidebar\">\r\n            <p>Popular Tags</p>\r\n  \r\n            <div class=\"tag-list\">\r\n              <a *ngFor=\"let tag of tags\"\r\n                 (click)=\"setListTo('all', {tag: tag})\"\r\n                 class=\"tag-default tag-pill\">\r\n                 {{ tag }}\r\n              </a>\r\n            </div>\r\n  \r\n            <div [hidden]=\"tagsLoaded\">\r\n              Loading tags...\r\n            </div>\r\n  \r\n            <div [hidden]=\"!tagsLoaded || tags.length > 0\">\r\n              No tags are here... yet.\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n  </div> \r\n  </div>\r\n  \r\n\r\n</main>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/article-helpers/article-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-preview\r\n  *ngFor=\"let article of results\"\r\n  [article]=\"article\">\r\n</app-article-preview>\r\n\r\n<div class=\"app-article-preview\"\r\n  [hidden]=\"!loading\">\r\n  Loading articles...\r\n</div>\r\n\r\n<div class=\"app-article-preview\"\r\n  [hidden]=\"loading || results.length\">\r\n  No articles are here... yet.\r\n</div>\r\n\r\n<nav [hidden]=\"loading || totalPages.length <= 1\">\r\n  <ul class=\"pagination\">\r\n\r\n    <li class=\"page-item\"\r\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\r\n      *ngFor=\"let pageNumber of totalPages\"\r\n      (click)=\"setPageTo(pageNumber)\">\r\n\r\n      <a class=\"page-link\" >{{ pageNumber }}</a>\r\n\r\n    </li>\r\n\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-meta.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/article-helpers/article-meta.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\r\n  <a [routerLink]=\"['/profile', article.author.username]\">\r\n    <img [src]=\"article.author.image\" />\r\n  </a>\r\n\r\n  <div class=\"info\">\r\n    <a class=\"author\"\r\n      [routerLink]=\"['/profile', article.author.username]\">\r\n      {{ article.author.username }}\r\n    </a>\r\n    <span class=\"date\">\r\n      {{ article.createdAt | date: 'longDate' }}\r\n    </span>\r\n  </div>\r\n\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-preview.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/article-helpers/article-preview.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\r\n  <app-article-meta [article]=\"article\">\r\n    <app-favorite-button\r\n      [article]=\"article\"\r\n      (toggle)=\"onToggleFavorite($event)\"\r\n      class=\"pull-xs-right\">\r\n      {{article.favoritesCount}}\r\n    </app-favorite-button>\r\n  </app-article-meta>\r\n\r\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\r\n    <h1>{{ article.title }}</h1>\r\n    <p>{{ article.description }}</p>\r\n    <span>Read more...</span>\r\n    <ul class=\"tag-list\">\r\n      <li class=\"tag-default tag-pill tag-outline\"\r\n        *ngFor=\"let tag of article.tagList\">\r\n        {{ tag }}\r\n      </li>\r\n    </ul>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/buttons/favorite-button.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/buttons/favorite-button.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-sm\"\r\n [ngClass]=\"{ 'disabled' : isSubmitting,\r\n              'btn-outline-danger': !article.favorited,\r\n              'btn-danger': article.favorited }\"\r\n (click)=\"toggleFavorite()\">\r\n  <i class=\"ion-heart\"></i> <ng-content></ng-content>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/buttons/follow-button.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/buttons/follow-button.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\r\n  \r\n  class=\"btn btn-sm mr-4\"\r\n  [ngClass]=\"{ 'disabled': isSubmitting,\r\n               'btn-outline-info': !profile.following,\r\n               'btn-success': profile.following }\"\r\n  (click)=\"toggleFollowing()\">\r\n  <i class=\"ion-plus-round\"></i>\r\n  &nbsp;\r\n  {{ profile.following ? 'Unfollow' : 'Follow' }}\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n  \r\n  <!-- <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <div class=\"col-lg-6\"> -->\r\n        <!-- <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3> -->\r\n        <!-- <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4> -->\r\n      <!-- </div>\r\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n      <a target=\"_blank\" href=\"https://twitter.com/puneeth951\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\"> \r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n      <a target=\"_blank\" href=\"https://www.facebook.com/reddyvari.puneeth?ref=bookmarks\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\"> \r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n       <a target=\"_blank\" href=\"https://www.linkedin.com/in/puneethreddyhc\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-lg btn-round\" ngbTooltip=\"Follow us\"> \r\n          <i class=\"fa fa-linkedin-square\"></i>\r\n        </a>\r\n       <a target=\"_blank\" href=\"https://github.com/puneethreddyhc\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\"> \r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n        <a href=\"https://github.com/puneethreddyhc\" target=\"_blank\">PuneethReddyHC</a>. \r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-footer justify-content-end\">\r\n          <li class=\"nav-item\">\r\n           <a href=\"https://github.com/puneethreddyhc\" class=\"nav-link\" target=\"_blank\">PuneethReddyHC</a> \r\n          </li>\r\n          <li class=\"nav-item\">\r\n           <a href=\"https://github.com/puneethreddyhc\" class=\"nav-link\" target=\"_blank\">Github</a> \r\n          </li>\r\n          <li class=\"nav-item\">\r\n           <a href=\"https://www.linkedin.com/in/puneethreddyhc\" class=\"nav-link\" target=\"_blank\">Linkedin</a> \r\n          </li>\r\n          <li class=\"nav-item\">\r\n           <a href=\"https://github.com/puneethreddyhc\" class=\"nav-link\" target=\"_blank\">MIT License</a> \r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/']\">\r\n      <h1 class=\"display-4 text-white\">articles</h1>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n       <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Components</span>\r\n          </a>\r\n          <div class=\"dropdown-menu-xl dropdown-menu\" >\r\n            <div class=\"dropdown-menu-inner\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-palette\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">More</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Login</a>\r\n            <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n        \r\n         <!-- <li class=\"nav-item\"> \r\n           <a class=\"nav-link nav-link-icon\" href=\"https://www.linkedin.com/in/puneethreddyhc\" target=\"_blank\" data-toggle=\"tooltip\" title=\"connect in linkedin\"> \r\n            <i class=\"fa fa-linkedin-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">linkedin</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\"> \r\n          <a class=\"nav-link nav-link-icon\" href=\"https://github.com/puneethreddyhc\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Star us on Github\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\r\n          </a>\r\n        </li> -->\r\n        <li class=\"nav-item\" *appShowAuthed=\"true\">\r\n            <a class=\"nav-link nav-link-icon\" [routerLink]=\"['/editor']\" routerLinkActive=\"active\" data-toggle=\"tooltip\" title=\"Write Article\">\r\n              <i class=\"fa fa-edit\"></i>\r\n              <span class=\"nav-link-inner--text\">Article</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" *appShowAuthed=\"true\">\r\n            <a class=\"nav-link nav-link-icon\" [routerLink]=\"['/settings']\" routerLinkActive=\"active\" data-toggle=\"tooltip\" title=\"Edit profile\">\r\n              <i class=\"fa fa-cog\"></i>\r\n              <span class=\"nav-link-inner--text\">Settings</span>\r\n            </a>\r\n          </li>\r\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\" *appShowAuthed=\"false\">\r\n          <a [routerLink]=\"['/login']\" routerLinkActive=\"active\" class=\"btn btn-neutral btn-icon\">\r\n            <span class=\"btn-inner--icon\">\r\n              <i class=\"fa fa-cloud-download mr-2\"></i>\r\n            </span>\r\n            <span class=\"nav-link-inner--text\">Login</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\" *appShowAuthed=\"true\">\r\n          <a [routerLink]=\"['/profile', currentUser.username]\" routerLinkActive=\"active\" class=\"btn btn-neutral btn-icon\">\r\n            <span class=\"btn-inner--icon\">\r\n              <img [src]=\"currentUser.image\" *ngIf=\"currentUser.image\" class=\"user-pic\" />\r\n            {{ currentUser.username }}\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/list-errors.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/list-errors.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\r\n  <li *ngFor=\"let error of errorList\">\r\n    {{ error }}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule'
    },
    {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                // preload all modules; optionally we could
                // implement a custom preloading strategy for just some
                // of the modules (PRs welcome 😉)
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
let AppComponent = class AppComponent {
    constructor(userService, renderer, router, document, element, location) {
        this.userService = userService;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    hasScrolled() {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    }
    ;
    ngOnInit() {
        this.userService.populate();
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]).subscribe((event) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    }
};
AppComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:scroll', ['$event'])
], AppComponent.prototype, "hasScrolled", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");





const routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    },
    {
        path: 'register',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");





let AuthComponent = class AuthComponent {
    constructor(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.route.url.subscribe(data => {
            // Get the last piece of the URL (it's either 'login' or 'register')
            this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (this.authType === 'register') {
                this.authForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
            }
        });
    }
    submitForm() {
        this.isSubmitting = true;
        this.errors = { errors: {} };
        const credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(data => this.router.navigateByUrl('/'), err => {
            this.errors = err;
            this.isSubmitting = false;
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-page',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html")
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
        ],
        declarations: [
            _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
        ],
        providers: [
            _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NoAuthGuard"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/no-auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/no-auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NoAuthGuard = class NoAuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(isAuth => !isAuth));
    }
};
NoAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NoAuthGuard);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpTokenInterceptor"], multi: true },
            _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["ArticlesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
            _services__WEBPACK_IMPORTED_MODULE_5__["CommentsService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        ],
        declarations: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService, HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_2__["HttpTokenInterceptor"]; });






/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");



let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
};
HttpTokenInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["JwtService"] }
];
HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpTokenInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"]; });




/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ApiService = class ApiService {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiService);



/***/ }),

/***/ "./src/app/core/services/articles.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/articles.service.ts ***!
  \***************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ArticlesService = class ArticlesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    query(config) {
        // Convert any filters over to Angular's URLSearchParams
        const params = {};
        Object.keys(config.filters)
            .forEach((key) => {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    }
    get(slug) {
        return this.apiService.get('/articles/' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.article));
    }
    destroy(slug) {
        return this.apiService.delete('/articles/' + slug);
    }
    save(article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.article));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.article));
        }
    }
    favorite(slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    }
    unfavorite(slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    }
};
ArticlesService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ArticlesService);



/***/ }),

/***/ "./src/app/core/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/services/comments.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CommentsService = class CommentsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    add(slug, payload) {
        return this.apiService
            .post(`/articles/${slug}/comments`, { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data.comment));
    }
    getAll(slug) {
        return this.apiService.get(`/articles/${slug}/comments`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data.comments));
    }
    destroy(commentId, articleSlug) {
        return this.apiService
            .delete(`/articles/${articleSlug}/comments/${commentId}`);
    }
};
CommentsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CommentsService);



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.service */ "./src/app/core/services/articles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.service */ "./src/app/core/services/comments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]; });

/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.service */ "./src/app/core/services/profiles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _profiles_service__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"]; });

/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.service */ "./src/app/core/services/tags.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]; });











/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtService = class JwtService {
    getToken() {
        return window.localStorage['jwtToken'];
    }
    saveToken(token) {
        window.localStorage['jwtToken'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
};
JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtService);



/***/ }),

/***/ "./src/app/core/services/profiles.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/profiles.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProfilesService = class ProfilesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    get(username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data.profile));
    }
    follow(username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    }
    unfollow(username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    }
};
ProfilesService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ProfilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfilesService);



/***/ }),

/***/ "./src/app/core/services/tags.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/tags.service.ts ***!
  \***********************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TagsService = class TagsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAll() {
        return this.apiService.get('/tags')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data.tags));
    }
};
TagsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TagsService);



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let UserService = class UserService {
    constructor(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }
    setAuth(user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }
    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }
    attemptAuth(type, credentials) {
        const route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            this.setAuth(data.user);
            return data;
        }));
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    // Update the user on the server (email, pass, etc)
    update(user) {
        return this.apiService
            .put('/user', { user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            // Update the currentUser observable
            this.currentUserSubject.next(data.user);
            return data.user;
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/home/home-auth-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/home/home-auth-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: HomeAuthResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAuthResolver", function() { return HomeAuthResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HomeAuthResolver = class HomeAuthResolver {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    resolve(route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
HomeAuthResolver.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
HomeAuthResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HomeAuthResolver);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        resolve: {
            isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_4__["HomeAuthResolver"]
        }
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  cursor:pointer;\r\n}\r\n\r\n.tag-pill{\r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnRhZy1waWxse1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");




let HomeComponent = class HomeComponent {
    constructor(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.listConfig = {
            type: 'all',
            filters: {}
        };
        this.tags = [];
        this.tagsLoaded = false;
    }
    ngOnInit() {
        this.userService.isAuthenticated.subscribe((authenticated) => {
            this.isAuthenticated = authenticated;
            // set the article list accordingly
            if (authenticated) {
                this.setListTo('feed');
            }
            else {
                this.setListTo('all');
            }
        });
        this.tagsService.getAll()
            .subscribe(tags => {
            this.tags = tags;
            this.tagsLoaded = true;
        });
    }
    setListTo(type = '', filters = {}) {
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        // Otherwise, set the list object
        this.listConfig = { type: type, filters: filters };
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]
        ],
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
        ],
        providers: [
            _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__["HomeAuthResolver"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FydGljbGUtaGVscGVycy9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYXJ0aWNsZS1oZWxwZXJzL2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



let ArticleListComponent = class ArticleListComponent {
    constructor(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    set config(config) {
        if (config) {
            this.query = config;
            this.currentPage = 1;
            this.runQuery();
        }
    }
    setPageTo(pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    }
    runQuery() {
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(data => {
            this.loading = false;
            this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
        });
    }
};
ArticleListComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListComponent.prototype, "limit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListComponent.prototype, "config", null);
ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-list',
        template: __webpack_require__(/*! raw-loader!./article-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-list.component.html"),
        styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/shared/article-helpers/article-list.component.css")]
    })
], ArticleListComponent);



/***/ }),

/***/ "./src/app/shared/article-helpers/article-meta.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleMetaComponent = class ArticleMetaComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleMetaComponent.prototype, "article", void 0);
ArticleMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-meta',
        template: __webpack_require__(/*! raw-loader!./article-meta.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-meta.component.html")
    })
], ArticleMetaComponent);



/***/ }),

/***/ "./src/app/shared/article-helpers/article-preview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticlePreviewComponent = class ArticlePreviewComponent {
    onToggleFavorite(favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticlePreviewComponent.prototype, "article", void 0);
ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-preview',
        template: __webpack_require__(/*! raw-loader!./article-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/article-helpers/article-preview.component.html")
    })
], ArticlePreviewComponent);



/***/ }),

/***/ "./src/app/shared/article-helpers/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/article-helpers/index.ts ***!
  \*************************************************/
/*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.component */ "./src/app/shared/article-helpers/article-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_list_component__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ "./src/app/shared/article-helpers/article-meta.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_meta_component__WEBPACK_IMPORTED_MODULE_1__["ArticleMetaComponent"]; });

/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ "./src/app/shared/article-helpers/article-preview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]; });






/***/ }),

/***/ "./src/app/shared/buttons/favorite-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoriteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return FavoriteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FavoriteButtonComponent = class FavoriteButtonComponent {
    constructor(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    toggleFavorite() {
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((authenticated) => {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!this.article.favorited) {
                return this.articlesService.favorite(this.article.slug)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(true);
                }, err => this.isSubmitting = false));
                // Otherwise, unfavorite the article
            }
            else {
                return this.articlesService.unfavorite(this.article.slug)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(false);
                }, err => this.isSubmitting = false));
            }
        })).subscribe();
    }
};
FavoriteButtonComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavoriteButtonComponent.prototype, "article", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FavoriteButtonComponent.prototype, "toggle", void 0);
FavoriteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-button',
        template: __webpack_require__(/*! raw-loader!./favorite-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/buttons/favorite-button.component.html")
    })
], FavoriteButtonComponent);



/***/ }),

/***/ "./src/app/shared/buttons/follow-button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/buttons/follow-button.component.ts ***!
  \***********************************************************/
/*! exports provided: FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return FollowButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let FollowButtonComponent = class FollowButtonComponent {
    constructor(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    toggleFollowing() {
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((authenticated) => {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
            // Follow this profile if we aren't already
            if (!this.profile.following) {
                return this.profilesService.follow(this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(true);
                }, err => this.isSubmitting = false));
                // Otherwise, unfollow this profile
            }
            else {
                return this.profilesService.unfollow(this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(false);
                }, err => this.isSubmitting = false));
            }
        })).subscribe();
    }
};
FollowButtonComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FollowButtonComponent.prototype, "profile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FollowButtonComponent.prototype, "toggle", void 0);
FollowButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-button',
        template: __webpack_require__(/*! raw-loader!./follow-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/buttons/follow-button.component.html")
    })
], FollowButtonComponent);



/***/ }),

/***/ "./src/app/shared/buttons/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/buttons/index.ts ***!
  \*****************************************/
/*! exports provided: FavoriteButtonComponent, FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-button.component */ "./src/app/shared/buttons/favorite-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteButtonComponent"]; });

/* harmony import */ var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-button.component */ "./src/app/shared/buttons/follow-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _follow_button_component__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });





/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: ListErrorsComponent, SharedModule, ShowAuthedDirective, ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, FollowButtonComponent, HeaderComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ "./src/app/shared/article-helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleMetaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticlePreviewComponent"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/app/shared/buttons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FavoriteButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/app/shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]; });

/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/list-errors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return _list_errors_component__WEBPACK_IMPORTED_MODULE_3__["ListErrorsComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]; });

/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"]; });









/***/ }),

/***/ "./src/app/shared/layout/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
        this.test = new Date();
    }
    ngOnInit() {
    }
    getPath() {
        return this.router.url;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/footer.component.html")
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/layout/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");





let HeaderComponent = class HeaderComponent {
    constructor(userService, location, router) {
        this.userService = userService;
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.userService.currentUser.subscribe((userData) => {
            this.currentUser = userData;
        });
    }
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/header.component.html")
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: HeaderComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/layout/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/layout/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });





/***/ }),

/***/ "./src/app/shared/list-errors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/list-errors.component.ts ***!
  \*************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListErrorsComponent = class ListErrorsComponent {
    constructor() {
        this.formattedErrors = [];
    }
    set errors(errorList) {
        this.formattedErrors = Object.keys(errorList.errors || {})
            .map(key => `${key} ${errorList.errors[key]}`);
    }
    get errorList() { return this.formattedErrors; }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListErrorsComponent.prototype, "errors", null);
ListErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-errors',
        template: __webpack_require__(/*! raw-loader!./list-errors.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/list-errors.component.html")
    })
], ListErrorsComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-helpers */ "./src/app/shared/article-helpers/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./src/app/shared/buttons/index.ts");
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/list-errors.component.ts");
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        declarations: [
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
            _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
            _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
            _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
            _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
        ],
        exports: [
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
            _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
            _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/show-authed.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/show-authed.directive.ts ***!
  \*************************************************/
/*! exports provided: ShowAuthedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return ShowAuthedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



let ShowAuthedDirective = class ShowAuthedDirective {
    constructor(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.userService.isAuthenticated.subscribe((isAuthenticated) => {
            if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
    set appShowAuthed(condition) {
        this.condition = condition;
    }
};
ShowAuthedDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowAuthedDirective.prototype, "appShowAuthed", null);
ShowAuthedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appShowAuthed]' })
], ShowAuthedDirective);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: 'http://localhost:3000/AgrotechSoft/api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const bootstrapPromise = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abhimanyu Singh\Documents\MD_PROJECT\blogging-website-using-mean-stack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map