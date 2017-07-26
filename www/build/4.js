webpackJsonp([4],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPlaylistPageModule", function() { return OpenPlaylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_playlist__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_song_list_song_list_module__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OpenPlaylistPageModule = (function () {
    function OpenPlaylistPageModule() {
    }
    return OpenPlaylistPageModule;
}());
OpenPlaylistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__open_playlist__["a" /* OpenPlaylistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__open_playlist__["a" /* OpenPlaylistPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_song_list_song_list_module__["a" /* SongListComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__open_playlist__["a" /* OpenPlaylistPage */]
        ]
    })
], OpenPlaylistPageModule);

//# sourceMappingURL=open-playlist.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenPlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_songs_songs__ = __webpack_require__(192);
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
 * Generated class for the OpenPlaylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OpenPlaylistPage = (function () {
    function OpenPlaylistPage(songs, navCtrl, navParams) {
        this.songs = songs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = this.songs.music;
    }
    OpenPlaylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenPlaylistPage');
    };
    OpenPlaylistPage.prototype.openMusic = function () {
        this.navCtrl.push("MusicPage");
    };
    return OpenPlaylistPage;
}());
OpenPlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-open-playlist',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/open-playlist/open-playlist.html"*/'<!--\n  Generated template for the OpenPlaylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="itr">\n        <ion-title>{{data.title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="header_banner">\n        <img class="bigimg" [src]="data.banner" alt="">\n        <div class="dec">\n            <p>{{data.title}}</p>\n            <div class="sm_u">\n                <img [src]="data.user_img" alt="">\n                <p>{{data.user_name}}</p>\n            </div>\n        </div>\n        <section class="btm_bar">\n            <div class="dv_items">\n                <ion-icon name="folder-open"></ion-icon>\n                <p>322323</p>\n            </div>\n            <div class="dv_items">\n                <ion-icon name="text"></ion-icon>\n                <p>54554</p>\n            </div>\n            <div class="dv_items">\n                <ion-icon name="share"></ion-icon>\n                <p>3323</p>\n            </div>\n            <div class="dv_items">\n                <ion-icon name="cloud-download"></ion-icon>\n                <p>下载</p>\n            </div>\n        </section>\n    </section>\n\n    <song-list [data]="data.songs"></song-list>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar color="ifff">\n        <img (click)="openMusic();" src="http://p1.music.126.net/7tbeDDuTR_U_4F_u1qGKWQ==/2539871861205743.jpg?param=34y34" alt="">\n        <p (click)="openMusic();">Lost In The Echo</p>\n        <ion-icon name="list-box"></ion-icon>\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/open-playlist/open-playlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_songs_songs__["a" /* SongsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], OpenPlaylistPage);

//# sourceMappingURL=open-playlist.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_list__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SongListComponentModule = (function () {
    function SongListComponentModule() {
    }
    return SongListComponentModule;
}());
SongListComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__song_list__["a" /* SongListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__song_list__["a" /* SongListComponent */]
        ]
    })
], SongListComponentModule);

//# sourceMappingURL=song-list.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongListComponent; });
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
 * Generated class for the SongListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SongListComponent = (function () {
    function SongListComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
    }
    SongListComponent.prototype.openMusic = function (mp3) {
        this.navCtrl.push("MusicPage", {
            mp3: mp3
        });
    };
    return SongListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SongListComponent.prototype, "data", void 0);
SongListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'song-list',template:/*ion-inline-start:"/Users/apple/Desktop/github/Netease-music/src/pages/open-playlist/components/song-list/song-list.html"*/'<!-- Generated template for the SongListComponent component -->\n<section *ngFor="let idata of data; let i = index" class="songs" (click)="openMusic( idata.mp3 );">\n    <span>{{i+1}}</span>\n    <div class="names">\n        <div class="p_wrap">\n            <p class="song_name">{{idata.name}}</p>\n            <p class="song_dec">{{idata.dec}}</p>\n        </div>\n        <ion-icon name="more"></ion-icon>\n    </div>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/Netease-music/src/pages/open-playlist/components/song-list/song-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SongListComponent);

//# sourceMappingURL=song-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map