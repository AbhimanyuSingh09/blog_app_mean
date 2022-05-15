(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\r\n    <section class=\"section-profile-cover section-shaped my-0\">\r\n      <!-- Circles background -->\r\n      <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center mt--300\">\r\n            <div class=\"col-lg-8\">\r\n              <div class=\"card bg-gradient-secondary shadow\">\r\n                <div class=\"card-body p-lg-5\">\r\n                  <h4 class=\"mb-1\">Edit your profile</h4>\r\n                  <p class=\"mt-0\">That makes others to identify .</p>\r\n                  <app-list-errors [errors]=\"errors\"></app-list-errors>\r\n                  <form [formGroup]=\"settingsForm\" (ngSubmit)=\"submitForm()\">\r\n                      <fieldset [disabled]=\"isSubmitting\">\r\n                  <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"></span>\r\n                      </div>\r\n                      <input class=\"form-control\" type=\"text\"\r\n                      placeholder=\"URL of profile picture\"\r\n                      formControlName=\"image\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"></span>\r\n                      </div>\r\n                      <input class=\"form-control\" type=\"text\"\r\n                      placeholder=\"Username\"\r\n                      formControlName=\"username\"  (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                        placeholder=\"usertype\"\r\n                        formControlName=\"type\"  (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                      </div>\r\n                    </div>\r\n                  <div class=\"form-group mb-4\">\r\n                    <textarea class=\"form-control form-control-alternative\" rows=\"8\"\r\n                    placeholder=\"Short bio about you\"\r\n                    formControlName=\"bio\"></textarea>\r\n                  </div>\r\n                  <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"email\"\r\n                        placeholder=\"Email\"\r\n                        formControlName=\"email\"  (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                      </div>\r\n                    </div>\r\n                    \r\n                  <div>\r\n                    <button type=\"button\" (click)=\"submitForm()\" class=\"btn btn-default btn-round btn-block btn-lg\">Update Settings</button>\r\n                  </div>\r\n                  </fieldset>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <button class=\"btn btn-outline-danger\"\r\n          (click)=\"logout()\">\r\n          Or click here to logout.\r\n        </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n  </main>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");





var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.user = {};
        this.errors = {};
        this.isSubmitting = false;
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            type: '',
            bio: '',
            email: '',
        });
        // Optional: subscribe to changes on the form
        // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);
    };
    SettingsComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    };
    SettingsComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user)
            .subscribe(function (updatedUser) { return _this.router.navigateByUrl('/profile/' + updatedUser.username); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    SettingsComponent.prototype.updateUser = function (values) {
        Object.assign(this.user, values);
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _core__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-page',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html")
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]
            ],
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map