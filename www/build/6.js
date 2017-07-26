webpackJsonp([6],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageModule", function() { return MusicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicPageModule = (function () {
    function MusicPageModule() {
    }
    return MusicPageModule;
}());
MusicPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */]
        ]
    })
], MusicPageModule);

//# sourceMappingURL=music.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MusicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MusicPage = (function () {
    function MusicPage(navCtrl, navParams) {
        //this.mp3url = this.navParams.get('mp3');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mp3url = '2414898';
    }
    MusicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicPage');
    };
    return MusicPage;
}());
MusicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-music',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/music/music.html"*/'<!--\n  Generated template for the MusicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="itr">\n        <ion-title>Coming Down</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="wrap">\n        <img class="bar" src="assets/icon/needle-ip6.png" />\n        <section class="cd_wrap">\n            <img src="assets/icon/disc_default.png" alt="">\n        </section>\n    </section>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar color="itr">\n        <section class="icon-menu">\n            <ion-icon name="heart-outline"></ion-icon>\n            <ion-icon name="archive"></ion-icon>\n            <ion-icon name="chatbubbles"></ion-icon>\n            <ion-icon name="more"></ion-icon>\n        </section>\n        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="//music.163.com/outchain/player?type=2&id=2414898&auto=1&height=66"></iframe>\n\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/music/music.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], MusicPage);

//# sourceMappingURL=music.js.map

/***/ })

});
//# sourceMappingURL=6.js.map