(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Paskyra</div>\n<div class=\"margin\">\n    <div class=\"account\">\n        <div class=\"item-row\">\n            <div>Vardas, Pavardė</div>\n            <strong>{{ this.loginService.user.name }}</strong>\n        </div>\n        <div class=\"item-row\">\n            <div>Teisės</div>\n            <strong>{{ this.loginService.getRoleName() }}</strong>\n            <button type=\"button\" name=\"button\" class=\"btn small\" (click)='openRoleDialog()'>Plačiau</button>\n        </div>\n        <div class=\"item-row\">\n            <div>Įstaiga</div>\n            <strong>{{ this.loginService.user.school.name }}</strong>\n        </div>\n        <div class=\"item-row\">\n            <div>Prisijungimo vardas</div>\n            <strong [class.disabled]=\"this.loginService.user.username === ''\">{{ (this.loginService.user.username === '') ? 'Nenustatyta' : this.loginService.user.username }}</strong>\n            <button type=\"button\" name=\"button\" class=\"btn small\" (click)='openUsernameDialog()'>Keisti</button>\n        </div>\n        <div class=\"item-row\">\n            <div>El. paštas</div>\n            <strong id=\"email\">{{ this.loginService.user.email }}</strong>\n            <button type=\"button\" name=\"button\" class=\"btn small\" (click)='openEmailDialog()'>Keisti</button>\n        </div>\n        <div class=\"item-row\">\n            <div>Slaptažodis</div>\n            <strong>••••••••</strong>\n            <button type=\"button\" name=\"button\" class=\"btn small\" (click)='openPasswordDialog()'>Keisti</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-email/change-email.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-email/change-email.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Elektroninio pašto keitimas</h1>\n<form #emailForm=\"ngForm\" (ngSubmit)=\"submit(emailForm)\" *ngIf=\"!this.busy\">\n    <aside style=\"margin:30px 0px;\">\n        <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Senasis el. pašto adresas\" class=\"full-width\" [(ngModel)]=\"this.config.email\" name=\"oldmail\" disabled>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Naujas el. pašto adresas\" class=\"full-width\" [(ngModel)]=\"this.email\" name=\"email\" #emaill=\"ngModel\" required>\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"emaill.errors?.required\">\n                Prašome įvesti naujo elektroninio pašto adresą.\n            </mat-error>\n        </mat-form-field>\n        <div class=\"info\"><i class=\"fas fa-info-circle\"></i>Nurodytu el. paštu, bus išsiųstas el. laiškas naujo el. pašto patvirtinimui.</div>\n    </aside>\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Slaptažodis\" class=\"full-width\" name=\"password\" type=\"password\" [(ngModel)]=\"this.password\" #ppassword=\"ngModel\" required>\n        <mat-icon matSuffix>vpn_key</mat-icon>\n        <mat-error *ngIf=\"ppassword.errors?.required\">\n            Prašome įvesti slaptažodį saugumo sumetimais.\n        </mat-error>\n    </mat-form-field>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">Keisti</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Slaptažodžio keitimas</h1>\n<form *ngIf=\"!this.busy\" #PasswordForm=\"ngForm\" (ngSubmit)=\"submit(PasswordForm)\">\n    <mat-form-field class=\"full-width\">\n        <input type=\"password\" matInput placeholder=\"Dabartinis slaptažodis\" class=\"full-width\" name=\"oldPassword\" ngModel required>\n        <mat-icon matSuffix>vpn_key</mat-icon>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n        <input type=\"password\" matInput placeholder=\"Naujas slaptažodis\" class=\"full-width\" name=\"newPassword\" ngModel required>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n        <input type=\"password\" matInput placeholder=\"Naujas slaptažodis dar kartą\" class=\"full-width\" name=\"repeatedPassword\" ngModel required>\n    </mat-form-field>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">Keisti</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-username/change-username.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-username/change-username.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Prisijungimo vardo keitimas</h1>\n<form #usernameForm=\"ngForm\" (ngSubmit)=\"submit(usernameForm)\" *ngIf=\"!this.busy\">\n    <div *ngIf=\"this.OldUsername\" style=\"margin-top:30px;\">\n        <mat-form-field class=\"full-width\">\n            <input matInput name=\"old-username\" disabled [(ngModel)]=\"this.OldUsername\" placeholder=\"Senas prisijungimo vardas\">\n        </mat-form-field>\n    </div>\n    <mat-form-field class=\"full-width\">\n        <input matInput name=\"username\" placeholder=\"Naujas prisijungimo vardas\" required [(ngModel)]=\"this.NewUsername\" #username=\"ngModel\">\n        <mat-error *ngIf=\"username.errors?.required\">\n            Prašome įvesti naują prisijungimo vardą!\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Slaptažodis\" name=\"password\" type=\"password\" required [(ngModel)]=\"this.password\" #ppassword=\"ngModel\">\n        <mat-error *ngIf=\"ppassword.errors?.required\">\n            Prašome įvesti slaptažodį saugumo sumetimais.\n        </mat-error>\n        <mat-icon matSuffix>vpn_key</mat-icon>\n    </mat-form-field>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">Keisti</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/show-role/show-role.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/show-role/show-role.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Vartotojų teisės</h1>\n<section>\n    <div [class.selected]='this.config.role > 1'>Administratorius - gali koreguoti visą turinį ir nustatymus (įskaitant vartotojus).</div>\n    <div [class.selected]='this.config.role == 1'>Redaktorius - gali koreguoti visą turinį (tvarkaraščiai, pranešimai).</div>\n    <div [class.selected]='this.config.role == 0'>Mokytojas - gali tik pridėti naujus pranešimus.</div>\n</section>\n<mat-dialog-actions>\n    <button type=\"button\" class=\"btn\" mat-dialog-close>Supratau</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\n<app-nav *ngIf=\"this.loginService.user.name\"></app-nav>\n<!-- <router-outlet></router-outlet> -->\n<div [@routeAnimations]=\"prepareRoute(outlet)\" style=\"position: relative;\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<app-snackbar></app-snackbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Susisiekite su mumis!</h1>\r\n<div class=\"success\" *ngIf=\"this.msg\"><i class=\"fas fa-check-circle\"></i>Jūsų žinutė buvo sėkmingai išsiųsta! AČIŪ JUMS!</div>\r\n<form #contactForm=\"ngForm\" (ngSubmit)=\"submit(contactForm)\" *ngIf=\"!this.busy && !this.msg\">\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>Jūsų vardas</mat-label>\r\n        <input matInput name=\"name\" required ngModel>\r\n        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>Gimnazijos pavadinimas</mat-label>\r\n        <input matInput placeholder=\"Beržo gimnazija\" name=\"organization\" required ngModel>\r\n        <mat-icon matSuffix>school</mat-icon>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>Tema</mat-label>\r\n        <mat-select name=\"theme\" required ngModel>\r\n            <mat-option *ngFor=\"let theme of themes\" [value]=\"theme.value\">\r\n                {{ theme.viewValue }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>Žinutė</mat-label>\r\n        <textarea matInput name=\"message\" required ngModel rows=\"6\"></textarea>\r\n    </mat-form-field>\r\n    <input type=\"hidden\" name=\"g-recaptcha-response\" class=\"token\">\r\n    <mat-dialog-actions>\r\n        <button class=\"btn\" type=\"submit\" *ngIf=\"!this.busy && !this.msg\">Siųsti</button>\r\n        <button class=\"btn\" mat-dialog-close>Uždaryti</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/disciplines.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/disciplines.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Disciplinos | Mokomieji dalykai</div>\n<div class=\"container margin20\">\n    <button class=\"btn small\" (click)=\"create()\" *ngIf=\"this.loginService.user.role > 0\"><i class=\"fas fa-plus-circle\"></i>&nbsp;&nbsp;Pridėti</button>\n    <div class=\"responsive\">\n        <table>\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Dalykas</th>\n                    <th>Mokytojas</th>\n                    <th>Kabinetas</th>\n                    <th *ngIf=\"this.loginService.user.role > 0\">Veiksmai</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let discipline of this.disciplinesService.disciplines; let i = index\">\n                    <td>{{ (i + 1) }}</td>\n                    <td>{{ discipline.name }}</td>\n                    <td>{{ discipline.teacher }}</td>\n                    <td>{{ discipline.room }}</td>\n                    <td *ngIf=\"this.loginService.user.role > 0\">\n                        <div class=\"flex\">\n                            <i class=\"fas fa-trash\" (click)=\"remove(discipline.id);\"></i>\n                            <i class=\"fas fa-edit\" (click)=\"edit(discipline.id);\"></i>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <button class=\"btn small\" (click)=\"create()\" *ngIf=\"this.loginService.user.role > 0\"><i class=\"fas fa-plus-circle\"></i>&nbsp;&nbsp;Pridėti</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/new-discipline/new-discipline.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/new-discipline/new-discipline.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Disciplinos {{ ((!this.config.edit) ? 'pridėjimas' : 'redagavimas') }}</h1>\n<spinner *ngIf=\"this.busy\"></spinner>\n<form #DisciplineForm=\"ngForm\" (ngSubmit)=\"submit(DisciplineForm)\" *ngIf=\"!this.busy\">\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Mokytoja(s)\" name=\"teacher\" maxlength=\"80\" required [(ngModel)]=\"this.config.data.teacher\" #teacher=\"ngModel\">\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Mokomasis dalykas\" name=\"discipline\" maxlength=\"80\" required [(ngModel)]=\"this.config.data.name\" #name=\"ngModel\">\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Kabinetas\" name=\"room\" maxlength=\"80\" required [(ngModel)]=\"this.config.data.room\" #room=\"ngModel\">\n    </mat-form-field>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">{{ (this.config.edit) ? 'Išsaugoti' : 'Pridėti' }}</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"g-recaptcha\" data-badge=\"bottomleft\" data-sitekey=\"6LfjGWYUAAAAAEsNsNhy_Gt6ubdap2ut27Unqfd8\" data-callback=\"rr\" data-error-callback=\"err\" data-size=\"invisible\"></div>\n<!-- <div class=\"loader\"></div> -->\n<section id=\"login\" [style.backgroundImage]=\"this.currentBg\">\n    <nav>\n        <h1>Informacinis ekranas <sup style=\"color: #7e7e7e;font-size: 0.7em;\"> BETA</sup></h1>\n    </nav>\n    <aside class=\"login-content\">\n        <img id=\"svgLogo\" alt=\"logo\" src=\"assets/logolight.svg\" [ngsReveal]=\"{\n            delay: 100,\n            distance: '250px',\n            origin: 'left',\n            reset: true\n          }\">\n        <div class=\"card full-button\">\n            <div class=\"mini title\">Ekranas.info prisijungimas</div>\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"loginUser(loginForm)\" *ngIf=\"!(!this.loginService.user.name && this.loginService.busy) && !(this.loginService.user.name && !this.loginService.busy) \">\n                <input type=\"hidden\" name=\"g-recaptcha-response\" class=\"token\" ngModel>\n                <div class=\"login-wrapper\">\n                    <input type=\"text\" placeholder=\"El.paštas / Vartotojo vardas\" name=\"username\" autocomplete=\"off\" required ngModel />\n                    <i class=\"fa fa-user\"></i>\n                </div>\n                <div class=\"login-wrapper\">\n                    <input type=\"password\" placeholder=\"Slaptažodis\" name=\"password\" autocomplete=\"off\" ngModel/>\n                    <i class=\"fa fa-key\"></i>\n                </div>\n                <button type=\"button\" class=\"rmps\">Priminti slaptažodį</button>\n                <button type=\"submit\">Prisijungti</button>\n            </form>\n            <spinner *ngIf=\"this.loginService.busy\"></spinner>\n            <img [src]=\"this.currentLogo\" *ngIf=\"this.loginService.busy\" />\n            <!-- <div class=\"loggedin\"><h1>' + r.name +'!</h1><h3>' + r.school + '</h3></div>\n             -->\n            <h4 *ngIf=\"this.loginService.user.name\">Prisijungta kaip {{ this.loginService.user.name }}</h4>\n        </div>\n    </aside>\n</section>\n<div class=\"svg\"></div>\n<section style=\"background-color: #f6f6f6;\">\n    <div class=\"about\">\n        <h1>Apie</h1>\n        <div class=\"flexnw\">\n            <img src=\"/assets/img/layout/notifications.svg\" style=\"padding: 20px;\" alt=\"Nepavyko užkrauti paveikslėlio!\">\n            <div [ngsRevealSet]=\"{\n                distance: '100px',\n                interval: 200,\n                origin: 'top'\n              }\" [ngsSelector]=\"'p'\">\n                <p>\"Ekranas.Info\" - tai įrankis, palengvinantis, modernizuojantis informacijos sklaidą, skirtas atvaizduoti informaciją išnaudojant švietimo įstaigų ekranus.</p>\n                <p>Tinklapis pakeičia popierinius skelbimus, taip pat supaprastina sklaidą, užtikriną efektyvų ir greitą informacijos paskelbimą iš bet kurios pasaulio vietos, turinčios interneto prieigą.</p>\n                <p>Kiekvienas naudotojas pagal suteiktas teises gali operatyviai pridėti pranešimus, redaguoti pamokų tvarkaraštį.\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"features\" [ngsInterval]=\"300\" [ngsRevealSet]=\"{\n        distance: '100px',\n        origin: 'bottom'\n      }\" [ngsSelector]=\"'.feature'\">\n        <h1>Kodėl?</h1>\n        <div class=\"flex\">\n            <div class=\"feature fghj\">\n                <img src=\"assets/img/layout/timeline.svg\">\n                <h2>Informacijos sklaida</h2>\n                <p>Norimą atvaizduoti informaciją galima lengvai sudėlioti kiekvienai dienai.</p>\n            </div>\n            <div class=\"feature fghj\">\n                <img style=\"margin-left: -32px;\" src=\"assets/img/layout/environment.svg\">\n                <h2>Ekologiška aplinkai</h2>\n                <p>Rečiau spausdinama informacija, mažinamas sunaudojamo popieriaus kiekis.</p>\n            </div>\n            <div class=\"feature fghj\">\n                <img src=\"assets/img/layout/real_time.svg\">\n                <h2>Gyva informacija</h2>\n                <p>Bet koks sistemoje informacijos koregavimas iškart matomas ekranuose.</p>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"svg2\"></div>\n<footer>\n    <div class=\"flex cta\">\n        <h1 [ngsReveal]=\"{\n            distance: '150px',\n            origin: 'left'\n          }\">Kyla klausimų?</h1>\n        <button type=\"button\" name=\"button\" (click)=\"openDialog()\" [ngsReveal]=\"{\n            distance: '150px',\n            origin: 'right'\n          }\">Susisiekite!</button>\n    </div>\n</footer>\n\n<!-- <script type=\"text/javascript\" src=\"etc/c.min.js\" charset=\"UTF-8\"></script> -->\n<!-- <script type=\"text/javascript\" src=\"etc/login.min.js?v=2b\" charset=\"UTF-8\"></script> -->\n<!-- <script type=\"text/javascript\">\n    <?php\n    // <p>Vaizduojama informacija:</p>\n    //     <ul>\n    //       <li>Tekstinė (pranešimai);</li>\n    //       <li>Vaizdinė (nuotraukos);</li>\n    //       <li>Pamokų tvarkaraštis;</li>\n    //       <li>Pamokų laikas;</li>\n    //       <li>Esami orai;</li>\n    //       <li>Socialinių tinklų sekėjai;</li>\n    //       <li>Vardadieniai;</li>\n    //       <li>Šventės;</li>\n    //       <li>Horoskopai.</li>\n    //     </ul>\n     if(!isMobile()) { ?>\n       $('#svgLogo').css('visibility', 'hidden');\n      $('<img/>').attr('src', '<?= $bg; ?>').on('load', function() {\n        $(this).remove(); // prevent memory leaks\n        $('body').css('background-image', 'url(<?= $bg; ?>)');\n        setTimeout(function () {\n          $('.loader').fadeOut();\n          setTimeout(function () {\n            ScrollReveal().reveal('#svgLogo', {\n              delay: 100,\n              distance: '250px',\n              origin: 'left',\n              reset: true\n            });\n          }, 400);\n          $('.grecaptcha-badge').css('z-index', '100');\n        }, 50);\n      });\n      <?php } else {?>\n        $('.loader').fadeOut();\n        $('.grecaptcha-badge').css('z-index', '100');\n      <?php } ?>\n      setTimeout(function () {\n        $('.loader').remove();\n      }, 10000);\n      $('input[name=username]').focus();\n    </script> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invitation/invitation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invitation/invitation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-content\">\n    <div class=\"card full-button\">\n        <div class=\"flex\" style=\"margin-bottom:30px;\">\n            <a routerLink=\"/\">\n                <img src=\"/assets/logolight.svg\" id=\"main_logo\">\n            </a>\n            <div class=\"\">\n                <div class=\"mini title\">Sveiki!</div>\n                <div class=\"mini title brighter\">Ekranas.info paskyros redagavimas</div>\n            </div>\n        </div>\n        <spinner *ngIf=\"state == 'busy'\"></spinner>\n        <form action=\"kvietimas\" method=\"post\" *ngIf=\"state == 'edit'\" #userForm=\"ngForm\" (ngSubmit)=\"submit(userForm)\">\n            <div class=\"flexnw margin\">\n                <div style=\"width: 200px;margin-bottom: 50px;\">\n                    <img src=\"/assets/logo.png\" alt=\"Gimnazijos logotipas\">\n                    <div class=\"margin\">{{ this.user.school.name }}</div>\n                    <h3>{{ this.user.name }}</h3>\n                    <h4>{{ this.user.email }}</h4>\n                </div>\n                <div>\n                    <div *ngIf=\"!this.passwordReset\">\n                        <mat-checkbox [(ngModel)]=\"this.usernameDialog\" name=\"createUsername\" #isUser=\"ngModel\">Sukurti vartotojo vardą!</mat-checkbox>\n                        <fieldset *ngIf=\"this.usernameDialog\">\n                            <legend><i class=\"fas fa-user\"></i> Vartotojo vardas</legend>\n                            <input type=\"text\" class=\"noi\" name=\"username\" placeholder=\"Vartotojo slaptažodis\" maxlength=\"20\" autocomplete=\"off\" #username=\"ngModel\" ngModel required>\n                            <!-- <div class=\"flexnw margin\" id=\"usernameAc\" style=\"display:none;\">\n                                <h5>--</h5>\n                                <div>--</div>\n                            </div> -->\n                        </fieldset>\n                    </div>\n                    <fieldset>\n                        <legend><i class=\"fas fa-key\"></i> Slaptažodis</legend>\n                        <input type=\"password\" class=\"noi\" placeholder=\"Naujas slaptažodis\" name=\"password\" autocomplete=\"off\" required=\"\" #password=\"ngModel\" ngModel>\n                        <input type=\"password\" class=\"noi\" placeholder=\"Pakartokite slaptažodį\" name=\"repeatedPassword\" autocomplete=\"off\" required=\"\" #repeatedPassword=\"ngModel\" ngModel>\n                        <div class=\"flexnw margin\" id=\"passwordInfo\"></div>\n                    </fieldset>\n                </div>\n            </div>\n            <button style=\"margin-top:50px;\" type=\"submit\" name=\"submit\">{{ ((this.passwordReset) ? 'Išsaugoti slaptažodį' : 'Registruotis') }}</button>\n        </form>\n\n\n        <aside *ngIf=\"state == 'end'\">\n            <div class=\"success\"><i class=\"fas fa-check-circle\"></i>Duomenys sėkmingai įrašyti.</div>\n            <fieldset class=\"margin20\">\n                <h2>Galite prisijungti!</h2>\n                <div class=\"margin\">El. paštas: <strong>{{ this.user.email }}</strong></div>\n                <div class=\"margin\" *ngIf=\"!this.passswordReset\">Vartotojo vardas: <strong>{{ this.user.username }}</strong></div>\n            </fieldset>\n            <a routerLink=\"/\" class=\"margin\">\n                <button type=\"button\" name=\"button\">Prisijungti</button>\n            </a>\n        </aside>\n\n        <!-- <div class=\"error\"><i class=\"fas fa-times-circle\"></i>Vartojo vardas yra užimtas! Prašome sugalvoti kitą!</div>\n        <div class=\"error\"><i class=\"fas fa-times-circle\"></i>Atnaujinant duomenis įvyko klaida! Bandykite iš naujo! Arba rašyk pagalbai!</div> -->\n        <div class=\"warning\" *ngIf=\"this.state == 'error'\"><i class=\"fas fa-exclamation-circle\"></i>Netinkama / negaliojanti nuoroda! <br> Jeigu manai, jog tai klaida, parašyk žinutę pagalbai!</div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"brand\">\n        <div class=\"dropdown\">\n            <!-- ?php\n$changes = $db->query('SELECT receipt_time FROM schools WHERE id=' . (int)$_SESSION['user']->school->id . ';');\nif ($changes->num_rows > 0)\t{\n$changes = $changes->fetch_assoc();\nif (time() - strtotime($changes['receipt_time']) < 60 * 2) {\n$aa =  '<div class=\"status ok\">Ekranas veikia!</div>';\n$icon = 'check';\n}\nelseif (time() - strtotime($changes['receipt_time']) < 60 * 4) {\n$aa =  '<div class=\"status warning\">Ekranas Galimas ekrano sutrikimas!</div>';\n$icon = 'exclamation';\n}\nelse {\n$aa =  '<div class=\"status error\">Ekranas neveikia!</div><div class=\"status error\">Aktyvus buvo prieš ' . time_ago($changes['receipt_time']) . '</div>';\n$icon = 'times';\n}\n}\n?> -->\n            <div style=\"position: relative;\">\n                <img src=\"assets/logolight.svg\">\n                <!-- <?php\nswitch ($icon) {\ncase 'check':\necho '#2ecc71';\nbreak;\ncase 'exclamation':\necho '#e67e22';\nbreak;\ndefault:\necho 'red';\nbreak;\n}\n?> -->\n                <!-- <i style=\"color: red;position: absolute;left: 0px;bottom: 0px;/*! background: white; */border-radius: 10px;\" class=\"fas fa-<?= $icon;?>-circle\"></i> -->\n            </div>\n            <div class=\"dropdown-left\">\n            </div>\n        </div>\n        <div>\n            <h1>Ekranas.INFO&nbsp;<sup>BETA</sup></h1>\n        </div>\n    </div>\n    <nav>\n        <div id=\"menuToggle\" (click)=\"toggleMenu()\"><i class=\"fas fa-bars\"></i></div>\n        <div id=\"toggled\" [style.display]=\"(this.hidden) ? 'none': 'block'\">\n            <a routerLink=\"pranesimai\" (click)=\"hide()\" [class.active]=\"this.router.url == '/pranesimai'\">Pranešimai</a>\n            <a routerLink=\"tvarkarastis\" (click)=\"hide()\" [class.active]=\"this.router.url == '/tvarkarastis'\">Tvarkaraštis</a>\n            <a routerLink=\"nustatymai\" (click)=\"hide()\" [class.active]=\"this.router.url == '/nustatymai'\">Nustatymai</a>\n            <div class=\"dropdown\">\n                <span><i class=\"fas fa-user\"></i><span>{{ this.loginService.user.name }}</span></span>\n                <div class=\"dropdown-right\">\n                    <img class=\"details\" src=\"{{ this.loginService.user.school.logo }}\" />\n                    <a routerLink=\"paskyra\" (click)=\"hide()\">\n                        <i class=\"fas fa-user-cog\" aria-hidden=\"true\"></i>\n                        <span>Paskyros nustatymai</span>\n                    </a>\n                    <a (click)=\"loggout();\">\n                        <i class=\"fas fa-sign-out-alt\" aria-hidden=\"true\"></i>\n                        <span>Atsijungti</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/add-notification/add-notification.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/add-notification/add-notification.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Pranešimo {{ ((!this.config.edit) ? 'pridėjimas' : 'informacijos redagavimas') }}</h1>\n<form #NotificationForm=\"ngForm\" (ngSubmit)=\"submit(NotificationForm)\" *ngIf=\"!this.busy\">\n    <div class=\"contents\">\n        <fieldset>\n            <legend><i class=\"fas fa-calendar-alt\"></i> Rodymas</legend>\n            <mat-form-field *ngIf=\"!this.formData.repeatTimes\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Data\" name=\"date1\" id=\"date1\" [(ngModel)]=\"this.formData.date1\" required #date1=\"ngModel\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker touchUi></mat-datepicker>\n            </mat-form-field>\n            <div *ngIf=\"this.formData.repeatTimes\">\n                <mat-form-field style=\"padding-right: 15px;\">\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Rodyti nuo\" name=\"date1\" id=\"date1\" [(ngModel)]=\"this.formData.date1\" #date1=\"ngModel\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker2 touchUi></mat-datepicker>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"iki\" name=\"date2\" id=\"date2\" [(ngModel)]=\"this.formData.date2\" #date2=\"ngModel\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker3 touchUi></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <!-- <span tooltip=\"Pasirinkus taip, pranešimas bus rodomas viena diena prieš pagrindinę pranešimo datą.\" flow=\"right\"><i class=\"fas fa-question-circle\"></i></span> -->\n            <div class=\"toggle-grid\">\n                <label>Išankstinis rodymas</label>\n                <mat-slide-toggle (change)=\"this.formData.showBefore = !this.formData.showBefore;\" [checked]=\"this.formData.showBefore\">{{ this.formData.showBefore ? 'Taip': 'Ne' }}</mat-slide-toggle>\n            </div>\n            <div class=\"toggle-grid\">\n                <label><i class=\"fas fa-redo-alt\"></i> Pasikartojimas</label>\n                <mat-slide-toggle (change)=\"this.formData.repeatTimes = !this.formData.repeatTimes;\" [checked]=\"this.formData.repeatTimes\">{{ this.formData.repeatTimes ? 'Kartoti': 'Nėra' }}</mat-slide-toggle>\n            </div>\n            <div class=\"info\" style=\"max-width: 550px;\">\n                <i class=\"fas fa-info-circle\"></i>\n                <div class=\"showing\">{{ showDatesList() }}</div>\n            </div>\n        </fieldset>\n        <fieldset *ngIf=\"!this.config.files\">\n            <legend><i class=\"fas fa-info\"></i> Informacija</legend>\n            <label>Pranešimas</label>\n            <div class=\"warning\" style=\"max-width: 550px;\" *ngIf=\"!this.formData.visibility\"><i class=\"fas fa-exclamation-circle\"></i>Šis pranešimas šiuo metu paslėptas!</div>\n            <div style=\"box-shadow: 0px 0px 6px 2px #0000001a;margin-top:5px;margin-bottom: 16px;\">\n                <ckeditor [config]=\"{ toolbar: [ 'heading', 'bold', 'italic', 'blockQuote', 'numberedList', 'bulletedList', 'undo', 'redo']}\" [editor]=\"Editor\" [(ngModel)]=\"this.formData.note\" name=\"note\" #note=\"ngModel\"></ckeditor>\n                <!-- <ckeditor [config]=\"{ toolbar: [ 'heading', 'bold', 'italic', 'blockQuote', 'numberedList', 'bulletedList', 'insertTable', 'undo', 'redo']}\" [editor]=\"Editor\" [(ngModel)]=\"this.formData.note\" name=\"note\"></ckeditor> -->\n            </div>\n            <!-- \n                    14: \"tableColumn\"\n                    15: \"tableRow\"\n                    16: \"mergeTableCells\" \n    5: \"imageTextAlternative\"\n    6: \"imageStyle:full\"\n    7: \"imageStyle:side\"\n    12: \"mediaEmbed\"\n    17: \"imageUpload\" -->\n            <!-- <span tooltip=\"Pasirinkus svarbu, pranešimas bus rodomas aukščiau negu kiti pranešimai.\" flow=\"right\"><i class=\"fas fa-question-circle\"></i></span> -->\n            <div class=\"toggle-grid\">\n                <label><i class=\"fas fa-star\"></i> Pranešimas</label>\n                <mat-slide-toggle (change)=\"this.formData.important = !this.formData.important;\" [checked]=\"this.formData.important\">{{ this.formData.important ? 'Svarbus': 'Įprastas' }}</mat-slide-toggle>\n            </div>\n            <div class=\"toggle-grid\">\n                <label>Autorius pranešime</label>\n                <mat-slide-toggle (change)=\"this.formData.displayAuthor = !this.formData.displayAuthor;\" [checked]=\"this.formData.displayAuthor\">{{ this.formData.displayAuthor ? 'rodomas': 'nerodomas' }}</mat-slide-toggle>\n            </div>\n            <mat-form-field>\n                <input matInput placeholder=\"Autorius\" name=\"author\" [(ngModel)]=\"this.formData.author\" required #author=\"ngModel\">\n            </mat-form-field>\n        </fieldset>\n        <fieldset *ngIf=\"this.config.files\">\n            <legend><i class=\"fas fa-image\"></i> Nuotraukos</legend>\n            <input type=\"file\" name=\"pictures[]\" accept=\"image/*\" multiple #upload (change)=\"uploadsDistribution(upload.files);upload.value ='';\">\n            <div class=\"margin\">\n                <span (click)=\"upload.click()\" class=\"file-select btn\">\n                            <i class=\"fas fa-upload\"></i>\n                            <span>Įkelti</span>\n                </span>\n                <!-- <span id=\"btn-uploads-gallery\" class=\"file-select btn\">\n                            <i class=\"fas fa-images\"></i>\n                            <span>Failai</span>\n                </span>\n                <span id=\"btn-upload-url\" class=\"file-select btn\">\n                            <i class=\"fas fa-link\"></i>\n                            <span>Nuoroda</span>\n                </span> -->\n            </div>\n            <div id=\"preview-box\">\n                <div class=\"preview\" *ngFor=\"let image of this.formData.images; let i = index\">\n                    <img [src]=\"image.url\" [alt]=\"image.name\">\n                    <span [title]=\"image.name\">{{ image.name }}</span>\n                    <i class=\"fas fa-minus-circle minus\" title=\"Pašalinti\" (click)=\"removeUpload(image.id)\"></i>\n                </div>\n            </div>\n            <div class=\"warning\" style=\"max-width: 550px;\"><i class=\"fas fa-exclamation-circle\"></i>Vienos nuotraukos dydis iki 10 MB!</div>\n        </fieldset>\n    </div>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">{{ (this.config.edit) ? 'Išsaugoti' : 'Pridėti' }}</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/delete-notification/delete-notification.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/delete-notification/delete-notification.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Ar tikrai norite ištrinti šį pranešimą?</h1>\n<div mat-dialog-actions>\n    <button class=\"btn\" mat-dialog-close>Ne</button>\n    <button class=\"btn\" [mat-dialog-close]=\"data.id\" cdkFocusInitial>Taip</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/select-notification/select-notification.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/select-notification/select-notification.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Pasirinkite tipą:</h1>\n<div class=\"flex\" mat-dialog-actions>\n    <button class=\"card\" [mat-dialog-close]=\"1\">\n        <i class=\"maxi fas fa-font\"></i>\n        <h2>Tekstinis pranešimas</h2>\n    </button>\n    <button class=\"card\" [mat-dialog-close]=\"2\">\n        <i class=\"maxi fas fa-image\"></i>\n        <h2>Vaizdinis pranešimas</h2>\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notification/notification.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notification/notification.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification\" [ngClass]=\"{ 'disabled': this.data.visibility, 'relevant': this.isRelevant() }\" [class.disabled]=\"!this.data.visibility\">\n    <div class=\"flex\">\n        <div class=\"flex1\">{{ this.index + 1 }}</div>\n        <div class=\"flex2\"><i class=\"fas fa-circle\" title=\"Pranešimas nebus rodomas išanksto\" *ngIf=\"!this.data.showBefore\"></i> {{ (this.data.repeatTimes) ? this.data.date1 + ' - ' + this.data.date2 : this.data.date1 }}</div>\n        <div class=\"flex3\">\n            <i *ngIf='!this.data.displayAuthor' class=\"fas fa-user-slash\" title=\"Autorius pranešime nerodomas\"></i>\n            <i *ngIf='this.data.displayAuthor' class=\"fas fa-user\" title=\"Autorius pranešime rodomas\"></i> {{ this.data.author }}\n        </div>\n    </div>\n    <div class=\"content\" [innerHTML]='this.data.note' *ngIf=\"this.data.note\"></div>\n    <div class=\"preview\" *ngIf=\"this.data.images.length > 0\">\n        <img [src]=\"image.url\" *ngFor=\"let image of this.data.images\">\n    </div>\n    <div class=\"content\" class=\"disabled margin\" *ngIf=\"this.data.images.length == 0 && !this.data.note\">Pranešimas tuščias</div>\n    <div class=\"tools\" *ngIf=\"this.data.rights\">\n        <select name=\"visibility\" [value]=\"this.data.visibility\" (change)='toggleVisibility()'>\n                <option value=\"true\">Rodoma</option>\n                <option value=\"false\">Paslėpta</option>\n            </select>\n        <a (click)=\"this.edit()\" title=\"Redaguoti\"><i class=\"fas fa-edit\"></i></a>\n        <a (click)=\"this.remove()\" title=\"Pašalinti\"><i class=\"fas fa-trash\"></i></a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"title\">Pranešimai</span>\n<div class=\"filter-block\">\n    <div class=\"\"> Rodoma: </div>\n    <div class=\"filter\" [class.active]=\"this.filters.mode == 'relevant'\" (click)=\"toggleFilter('relevant')\">Aktualūs</div>\n    <div class=\"filter\" [class.active]=\"this.filters.mode == 'archive'\" (click)=\"toggleFilter('archive')\">Archyvas</div>\n    <div class=\"filter\" [class.active]=\"this.filters.mode == 'deleted'\" (click)=\"toggleFilter('deleted')\">Ištrinti</div>\n    <!-- <div class=\"split\"></div>\n    <div class=\"filter\" [class.active]=\"this.filters.textual\" (click)=\"toggleType(1)\">Tekstiniai</div>\n    <div class=\"filter\" [class.active]=\"this.filters.visual\" (click)=\"toggleType(2)\">Vaizdiniai</div> -->\n</div>\n<div *ngIf=\"this.filters.mode == 'deleted'\" class=\"info\" style=\"margin: 10px 7px;\"><i class=\"fas fa-info-circle\"></i><span>Pranešimai, buvę šiukšliadėžėje daugiau nei 30 dienų, bus ištrinti automatiškai.</span></div>\n<ngx-masonry [options]=\"myOptions\" [useImagesLoaded]=\"true\">\n    <notification ngxMasonryItem class=\"notification\" *ngFor=\"let noti of this.notifications; let i = index\" [data]='noti' [index]='i'></notification>\n</ngx-masonry>\n<div class=\"flex mbcolumn\" *ngIf=\"this.notifications.length == 0\">\n    <i class=\"fas fa-sticky-note\"></i>\n    <div style=\"text-align: center;\" class=\"container\">Pranešimų nėra</div>\n    <i class=\"fas fa-sticky-note\"></i>\n</div>\n<button *ngIf=\"this.filters.mode == 'relevant'\" type=\"button\" (click)=\"selectNotificationDialog()\" class=\"btn\" style=\"padding: 10px 18px;\"><i class=\"fas fa-plus\"></i>&nbsp;&nbsp;Pridėti naują pranešimą</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/edit-user/edit-user.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/edit-user/edit-user.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ (this.config.edit) ? 'Vartotojo redagavimas' : 'Naujo vartotojo pridėjimas' }}</h1>\n<!-- <div mat-dialog-content> -->\n<form #newUser=\"ngForm\" (ngSubmit)=\"submit(newUser)\" *ngIf=\"!this.busy\">\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Vardas, Pavardė\" name=\"name\" required [(ngModel)]=\"this.user.name\">\n    </mat-form-field>\n    <mat-form-field class=\"full-width\" *ngIf=\"!this.config.edit\">\n        <input matInput placeholder=\"Elektroninio pašto adresas\" name=\"email\" type=\"email\" required [(ngModel)]=\"this.user.email\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Paskyros tipas</mat-label>\n        <mat-select [(ngModel)]=\"this.user.role\" name=\"role\" required>\n            <mat-option [value]='0'>Mokytojas</mat-option>\n            <mat-option [value]='1'>Redaktorius</mat-option>\n            <mat-option [value]='2'>Administratorius</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"!this.config.edit\">\n        <div class=\"info\" *ngIf=\"this.user.role == 2\"><i class=\"fas fa-info-circle\"></i>Gali koreguoti visą turinį ir nustatymus (įskaitant vartotojus).</div>\n        <div class=\"info\" *ngIf=\"this.user.role == 1\"><i class=\"fas fa-info-circle\"></i>Gali koreguoti visą turinį (tvarkaraščiai, pranešimai</div>\n        <div class=\"info\" *ngIf=\"this.user.role == 0\"><i class=\"fas fa-info-circle\"></i>Gali tik pridėti naujus pranešimus.</div>\n        <div class=\"info\"><i class=\"fas fa-info-circle\"></i>Elektroninio pašto adresu bus išsiųstas kvietimas paskyros aktyvavimui.</div>\n    </div>\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">{{ (this.config.edit) ? 'Išsaugoti' : 'Pridėti' }}</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-screen/new-screen.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-screen/new-screen.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ (this.config.edit) ? 'Ekrano pasirinkimai' : 'Naujas ekranas' }}</h1>\n<form #newSchool=\"ngForm\" (ngSubmit)=\"submit(newSchool)\" *ngIf=\"!this.busy\">\n\n    <svg id=\"1114b74d-d569-426e-8447-30911d23dfd6\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1934.9 1078.45\" style=\"width: 600px;\">\n            <defs>\n                <style>\n                    .\\32 c6e6a6c-97c6-4484-93d5-d081cbd440ed {\n                        fill: {{ this.screen.settings.primaryColor }};\n                    }\n                    \n                    .\\36 2190d31-0563-4e48-b0e7-a2ea20727674 {\n                        fill:{{ this.screen.settings.bg1 }};\n                    }\n                    \n                    .b12c77ee-dcbd-48c8-810c-b0d9d11f028e {\n                        fill: {{ this.screen.settings.bg2 }};\n                    }\n                    \n                    .\\30 52925f7-d44e-48fe-b98c-8cfaaf5b472c {\n                        fill: {{ this.screen.settings.accentColor }};\n                    }\n                    \n                    .\\35 e684107-0101-4f74-9afb-e0f40f5dc987 {\n                        fill: #eff2ef;\n                    }\n                    \n                    .\\33 75c44f0-5c40-4069-b2aa-d0f1c674c26a {\n                        fill: #243252;\n                    }\n                    \n                    .\\37 8048b61-63fd-4f45-bbea-49152384ee27 {\n                        fill: #161d2f;\n                    }\n                    \n                    .bcc7b85e-d007-4cc1-a9dd-58e3ff522165 {\n                        fill: #90a712;\n                    }\n                    \n                    .ace5d1dc-fd6c-4766-9899-cf60c9bb5c44 {\n                        fill: {{ this.screen.settings.text1 }};\n                    }\n                    \n                    .fb391a3e-0186-425f-b83e-b66078816802 {\n                        fill: {{ this.screen.settings.text2 }};\n                    }\n                    \n                    .\\34 7d7180d-6a46-4f66-bb22-842585ad3557 {\n                        fill: #a3a4a4;\n                    }\n                    \n                    .abb2b51d-c096-48c8-94b6-b8897bc5f630 {\n                        fill: {{ this.screen.settings.accentColor }};\n                    }\n                </style>\n            </defs>\n            <title>Screenshot (6)</title>\n            <rect width=\"1934.9\" height=\"1078.45\" />\n            <path class=\"2c6e6a6c-97c6-4484-93d5-d081cbd440ed\" d=\"M587.67,668Q313,668,38.33,668a6.68,6.68,0,0,1-1,0c-4.84-.79-6.7.77-6.47,6.11.48,10.81.14,21.65.15,32.48l.12,125.46q138.44,0,276.87,0,143.43,0,286.87,0c0-2,.12-4,.12-6q0-75.48,0-151C595,667.08,595.82,668,587.67,668Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"2c6e6a6c-97c6-4484-93d5-d081cbd440ed\" d=\"M595.11,569.36c0-4.59-1.45-5.44-5.68-5.44q-276.45.15-552.9,0c-4.3,0-5.67,1-5.63,5.48.22,26.5.27,53,0,79.49-.06,5.29,1.61,6.22,6.46,6.21Q175,654.89,312.77,655q138.23,0,276.45.1c4.46,0,5.93-1,5.89-5.74Q594.75,609.36,595.11,569.36Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"2c6e6a6c-97c6-4484-93d5-d081cbd440ed\" d=\"M595.13,444.12c0-5.28-1.58-6.23-6.45-6.22q-137.71.21-275.44.11-138.23,0-276.45-.1c-4.47,0-5.93,1-5.9,5.74q.32,51,0,102c0,4.58,1.43,5.45,5.68,5.45q276.45-.15,552.89,0c4.3,0,5.67-1,5.64-5.48Q594.8,494.85,595.13,444.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"2c6e6a6c-97c6-4484-93d5-d081cbd440ed\" d=\"M595.13,284.14c0-5.23-1.52-6.26-6.43-6.24q-96,.24-192,.11-180,0-359.92,0c-3.31,0-5.95-.41-5.93,4.64.22,45.16.16,90.31.18,135.47Q60.56,418,90,418q99.2,0,198.39,0c6.71,0,6.71,0,6.53,6.93q147.72,0,295.44.14c3.92,0,4.65-1.38,4.64-4.93C594.94,374.79,594.89,329.46,595.13,284.14Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"2c6e6a6c-97c6-4484-93d5-d081cbd440ed\" d=\"M595.13,25.12c0-5.27-1.58-6.22-6.45-6.22q-275.7.18-551.41,0c-5,0-6.4,1.09-6.39,6.27q.27,116.73.13,233.46C31,265,31,265,37.57,265H313q138,0,276,.11c4.76,0,6.13-1.14,6.12-6Q594.88,142.11,595.13,25.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"62190d31-0563-4e48-b0e7-a2ea20727674\" d=\"M1939.06,23.5c0-3.45-1-5-4.5-4.52a27.22,27.22,0,0,1-3.5,0q-633.75,0-1267.49,0c-2.17,0-4.34.06-6.5.09V231.9c2.33,0,4.66.09,7,.09h1267a27.22,27.22,0,0,1,3.5,0c3.54.46,4.5-1.07,4.5-4.52Q1938.93,125.5,1939.06,23.5ZM917.59,37.33a5.78,5.78,0,0,1,1.73-.33,6.35,6.35,0,0,1,2.39.33Zm-44.92,0h-1.46A1.24,1.24,0,0,1,872.67,37.33Zm-18.37,0h-1.38A1.22,1.22,0,0,1,854.3,37.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"b12c77ee-dcbd-48c8-810c-b0d9d11f028e\" d=\"M1940.56,249.5c0-3.45-1-5-4.5-4.52a27.22,27.22,0,0,1-3.5,0H665.07c-2.17,0-4.34.06-6.5.09V444.9c2,0,4,.09,6,.09H1783.43c2,0,4-.06,6-.09,0-.77,0-1.54,0-2.3h139.12c0,.76,0,1.53,0,2.3,2.5,0,5-.12,7.49.14,3.55.36,4.5-1.09,4.5-4.54Q1940.43,345,1940.56,249.5ZM669.4,307c-.1-1,.83-1.43,1.64-1.57h.07v2.67C670.33,308.1,669.52,308.1,669.4,307Zm1.71,74.93v0l-.07,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"052925f7-d44e-48fe-b98c-8cfaaf5b472c\" d=\"M1922.44,410.91q-64.93.19-129.88,0c-4,0-4.69,1.52-4.63,5,.17,9.65,0,19.31,0,29h139.14c0-9.66-.17-19.32,0-29C1927.13,412.43,1926.42,410.9,1922.44,410.91Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M813,1085c-.56-3-2.78-6.12.35-9.06.17-.17-.21-1.31-.62-1.67-1.25-1.1-2.08.33-3,.77-3.43,1.66-6.54,1.75-8.48-2-1.75-3.39.31-7.18,4.38-8.6.77-.26,1.65-.2,2.42-.47,1.51-.55,4.71,1.2,4-2.49-.56-2.83-3-2.4-5.24-2.42-1.58,0-3.89,3.62-4.55-.12-.47-2.65,2.92-2.58,4.84-2.85,6.81-1,8.7,1.1,9.18,8,.21,3.11-2.55,7.19,2.53,9.52,1.24.57-1.47,1.94-2.41,2.91s-2.11,1.79-1.68,3.33,1.82,1,2.91,1.15c4.9.83-2.48,3,.39,4Zm-4.08-18.76c-.94.62-3.95,0-4,3.43,0,1.91.69,3.43,2.81,3.27,2.77-.21,4.57-1.57,4.56-4.74C812.28,1066.41,811.64,1065.77,808.92,1066.24Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1044,1085c1.62-8.2.33-16.48.69-24.72.17-3.71.07-3.76,3.52-2.2.81.36,1.22-.13,1.67-.44,3.37-2.28,6.88-2.67,10.13-.11,3.4,2.66,3.83,6.53,3,10.46-1,4.3-4.07,6.69-8.14,7.91-2,.61-5.23-1-6,.85a11.59,11.59,0,0,0,.18,8.25Zm4.46-18c.13,2.79-1.11,6.34,4,6,4.17-.24,6.94-3,6.81-7.42-.1-3.44-1.3-6.27-5.23-6.58S1048.45,1061.38,1048.46,1067Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1916,1085c-2.39-4.15-1.64-7.81,2.75-10.7-1.26-.45-1.63-.7-1.75-.61-7.57,5.49-13.32,1-12.16-7.52.32-2.29,0-4.66.08-7,.07-1.27-.84-3.16,1.76-3.23,2.41-.06,2.07,1.56,2.07,3,0,3.16,0,6.33,0,9.49,0,2.39.75,4.53,3.55,4.45s5-1.28,5.16-4.32c.22-3.32.07-6.66.07-10,0-1.35-.17-2.68,1.91-2.67s1.81,1.45,1.82,2.73c0,4.83,0,9.66,0,14.5,0,1.08.37,2.27-1,3s-3.2,1.75-2.6,3.7c.66,2.13,2.91.54,3.65.8,2.37,2.25-2.58,2.42-.3,4.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M190,1085c0-8.65-.09-17.3-.08-26,0-1-.59-2.46.93-2.94a1.6,1.6,0,0,1,2.22,1.27c.52,1.7,1.51.5,2.19.07,3.26-2,6.64-2.4,9.75,0,3.43,2.59,4,6.4,3.16,10.38-.87,4.38-3.9,6.93-8,8-6.74,1.82-6.77,1.69-6.19,9.19Zm4-17c.32,1.14-2.09,5.15,3.26,5.06,4.13-.07,7.28-2.86,7.18-7.1-.09-3.52-1.23-6.88-5.48-6.84C194.14,1059.14,193.19,1062.54,194,1068Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1244,1085c0-8.66,0-17.32,0-26,0-1-.71-2.48,1-2.92a1.61,1.61,0,0,1,2.23,1.25c.51,1.59,1.46.45,2.27.1,6.48-2.79,10.64-1.48,12.58,4a11.08,11.08,0,0,1-7.69,14.46c-2.07.51-5.3-.94-6,.8-1,2.4-.31,5.52-.34,8.33Zm4.18-17.35c.37,1.27-2.26,5.59,3.47,5.38a7.08,7.08,0,0,0,7.06-7.3c0-3.86-2.56-7-5.75-6.69C1248.5,1059.46,1247.31,1062.36,1248.18,1067.65Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M973,1085l.87-.45c-3-4-1.25-7.18,2.38-10-2.32-1.61-3.34.4-4.64.9-4.31,1.66-8.39-.42-8.77-5-.35-4.13-.07-8.31-.13-12.46,0-1.42.39-2.11,1.95-2.09s1.81,1,1.8,2.27c0,3.33-.09,6.65,0,10,.09,2.46.72,5,3.83,4.73,2.83-.2,5-1.52,4.94-5-.09-3.15,0-6.31,0-9.47,0-1.55.28-2.53,2.15-2.5s1.73,1.09,1.73,2.31c0,5.15,0,10.3,0,15.45,0,1,.09,1.88-1.06,2.52-1.41.77-3.26,1.72-2.62,3.67s2.91.64,3.81.87c2.18,2-2.58,2.45-.23,4.22Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1744,1085c.77-.23,1.19-.87.66-1.43-2.9-3-1.63-5.34,1.09-7.48.71-.55,1.18-1.12.61-2-.13-.11-.3-.34-.37-.32-10.55,4-12.44,2.63-12.44-8.7,0-2.33,0-4.66,0-7,0-1.4.41-2.11,2-2.1s1.79,1,1.78,2.26c0,3.33-.08,6.66,0,10,.08,2.48.76,5,3.84,4.72,2.77-.21,5.11-1.43,5-5-.11-3,0-6,0-9,0-1.45-.39-3.11,2.07-3s1.79,1.92,1.81,3.22c.07,4.66,0,9.32,0,14,0,.92.37,1.93-.59,2.75-2.37,2-7.63,4.27.74,5.21,2.75.31-2.89,2.42-.14,3.89Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M535.09,1056c2.68,1.82,5.08,1.27,8.12.21,4.61-1.6,8.83,1.73,9.75,6.6a11,11,0,0,1-8.49,13.11c-6.84,1.32-7.24,2-5.47,9.07h-4C534.69,1075.33,534.53,1065.67,535.09,1056Zm3.2,11c.15,2.76-1.17,6.35,3.92,6.07,4.14-.22,7-3,6.87-7.38-.08-3.45-1.31-6.26-5.22-6.61S538.28,1061.42,538.29,1067Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1936,1085c.08-8.65.18-17.29.23-25.94,0-2.75.33-4.54,3.3-1.75,2.4,2.26,3.41-1.84,5.47-1.31v3c-4.92,2.09-6,4.86-4.92,11.5.55,3.37,3,2.22,4.92,2.5v3c-4.22-.83-5.59,1-4.93,5a20.92,20.92,0,0,1-.07,4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1719,1085c4.37-4.25,4.32-9.68,4.13-15.2-.13-4,0-7.94,0-11.91,0-1.56.72-2,2.11-1.92,1.08,0,2,.17,1.9,1.57-.29,6.93.57,13.86-.6,20.79-.42,2.46-3.67,3.73-2.5,6.67Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M906,1085c3.75-2.79,5-6.63,4.92-11.17-.12-4.8-.08-9.61,0-14.42,0-1.41-.91-3.57,2-3.45s1.91,2.27,1.87,3.65c-.19,6.27.56,12.56-.66,18.84-.46,2.35-4.08,3.55-2.18,6.55Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1945,1073c-1.91-.28-4.37.87-4.92-2.5-1.08-6.64,0-9.41,4.92-11.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1940,1085a20.92,20.92,0,0,0,.07-4c-.66-4,.71-5.88,4.93-5a22.12,22.12,0,0,0,0,4C1945.84,1084.24,1944.23,1085.9,1940,1085Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M535.09,1056c-.56,9.66-.4,19.32-.09,29h-1c-.07-8.72-.15-17.45-.18-26.17C533.81,1057.75,533.52,1056.43,535.09,1056Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M657.07,19.1V231.9c-15.15,0-30.3,0-45.45.15-3.32,0-4.69-.76-4.68-4.42q.13-102.13,0-204.26c0-3.66,1.36-4.46,4.68-4.42C626.77,19.11,641.92,19.07,657.07,19.1ZM619.59,33.38c-3.4-1.17-4.94.29-5.21,3.33a37.46,37.46,0,0,0-.22,7.91c.48,3.82,2.78,6.42,6.76,6.85s6.65-1.53,8.06-5.21c.77-2,1.34-4.09,2.2-6.06a2.82,2.82,0,0,1,2.59-2c1.5.09,2.28,1.25,2.73,2.55.85,2.47.24,4.9-.27,7.35-.21,1-.92,2.45.93,2.75,1.53.26,3.1.26,3.45-1.78.65-3.79,1-7.56-.52-11.26a6.91,6.91,0,0,0-6.64-4.38,6.26,6.26,0,0,0-6.33,4c-.87,2-1.52,4-2.34,6-.74,1.82-1.91,3.2-4.12,2.79-2.39-.45-2.58-2.52-2.45-4.27C618.42,39.12,619.08,36.37,619.59,33.38Zm12.27,94.52c3.16,0,6.31,0,9.47,0,1.56,0,3,.15,2.77-2.22-.18-1.71-.06-3.55-2.54-3.31-4.49.42-7.33.27-8.8-5.73-1.35-5.5-8-4.92-13-4.61-5.26.32-7.31,4-4.87,8.65.88,1.66,2.12,2.92-.14,4.46-1.18.8-.3,1.72.39,2.46s1.47,1.84,2.9,1.17C622.54,126.71,627.28,128.12,631.86,127.9Zm-9.44,55.19V183h2.5c9.43,0,10.56-1.64,6.78-10.23-.63-1.44-.07-1.6.87-2.07,1.29-.63,1.59-1.51.53-2.68-.86-.94-1.51-3-2.79-2.36-4.47,2.34-9.14.95-13.7,1.24-1.69.11-2.73.19-2.76,2.36s.78,2.87,2.88,2.77c3-.15,6,0,9-.1,2.24-.1,3.45.65,3.54,3s-1.32,3.14-3.45,3.11c-3.15,0-6.31-.05-9.46-.11-1.61,0-3.11,0-2.54,2.32.35,1.47-.2,3.49,2.69,2.87C618.37,182.76,620.43,183.09,622.42,183.09Zm1.39-100.21c8.66.31,11.46-2.53,10.09-10-.25-1.37.15-3.51-2.54-3.16s-2.07,1.74-1.66,3.51c.52,2.26.37,4.87-2.71,4.62-2.76-.23-.52-2.49-.65-3.77-.26-2.52-.92-4.72-3.4-5.61s-5.29-1-7.47,1.07a5,5,0,0,0-1,6.42c1,1.82,1.17,2.94-.26,4.6a2.44,2.44,0,0,0,.56,3.54c.8.55,2.3,1.24,2.68.45C619.16,81.15,621.9,83.3,623.81,82.88Zm-1.6,23.4v-.12c1.49,0,3,0,4.48,0,7.44-.13,9.1-3,5.41-9.62-.69-1.24-1.14-1.91.43-2.61,1.32-.6,1.67-1.49.53-2.67-.94-1-1.31-3.16-3.29-2.19-3.84,1.88-7.84.61-11.75,1-1.67.15-4.1-1.17-4.19,2.4-.09,3.41,2.07,2.7,3.94,2.7,2.66,0,5.32,0,8-.14,2.34-.14,3.31.89,3.48,3.13.18,2.59-1.45,3.13-3.44,3.13-3.15,0-6.31-.1-9.46-.27-2.27-.12-2.92.81-2.52,3,.32,1.78.33,3.22,3,2.4C618.43,105.86,620.39,106.28,622.21,106.28Zm.85,39.56c-7.41,0-10.63,3.79-8.86,10.61.44,1.7.85,3.92,3.34,3.51,3.13-.51.75-2.49.66-3.73-.16-2.39.21-4.79,2.79-5,3.7-.33,1.3,2.85,1.87,4.35.65,1.69-1,4.12,1.41,5.27,4.4,2.08,9.9-1.56,9.84-6.42C634.05,148.89,630.13,145.85,623.06,145.84Zm1-83.67v.17a50.59,50.59,0,0,1,7,.07c2.06.29,3.1.17,3.2-2.27S633.37,57,631,57.06c-4.65.14-9.32.15-14-.05-2.31-.1-3.24.35-3.22,2.92s1.46,2.34,3.19,2.27C619.35,62.09,621.68,62.17,624,62.17Zm0,72.67v-.15a48.64,48.64,0,0,1-6.94-.08c-2.08-.3-3.07-.1-3.17,2.29s.55,3.17,3,3.06c4.8-.2,9.61-.06,14.42,0,1.65,0,2.85,0,2.86-2.26,0-2.07-.51-3.05-2.76-2.91C629,135,626.45,134.84,624,134.84Zm20.76-91.29c-.43,1,.13,2.64,1.93,3.73,1.05.64,1.77,2.61,3,1.87,1.69-1,.63-2.61-.19-3.87s-1.87-2.6-.55-4.42c.95-1.31,3-3.44.57-4.49-1.55-.68-3.21,1.85-4.4,3.32C644.62,40.32,644.89,41.59,644.73,43.55Zm-1.62,92.88c0-.94-1.21-1.78-2.74-1.82a2.25,2.25,0,0,0-2.43,2.45c0,1.68.59,2.89,2.44,3S643,139.13,643.11,136.43Zm0-76.53c-.18-1.71-1.1-2.83-2.84-2.79-1.56,0-2.27,1.17-2.32,2.67-.05,1.75.84,3,2.53,3.07S643,61.61,643.11,59.9Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M657.07,245.1V444.9c-5.37-.2-10.8.92-16.11-.69a3.28,3.28,0,0,0,2-2.06,2.74,2.74,0,0,0-1.23-3.41,2.05,2.05,0,0,0-2.69.05c-2,1.78-1,3.51.09,5.24-4.25,2.09-8.76.64-13.14.9s-9-.19-13.4.14c-3.93.29-5.06-1.37-4.6-4.88,1.35-.31,2.93-.4,3.76.63,3.47,4.3,8.18,2.55,12.47,2.82,2.31.14,4.64,0,6.94.2,2.05.19,3.06-.25,3-2.58,0-2.08-.63-3-2.84-2.95-2.79.1-5.54.47-8.38.38a90.47,90.47,0,0,1-15.83-2.41q-.06-52.21-.12-104.43c0-27.15.07-54.3-.08-81.45,0-4,.8-5.57,5.17-5.49C627.09,245.2,642.08,245.07,657.07,245.1Zm-43.06,13c-.65,3.81-.06,6,3.94,6.21,2.52.14,4.59,1.27,4,4.71-.44,2.76,1,6.31-3.79,6.42a21.11,21.11,0,0,0-2.4.61c-3,.37-2,2.55-1.87,4.21.24,2.91,2,1.18,3.22.91A125.51,125.51,0,0,0,638.26,274c1.56-.67,3.45-1,3.28-3.63-.15-2.43-1.44-3.46-3.37-4.27A163.69,163.69,0,0,0,614,258.05Zm8.9,102.79c-8.63-.11-10.36,2.21-7.19,9.85.44,1.06.72,1.78-.3,2.54-1.3,1-1.46,1.88-.26,3.24s2.14,1.53,3.8.72a15.27,15.27,0,0,1,7.33-1c5,.21,10,.33,14.94.52,1.57.06,3,.23,2.89-2.14-.13-2-.21-3.69-2.94-3.45-1.65.14-3.33,0-5,.05-1.35.07-1.84-.24-2.16-1.8C632.67,362.62,630.29,360.93,622.91,360.84Zm-.85-57.77V303c2.16,0,4.33.13,6.47,0,5.06-.37,7-3.87,4.56-8.28-1-1.75-3-3.14.3-4.79,1.06-.54-1.92-4.86-3.21-4.19-4.47,2.32-9.14.93-13.7,1.19-1.84.1-2.64.49-2.62,2.5s.49,2.72,2.5,2.63c3-.13,6,0,9-.09,2.33-.1,3.89.41,3.9,3.14,0,2.94-2,3-4.08,3-3,0-6,0-9-.13-1.8-.07-2.89.26-2.42,2.47.35,1.62.12,3.35,2.83,2.72C618.33,302.74,620.23,303.07,622.06,303.07Zm0,129V432h4c8-.07,9.92-3.2,5.91-10.08-.87-1.5-.57-1.86.66-2.4,1.47-.64,1.53-1.67.47-2.66s-1.18-3.28-3.19-2.21c-4.28,2.28-8.8,1-13.22,1.15-1.65,0-2.87-.05-2.79,2.23.07,1.89.17,3.18,2.62,3,3-.21,6,0,9-.15,2-.06,3.68.16,3.77,2.73s-1.38,3.48-3.77,3.4c-3.16-.09-6.32-.12-9.47-.15-1.44,0-2.74.15-2.2,2.19.34,1.32-.18,3.17,2.26,3C618,431.93,620,432,622,432Zm3.68-82.29c.19-1.32.38-2.29.47-3.27.25-2.7-.39-5.21-3.11-6.17-2.51-.87-5.34-1.15-7.54.95a5,5,0,0,0-.78,6.82c1.34,2,0,2.93-.61,4.36-.42,1-.64,2.46.39,3.23.7.52,2.56.8,2.71.53,2-3.57,5-1.64,7.53-1.52,7.81.36,10.9-3.21,9-10.72-.29-1.17,0-3.33-2.6-2.5-1.82.59-2.12,1.4-1.56,3.25C630.45,347.46,629.88,349.71,625.71,349.75ZM614,402.39a6.54,6.54,0,0,0,0,1c.4,2.39.28,5.82,3.61,5.42,3.7-.43.15-3,.49-4.61.43-2.1.77-4.29,3.3-4.11,2.89.21,1.18,2.8,1.53,4.29.49,2.15-1.25,5.39,2.93,5.56,3.54.15,6.85-.52,8-4.35a7.53,7.53,0,0,0-2.52-8.56c-4-3.09-8.59-3.38-13.21-1.79C614.85,396.34,613.73,399.07,614,402.39ZM641,315.72c-1.08-4.41-6.83-3.74-8.13-7.64,0,0-1.61.22-1.65.48-.69,3.84-3.35,2.1-5.35,1.89-3-.32-6-.49-8.86.54-3.54,1.26-3.6,4-2.69,6.93.45,1.44,2,1.54,3.34,1.76.84.14,1.16-.42,1-1.18-.59-3.88,2.45-3.78,4.46-3.32,2.56.59,6.65-2.42,7.59,2.76.35,1.94,2.76,2.52,2.9,1.17C634.27,313.72,638.17,316.92,641,315.72Zm-7.27,20.07c.37-1.88-.72-3-1.79-4-1.25-1.12-1.08-1.82.34-2.37,1.74-.69,1.83-1.74.66-3-.9-1-1.2-2.95-3.37-2-4.1,1.8-8.37,1.68-12.7.94-2-.33-3.1.34-3,2.67,0,1.94.23,3.18,2.66,2.94,2.64-.27,5.31-.26,8-.32,1.52,0,3.35-.07,3.42,2C628.06,337.4,631.15,336,633.77,335.79ZM624,388.66v.11c2.32,0,4.63-.08,6.94,0,1.73.08,3.27.38,3.29-2.25,0-2.26-.58-3.63-3-3.17-4.78.89-9.53,0-14.29-.2-2.11-.12-2.93.38-3,2.62-.07,2.48.8,3.16,3.17,2.92S621.64,388.66,624,388.66Zm16.34.33c1.89,0,2.7-1,2.79-2.76a2.66,2.66,0,0,0-2.66-3,2.37,2.37,0,0,0-2.47,2.53C637.87,387.49,638.53,388.67,640.29,389Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M32.72,1062.51c0-3.66,0-7.31,0-11,0-1.38-.09-2.62,2-2.6,1.9,0,2,1,2.12,2.52.18,2.75-1.36,6.59.7,8s5.77.28,8.7.64c3.88.48,5.48-.85,4.83-4.81-.21-1.29,0-2.66-.05-4-.12-1.7.53-2.38,2.27-2.32s1.78,1,1.78,2.3c0,7.48,0,15,0,22.43,0,1.64-.43,2.43-2.23,2.37-1.64-.06-1.87-1-1.83-2.26,0-1.16,0-2.32,0-3.48,0-7.28,0-7.28-7.25-7.28-6.85,0-6.8,0-7,9,0,1.49,1.21,4-2,4s-1.8-2.58-1.9-4C32.57,1068.83,32.72,1065.66,32.72,1062.51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1160.17,1044.67c1.21-1.38,3.87-2.68,1.62-4.55-2.6-2.14-6-1.72-8.87-.28-2,1-2.6,3,.25,4.79-2.24.36-4.47,1.33-5.66-.53-1-1.5.71-3.06,2-4.18.92-.83,1.77-1.45.16-2.48-.46-.29-.94-1.5-.77-1.68,3.49-3.64,0-6.67-.63-10-.67-3.5,2.89-7.32,7-7.66,3.57-.31,7.19-.11,10.79-.09.72,0,1.78-.26,1.85,1,.05.87-.34,1.89-1.24,1.86-2.73-.1-2.54,1-2.18,3.27.62,4-2.64,7.33-7.2,7.87-2,.23-4.69,0-4.34,2.66.31,2.37,3,1.08,4.7,1.31,1.31.18,2.71-.15,4,.15,2.77.66,5,2,4.57,5.41C1165.63,1045,1163.33,1045.59,1160.17,1044.67Zm.8-20c-.63-2.24-2-3.77-4.79-3.64s-4.4,1.5-4.21,4.29c.17,2.51,1.93,3.67,4.37,3.7C1159.05,1029,1160.58,1027.65,1161,1024.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M348.88,1044.66c1.63-1.35,3.77-2.79,1.76-4.5-2.56-2.19-6-1.76-8.82-.32-2,1-2.89,2.92.41,4.89-2.53.21-4.76,1.24-5.91-.61-.94-1.52.69-3.09,2-4.16s1.27-1.73,0-2.64c-.24-.17-.53-.74-.45-.83,3.61-4.26-1.07-8-.73-11.93.32-3.76,3.13-6,6.65-6.41,3.71-.47,7.51-.16,11.28-.15.75,0,1.82-.14,1.65,1.13-.1.82-.48,1.76-1.45,1.78-1.69,0-2.49.09-2.21,2.42.62,5-2.11,8.07-7.23,8.64-1.88.21-4.28.08-4.11,2.43.19,2.66,2.86,1.29,4.46,1.54,1.3.19,2.69-.13,4,.12,2.82.54,5.16,1.89,4.87,5.21S352.49,1045.64,348.88,1044.66Zm1-19.7c-.45-2.69-2-4.06-4.78-4-2.5,0-4.24,1.21-4.34,3.81-.1,2.84,1.65,4.22,4.38,4.29S349.48,1027.76,349.87,1025Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M940.8,1044.72c1.07-1.41,3.61-2.67,1.65-4.47-2.54-2.34-6-1.77-8.83-.49-2.24,1-2.54,2.93-.26,4.9-1.89.39-4.08,1.18-5.12-.22-1.27-1.71.35-3.43,1.8-4.59,1.28-1,1-1.67-.07-2.58-.45-.38-.92-1.57-.77-1.7,3.74-3.34.23-6.25-.35-9.39-.76-4.09,2.78-7.87,7.44-8.15,3.24-.2,6.51-.09,9.77,0,.82,0,2.18-.56,2.19,1.06,0,1-.41,2-1.74,1.9-1.66-.1-2,.22-1.76,2.19.7,5.19-2,8.24-7.55,8.82-2,.21-4.21.31-3.91,2.64.27,2.16,2.71,1.21,4.24,1.34a44.26,44.26,0,0,1,4.48.13c2.63.52,4.89,1.94,4.74,4.89C946.58,1044.14,944.67,1045.74,940.8,1044.72Zm.48-19.81c-.31-2.73-2-4-4.7-3.9-2.53.09-4.25,1.46-4.18,4,.07,2.74,2,4.09,4.7,4C939.61,1028.89,941.11,1027.63,941.28,1024.91Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1014.75,1023.22c0,4.15,0,8.3,0,12.45,0,.76.29,1.74-.73,2.14s-2.16.35-2.52-.77c-.7-2.21-1.67-1.2-2.83-.5-3.24,2-6.62,2.47-9.63-.21-3.33-3-3.94-6.93-2.56-11,1.58-4.67,5.06-7.64,10.08-7.26,4.13.32,4.81-1.38,4.36-4.75-.13-1,0-2,0-3-.11-1.55.18-2.52,2.1-2.42,1.7.08,1.78,1.06,1.78,2.32C1014.74,1014.58,1014.75,1018.9,1014.75,1023.22Zm-3.86,5c-.13-3.52,1.25-7.51-4.34-7.23-4.08.21-6.57,2.75-6.52,7.12.05,3.66,1.24,6.9,5.48,6.8S1011.6,1032.05,1010.89,1028.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M477,1068.45c0,6.7-.36,7.1-6.51,7.54s-11.87-.4-15-6.46a13.21,13.21,0,0,1,1.37-15c4.31-5.54,10.36-6.1,16.7-5.32,1.39.17,3.2.66,2.41,2.84-.85,2.34-2.46.78-3.69.49-6.72-1.61-12.25,1.13-13.9,7a10.9,10.9,0,0,0,6.94,13.23c5.13,1.58,7.67.1,8-4.28.14-1.81-1.64-5.22,1.79-5.13C478.77,1063.41,476,1067.05,477,1068.45Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M647.76,1075.88c-8,.91-7.94-7.18-12.91-9.61-1.36,2.23-.49,4.73-.73,7-.13,1.23.4,2.72-1.78,2.75-1.9,0-2.11-1-2.11-2.51q0-12.46,0-24.93c0-1.36-.12-2.63,1.93-2.68s2,1.2,2,2.58c0,5.28,0,10.57,0,16.25,5.36-1.65,5.67-9.36,12-8.77.06.44.21.78.11,1-1.77,3.3-7.24,5-5.9,9.25C641.38,1069.59,644.82,1072.22,647.76,1075.88Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1234,1023.26c0,4.14,0,8.29,0,12.43,0,2.45-1.85,3.39-2.82,1.67-1.43-2.54-2.24-1.33-3.68-.54-2.94,1.62-6,2-8.81-.21a9.49,9.49,0,0,1-3.42-9.33c.84-5.65,5-9.34,11.08-9.2,3.1.06,4.22-.73,3.76-3.8-.2-1.29,0-2.65-.05-4-.11-1.66.48-2.42,2.24-2.35s1.69,1.18,1.68,2.37Zm-3.87,4.91c-.21-3.59,1.22-7.41-4.11-7.2-4,.15-6.77,2.71-6.71,7,0,3.54,1.09,6.94,5.33,7C1229.35,1034.92,1230.81,1031.82,1230.14,1028.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M405,1023.18c0,4.14,0,8.29,0,12.43,0,.9.36,2.1-1.09,2.32-.81.12-1.71.2-2-.85-.87-2.81-2.16-.85-3.27-.27-3,1.55-6,2-8.83-.15a9.44,9.44,0,0,1-3.56-8.81c.51-5.66,4.86-10,10.58-9.73,4.15.23,4.77-1.41,4.32-4.75a20.5,20.5,0,0,1,0-2.48c0-1.52-.22-3,2.14-2.94,2.14.09,1.74,1.55,1.75,2.8C405,1014.89,405,1019,405,1023.18Zm-3.9,4.36c-.24-2.85,1.35-6.74-4-6.57-4,.12-6.8,2.66-6.77,6.91,0,3.54,1,6.73,5.28,7.08C399.32,1035.26,401.1,1032.7,401.11,1027.54Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M730,1031.48c0-3.65,0-7.31,0-11,0-1.39.88-3.53,1.79-2.34,2.55,3.35,4.25.31,6.32-.07,4.16-.76,7.59.29,9.59,4.33a11,11,0,0,1-2.86,13.12,8.63,8.63,0,0,1-3.93,2c-4,.4-8.46-.2-7.13,6.3.25,1.22-1.36,1.08-2.31,1.09-1.44,0-1.46-1-1.46-2Zm3.9-2.7c.5,2.38-1.76,6.57,3.89,6.25a7,7,0,0,0,6.89-7.44c-.21-3.34-1.39-6.26-5.36-6.56C735.63,1020.76,733.9,1023.26,733.89,1028.78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M904.24,1011.51c-3,8-6.08,15.84-9,23.78-.64,1.75-1.26,2.86-3.41,2.8s-2.42-1.24-3-2.72c-3-7.95-6-15.87-9-23.87,3.16-1.39,4.43-.16,5.36,2.84,2,6.43,4.36,12.74,7,20.33,2.69-7.82,4.91-14.36,7.2-20.88C900.37,1011.09,900.44,1011.11,904.24,1011.51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1099.19,1011.38c3-.92,4.36-.25,5.21,2.51,2,6.65,4.48,13.18,7.11,20.77,2.6-7.43,4.88-14,7.2-20.57.41-1.17.26-2.85,2-3.06a5.08,5.08,0,0,1,2.37.38c.15.06,0,1.16-.16,1.7-2.87,7.62-5.82,15.2-8.62,22.84a2.75,2.75,0,0,1-2.8,2.14c-2.24.18-2.79-1.18-3.4-2.81C1105.18,1027.34,1102.2,1019.42,1099.19,1011.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M678.35,1011a9.39,9.39,0,0,1,2.46.15c1.28.37,3.29.18,2.88,2.49-.5,2.88-2.43,1.53-3.77,1a10.9,10.9,0,0,0-4.39-.64,3.67,3.67,0,0,0-3.76,2.68,3.52,3.52,0,0,0,1.75,4.26,46.36,46.36,0,0,0,5.8,2.82c3.07,1.33,5.76,3,5.38,6.88-.4,4-3.25,6.2-6.8,7.08a15.05,15.05,0,0,1-8.83-.53c-1.48-.53-2.39-.92-2-2.67.51-2.36,1.78-1.18,3-.73,2.18.84,4.39,1.56,6.78,1.14a4.53,4.53,0,0,0,4-3.31c.56-2.15-.79-3.53-2.44-4.44s-3.66-1.53-5.47-2.34c-3.55-1.59-5.81-4.1-4.83-8.22s4-5.43,7.82-5.65C676.49,1011,677.16,1011,678.35,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M145.09,1046c2.11-.31,3.37,0,3.26,2.74-.22,5.42-.07,10.85-.07,16.51,5.12-2.19,5.59-9.78,12.35-9.23a6,6,0,0,1-.39,1.17c-1.93,3-6.61,4.92-6,8.48.52,3,4,5.53,6.13,8.27.39.5.7,1.06,1.26,1.93-8,1-7.79-7.91-13.36-10.13,0,2.62-.19,5.08.05,7.5.27,2.74-1.13,3-3.24,2.74A293.92,293.92,0,0,1,145.09,1046Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M474.09,1011c2.83,0,5.66-.13,8.48,0,5.1.24,8.42,3.26,8.75,7.77a9.59,9.59,0,0,1-7.79,10.07c-1.07.18-2.62.69-3.06-.68-.56-1.73.84-2,2.3-2.33,4.1-1,5.05-4,4.29-7.69s-3.79-4-6.94-4.2c-2.33-.11-2.73,1-2.7,3,.1,6-.12,12,.1,18,.1,2.8-.94,3.56-3.43,3.11A238.07,238.07,0,0,1,474.09,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1685.65,1056c5.86-.06,7,1.46,7.61,6.93.39,3.48-2.79,8.06,2.53,10.45.53.24.3,1.17-.3,1.66-1.43,1.18-3.52,1.75-4.51.47-1.63-2.09-2.76-1.35-4.45-.45-3.38,1.8-6.55,1.64-8.35-2.21-1.55-3.33.35-6.87,4.24-8.27a24.82,24.82,0,0,1,3.9-.67c1.15-.22,2.9.51,2.85-1.72a3,3,0,0,0-2.68-3.1,7.62,7.62,0,0,0-4.82.87c-.81.37-1.91,1.12-2.48-.31s0-2.19,1.38-2.65C1682.31,1056.42,1684,1055.72,1685.65,1056Zm-.17,10.35c-.94.26-3.6.23-3.57,3.55,0,2,.94,3.32,3,3.06,2.49-.32,4.28-1.51,4.36-4.45C1689.34,1066.53,1688.72,1065.68,1685.48,1066.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1077.79,1070c.38-3.77,3.21-5.27,7-6,1.56-.31,4.8,1.35,4.29-2.18s-3.41-3-6-2.39a11.65,11.65,0,0,0-1.84.75c-.78.33-1.63.68-2-.43s-.36-2,.85-2.49c3.32-1.33,6.73-1.92,10.16-.56s2.46,4.54,3,7.24c.63,3.17-2.65,7.47,2.53,9.48.59.23.34,1.14-.22,1.65-1.23,1.12-3.2,1.72-4.08.74-2.09-2.31-3.6-1.23-5.76-.25C1081.49,1077.4,1077.68,1074.8,1077.79,1070Zm7.9-3.66c-.91.24-3.6.1-3.77,3.36-.1,1.89.64,3.44,2.77,3.29,2.77-.2,4.59-1.55,4.59-4.71C1089.28,1066.48,1088.71,1065.75,1085.69,1066.29Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M221,1056c5.56,0,6.72,1.61,7.29,6.84.39,3.64-2.62,8.34,2.7,10.88.47.22-.2,1.14-.76,1.56-1.34,1-3.27,1.39-4.13.31-1.53-1.93-2.61-1.63-4.42-.58-3.32,1.91-6.52,1.78-8.41-2-1.62-3.29.23-6.86,4.1-8.32a31.1,31.1,0,0,1,3.38-.68c1.37-.34,3.81.77,3.43-2.14-.28-2.24-2-3-4-2.75a27.15,27.15,0,0,0-3.32.88c-1,.24-2.25,1.37-2.71-.66-.35-1.56.67-1.91,1.86-2.39A11.5,11.5,0,0,1,221,1056Zm-.47,10.36c-.94.26-3.6.23-3.57,3.55,0,2,.94,3.32,3,3.06,2.49-.32,4.28-1.51,4.36-4.45C224.34,1066.53,223.72,1065.68,220.48,1066.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1178.87,1018c5.84-.05,7,1.42,7.52,6.93.34,3.65-2.46,8.28,2.72,10.85.47.23-.29,1.12-.84,1.52-1.34,1-3.25,1.36-4.1.24-1.51-2-2.58-1.55-4.36-.53-3.29,1.89-6.46,1.75-8.4-2-1.67-3.22.1-6.79,4-8.3a28.4,28.4,0,0,1,3.84-.79c1.25-.29,3.4.68,3.17-1.89-.17-1.89-1.44-2.88-3.35-3a8,8,0,0,0-3.82.8c-.89.38-2.14,1.52-2.86-.26s.6-2.17,1.92-2.71A10.62,10.62,0,0,1,1178.87,1018Zm-.06,10.23c-1,.25-3.84.21-3.84,3.71,0,1.9,1,3.27,3,3.08,2.67-.24,4.58-1.5,4.76-4.56C1182.82,1028.48,1182,1027.7,1178.81,1028.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M733.85,1059.06a7.2,7.2,0,0,1-1.79.51c-1.09.1-2.32,2.09-3.27,0s.91-2.46,2.28-2.83c9.44-2.56,12.31,1,11.87,7.71-.2,3-2.42,7.33,2.61,9.25.43.17-.29,1.11-.81,1.53-1.15.93-3.1,1.38-3.67.6-2.21-3-4-1-6.18-.16-2.85,1-5.64.58-7.11-2.64-1.41-3.06-.33-5.54,2.14-7.44a9.58,9.58,0,0,1,5.09-1.69c1.36-.13,3.87,1,3.71-1.81C738.59,1059.7,736.73,1058.83,733.85,1059.06Zm1.26,7.15c-1.05.36-4,.29-3.84,3.79.06,1.82,1.07,3.29,3.11,3,2.6-.36,4.59-1.49,4.65-4.67C739.07,1066.26,738.18,1065.72,735.11,1066.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1454.87,1056c5.84,0,7,1.42,7.52,6.93.34,3.66-2.44,8.28,2.71,10.86.48.24-.29,1.12-.84,1.51-1.33,1-3.25,1.36-4.09.24-1.52-2-2.6-1.53-4.37-.52-3.3,1.88-6.47,1.73-8.4-2-1.66-3.23.11-6.78,4-8.29a28.4,28.4,0,0,1,3.84-.79c1.25-.29,3.4.67,3.16-1.89-.18-1.89-1.44-2.88-3.36-3a8.09,8.09,0,0,0-3.82.8c-.89.38-2.14,1.52-2.85-.27s.61-2.16,1.92-2.7A10.5,10.5,0,0,1,1454.87,1056Zm.49,10.06c-1.88.45-4.6.62-4.38,4.12.12,1.93,1.23,3.15,3.21,2.84,2.63-.41,4.46-1.72,4.53-4.81C1458.77,1065.94,1457.49,1065.86,1455.36,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1275.3,1056c5.47,0,6.51,1.53,7.13,7.12.38,3.44-2.82,8.08,2.63,10.36.35.14.07,1.14-.53,1.66-1.13,1-3.07,1.46-3.64.74-2.35-3-4.25-1-6.58-.14-2.65,1-5.38.46-6.77-2.46a5.7,5.7,0,0,1,1.44-7.21,9.71,9.71,0,0,1,6.43-2.19c1.15,0,3,.56,3-1.55a3.11,3.11,0,0,0-3.07-3.27,7,7,0,0,0-3.85.64c-1,.44-2.45,1.86-3.18-.33-.64-1.89,1-2,2.15-2.57A10.7,10.7,0,0,1,1275.3,1056Zm3.52,11.44c.16-.94-.79-1.7-2.66-1.43-2.44.34-5.14.45-5.18,3.9,0,1.9.91,3.27,2.94,3.12C1276.62,1072.8,1278.49,1071.44,1278.82,1067.42Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M887.9,1056c5.55,0,9.29,3.79,9.35,9.41A10.29,10.29,0,0,1,886.57,1076a9.12,9.12,0,0,1-9.44-9.4A10.61,10.61,0,0,1,887.9,1056Zm-6.67,10c.54,3.67,1.83,6.79,6.18,7,3.51.16,5.89-3,5.69-7.16s-2.87-7.08-6.3-6.77C882.65,1059.41,881.5,1062.35,881.23,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M110.36,1076c-5.65.08-9.41-3.51-9.58-9.14A10.26,10.26,0,0,1,111.15,1056a9.23,9.23,0,0,1,9.72,9.63A10.59,10.59,0,0,1,110.36,1076Zm-5.51-9.83c.36,3.48,1.62,6.69,6,6.73,4.16,0,5.64-3,5.8-6.58.2-4.18-2.79-7.61-6.31-7.32C106.23,1059.38,104.93,1062.19,104.85,1066.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1038.77,1072.88a10.6,10.6,0,0,1-13.41,1.56c-3.59-2.5-4.87-8.2-2.84-12.64s7.15-7.07,11.53-5.61a7.16,7.16,0,0,1,5,6.73c.18,2.16-.12,3.52-2.82,3.29a60.22,60.22,0,0,0-7.48,0c-1,0-2.51-.65-2.88,1a3.63,3.63,0,0,0,1.07,3.19c2.66,3.1,6.13,2.85,9.64,2.29C1037.25,1072.61,1037.8,1072.08,1038.77,1072.88Zm-8-8.51c1-1.85,4.17,1.5,4.35-1.83.13-2.33-2-3.67-4.51-3.52s-4.66,1.33-4.51,3.65C1026.21,1065.3,1029,1063.23,1030.72,1064.37Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M762.17,1038c-5.6,0-9.33-3.68-9.41-9.33A10.28,10.28,0,0,1,763.34,1018a9.19,9.19,0,0,1,9.53,9.33A10.6,10.6,0,0,1,762.17,1038Zm6.54-9.14c0-4.54-2.59-7.88-5.9-7.85-4.12,0-5.78,2.6-5.91,6.41-.14,4.39,2.43,7.66,6,7.52C767.12,1034.81,768.28,1031.84,768.71,1028.89Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1364.19,1072.3c-3.67,4.24-9.74,5-13.77,2.18-3.77-2.58-5-8.52-2.69-13s7.49-6.84,11.72-5.11c3.27,1.34,4.67,4,4.69,7.53,0,1.69-.52,2.4-2.28,2.34-2.66-.1-5.33-.08-8,0-1,0-2.51-.63-2.94,1a3.51,3.51,0,0,0,1,3.2C1355.17,1074.15,1359.34,1073,1364.19,1072.3Zm-13.5-8.33a42.1,42.1,0,0,0,5.78-.06c1.28-.19,3.73,1.31,3.63-1.44-.09-2.16-1.84-3.46-4.13-3.45C1353.18,1059,1351.32,1060.3,1350.69,1064Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M173.89,1076c-5.57,0-9.27-3.77-9.31-9.44A10.3,10.3,0,0,1,175.29,1056a9.18,9.18,0,0,1,9.42,9.43A10.6,10.6,0,0,1,173.89,1076Zm6.69-9.86c-.56-3.79-1.78-7-6.17-7.14-3.54-.15-5.83,2.87-5.65,7.15s2.75,7.09,6.22,6.79C179.15,1072.61,180.2,1069.59,180.58,1066.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1201,1076c-5.55,0-9.25-3.82-9.27-9.47a10.28,10.28,0,0,1,10.74-10.59,9.21,9.21,0,0,1,9.39,9.47A10.61,10.61,0,0,1,1201,1076Zm6.76-9.83c-.56-3.73-1.75-6.92-6.13-7.17-3.56-.2-5.91,2.81-5.75,7.08s2.73,7.11,6.17,6.86C1206.25,1072.68,1207.36,1069.69,1207.78,1066.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M71.58,1056a9.1,9.1,0,0,1,9.41,9.4A10.5,10.5,0,0,1,70.26,1076c-5.56,0-9.3-3.78-9.35-9.4A10.34,10.34,0,0,1,71.58,1056ZM77,1066.38c-.47-3.76-1.65-7.09-6-7.3-4.11-.2-5.81,2.56-6,6.35-.18,4.3,2.48,7.68,6,7.54C75.25,1072.82,76.46,1069.88,77,1066.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M520.1,1038c-5.5-.07-9.22-3.93-9.2-9.55A10.37,10.37,0,0,1,521.73,1018a9.14,9.14,0,0,1,9.27,9.55A10.52,10.52,0,0,1,520.1,1038Zm6.87-9.82c-.54-3.72-1.76-6.88-6.11-7.17-3.56-.24-6,2.82-5.84,7s2.77,7.13,6.17,6.9C525.36,1034.7,526.53,1031.75,527,1028.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M418.7,1018c5.44,0,6.75,1.66,7.32,7,.38,3.6-2.66,8.27,2.7,10.75.44.21-.33,1.12-.88,1.5-1.33.92-3.3,1.43-4.11.29-1.78-2.52-3.15-1.1-4.91-.27-3,1.44-6.07,1.32-7.7-1.94-1.73-3.48-.53-6.43,2.93-8.35a11.24,11.24,0,0,1,4.77-1.12c1.26-.11,3.39.69,3.08-1.9-.22-1.9-1.52-2.84-3.41-3a9.17,9.17,0,0,0-3.84.78c-.77.29-2.07,1.84-2.75-.28-.57-1.79.58-2.14,2-2.72A12.5,12.5,0,0,1,418.7,1018Zm1,10c-2.24.57-5.13.44-5.17,3.89,0,1.81.93,3.32,3,3.07,2.38-.3,4.37-1.3,4.47-4.21C422.05,1029.11,422,1027.67,419.69,1028Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1502,1056c5.12,0,6.77,1.7,6.87,6.86a76.43,76.43,0,0,1,.07,9c-.19,1.93,5,.42,2,3.3-1.75,1.67-3.85,1.43-5.56-.76-1.11-1.42-2,.27-2.92.7-3.4,1.62-6.5,1.82-8.48-2-1.77-3.36.2-7.18,4.25-8.6.92-.32,2-.23,2.91-.53,1.41-.46,4.28,1.07,3.69-2.26-.43-2.43-2.49-2.61-4.64-2.72-1.82-.09-4.62,3.16-5.07.2-.54-3.47,3.59-2.58,5.9-3.16A4.18,4.18,0,0,1,1502,1056Zm-.23,10.13c-1.83.42-4.34.7-4.27,3.82,0,1.81,1,3.31,3.06,3,2.62-.37,4.45-1.61,4.46-4.76C1505.05,1065.84,1503.77,1065.93,1501.79,1066.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1585.25,1056c6,0,7.14,1.68,7.8,7.12.41,3.42-2.87,8,2.53,10.31.57.24.18,1.18-.4,1.62-1.43,1.1-3.38,1.76-4.53.47-1.63-1.82-2.65-1.45-4.48-.44-3.29,1.83-6.64,1.73-8.25-2.25-1.46-3.64.08-6.34,3.66-8,1.44-.68,2.88-.61,4.33-.89,1.1-.21,2.94.73,3-1.49,0-2-1.17-3-3-3.33a8,8,0,0,0-4.33.76c-.76.32-2.1,1.77-2.69-.39-.41-1.46.25-2.07,1.58-2.5C1582.21,1056.34,1583.9,1055.67,1585.25,1056Zm3.74,12c.36-2.11-1.14-2.17-2.72-1.94-2.31.33-4.75.71-4.75,3.8,0,1.81.93,3.32,3,3.06C1587.16,1072.61,1589.15,1071.36,1589,1068Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M959.18,1018c6,0,7.28,1.65,7.84,7,.37,3.6-2.52,8.07,2.57,11,.68.38-2.93,2.75-3.94,1.84-2.71-2.43-4.71-.85-7.22,0a4.88,4.88,0,0,1-6.35-2.48,5.75,5.75,0,0,1,1.36-7.24c1.79-1.66,4-2.11,6.4-2.25,1.08-.06,2.95.8,3.06-1.4.11-2-1.1-3.07-2.93-3.39a7.64,7.64,0,0,0-4.33.73c-.75.3-2.08,1.83-2.74-.3-.56-1.81.58-2.17,2-2.7A10.31,10.31,0,0,1,959.18,1018Zm1.51,10c-2.37.42-5.13.49-5.16,3.89,0,1.8,1,3.31,3,3,2.38-.32,4.35-1.33,4.45-4.25C963.06,1029,963,1027.67,960.69,1028Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M565.08,1056c6,0,7.33,1.64,7.95,7,.42,3.59-2.74,8.29,2.68,10.75.42.19-.22,1.15-.81,1.53-1.51,1-3.47,1.51-4.53.09-1.52-2-2.53-1.08-4-.29-3.32,1.73-6.47,1.8-8.39-2.07-1.6-3.24.15-6.81,4-8.28a32.21,32.21,0,0,1,3.84-.77c1.22-.31,3.39.77,3.16-1.86-.18-1.92-1.47-2.84-3.34-3a9.18,9.18,0,0,0-4.31,1c-.73.29-1.82,1.32-2.34-.38a1.78,1.78,0,0,1,1.4-2.6C562.06,1056.46,563.72,1055.59,565.08,1056Zm1.84,10.06c-3-.12-5.54,1.61-5.42,3.8.1,1.81.91,3.32,3,3.1,2.41-.26,4.37-1.3,4.51-4.17C569.06,1067.2,569.12,1065.67,566.92,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M668.91,1071.85c-4.41,4.7-10.48,5.33-14.4,2.56-3.63-2.56-4.86-8.13-2.79-12.62s7-7.08,11.52-5.59c3.88,1.3,5.14,4.38,5,8.24,0,1.71-1.14,1.74-2.38,1.73-2.5,0-5-.1-7.49,0-1.16.06-2.85-.86-3.35,1-.37,1.42.48,2.62,1.42,3.57,2.5,2.52,5.67,2.41,8.86,2C666.07,1072.73,666.8,1072.44,668.91,1071.85ZM664.5,1064c-1.52-5.09-5.2-6.49-8.24-3.44-.71.72-1.45,1.53-1.21,2.58.33,1.39,1.59.81,2.46.84C659.8,1064,662.1,1064,664.5,1064Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M491.2,1056c5.58,0,6.74,1.54,7.38,6.65.47,3.63-2.77,8.36,2.65,10.89.38.17,0,1.17-.6,1.64-1.31,1-3.18,1.52-4.1.48-1.65-1.86-2.79-1.73-4.76-.56-3.08,1.82-6.25,1.65-8-1.87s-.26-6.36,3.09-8.26a11.09,11.09,0,0,1,4.78-1.07c1.15-.11,3,.55,3-1.56a3.19,3.19,0,0,0-3.08-3.28,7.41,7.41,0,0,0-4.31.84c-.92.45-2.12,1.3-2.73-.53-.54-1.62.54-1.95,1.68-2.42A10.85,10.85,0,0,1,491.2,1056Zm3.64,12.69c.26-1.89-.37-2.93-2.39-2.68-2.46.3-5.15.43-5.36,3.78-.12,1.84.82,3.32,2.85,3.24C492.65,1072.9,494.55,1071.57,494.84,1068.66Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M807.71,1018c6.55-.06,7.85,1.56,8.43,6.92.39,3.62-2.67,8.33,2.7,10.83.42.19-.24,1.15-.83,1.53-1.35.9-3.18,1.4-4.14.27-1.59-1.85-2.7-1.51-4.53-.48-3.34,1.87-6.54,1.65-8.31-2.26-1.52-3.37.37-6.86,4.26-8.26,1.06-.38,2.29-.29,3.39-.62s3.38.89,3.34-1.7c0-2.26-1.55-3.2-3.64-3.18-1,0-1.93.48-2.9.51-1.17,0-2.76,2.46-3.49-.35-.6-2.3,1.59-2.15,2.84-2.61A15.22,15.22,0,0,1,807.71,1018Zm.91,10.3c-.85.21-3.56,0-3.82,3.23-.15,1.84.47,3.53,2.63,3.42,2.45-.12,4.54-1.11,4.67-4.08C812.16,1029.35,812.43,1027.64,808.62,1028.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1402.8,1056c6.09,0,7.2,1.49,7.79,7,.37,3.47-2.61,8,2.58,10.41.46.21.13,1.19-.47,1.65-1.46,1.11-3.55,1.69-4.49.34-1.61-2.29-2.71-1.22-4.33-.36-3.39,1.8-6.66,1.63-8.32-2.23-1.57-3.66.17-6.33,3.64-8.06a13,13,0,0,1,4.32-.9c1.15-.16,3,.59,3.07-1.48a3.17,3.17,0,0,0-3-3.36,7.42,7.42,0,0,0-4.31.78c-.86.4-2.08,1.48-2.79-.4-.58-1.57.39-2,1.56-2.47C1399.78,1056.28,1401.49,1055.7,1402.8,1056Zm-3.78,13.6c.14,2,.85,3.5,2.88,3.42,2.68-.12,4.68-1.3,4.94-4.36.15-1.77-.28-2.9-2.36-2.67C1402,1066.24,1399.5,1066.5,1399,1069.58Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M579,1070.28c.35-3.86,3.13-5.6,7.12-6.37,1.57-.3,4.83,1.33,4.35-2.11-.46-3.22-3.36-3.12-6-2.52a6.88,6.88,0,0,0-1.81.78c-1.06.61-1.78.49-2.27-.74a1.49,1.49,0,0,1,.8-2.07,13.5,13.5,0,0,1,10.13-.73c3.12,1.11,2.75,4,3.18,6.63.58,3.48-2.52,8,2.67,10.39.39.17,0,1.17-.62,1.63-1.32,1-3.27,1.51-4.09.45-1.88-2.43-3.26-1.21-5.2-.29C583.16,1077.31,579.21,1075,579,1070.28Zm8.08-4.13c-1.33.29-4.08.43-4,3.88,0,1.86,1.12,3.24,3.12,3,2.6-.35,4.57-1.53,4.66-4.67C590.93,1066.24,590,1065.76,587.1,1066.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1828,1056c5.27,0,6.47,1.62,7.14,6.72.47,3.6-2.89,8.38,2.67,10.83.38.16,0,1.2-.66,1.62-1.5,1-3.41,1.6-4.55.18-1.5-1.88-2.55-1.19-4.1-.35-3.34,1.81-6.53,1.83-8.42-2-1.7-3.44.39-7.23,4.47-8.57.92-.3,2-.19,2.92-.47,1.32-.41,3.83,1,3.52-2-.23-2.23-1.88-3-3.94-2.91a5.63,5.63,0,0,1-1,0c-1.72-.24-4.33,3.36-4.9-.18-.43-2.62,3.25-2.36,5.36-2.84A6.72,6.72,0,0,1,1828,1056Zm-.49,10.31c-.78.19-3.49,0-3.74,3.22-.14,1.85.49,3.53,2.65,3.41,2.46-.13,4.54-1.13,4.66-4.1C1831.16,1067.32,1831.4,1065.63,1827.53,1066.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1027.31,1018c5.76-.22,7.93,1.57,8.28,6.31.29,3.8-2.56,8.58,2.66,11.37.47.26-.22,1.16-.78,1.56-1.33.94-3.13,1.38-4.12.28-1.48-1.65-2.35-1.74-4.32-.6-3.9,2.25-7.37,1.09-8.65-2.34s.65-6.75,4.54-8.11c1.07-.37,2.28-.32,3.39-.59s3.45.73,3.26-1.78c-.15-2.08-1.6-3.19-3.75-3.11a18.44,18.44,0,0,0-2.45.31c-1.34.23-3,2.63-3.89-.19-.73-2.48,2-2.13,3.28-2.72A5.49,5.49,0,0,1,1027.31,1018Zm4.56,11.73c.41-1.79-1.13-1.93-2.73-1.74-2.48.29-5.13.64-5.05,4,.05,1.87,1.15,3.2,3.15,3C1029.9,1034.67,1031.84,1033.36,1031.87,1029.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1256.46,1034.2c-2.94,4.69-10.61,5.26-14.38,1.41-3.41-3.49-3.77-7.67-1.78-12A9.79,9.79,0,0,1,1251,1018c3.57.67,6.24,4.54,5.94,8.17-.17,2-1.33,2-2.71,2-2.66,0-5.33,0-8,0-1,0-2.26-.31-2.69.68s.15,2.3.89,3.23C1247.55,1036,1251.66,1035.26,1256.46,1034.2ZM1243.4,1026c2.54,0,5-.08,7.38,0,2.76.12,2.6-1.19,1.52-2.94a4.19,4.19,0,0,0-4.64-2A4.82,4.82,0,0,0,1243.4,1026Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1655.25,1066c0-2.66,0-5.33,0-8,0-.81-.1-1.73,1-1.93.83-.14,1.87-.19,2.1.79.78,3.4,2.22,1,3.36.41,6.22-3.17,10.41-.67,10.54,6.38.06,3.33,0,6.66,0,10,0,1.14.22,2.33-1.62,2.42s-2.15-.93-2.13-2.46c0-3.32.09-6.66,0-10-.08-2.55-.91-4.84-4-4.54-2.73.27-5.27,1.34-5.38,4.73-.1,3.16,0,6.33,0,9.49,0,1.25.39,2.74-1.78,2.76-1.94,0-2.11-1.09-2.09-2.57C1655.28,1071,1655.25,1068.48,1655.25,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M575.24,1027.78c0-1.66,0-3.33,0-5,0-4.31,0-4.31,3.77-2.38,1.21.62,1.68-.6,2.45-1,6.54-3.37,10.7-.93,10.8,6.42.05,3.33,0,6.66,0,10,0,1.31-.17,2.22-1.83,2.22s-1.94-.79-1.92-2.16c0-3.33.06-6.66,0-10-.06-2.48-.61-4.93-3.72-4.83s-5.56,1.34-5.68,4.93c-.1,3,0,6,0,9,0,1.37.58,3.17-2,3s-1.81-1.9-1.85-3.26C575.19,1032.44,575.25,1030.11,575.24,1027.78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1858.75,1066.2c0,2,0,4,0,6-.06,4.09-.13,4.19-3.65,1.89-1.52-1-2,.4-2.85.82-5.74,2.77-9.89.35-10.12-6.06-.12-3.49,0-7,0-10.47,0-1.61.38-2.47,2.2-2.41s1.73,1.12,1.73,2.35c0,3,0,6,0,9,0,2.8.18,5.8,3.89,5.62,3.39-.17,5.31-2.24,5-6-.2-2.81,0-5.64-.06-8.47,0-1.5.09-2.56,2.07-2.47,1.67.08,1.83,1,1.82,2.29C1858.73,1060.88,1858.75,1063.54,1858.75,1066.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M937.75,1066c0,1.83,0,3.66,0,5.48,0,4.07,0,4.09-3.86,2.33-1.19-.54-1.68.56-2.47,1-6,3-10.11.49-10.3-6.27-.09-3.32,0-6.65,0-10,0-1.42,0-2.62,2-2.6s1.9,1.32,1.9,2.66c0,3.33,0,6.65,0,10,.05,2.4,1,4.46,3.68,4.34s4.95-1.29,5.12-4.36c.18-3.32,0-6.65,0-10,0-1.32-.25-2.67,1.87-2.65s2,1.18,2,2.61C937.73,1061,937.75,1063.54,937.75,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1716.89,1065.75c0,2.82,0,5.65,0,8.48,0,2.13-2.14,2.32-2.52,1.44-1.58-3.63-3.22-1.09-4.85-.37-4.66,2-8.77-.25-9.2-5.48-.31-3.81,0-7.65-.09-11.48,0-1.61.39-2.45,2.22-2.39s1.66,1.18,1.66,2.35c0,2.33-.1,4.67,0,7,.17,3.11-1.11,7.51,3.94,7.56,4.62.05,5.25-3.58,5-7.46-.18-2.32,0-4.66,0-7,0-1.54.22-2.55,2.14-2.45,1.65.09,1.8,1,1.79,2.31C1716.87,1060.76,1716.89,1063.25,1716.89,1065.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M872,1066.5c0,2.49,0,5,0,7.47s-2.18,2.75-2.69,1.58c-1.3-3-2.44-1.39-4-.61-5.23,2.66-9.43.38-9.75-5.37-.21-3.81,0-7.64-.06-11.45,0-1.36.29-2.17,1.9-2.17s1.87.86,1.85,2.19c0,3.15,0,6.31,0,9.46,0,2.6.36,5.39,3.74,5.3,3.07-.09,5.29-1.62,5.1-5.32-.16-3,0-6,0-9,0-1.36-.13-2.64,1.92-2.67s2,1.17,2,2.58C872,1061.18,872,1063.84,872,1066.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M990.45,1028.47c0,2.5-.08,5,0,7.49.09,2-1.78,2.78-2.29,1.83-1.9-3.56-3.5-1.09-5.38-.28-4.18,1.79-8.3-.54-8.7-5.16-.35-4-.05-8-.13-12,0-1.6.31-2.51,2.18-2.42,1.68.09,1.75,1.11,1.75,2.36q0,5,0,10c0,2.6.84,4.85,3.89,4.61,2.62-.21,4.82-1.52,4.9-4.63s0-6.32,0-9.49c0-1.2-.54-2.75,1.67-2.84,2.52-.1,2,1.63,2,3C990.48,1023.48,990.45,1026,990.45,1028.47Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1210,1028.27c0,2,0,4,0,6,0,3.73-.09,3.78-3.46,1.73-1.45-.89-2.06.43-3,.89-5.56,2.74-9.69.5-10-5.57-.17-3.65,0-7.31,0-11,0-1.16-.14-2.31,1.66-2.39,2-.1,2.11.95,2.09,2.46-.06,3.15-.07,6.31,0,9.46.07,2.65.63,5.32,4,5,2.78-.24,5-1.6,4.83-5.09-.15-3.15,0-6.31-.05-9.46,0-1.62.4-2.46,2.21-2.4s1.72,1.13,1.72,2.35C1210,1023,1210,1025.61,1210,1028.27Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M569.2,1035c-2.49,3.81-6.5,3.49-10.18,2.76-5.24-1-7.9-7.1-6.08-12.8,1.67-5.24,7.4-8.42,12.22-6.62,3.11,1.16,4.55,3.64,4.85,6.92.18,2.07-.36,3.11-2.65,3-2.49-.13-5-.09-7.48,0-1.06,0-2.56-.67-3.1.73s.26,2.54,1.14,3.6C560,1035,563.12,1035.59,569.2,1035Zm-8-8.6c1.27-1.56,4.28,1.22,4.68-1.65.33-2.3-1.84-3.69-4.34-3.69s-4.62,1.24-4.68,3.51C556.82,1027.49,559.68,1025.17,561.23,1026.35Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1797.65,1076c-6.47,0-10.49-3.87-10.34-9.79a10.24,10.24,0,0,1,11-10.26,6.71,6.71,0,0,1,6,4.47c1.77,4.29.89,5.68-3.62,5.72-2.16,0-4.33.1-6.48,0-3.56-.19-3,1.81-1.85,3.67,2.2,3.5,5.77,3.38,9.34,3.12.84-.06,2-1.47,2.48,0s-.89,1.75-2,2.21A11,11,0,0,1,1797.65,1076Zm-1.69-11.85c1.63-.93,4.52,1.23,5-1.44.36-2.3-1.81-3.71-4.31-3.72s-4.63,1.21-4.7,3.48C1791.79,1065.51,1794.66,1063.17,1796,1064.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M724.08,1034.14c-2.85,5-11.17,5.32-14.86.91-3-3.54-3.12-7.61-1.13-11.63s5.59-6,10.21-5.4a7.5,7.5,0,0,1,6.19,8.26c-.23,2-1.43,1.88-2.77,1.88-2.65,0-5.31.13-8,0-3.37-.19-3.2,1.39-1.94,3.55a6.74,6.74,0,0,0,5.74,3.32A17.3,17.3,0,0,0,724.08,1034.14Zm-3.24-8.17c-.51-3.35-2-5.17-5.21-4.93-2.34.17-4.48,1.59-4.37,3.81s2.61.85,4,1.06A39.3,39.3,0,0,0,720.84,1026Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1145.42,1072.19a10.28,10.28,0,0,1-13.56,2.34c-4.31-2.89-5.31-9.47-2.15-14.2,2.8-4.2,8.17-5.69,12.15-3.44,2.63,1.48,3.35,3.9,3.58,6.65.17,1.9-.5,2.74-2.49,2.65a68.57,68.57,0,0,0-7.45,0c-1.15.08-2.87-.93-3.37.93-.36,1.35.48,2.6,1.42,3.56C1136.77,1074,1140.71,1073.15,1145.42,1072.19Zm-8.5-8c1.59-.88,4.4,1.09,4.62-1.26s-1.91-4-4.67-3.89c-2.39.12-4.68,1.48-4.54,3.61C1132.53,1065.58,1135.51,1063.08,1136.92,1064.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M331.11,1029.86c0,2,0,4,0,6,0,1.31-.19,2.22-1.85,2.19s-2-.68-2-2.12c0-3.32,0-6.65,0-10,0-2.54-.47-4.94-3.58-4.86s-5.57,1.25-5.64,4.9c-.07,3.16,0,6.32,0,9.48,0,1.39.06,2.63-2,2.59s-1.93-1.31-1.92-2.67c0-5,0-10,0-15,0-.89-.38-2.11,1.07-2.34.81-.14,1.76-.2,2,.88.46,2.09,1.5,1.66,2.76.75,6-4.32,12.19-.71,11.17,7.17A22.93,22.93,0,0,0,331.11,1029.86Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1324.11,1065.69c0-2-.11-4,0-6,.09-1.2-.83-2.83.78-3.54s2,.72,2.77,1.85c1,1.42,1.91-.33,2.81-.77,6.34-3.12,10.47-.68,10.59,6.33.05,3.16,0,6.32,0,9.48,0,1.41.49,3.14-2,3-2.06-.13-1.8-1.52-1.81-2.82q0-4.74,0-9.48c0-2.61-.69-4.85-3.79-4.67-2.78.15-5.28,1.25-5.41,4.61s0,6.66,0,10c0,1.2.07,2.32-1.68,2.38s-2.29-.72-2.24-2.37C1324.17,1071,1324.11,1068.35,1324.11,1065.69Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M778,1027.69c0-2-.11-4,0-6,.09-1.21-.79-2.86.81-3.54s1.91.72,2.65,1.9c.84,1.34,1.92-.3,2.85-.76,6.3-3.16,10.52-.71,10.67,6.25.07,3,.09,6,0,9-.05,1.42.92,3.64-2,3.48s-1.71-2.35-1.8-3.73c-.16-2.66-.07-5.33,0-8s-.36-5.35-3.78-5.21-5.69,1.6-5.48,5.57c.16,3,0,6,0,9,.05,1.63-.4,2.47-2.21,2.41s-1.72-1.15-1.72-2.37C778,1033,778,1030.35,778,1027.69Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M831.89,1065.76c0-2-.08-4,0-6,.07-1.23-.72-2.92.74-3.6s2,.55,2.67,1.89,1.88-.25,2.77-.7c6.55-3.26,10.66-.77,10.78,6.59.06,3.32,0,6.65,0,10,0,1.42-.44,2.11-2,2.12s-1.95-.77-1.93-2.15c0-3.33,0-6.66,0-10,0-2.6-.65-4.91-3.68-4.84s-5.58,1.19-5.56,5c0,2.83.06,5.66,0,8.49,0,1.48.76,3.58-2.09,3.5-2.58-.06-1.64-2-1.71-3.27C831.8,1070.43,831.89,1068.09,831.89,1065.76Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1765,1066v-8c0-2.39,2.28-2.66,2.72-1.44,1.15,3.22,2.24,1.48,3.81.67,6-3.08,10.29-.55,10.48,6.07.09,3.33,0,6.66,0,10,0,1.26.37,2.71-1.77,2.79-2.42.09-2.12-1.49-2.12-3,0-3,0-6,0-9,0-2.79-.62-5.27-4-5-3,.25-5.39,1.56-5.25,5.28.11,3,0,6,0,9,0,1.36.14,2.65-1.92,2.69s-2-1.19-2-2.59C1765,1071,1765,1068.46,1765,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1106.8,1056.43c5.34-1.91,4.85,2.58,5.85,5.06,1.17,2.88,1.92,5.94,3.06,9.6,2.46-3,2.4-6.49,3.82-9.25,1.18-2.31.1-7,5.62-5.51-2.12,5.85-4.2,11.56-6.27,17.28-.54,1.47-1.17,2.56-3.13,2.48-1.78-.08-2.21-1.17-2.67-2.42C1111,1068,1108.91,1062.22,1106.8,1056.43Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M831.06,1017.93c1,.06,2.2.05,3.34.23a1.27,1.27,0,0,1,1.09,1.81c-.29.87-.39,2.27-1.78,1.74a11.31,11.31,0,0,0-4.36-.71c-1.46,0-2.68.52-3.06,2-.44,1.7,1,2.36,2.15,2.88,1.35.59,2.87.8,4.25,1.34,1.91.74,3.65,1.76,3.78,4.13a5.65,5.65,0,0,1-3.32,5.64c-3,1.56-6.07,1.4-9.15.45-.81-.25-2.08-.34-1.71-1.88a1.76,1.76,0,0,1,2.56-1.46c.32.09.63.2.95.3,2.59.79,5.85,1.76,6.8-1.49s-2.83-3-4.76-3.73c-3.06-1.08-5.83-2.25-5-6.13C823.83,1018.86,827.19,1018,831.06,1017.93Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1540.45,1055.9c1.82.09,2.82.1,3.81.2,1.22.11,1.78.83,1.41,2-.28.9-.54,2-2,1.6a21.45,21.45,0,0,0-3.35-.7c-1.75-.17-3.57.11-3.86,2.17-.25,1.79,1.31,2.42,2.82,2.85.79.23,1.53.63,2.33.84,2.93.77,5.54,2,5,5.62-.51,3.38-3.09,5-6.26,5.43-2.1.26-4.32.45-6.36-.54-.82-.4-2-.53-1.44-2,.42-1.14,1-1.6,2.19-1.33,2.9.68,7,3,7.89-1.36.76-3.48-4-2.79-6.29-4-1.79-1-3.48-1.91-3.5-4.35a5.58,5.58,0,0,1,2.73-5A7.86,7.86,0,0,1,1540.45,1055.9Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M703.81,1035.51c-2.81,3.16-5.74,3-8.54,2-2.54-1-2.78-3.44-2.73-5.88s0-5,0-7.45a10.77,10.77,0,0,1-.18-2.43c.4-1.74-7.46.68-1.73-3.3,2-1.37,2.56-3.26,3.81-4.9.76-1,2-.4,1.79.94-.53,3.46,1.36,3.76,4,3.6,1-.06,2.88-1,2.77,1.39-.07,1.68-1.39,1.75-2.53,1.53-4.21-.8-4.64,1.6-4.25,4.8a12.35,12.35,0,0,1,0,1.49C696.28,1034.51,696.28,1034.51,703.81,1035.51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1884.68,1058.59c.6-2.62,3.07-2.32,4.14-3.83.87-1.24.49-3.47,3.13-3.76-.47,4.27,1.56,5.82,5.61,5,.78-.16,1.71,0,1.54,1.22a1.82,1.82,0,0,1-1.87,1.8c-1.64.19-4.47-1-4.7,1.07-.43,3.85-1.16,8,.58,11.7.84,1.81,2.9,1.14,4.52,1.14.64,0,1.36-.16,1.52.76s-.42,1.09-1,1.49a6,6,0,0,1-9.57-4.41,38.41,38.41,0,0,1,0-7C1888.92,1060.77,1888.49,1058.44,1884.68,1058.59Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M686.84,1073.57a7.1,7.1,0,0,1-8.61,1.86c-2.54-1-2.74-3.48-2.69-5.9s0-4.64,0-7a7.17,7.17,0,0,0-.09-2.46c-.81-2.08-.05-6.44,1.68-8.31a1.94,1.94,0,0,1,1.18-.66c.86,0,1.07.69,1,1.35-.64,3.52,1.46,3.67,4.07,3.54.91,0,2.54-.88,2.74,1s-1.15,2.26-2.6,2c-4.3-.84-4.52,1.73-4.19,4.84,0,.33,0,.67,0,1C679.28,1072.43,679.28,1072.43,686.84,1073.57Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1050.68,1018.08c1,0,2-.08,3,0,1.35.13,1.47,1.08,1.29,2.18s-.7,1.79-2,1.43a20.65,20.65,0,0,0-3.38-.68c-1.55-.15-3.15,0-3.63,1.84s.92,2.62,2.44,3.12c.94.31,1.87.66,2.82.94,2.72.8,5.11,2,4.8,5.36s-2.75,4.93-5.62,5.55a12.3,12.3,0,0,1-6.89-.34c-1.23-.46-2-1-1.5-2.53s1.5-1,2.42-.86c.64.12,1.22.65,1.85.7,2.24.17,5.14,1.13,5.86-2,.65-2.79-2.34-2.83-4-3.42-3.06-1.09-6.61-1.87-5.81-6.07S1046.66,1017.85,1050.68,1018.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1002,1055.94c1,0,2,0,3,.15,1.32.15,1.5,1,1.28,2.15s-.59,1.86-2,1.5a19.29,19.29,0,0,0-3.34-.71c-1.73-.16-3.53.07-3.81,2.2-.24,1.9,1.41,2.37,2.87,2.81a7.94,7.94,0,0,1,1,.28c2.58,1.17,6.13,1.22,6.34,5.23a5.37,5.37,0,0,1-3,5.28c-3.27,1.76-6.64,1.61-10,.36a1.38,1.38,0,0,1-1-1.87,1.55,1.55,0,0,1,2.22-1.28,11.14,11.14,0,0,0,5.8.89,2.85,2.85,0,0,0,2.43-2.2c.28-1.39-.81-2.09-1.87-2.57a23,23,0,0,0-3.28-1.12c-2.73-.74-5.12-1.88-4.88-5.24.24-3.58,2.8-5,5.89-5.74a11.4,11.4,0,0,1,2.48,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1604.49,1076.07a9.82,9.82,0,0,1-2.84-.34c-1-.44-2.92-.27-2.47-2.34s1.79-1.5,3.11-1.14a20.87,20.87,0,0,0,2.85.72c1.91.21,4,0,4.42-2.18s-1.58-2.54-3.15-3l-2.34-.78c-2.48-.83-4.64-2-4.5-5.1s2.26-4.8,4.89-5.55c1.85-.52,3.94-.26,5.92-.29,1.41,0,2.18.56,1.87,2.14-.27,1.41-.77,2.07-2.35,1.37a8.64,8.64,0,0,0-2.88-.52c-1.72-.11-3.54,0-3.88,2.14-.3,1.9,1.33,2.41,2.78,2.87.32.1.65.14,1,.26,3.1,1.27,7.38,1.69,6.24,6.66C1612.11,1075.33,1608.48,1076.07,1604.49,1076.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M952,1056.08c1,0,2-.08,3,0,1.31.12,1.52,1,1.3,2.13s-.56,1.89-1.93,1.52A20.27,20.27,0,0,0,951,1059c-1.73-.16-3.53,0-3.82,2.18-.26,1.9,1.38,2.38,2.84,2.83a7.9,7.9,0,0,1,.95.27c2.57,1.18,6.13,1.21,6.36,5.22a5.34,5.34,0,0,1-3,5.29c-3.26,1.77-6.63,1.62-10,.38a1.38,1.38,0,0,1-1-1.86,1.56,1.56,0,0,1,2.2-1.31,11.24,11.24,0,0,0,5.8.9,2.87,2.87,0,0,0,2.45-2.18c.3-1.39-.79-2.09-1.85-2.58a22.13,22.13,0,0,0-3.27-1.12c-2.73-.75-5.13-1.86-4.91-5.23.22-3.58,2.78-5,5.87-5.75a10.8,10.8,0,0,1,2.48,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M619.63,1056.07c1,0,2-.07,3,0,1.33.11,1.52,1,1.34,2.14s-.74,2-2,1.44a9.18,9.18,0,0,0-3.89-.66c-1.65,0-3.08.42-3.25,2.31-.16,1.64,1.14,2.22,2.46,2.66.95.31,1.87.67,2.83.94,2.71.79,5.12,1.92,4.84,5.33s-2.71,4.93-5.57,5.58a12.23,12.23,0,0,1-6.9-.32c-1.18-.43-2-.94-1.56-2.5s1.47-1.08,2.4-.91c.63.11,1.22.63,1.85.69,2.24.2,5.12,1.16,5.89-1.94.7-2.81-2.29-2.86-4-3.45-3-1.08-6.62-1.83-5.86-6S615.61,1055.87,619.63,1056.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M613.79,1038a7.64,7.64,0,0,1-2.46-.17c-1.21-.5-3.45-.1-3.12-2.27.41-2.76,2.27-1.42,3.82-1a15.46,15.46,0,0,0,3.9.38,2.7,2.7,0,0,0,2.74-2.41c.14-1.28-1-2-2.12-2.45s-2.54-.7-3.77-1.17c-2.24-.85-4.3-1.93-4.21-4.83.08-2.62,1.53-4.18,3.8-5.32s4.87-.69,7.31-.69c1.62,0,1.81,1,1.5,2.4s-.89,1.62-2.1,1.16a8.56,8.56,0,0,0-2.37-.58c-1.81-.1-4-.4-4.51,1.93-.51,2.5,1.78,2.72,3.49,3.25.79.24,1.57.53,2.34.81,2.26.83,4.32,1.84,4.27,4.75s-1.71,4.43-4.15,5.61C616.7,1038.08,615.26,1037.93,613.79,1038Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M548.89,1035.62c-2.22,3.08-5.19,2.81-8,2-2.57-.79-3.16-3.11-3-5.65.09-2.15-.17-4.33.07-6.46.33-3-.13-5.15-4.5-4.63,2.06-3.07,5.55-3.67,6.15-7,.21-1.17,2.3-1.3,2.06.57-.53,4.06,2,3.65,4.49,3.6.82,0,2.22-.55,2.31.89.08,1.22-.61,2.36-2.13,2.06-4.87-.94-4.92,2.07-4.57,5.46a4.13,4.13,0,0,1,0,.5C541.76,1034.27,541.76,1034.27,548.89,1035.62Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1220.93,1076.05a29.63,29.63,0,0,1-3.13-.55c-1.1-.3-2.24-.67-1.75-2.35s1.69-1.23,2.78-1a21.85,21.85,0,0,0,2.34.75c2,.16,4.41.57,5.09-1.88.79-2.85-2-2.93-3.72-3.56-3.45-1.27-7.54-2-5.77-7.25,1.21-3.57,7.3-5.65,11.18-4.17,1.28.49,1.27,1.28,1.12,2.32-.19,1.25-.81,1.71-2,1.27a6.29,6.29,0,0,0-1.87-.57c-1.92,0-4.44-.78-5.06,1.81-.69,2.84,2.08,2.81,3.82,3.49,3,1.19,7,1.63,6.09,6.3C1229.16,1075.1,1225.65,1076.06,1220.93,1076.05Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M129.69,1076.05c-.56-.11-1.86-.31-3.12-.65-.95-.26-1.85-.59-1.57-2,.33-1.69,1.4-1.61,2.6-1.29a12.72,12.72,0,0,0,1.84.72c2.26.19,5.16,1,5.87-2,.64-2.7-2.31-2.83-4-3.41-3.63-1.25-7.4-2.28-5.44-7.4,1.3-3.42,8-5.54,11.33-3.87,1.23.62,1,1.53.81,2.51s-.85,1.31-1.76,1.13a33.26,33.26,0,0,0-3.34-.73c-1.7-.15-3.54-.07-3.89,2.09-.32,1.91,1.23,2.48,2.72,2.91.47.14.94.3,1.41.46,3.15,1.06,6.9,1.85,5.83,6.44C138,1075.29,134.35,1076.08,129.69,1076.05Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M708.12,1057.75c1.42-1.07,3.11-1.92,4.18-3.26,1.69-2.13,3.17-8.6,3.8.42.14,2,3.08.64,4.67,1.07.7.18,1.85-.31,1.9.9,0,1-.47,2.14-1.67,2-9.48-.65-4.17,6.48-4.92,10-1.16,5.45,4.11,3.46,7,4.5-2,3.27-4.94,3-7.56,2.36-2.79-.66-3.7-3-3.59-5.81.08-2.16-.17-4.34.06-6.48C712.35,1060.5,712,1058.28,708.12,1057.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1302.72,1058.45c2.82-1.84,4.1-2.57,5.27-3.45,1.47-1.1,3.32-10.15,4.14.3.11,1.38,2.67.34,4,.69.92.24,2.64-.78,2.48,1.29-.09,1-.87,1.55-2.05,1.76-1.57.28-4.35-1.24-4.52,1.26-.26,3.87-1.3,8.06.71,11.7,1.17,2.13,4.07.34,6.25,1.42-1.85,3.25-4.8,2.92-7.4,2.36-2.79-.61-3.78-2.94-3.67-5.75.08-1.82-.06-3.66,0-5.49C1308.16,1061.48,1308.66,1058.29,1302.72,1058.45Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1513.12,1058.24c3.34-2.08,5.64-4.2,7.05-7.82.17,4.76,2.07,6.48,6.16,5.59.72-.15,1.72-.08,1.64,1.18s-.84,1.52-1.92,1.85c-1.65.49-4.67-1.59-4.8,1.6-.15,3.73-1.24,7.72.75,11.24,1.28,2.29,4.07.37,6.19,1.56-1.45,3.15-4.23,2.73-6.68,2.47-2.68-.29-4-2.29-4.2-4.84a50.61,50.61,0,0,1,0-7.49C1517.5,1060.75,1517.5,1058.28,1513.12,1058.24Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1631.45,1073.41c-2.13,3.3-5,2.89-7.64,2.34-2.32-.49-3.42-2.54-3.53-4.9a49.42,49.42,0,0,1,0-7c.27-3,0-5.42-5.42-5.3,4.47-2.3,6.61-4.6,8.24-7.93.56,4.1,2.19,6.44,6.44,5.4.52-.13,1.4-.1,1.42.89s-.25,1.95-1.16,1.89c-9.68-.63-5,6.65-5.53,10.57C1623.61,1074.4,1628.57,1072.33,1631.45,1073.41Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M607.13,436.28A90.47,90.47,0,0,0,623,438.69c2.84.09,5.59-.28,8.38-.38,2.21-.08,2.81.87,2.84,2.95,0,2.33-1,2.77-3,2.58-2.3-.21-4.63-.06-6.94-.2-4.29-.27-9,1.48-12.47-2.82-.83-1-2.41-.94-3.76-.63C606.13,439.22,607.26,437.62,607.13,436.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M364.92,1022c1.95-1.4,2.81-4.06,5.55-4,.9,0,2.22-.4,2.35,1,.1,1,.57,2.66-1.05,2.89-7.09,1-7.29,6.1-7,11.53,0,.83,0,1.66,0,2.49.09,1.45-.47,2.09-2,2.12s-1.91-.75-1.89-2.13c0-4.66-.11-9.32.09-14,.06-1.3-1.43-3.7,1.42-3.89C365.08,1017.89,363.29,1020.79,364.92,1022Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1373.15,1060.86c2.27-1.8,3-4.75,5.94-4.83,1,0,2.56-.65,2.62,1.24,0,1.08.21,2.52-1.42,2.76-6.41.94-7.08,5.51-6.85,10.69.06,1.16,0,2.33,0,3.49s-.43,1.85-1.72,1.82c-1,0-2,0-2-1.5,0-5.65,0-11.3,0-17,0-1,.3-1.59,1.37-1.58.91,0,1.64.29,1.74,1.33S1373,1059.31,1373.15,1060.86Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1473.17,1061c2.27-2.16,3.14-4.93,6.11-5,.91,0,2.22-.41,2.41,1,.15,1.06.33,2.73-1.11,2.94-7.38,1.1-7.29,6.49-7.13,12,0,.83,0,1.66,0,2.49,0,1.32-.74,1.64-1.9,1.63s-1.83-.38-1.82-1.69c0-5.49,0-11,0-16.45,0-.83-.07-1.73,1.07-1.86s2,.16,2.08,1.48C1473,1058.5,1473.05,1059.49,1473.17,1061Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M500.11,1023c2.14-2.21,3-4.92,6-5,.9,0,2.26-.43,2.36,1,.07,1,.47,2.72-1.05,2.94-7.42,1.07-7.26,6.49-7.1,12,0,.67,0,1.33,0,2,.08,1.35-.26,2.17-1.88,2.16s-1.88-.86-1.87-2.19c0-5.14,0-10.28,0-15.41,0-.9-.42-2.15,1-2.41s2.11.55,2.18,2C499.81,1020.83,500,1021.64,500.11,1023Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1293.35,1060.72c1.88-1.78,2.69-4.57,5.61-4.71.92,0,2.29-.39,2.46.87.14,1,.52,2.77-.94,3-7.68,1.16-7.27,6.8-7.26,12.41,0,1.32,1.22,3.61-1.69,3.73s-1.91-2.13-1.94-3.52c-.11-4.31-.14-8.63,0-12.93.05-1.2-1.16-3.38,1.36-3.5,2.34-.12,1.56,2,1.92,3.32C1293,1059.77,1293.15,1060.16,1293.35,1060.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M90.4,1060.19c1.85-1.44,2.67-4.07,5.35-4.17.92,0,2.25-.43,2.45.88.15,1,.56,2.78-.87,3-8,1.2-7.28,7.16-7.23,12.82a6.08,6.08,0,0,1-.33,2.86c-.25.44-1.51.46-2.3.39-1.39-.13-1.21-1.32-1.21-2.27,0-4.47-.12-8.94,0-13.4,0-1.42-1.23-3.74,1.15-4.17C90.5,1055.57,88.83,1058.9,90.4,1060.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1182.89,1061V1048.6c0-1.31-.22-2.67,1.88-2.65s2,1.23,2,2.64q0,12.4,0,24.81c0,1.39,0,2.62-2,2.65s-1.89-1.31-1.89-2.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1165,1061q0,6.21,0,12.43c0,1.37.11,2.63-2,2.62s-2-1.23-2-2.62q0-12.43,0-24.86c0-1.4,0-2.62,2-2.62s1.94,1.26,1.94,2.62Q1165,1054.78,1165,1061Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M784,1061.4c0,4,0,8,0,11.94,0,1.29.26,2.67-1.84,2.71-1.95,0-2.08-1-2.07-2.52q0-12.43,0-24.87c0-1.33-.19-2.64,1.87-2.71,2.5-.08,2,1.62,2,3C784,1053.12,784,1057.26,784,1061.4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1016.45,1061.19c0,4,0,8,0,12,0,1.22.45,2.77-1.68,2.89-2.49.14-2-1.61-2-3q0-12,0-23.91c0-1.34-.61-3.18,1.9-3.12s1.75,2,1.78,3.26C1016.51,1053.22,1016.45,1057.21,1016.45,1061.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1869,1061.49c0,4,0,8,0,11.93,0,1.36.12,2.64-1.94,2.63s-2-1.21-2-2.61q0-12.43,0-24.86c0-1.39-.06-2.62,2-2.63s2,1.24,2,2.61Q1869,1055,1869,1061.49Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M505.72,1060.7c0-4,0-8,0-12,0-1.26-.36-2.73,1.78-2.78s1.94,1.27,1.94,2.64q0,12.21,0,24.4c0,1.44.38,3.14-2.05,3-2.18-.1-1.65-1.67-1.66-2.88C505.69,1069,505.72,1064.85,505.72,1060.7Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M923,1023c0,4.15,0,8.29,0,12.43,0,1.4.06,2.62-2,2.59s-1.94-1.28-1.93-2.65q0-12.44,0-24.86c0-1.42,0-2.61,2-2.59s1.9,1.31,1.9,2.65Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1142.45,1023.12c0,4.15,0,8.3,0,12.45,0,1.51-.23,2.56-2.13,2.47s-1.6-1.31-1.6-2.46c0-8.47,0-16.93,0-25.4,0-1.31.22-2.2,1.86-2.22s1.89.89,1.89,2.21C1142.43,1014.48,1142.45,1018.8,1142.45,1023.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1566.16,1060.21c2-1.29,2.73-4.3,5.7-4.2.87,0,2.25-.46,2.21,1.1,0,1,.69,2.63-1,2.86-7.11,1-7.23,6.1-7,11.49,0,1,0,2,0,3,0,1.35-.83,1.59-2,1.59s-1.93-.3-1.92-1.63q0-8.46,0-16.92a1.28,1.28,0,0,1,1.49-1.46c.7,0,1.28.13,1.52.91C1565.46,1058,1565,1059.3,1566.16,1060.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1074,1027c0,5.16,0,10.31,0,15.46,0,1,.42,2.55-1.45,2.52s-1.43-1.5-1.43-2.58q0-15.69,0-31.4c0-1-.45-2.61,1.24-2.76,2.23-.21,1.6,1.67,1.61,2.82C1074.05,1016.37,1074,1021.69,1074,1027Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1083,1026.39c0-5.15,0-10.3,0-15.45,0-1-.47-2.57,1.27-2.73s1.6,1.3,1.6,2.42q0,15.95,0,31.9c0,1.11.29,2.54-1.55,2.43s-1.31-1.6-1.32-2.63C1083,1037,1083,1031.7,1083,1026.39Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1275,1026.29c0,5.32,0,10.64,0,16,0,1,.58,2.53-1.23,2.71s-1.65-1.18-1.65-2.33q0-16,0-31.9c0-1.1-.26-2.6,1.52-2.53s1.34,1.61,1.35,2.65C1275,1016,1275,1021.14,1275,1026.29Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1286.89,1027c0,5.15,0,10.3,0,15.45,0,1.09.36,2.55-1.48,2.52s-1.39-1.52-1.39-2.56q0-15.71,0-31.4c0-1-.53-2.62,1.19-2.78,2.16-.19,1.66,1.63,1.67,2.82C1286.92,1016.37,1286.89,1021.69,1286.89,1027Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M454.9,1026.45c0-5.31,0-10.62,0-15.92,0-.9-.28-2.19,1.14-2.31,1.72-.14,1.69,1.21,1.69,2.37q0,16.17,0,32.34c0,1-.11,2.06-1.5,2s-1.34-1.15-1.35-2.11Q454.89,1034.66,454.9,1026.45Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M442.89,1026.53c0-5.31,0-10.61,0-15.92,0-1-.39-2.59,1.53-2.39,1.32.14,1.29,1.31,1.29,2.29q0,16.17,0,32.33c0,1-.05,2.11-1.42,2.13-1.88,0-1.41-1.48-1.42-2.52C442.87,1037.14,442.89,1031.84,442.89,1026.53Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M652.11,1027c0,5.14,0,10.28,0,15.42,0,1,.47,2.59-1.4,2.53s-1.43-1.51-1.43-2.6q0-15.67,0-31.34c0-1.23-.33-3,1.75-2.75,1.58.2,1.07,1.78,1.08,2.83C652.13,1016.4,652.11,1021.71,652.11,1027Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M307,1024.16c0,3.83-.05,7.65,0,11.48,0,1.61-.34,2.48-2.19,2.41-1.62-.06-1.87-.9-1.86-2.23,0-7.49,0-15,0-22.46,0-1.61.34-2.46,2.19-2.41,2.09,0,1.85,1.42,1.85,2.73C307,1017.17,307,1020.66,307,1024.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1178.48,1075.74c-3.63.16-12.41-7.5-12.43-10.24,0-2.22,8.33-9.28,11-9.27,0,.29.1.63,0,.86-1.69,3.29-7.32,4.76-5.82,9.17C1172.34,1069.65,1175.7,1072.27,1178.48,1075.74Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M796.22,1056.07c-.08.55-.05.75-.13.87-2,3-6.74,5.15-6.37,8.4.36,3.08,4.12,5.76,6.36,8.64.39.49.7,1,1.26,1.9-7.28.89-7.74-6-11.34-9a1.64,1.64,0,0,1,.07-2.86C789.38,1061.42,790.23,1055.52,796.22,1056.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1882.46,1075.79c-7.21,1.14-7.66-5.56-11-8.42-.92-.78-2.05-1.94-.46-3.24,3.32-2.72,4.36-8.42,10.5-8.24a10.74,10.74,0,0,1-.84,1.73c-6.43,7.8-6.43,7.79.07,15.82C1881.2,1074.06,1881.66,1074.72,1882.46,1075.79Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1811.09,1046c2.18-.33,3.3.2,3.25,2.81q-.24,12.18,0,24.36c.05,2.61-1.07,3.14-3.25,2.81A293.92,293.92,0,0,1,1811.09,1046Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M753.75,1066c0,2.65,0,5.3,0,8,0,1.5-.64,2-2.09,2s-2-.72-2-2.12q.06-8,0-15.91c0-1.46.54-2.07,2-2s2,.69,2,2.12C753.72,1060.73,753.75,1063.38,753.75,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1154.75,1066c0,2.65,0,5.3,0,8,0,1.48-.6,2.06-2.07,2.07s-2-.68-2-2.1q.06-7.95,0-15.91c0-1.45.5-2.09,2-2.07s2.07.65,2,2.1C1154.72,1060.71,1154.75,1063.36,1154.75,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M605,1075.87c-1.94.33-3.59.57-3.48-2.4q.27-7.47,0-14.94c-.11-3,1.54-2.73,3.48-2.4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1385.89,1065.64c0-2.33,0-4.66,0-7,0-1.29-.3-2.7,1.83-2.71,1.84,0,2.2.84,2.18,2.44-.06,5.15,0,10.3,0,15.45,0,1.35-.32,2.12-1.9,2.21-1.94.11-2.16-.91-2.12-2.44C1385.94,1071,1385.89,1068.29,1385.89,1065.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M381.11,1028.4v7c0,1.31.23,2.68-1.87,2.69-1.88,0-2.17-.92-2.15-2.48.05-5,0-10,0-14.95,0-1.37-.11-2.6,1.92-2.69,2.49-.1,2.06,1.55,2.07,3C381.13,1023.41,381.11,1025.9,381.11,1028.4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1640.28,1066.08c0,2.48,0,5,0,7.46,0,1.48-.12,2.59-2.07,2.51-1.53-.07-2-.77-2-2.17q0-8,0-15.92c0-1.53.73-2,2.13-2,1.58,0,1.94.79,1.92,2.16C1640.24,1060.77,1640.28,1063.42,1640.28,1066.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M602.89,1028.32c0,2.49,0,5,0,7.48,0,1.32-.25,2.16-1.85,2.25-1.89.11-2.2-.81-2.18-2.4.06-5.15,0-10.3,0-15.45,0-1.27.11-2.22,1.8-2.25s2.28.76,2.22,2.4C602.83,1023,602.89,1025.66,602.89,1028.32Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1069.09,1056c1.89-.15,3.55-.36,3.42,2.57-.21,4.94-.21,9.9,0,14.84.13,2.93-1.53,2.72-3.42,2.57A133.25,133.25,0,0,1,1069.09,1056Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1555.89,1066.14c0,2.49-.06,5,0,7.47,0,1.6-.34,2.48-2.18,2.44-1.65,0-1.85-.91-1.84-2.21,0-5.15,0-10.3,0-15.45,0-1.53.18-2.52,2.12-2.45s1.9,1.37,1.89,2.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1132.28,1028.13c0,2.48,0,5,0,7.46,0,1.52-.21,2.56-2.13,2.46-1.55-.09-1.93-.86-1.92-2.22,0-5.14,0-10.28,0-15.42,0-1.59.37-2.47,2.19-2.46,2.09,0,1.85,1.4,1.86,2.71Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M515.72,1065.57c0-2.49,0-5,0-7.47,0-1.37.36-2.17,1.93-2.14s2.14.48,2.13,2c0,5.31,0,10.62,0,15.92,0,1.41-.46,2.09-2,2.16-2,.08-2.08-1.06-2.06-2.52C515.75,1070.87,515.72,1068.22,515.72,1065.57Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M235.25,1066c0-2.65,0-5.3,0-8,0-1.48.6-2.06,2.07-2.07s2,.68,2,2.1q-.06,7.95,0,15.91c0,1.45-.5,2.09-2,2.07s-2.07-.65-2-2.1C235.28,1071.29,235.25,1068.64,235.25,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M695,1075.87c-1.94.33-3.59.57-3.48-2.4q.27-7.47,0-14.94c-.11-3,1.54-2.73,3.48-2.4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M908.89,1027.55c0-2.49,0-5,0-7.47,0-1.37.33-2.16,1.93-2.13s2.11.49,2.1,2c0,5.31,0,10.63,0,16,0,1.42-.45,2.06-2,2.13-2,.1-2-1.08-2-2.52C908.92,1032.87,908.89,1030.21,908.89,1027.55Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1421.75,1065.81c0,2.65-.06,5.31,0,8,.06,1.74-.72,2.31-2.37,2.27s-1.68-1.2-1.68-2.39c0-5.14,0-10.28,0-15.42,0-1.28.14-2.24,1.8-2.27s2.31.74,2.26,2.39C1421.7,1060.83,1421.75,1063.32,1421.75,1065.81Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M854,1044.87c-2.41.55-2.26-1.09-2.26-2.62q0-15.66,0-31.3c0-1.45-.24-3.25,2.25-2.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M864.23,1008.08c2.39-.1,2,1.65,2,3.09q0,15.5,0,31c0,1.54.17,3.16-2.19,2.84A363.54,363.54,0,0,1,864.23,1008.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M638.23,1008.08c2.39-.1,2,1.65,2,3.09q0,15.5,0,31c0,1.54.16,3.16-2.2,2.84A363.54,363.54,0,0,1,638.23,1008.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M612.22,1046.54c4-1.32,4,3.6,6.39,3.1,1.84-.38,2.13-4.11,5.7-3.25-2,2.53-2,6.49-6,6.57S614.28,1048.89,612.22,1046.54Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1427.82,1082.61c.72-3,4.27-5.44.08-8.53-.79-.59.25-2.57,1.74-3,1.9-.5,3.36.24,3.63,2.27C1433.84,1077.78,1431.61,1080.69,1427.82,1082.61Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M759.52,1082.25c.55-2.55,5-4.7.53-7.81-1.09-.76,0-2.62,1.23-3.2a2.68,2.68,0,0,1,3.77,1.28C766.81,1075.83,763.62,1081.46,759.52,1082.25Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"bcc7b85e-d007-4cc1-a9dd-58e3ff522165\" d=\"M359.12,1050.11c-.47,2.44-2.13,3.15-4.37,3.05s-3.78-1.07-3.58-3.23,2.06-3.2,4.35-3.1C357.65,1046.92,359,1047.84,359.12,1050.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"bcc7b85e-d007-4cc1-a9dd-58e3ff522165\" d=\"M854,1044.87v-36.56c.15.07.42.13.43.22a218.18,218.18,0,0,1,0,36.15C854.41,1044.76,854.13,1044.81,854,1044.87Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M864.23,1008.08a363.54,363.54,0,0,0-.14,36.91c-1.57-.42-1.27-1.75-1.28-2.84q0-15.4,0-30.81C862.82,1010.11,862.39,1008.57,864.23,1008.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M638.23,1008.08a363.54,363.54,0,0,0-.14,36.91c-1.57-.42-1.27-1.75-1.28-2.84q0-15.4,0-30.81C636.82,1010.11,636.39,1008.57,638.23,1008.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M929.18,1050h3.25c1.19,0,2.43,0,2.27,1.74-.13,1.45-1.28,1.21-2.2,1.26a9.1,9.1,0,0,1-3,0c-1.76-.53-5.09,1.65-5-1.64C924.58,1048.81,927.78,1050.59,929.18,1050Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M248.52,1063a2.66,2.66,0,0,1-2.4-3c0-1.83,1-3.18,3-3s2.81,1.65,2.61,3.44C251.6,1062.06,250.54,1063.1,248.52,1063Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M251.9,1072.67c-.16,1.78-.78,3.09-2.53,3.3a2.67,2.67,0,0,1-3.25-2.78,2.75,2.75,0,0,1,2.42-3.16C250.64,1069.71,251.36,1071.19,251.9,1072.67Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M145.09,1046a293.92,293.92,0,0,0,0,30c-.29-.14-.82-.26-.83-.43a188.72,188.72,0,0,1,0-29.12C144.27,1046.27,144.8,1046.15,145.09,1046Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M1811.09,1046a293.92,293.92,0,0,0,0,30c-.29-.14-.82-.26-.83-.43a188.72,188.72,0,0,1,0-29.12C1810.27,1046.27,1810.8,1046.15,1811.09,1046Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M474.09,1011a238.07,238.07,0,0,0,0,27c-1.3-.3-1.27-1.36-1.27-2.33q0-11.16,0-22.32C472.82,1012.37,472.79,1011.31,474.09,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M639.12,444c-1-1.73-2.13-3.46-.09-5.24a2.05,2.05,0,0,1,2.69-.05,2.74,2.74,0,0,1,1.23,3.41,3.28,3.28,0,0,1-2,2.06Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1251,1011c0,1.81-.69,2.82-2.31,3a2.1,2.1,0,0,1-2.36-2,2.36,2.36,0,0,1,2-2.91C1250,1008.75,1250.59,1010,1251,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M662.4,1049.68c-.19,1.52-.93,2.43-2.57,2.29a2.06,2.06,0,0,1-2-2.36c0-1.47.68-2.58,2.32-2.58S662.3,1048.27,662.4,1049.68Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M379.32,1010c1.35.07,2.21.79,2.15,2.12s-1,2-2.35,1.9-2.2-.69-2.13-2.09S378,1010,379.32,1010Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M601,1014c-1.37.08-2.22-.54-2.26-1.92a1.86,1.86,0,0,1,2.12-2.08c1.31,0,2.23.58,2.29,2S602.29,1014,601,1014Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"bcc7b85e-d007-4cc1-a9dd-58e3ff522165\" d=\"M605,1075.87v-19.74A38,38,0,0,1,605,1075.87Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1556.13,1050c-.13,1.51-1,2-2.32,2s-2.16-.71-2.12-2.06.9-2,2.25-2A2,2,0,0,1,1556.13,1050Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"bcc7b85e-d007-4cc1-a9dd-58e3ff522165\" d=\"M695,1075.87v-19.74A38,38,0,0,1,695,1075.87Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1390.13,1049.75A2,2,0,0,1,1388,1052c-1.35.06-2.24-.49-2.32-1.87a1.89,1.89,0,0,1,2.07-2.15A2.14,2.14,0,0,1,1390.13,1049.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M913.13,1012c-.08,1.45-.92,2-2.25,2s-2.19-.62-2.19-2a1.87,1.87,0,0,1,2.18-2A2,2,0,0,1,913.13,1012Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1072.93,1049.77a2.19,2.19,0,0,1-2.28,2.23,2,2,0,0,1-2.4-1.88c-.09-1.34.85-2,2.18-2.12A2.42,2.42,0,0,1,1072.93,1049.77Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M695.93,1049.78a2.21,2.21,0,0,1-2.35,2.23,2,2,0,0,1-2.33-2c0-1.33.91-2,2.25-2.06A2.42,2.42,0,0,1,695.93,1049.78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M605.91,1049.94a2.12,2.12,0,0,1-2.26,2.06,2,2,0,0,1-2.4-1.88c-.09-1.34.84-2.06,2.18-2.12A2.29,2.29,0,0,1,605.91,1049.94Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M1069.09,1056a133.25,133.25,0,0,0,0,20c-2.82-5-.67-10.46-1.22-15.68C1067.72,1058.89,1066.94,1056.93,1069.09,1056Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1640.76,1049.85a2.13,2.13,0,0,1-2.16,2.14c-1.33.11-2.34-.43-2.49-1.77s.72-2.09,2.07-2.21A2.35,2.35,0,0,1,1640.76,1049.85Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1132.76,1012a2.14,2.14,0,0,1-2.25,2c-1.33,0-2.32-.5-2.4-1.87s.83-2,2.16-2.13A2.31,2.31,0,0,1,1132.76,1012Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M239.76,1050.18a2.31,2.31,0,0,1-2.6,1.82c-1.36-.12-2.22-.87-2-2.21a2,2,0,0,1,2.5-1.78A2.21,2.21,0,0,1,239.76,1050.18Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1422,1050a2,2,0,0,1-2.26,2c-1.36,0-2.28-.63-2.31-2s.84-2,2.2-2.06A2.17,2.17,0,0,1,1422,1050Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1155,1050a2.06,2.06,0,0,1-2.31,2c-1.36,0-2.26-.67-2.26-2a2,2,0,0,1,2.25-2A2.14,2.14,0,0,1,1155,1050Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M751.83,1052a2,2,0,0,1-2.38-1.87c-.08-1.33.78-2.08,2.14-2.12a2,2,0,0,1,2.38,1.9C754.08,1051.32,753.14,1051.92,751.83,1052Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M520,1050.22a2.16,2.16,0,0,1-2.57,1.77,1.89,1.89,0,0,1-2-2.23A2,2,0,0,1,518,1048,2.1,2.1,0,0,1,520,1050.22Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M808.92,1066.24c2.72-.47,3.36.17,3.36,2,0,3.17-1.79,4.53-4.56,4.74-2.12.16-2.85-1.36-2.81-3.27C805,1066.25,808,1066.86,808.92,1066.24Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1048.45,1067c0-5.63,1.74-8.27,5.54-8s5.13,3.14,5.23,6.58c.13,4.42-2.64,7.18-6.81,7.42C1047.35,1073.34,1048.59,1069.79,1048.45,1067Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M194,1068c-.85-5.43.1-8.83,5-8.88,4.25,0,5.39,3.32,5.48,6.84.1,4.24-3,7-7.18,7.1C192,1073.12,194.36,1069.11,194,1068Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1248.18,1067.65c-.87-5.29.32-8.19,4.78-8.61,3.19-.3,5.75,2.83,5.75,6.69a7.08,7.08,0,0,1-7.06,7.3C1245.92,1073.24,1248.55,1068.92,1248.18,1067.65Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M538.28,1067c0-5.55,1.82-8.26,5.58-7.92s5.14,3.16,5.22,6.61c.1,4.38-2.73,7.16-6.87,7.38C537.12,1073.32,538.44,1069.73,538.28,1067Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M731,56.63c3.71-3.06,6.86-5,11-4.72,5.52.32,8.67,2.86,9.14,8.47.36,4.14.2,8.32.26,12.48,0,2.75-.71,5.83,3.21,6.8a1.22,1.22,0,0,1,.75,1.63c-.3.78-1,.72-1.65.73q-7,0-14,0c-.78,0-1.85.19-1.86-1a1.86,1.86,0,0,1,1.07-1.42c2.66-.74,2.38-2.84,2.38-4.81,0-4.33,0-8.66-.15-13-.07-2.81-1.12-5-4.41-4.76-3,.27-5.61,1.53-5.74,5-.18,4.66-.07,9.33,0,14a4.39,4.39,0,0,0,.74,2.3c.76,1.12,3.54.91,2.72,2.85-.72,1.7-3,.76-4.5.77q-16.25.12-32.49,0c-1.13,0-3,.89-3.28-1-.21-1.44,1.46-1.72,2.54-1.76,3.72-.15,3-2.35,1.95-4.36-1.23-2.25-.84-6.08-3.7-6.58-4-.7-8.51-.93-12.38.16-2.79.78-2.79,5-3.39,7.8-.55,2.6,1.81,2.66,3.58,3.06,1,.21,2.18.48,2.1,1.7-.1,1.43-1.46,1-2.36,1.05q-6.24.06-12.49,0c-.75,0-1.82.35-2.06-.79-.3-1.38.9-1.74,1.8-1.89,3.72-.65,5-3.54,6.18-6.51,4-9.86,8-19.71,12-29.6.94-2.36,1.47-4.42,4.92-4.39,3.24,0,3.71,1.92,4.57,4.12,4.05,10.38,8.23,20.71,12.29,31.09,1,2.61,2.32,4.64,5.36,5.29,4.28.9,5.89-.17,6-4.55.06-4.17,0-8.33,0-12.5,0-2.91.18-5.77-3.51-6.76-.79-.21-1.58-.91-1.12-1.85.2-.43,1.05-.68,1.64-.75,2.8-.35,5.63-.52,8.43-.92C729.46,51.57,731.62,52.07,731,56.63Zm-42.16-6.55c-2.14,5.62-3.82,10-5.55,14.54h11.24C692.68,59.93,691,55.68,688.82,50.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M847.39,80.59c-5,2.86-9.55,3.92-13.75.37-1.46-1.24-2.19-1.52-3.63-.31a11.33,11.33,0,0,1-3.48,1.9c-5.12,1.81-10.83-.29-12.37-4.44-1.77-4.8.47-9.06,6.13-11.31,2.76-1.1,5.64-1.89,8.45-2.86,3.45-1.19,4.57-6.27,1.81-8.61a3.87,3.87,0,0,0-4.16-.75c-1.83.7-1.51,1.83-1.19,3.16.64,2.73-.27,4.73-3.12,5.18-2.67.43-5.55.46-6.75-2.73-1-2.75.79-4.56,2.87-5.69A22.45,22.45,0,0,1,837,53.19c3.48,1.21,5,4.31,5,7.92.07,4,.09,8-.11,12C841.69,76.89,841.51,80.45,847.39,80.59ZM831.91,66.36c-5.7,1.41-7.92,3.59-7.74,7.5.1,2.17.79,4,3.34,4.09s4.24-1,4.37-3.65S831.91,69,831.91,66.36Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M861.83,83c-3.43,1.29-7-2.55-10.81,0-.7.46-1.56-.24-1.68-1.26a7.84,7.84,0,0,1-.14-2c.43-2.83-1.79-7.06.82-8.21,2.82-1.23,2.78,3.61,4.69,5.31s4.06,3.55,6.76,3.88c2.36.28,4.75-.23,5.48-3.09.66-2.59-.7-4.1-3-4.91s-4.71-1.52-7-2.37c-4.5-1.65-7.31-4.6-6.92-9.7s4.25-7.19,8.59-8.4c4.81-1.34,9.69,1.46,14.58-.08.93-.29,1.17.9,1.22,1.76a44.74,44.74,0,0,1,.22,4.47c-.05,1.19,1.1,2.83-.67,3.5s-2-1.24-2.67-2.23c-1.5-2.28-3.19-4.18-6-5-2.57-.72-4.85-.28-5.91,2.12-1.2,2.74.64,4.34,3.13,5.19,1.87.64,3.79,1.16,5.66,1.82,6.24,2.21,8.5,5.17,8,10.38-.46,4.55-4.41,8.06-10,8.78A34.65,34.65,0,0,1,861.83,83Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M924.87,66.17h-5c-5.41,0-6.12,1-4.33,6a8.77,8.77,0,0,0,13,4.63,16.8,16.8,0,0,0,3.07-2.53c.77-.75,1.38-1.37,2.49-.49s.55,1.65,0,2.55c-3.13,5.46-12.25,8.22-19.63,5.9C906.79,79.81,903,73.82,904,65.31A15.28,15.28,0,0,1,917.44,52c9.14-.9,15.17,2.44,16.65,9,.84,3.71.25,5.85-4.23,5.16A33.21,33.21,0,0,0,924.87,66.17Zm-6-2.13c1.73-.67,5.17,1.39,4.73-2.84-.3-2.87-.32-6.82-4.16-6.73s-4.29,3.86-4.63,7.07C914.48,65.21,917.29,63.55,918.92,64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M795.72,56.72c4-3.15,6.66-5.22,10.35-4.75s5.95,3.67,5.14,7.62c-.75,3.62-3.11,5-6.6,4.33-3.7-.7-3.6-3.81-3.78-6.69-3.65.81-5,3-4.73,6.51.23,3.32.13,6.66,0,10-.08,2.88.11,5.38,3.85,5.69.87.08,2.12.5,1.69,1.89-.33,1-1.39.69-2.13.7q-7.5.06-15,0c-.89,0-2.15.44-2.44-1-.21-1,.74-1.48,1.51-1.61,2.77-.47,2.66-2.52,2.66-4.54,0-4.66,0-9.32,0-14,0-2.22-.11-4.38-2.87-5.12-1-.26-1.94-.89-1.6-2.1.27-1,1.33-.77,2.11-.85,2.81-.3,5.62-.57,8.43-.84C794.91,51.76,797.21,51.84,795.72,56.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M761.64,67.42c0-2.33-.07-4.66,0-7,.09-2.49.14-4.79-3.48-4.3-1,.14-2-.2-2-1.56s1-1.72,2-1.56c3.57.56,3.84-1.61,3.49-4.17-.52-3.75.66-5.22,4.75-5,3.48.18,5.89.44,5,4.74-.84,4.06,1.27,4.77,4.71,4.47,1.23-.11,3.46-1,3.58,1.32.13,2.75-2.36,1.87-3.71,1.73-3.54-.36-4.68,1-4.42,4.47.27,3.81.11,7.65.05,11.47s1,6.54,5.7,6c1-.11,2.48-.64,2.71,1.2.18,1.51-1.06,1.9-2.07,2.42-9.24,4.72-16.27.51-16.29-9.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M883.13,66.81c0-2,0-4,0-6,0-2.41.72-5.36-3.5-4.7A1.35,1.35,0,0,1,878,54.77c-.1-1.3.57-2,1.73-1.76,4.29.69,3.71-2.39,3.36-4.66-.75-4.81,2.2-4.28,5.34-4.47,3.57-.22,5.45.64,4.65,4.54-.91,4.42,1.64,4.84,5.05,4.6,1.25-.08,3.39-.83,3.17,1.76-.17,2.07-2,1.49-3.13,1.33-4.32-.63-5.44,1.27-5.06,5.28.34,3.63.07,7.31.08,11s1.24,6.15,5.58,5.68c1-.11,2.51-.59,2.94.92.49,1.76-1.09,2.21-2.24,2.77-9.38,4.55-16.29.33-16.31-9.92Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M972.38,63.24c0,2.82,0,5.64,0,8.46-.06,3.73-.6,7.69,5,7.72A1.46,1.46,0,0,1,979,81c-.11,1.17-1.12,1-1.89,1q-10,0-19.92,0c-.74,0-1.81.35-2.09-.76-.35-1.39.91-1.87,1.75-1.83,5.62.24,5.41-3.46,5.23-7.34-.14-2.81-.1-5.64,0-8.46.12-3.83.91-8.07-5.4-6.77a1.4,1.4,0,0,1-1.76-1.29c-.16-1.43.83-1.55,1.89-1.59a14,14,0,0,0,9.79-4.18c1.47-1.47,3.52-1.11,5.16-.53s.67,2.29.68,3.52c0,3.48,0,7,0,10.46Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M863,50a4.48,4.48,0,0,1-4.67-2.17c-1.61-2.32-3.21-4.66-4.64-7.09-.58-1-2.43-2.13-.89-3.32,1.31-1,2.31.76,3.29,1.49,6.73,5.07,6.69,5.06,13.2.22,1.07-.8,2.14-3,3.64-1.6s-.54,2.66-1.22,3.81c-1.33,2.29-3,4.41-4.47,6.6A4.11,4.11,0,0,1,863,50Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"ace5d1dc-fd6c-4766-9899-cf60c9bb5c44\" d=\"M914.61,42.19c.18-3,1.47-5,4.71-5.19,3.44-.15,5.34,1.92,5.34,5.06a4.64,4.64,0,0,1-5,4.95C916.46,47.06,915,45.21,914.61,42.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M730.89,282.5c2.17-1.52,3.31-2.5,4.61-3.2,7.94-4.28,15.43-.12,15.84,8.84.17,3.82,0,7.66,0,11.49,0,2.47-.51,5.17,3,5.91.42.09.9,1,1,1.53.07.88-.79.93-1.43.93-5.38,0-10.75,0-16.87,0,7.27-7.22,3.63-15.11,3.63-22.43,0-1.91-2.14-2.87-4.23-2.55-2.61.4-5.17,1.52-5.38,4.32-.37,5-.11,10-.11,15a2.67,2.67,0,0,0,1.33,2.52c1,.53,2.61.77,2.27,2.17-.42,1.81-2.23,1-3.39,1q-16.74.11-33.49,0c-1.17,0-3,.86-3.44-.83s1.55-1.94,2.73-2c2.81-.18,3-1.65,2-3.64-1.26-2.45-1-6.52-3.77-7.15a27.63,27.63,0,0,0-12.37,0c-3.06.74-2.8,4.9-3.57,7.66-.71,2.52,1.44,2.86,3.32,3.25,1.05.21,2.61.33,2.24,2-.29,1.31-1.65.78-2.53.79-4,.07-8,.05-12,0-.9,0-2.2.42-2.35-1.05-.1-1,.83-1.43,1.64-1.57,3.92-.63,5.23-3.66,6.5-6.82,4-9.88,8-19.73,11.94-29.6.87-2.16,1.34-4.16,4.61-4.14,3.09,0,3.83,1.57,4.73,3.9,4.08,10.55,8.32,21,12.47,31.55.88,2.25,2,4.09,4.54,4.86,4.63,1.4,6.61.14,6.67-4.63,0-3.83,0-7.66,0-11.49,0-3.19.47-6.51-3.75-7.62a1.37,1.37,0,0,1-1-1.54c.12-.95.94-.85,1.52-.92,3-.35,6-.58,8.93-.94S731.69,278.11,730.89,282.5Zm-36.33,8.32c-2-4.73-3.13-9.45-6-14.08-1.9,5-3.58,9.4-5.37,14.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M964.32,278.18c.29,1.81.59,3.39.79,5,.34,2.6-.52,4.75-3.1,5.58-2.09.67-4.4.71-6-1.31a5.59,5.59,0,0,1-.1-7,10.73,10.73,0,0,1,5.47-4.18,24.15,24.15,0,0,1,18,.5c3.64,1.52,5.33,4.36,5.51,8.17s-1.72,6.29-4.89,8a37.84,37.84,0,0,1-8.39,3c-2.82.78-5.75,1.3-9.24,4,7.6,0,14.09.21,20.57-.09,3.43-.15,3.71,1.38,3.72,4.13s-.34,4.22-3.74,4.11c-8.15-.27-16.32,0-24.48-.14-1.41,0-3.65,1.11-4.07-1.45-.33-1.95-.32-3.91,1.54-5.46a61.79,61.79,0,0,1,8.59-6,47.5,47.5,0,0,0,5.9-3.69c3.53-2.81,3.65-6.74,2.2-10.46S967.68,277.76,964.32,278.18Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M847.35,306.57c-5,3.27-10.25,3.56-13.62.45-1.71-1.58-2.54-1.3-4-.13a10.94,10.94,0,0,1-7,2.18c-4.31,0-7.55-1.49-8.74-5.83s.75-8.15,5.26-10.07c3.19-1.35,6.6-2.18,9.87-3.33,1.51-.54,3.22-.94,2.93-3.28-.27-2.12.11-4.38-2.22-5.7a4,4,0,0,0-3.78-.11c-1.66.68-1.09,1.81-.85,2.88.61,2.7-.13,4.77-3,5.27-2.65.45-5.55.57-6.8-2.61-1.19-3,.9-4.78,3.14-6,5.36-2.9,11.12-3,16.92-1.64,4.31,1,6.38,4.06,6.54,8.33a108.7,108.7,0,0,1-.11,11C841.62,302.09,841.44,306,847.35,306.57ZM831.91,292.1c-4.33,1.13-7.71,2.8-7.72,7.76,0,2.17.77,4,3.32,4.09s4.24-1,4.37-3.65S831.91,295,831.91,292.1Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M861.19,309c-3.17,1-6.61-2.56-10.22-.1-.7.48-1.53-.31-1.63-1.3a13,13,0,0,1-.17-3c.36-2.5-1.56-6.3.86-7.22,2.75-1,2.7,3.35,4.38,5,2.08,2.05,4.21,3.9,7.1,4.24,2.36.27,4.74-.27,5.45-3.14.64-2.63-.78-4.09-3.09-4.89s-4.72-1.52-7-2.37c-4.5-1.66-7.26-4.63-6.87-9.73s4-6.94,8.15-8.26c5-1.6,9.95,1,15.1,0,1.9-.37,1.08,3.3,1.27,5.09.15,1.41,1.47,3.65-.64,4.39s-2.26-1.91-3.14-3.1c-1.67-2.25-3.72-3.94-6.44-4.31-2.2-.3-4.41.3-5.1,2.88S860,287,862,287.8c1.85.71,3.79,1.16,5.67,1.8,6.71,2.28,9.19,5.6,8.34,11.09-.7,4.52-5.2,7.93-11,8.31C863.86,309.07,862.7,309,861.19,309Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M924.52,292.17h-5c-5,0-5.69,1.05-4,5.88,2.19,6.44,9.23,8,15,3.42,1.07-.85,2-3.58,3.84-1.38,1.56,1.84-.74,2.94-1.73,4-4.81,5.14-12.9,6.57-19.83,3.67-6-2.52-9.2-8-8.86-15.3.31-6.68,4.34-11.77,11-13.88,8.73-2.76,17.54,1.07,19.15,8.33.76,3.39.75,6-4,5.3A37.22,37.22,0,0,0,924.52,292.17ZM919.11,290c1.86-.46,5.16,1.14,4.54-3-.43-2.82-.34-6.73-4.36-6.5-3.54.2-4,3.74-4.41,6.77C914.36,291.19,917.32,289.61,919.11,290Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M795.66,282.8c4.18-3.36,7-5.45,10.84-4.79,3.6.62,5.67,4.17,4.62,8-1,3.64-3.58,4.65-6.93,3.8s-3.19-3.81-3.34-6.56c-3.65.77-5,2.89-4.74,6.43.21,3.31.1,6.66,0,10-.06,2.84,0,5.42,3.79,5.74.88.08,2.11.46,1.77,1.85-.28,1.13-1.36.75-2.09.75-5.16.05-10.32,0-15.48,0-.74,0-1.78.27-2-.88s.66-1.52,1.44-1.66c2.72-.46,2.73-2.43,2.72-4.5,0-4.66,0-9.32,0-14,0-2.21-.06-4.4-2.81-5.16-1-.28-2-.84-1.68-2.07.24-1,1.3-.82,2.07-.9,2.8-.31,5.61-.58,8.42-.85C794.83,277.77,797.23,277.72,795.66,282.8Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M761.64,293.41c0-2.32-.07-4.65,0-7,.09-2.49.14-4.79-3.48-4.3-1,.14-2-.2-2-1.56s1-1.72,2-1.56c3.57.56,3.84-1.61,3.49-4.17-.52-3.75.66-5.22,4.75-5,3.47.18,5.89.44,5,4.74-.84,4.06,1.27,4.77,4.71,4.47,1.23-.11,3.46-1,3.58,1.32.13,2.75-2.36,1.87-3.71,1.73-3.54-.36-4.68,1-4.42,4.47.27,3.81.11,7.65.05,11.47s1,6.54,5.7,6c1-.11,2.48-.64,2.71,1.2.18,1.51-1.06,1.9-2.07,2.42-9.24,4.72-16.27.51-16.29-9.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M887.73,270.13c3.92-.84,6.16.07,5.32,4.38-.76,3.9,1.05,4.94,4.65,4.54,1.19-.13,3.35-1.06,3.56,1.33s-2,1.91-3.21,1.72c-4.5-.68-5.3,1.52-5,5.38.3,3.46.08,7,.06,10.46,0,3.83,1,6.61,5.68,6.09,1-.11,2.5-.61,2.87,1s-1.2,2.17-2.34,2.71c-9.43,4.48-16.22.26-16.23-10,0-3.66,0-7.31,0-11,0-2.51.51-5.28-3.59-4.62-.89.14-1.52-.4-1.59-1.44-.08-1.36.71-1.86,1.83-1.68,3.79.63,3.56-1.92,3.31-4.25C882.68,271,883.64,268.78,887.73,270.13Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M862.76,276.12c-4,.05-5.24-3.27-6.84-5.84-1.32-2.13-4.62-5.18-3.07-6.49,1.93-1.62,4.52,1.82,6.09,3.58,3.62,4,5.83,1.23,8.61-.88,1.63-1.24,3.68-4.35,5.12-3,2.06,1.94-1.19,3.95-2.26,5.75C868.62,272.24,867.25,276,862.76,276.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"fb391a3e-0186-425f-b83e-b66078816802\" d=\"M914.59,268.19c.28-3.19,1.66-5.16,4.89-5.19,3.45,0,5.28,2.08,5.18,5.23-.1,2.88-1.93,4.83-5.15,4.79S914.92,271,914.59,268.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M432.5,169.85c-.14,17.63-1,33.91-7.57,49.23-4.18,9.72-10.4,17.52-21.44,19.84-13.06,2.75-24.51-2.69-31.38-15-4.94-8.83-7.32-18.53-8.51-28.5-2.48-20.8-2.48-41.53,2.46-62a54.31,54.31,0,0,1,8.52-19.55c11.43-15.69,33.6-15.91,45.19-.33,7,9.37,9.43,20.41,11.2,31.65C432.32,153.78,432.32,162.45,432.5,169.85Zm-54.09,1.27c.39,8.65.29,17.66,1.64,26.58,1.08,7.1,2.43,14.16,6.31,20.35,5.64,9,16.23,8.88,21.9-.14A36.84,36.84,0,0,0,413,205.38c4.21-20.61,4-41.34,1.31-62.11-.84-6.62-2.31-13.12-5.73-19-2.58-4.42-6.14-7.43-11.62-7.25s-9,3.23-11.27,7.81A56.61,56.61,0,0,0,382,134.6C378.7,146.44,378.85,158.65,378.41,171.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M198.28,171c.16,14.37-.85,28.6-5.28,42.41a50.4,50.4,0,0,1-7.27,14.69,27.64,27.64,0,0,1-44.91.13c-7-9.36-9.72-20.36-11.17-31.65-2.73-21.28-2.75-42.52,2.39-63.51A53.82,53.82,0,0,1,140.38,114c11.37-15.75,33.54-16.07,45.18-.52,7.33,9.78,9.71,21.35,11.46,33.11C198.23,154.67,198.2,162.83,198.28,171Zm-54.12.16c.3,6.18.38,13.36,1.06,20.48.86,9,2,17.93,6.72,25.88,5.65,9.57,16.09,9.74,22.13.49A36.3,36.3,0,0,0,179,205c4.05-20.12,3.9-40.37,1.4-60.64-.84-6.78-2.27-13.47-5.59-19.54-2.54-4.64-6.1-7.92-11.82-7.79s-9.24,3.41-11.59,8.14A50.28,50.28,0,0,0,148,134C144.67,145.83,144.75,158,144.16,171.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M339.29,175c.15,10.3-.86,24.53-5.29,38.34a50.87,50.87,0,0,1-7,14.28c-11.45,16-33.89,16.17-45.48.3-6.77-9.27-9.49-20.1-10.92-31.22-2.72-21.28-2.78-42.52,2.36-63.52a54.45,54.45,0,0,1,8-18.67c11.76-16.7,34.67-16.68,46.34.12,6.64,9.56,8.94,20.63,10.62,31.88C339.2,154.58,339.22,162.74,339.29,175Zm-54.15-3.47c.31,6.16.4,13.17,1.07,20.13.86,9,2,17.93,6.71,25.88,5.75,9.74,16.53,9.71,22.4.07A38,38,0,0,0,320,205c4-20.13,3.91-40.37,1.4-60.64-.84-6.8-2.26-13.48-5.6-19.56-2.53-4.63-6.09-7.91-11.81-7.79-5.45.12-9,3.16-11.34,7.72A50.35,50.35,0,0,0,289,134C285.61,146,285.71,158.37,285.14,171.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M99,100.12c0,45.73,0,90,.06,134.3,0,2.72-.6,3.64-3.52,3.69-12.5.21-12.5.32-12.49-12.21q0-52.18,0-104.39a9.18,9.18,0,0,1,2.7-7.07C90,110.09,94.07,105.52,99,100.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M473.29,210.27c.51-9.15,1-16,3.69-22.36s6.91-10.74,14.1-10.73,11.8,4.3,14,10.8a71.74,71.74,0,0,1-.1,47.44c-2.16,6.24-6.67,10.3-13.68,10.55-6.23.22-11.39-3.62-14.25-10.57C473.42,226.58,473.41,217.24,473.29,210.27Zm26.94,1.25c-.1-6.64,0-13.31-2.23-19.7-1.15-3.37-2.51-6.72-6.87-6.79s-6.09,3.23-6.95,6.64a80,80,0,0,0,0,39.9c.86,3.37,2.54,6.64,7,6.52,4.18-.11,5.52-3.26,6.65-6.4C500.23,225.17,500.13,218.32,500.23,211.52Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M555.13,211.68c.18,7.7-.4,15.3-3.12,22.59-2.85,7.66-7.9,11.73-14.44,11.72s-12.06-4.1-14.43-11.73a74.33,74.33,0,0,1,.1-45.61c2.12-6.62,6.63-11.16,14.08-11.52,6.42-.31,11.67,3.88,14.59,11.49C554.77,196.05,555.31,203.82,555.13,211.68Zm-8.25,1.83c0-8.77-.35-15.41-2.42-21.8-1.1-3.37-2.56-6.71-6.94-6.68s-6,3.33-6.85,6.76a80,80,0,0,0-.07,39.41c.84,3.37,2.35,6.74,6.76,6.87,4.76.15,6.12-3.51,7.22-7C546.62,224.71,546.82,218,546.88,213.51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M136.83,75.23c0,2-.13,4,0,6,.23,3,.13,5-4,4.94s-3.93-1.91-4-4.92c-.21-6.54,1.53-13.17-1.73-19.64-1.28-2.55,2.77-3,4.29-4.5,1.76-1.74,2.7,0,3.3,1.29,1.09,2.41,2,2.16,3.91.58,5.3-4.39,8.28-4.33,12.83.44,1.64,1.71,2.13.56,3-.22,3.07-2.64,6.43-4.41,10.47-2.53s4.2,6.06,4.56,9.87c.53,5.62-.9,11.21.11,16.92.68,3.92-3.3,2-5.08,2.82-2.38,1.12-2.88-.7-3.11-2.43-.72-5.17.67-10.28.5-15.44-.11-3.47-1.36-5.88-5.41-5.37-2.23.29-3.6,1.22-3.5,3.86.21,5.32-.25,10.69.35,16,.57,5-3.17,2.52-4.9,3.36-2.4,1.17-3.42-.25-3.39-2.53.07-5,.36-10,.32-15,0-2.62,0-5.64-3.95-5.7-2.83,0-4.9.75-4.69,4.24C137,69.89,136.83,72.56,136.83,75.23Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M470.5,64.52c-5.54-5.32-6.43-12.2-2.16-16.68s14.34-4.71,18.79-.3,3.59,11.27-1.78,16.77c5.63,4.79,7.49,10.56,5.17,16-2,4.72-7.24,7.14-14.39,6.66-6.09-.4-10.47-3.78-11.76-9.06S465.26,67.87,470.5,64.52Zm12.79,10.6c-.05-3.86-.52-7.55-5.41-8-3.59-.35-5.84,2.73-5.74,7.68.07,3.71.71,7.13,5.5,7.31S483.24,78.94,483.29,75.12Zm-1-18.16c0-4.11-.31-7.47-4.27-7.63-4.27-.16-4.91,3.37-4.92,6.68,0,2.91.45,5.9,4.37,6C481.66,62.2,482.22,59.27,482.28,57Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M509.89,65.35a26.92,26.92,0,0,1,2.52-12.85,14.17,14.17,0,0,1,14.18-8.15c6.25.54,10.47,3.74,12.18,10a36.58,36.58,0,0,1-.82,23c-2.53,6.67-7.63,10-14.63,9.63-5.93-.29-10.2-4-12.28-10.59C510,73,509.91,69.56,509.89,65.35ZM532.38,65c-.28-3.13-.43-6.27-.87-9.38-.48-3.41-2.18-6.13-5.91-6.32s-5.71,2.43-6.55,5.71A46.31,46.31,0,0,0,519,77.12c.65,2.78,2.23,4.81,5.41,4.95s4.79-1.82,6-4.39C532.17,73.62,532.19,69.31,532.38,65Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M459.82,63.83a32.58,32.58,0,0,1-2.71,14.68c-2.82,6.16-7.5,8.87-14.35,8.5-5.47-.3-9.86-3.83-11.76-9.9a35.05,35.05,0,0,1,.36-23A14.36,14.36,0,0,1,446,44.32c6.7.43,11.3,4.59,12.93,11.75A26.06,26.06,0,0,1,459.82,63.83Zm-7.85.81a33.6,33.6,0,0,0-1.06-10.37c-.85-3-2.76-5-6-5-3,0-4.94,1.87-5.82,4.62a41.79,41.79,0,0,0-.38,23.56c.66,2.55,2.19,4.46,5.16,4.65,3.19.22,5-1.63,6.05-4.24A30.35,30.35,0,0,0,452,64.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M225.92,59.66c.75,7.29-2,14.9,2,22,1.11,2-1.87,2.7-2.95,4s-2.44.93-3.23-.33c-2-3.18-3.72-1.65-6-.15-6.28,4.19-12.53,1.45-13.6-6-.69-4.76-.79-9.64.92-14.28,2-5.45,5.61-9.1,11.8-8.88,2.86.11,3.38-1.13,3.24-3.51s.15-4.68-.15-7c-.52-4.09,1.66-4.65,5-4.62,2.49,0,3.09,1,3,3.27C225.83,49.36,225.92,54.51,225.92,59.66Zm-7.85,10.93v-5c0-2,.2-4.18-2.59-4.59s-4,1.26-4.77,3.45c-1.42,4-1.29,8.21-.66,12.33.39,2.54,2.28,3.44,4.79,3.28s3.4-1.59,3.25-4C218,74.26,218.07,72.42,218.07,70.59Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M60.86,65.83c0-5.33.28-10.68-.09-16-.27-3.76,1.06-4.81,4.61-5.17a41.5,41.5,0,0,1,12.88.22c6.6,1.36,9.82,4.47,10.47,10.27A13.39,13.39,0,0,1,81,69a18,18,0,0,1-8.69,1.84c-2.56-.17-3.66.78-3.48,3.42.16,2.32-.21,4.69.08,7,.5,3.82-1,4.77-4.69,4.75-4.37,0-3.65-2.34-3.5-5.19.26-5,.07-10,.07-15Zm7.83-8c.79,2.69-1.45,6.38,1.42,7.82s6.44.35,8.64-2.23c2.71-3.19,2.92-7.06,1-10.75-1.6-3-4.41-3.85-7.67-3.24C66.37,50.47,69.87,55,68.69,57.79Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M554.62,81c4,0,7.1,0,10.22,0,1.67,0,3.14.19,2.7,2.4-.3,1.5.09,3.6-2.44,3.61-6.16,0-12.37.44-18.48-.14-4.22-.39-2.85-3.58-1.37-5.87,3.26-5,6.79-9.88,10-14.92,2.08-3.21,4-6.59,4.63-10.43.47-2.81.23-5.75-3.26-6.22-3.06-.41-4.16,2.06-4.79,4.69-.34,1.43.5,3.4-2,3.93-3.76.78-5.32-.61-4.58-4.44,1.33-6.84,7.23-10.5,14.27-8.85,6.17,1.45,9.22,6.86,7.46,13.5-1.83,6.92-6.76,12.18-10,18.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M299.72,74.85a54.85,54.85,0,0,0,.07,7.48c.37,2.67-.69,3.16-3.07,3.82-4.41,1.23-5.18-.53-5-4.33.25-4.48.22-9,.27-13.48,0-3.27-1.1-5.49-4.91-5.36s-4.68,2.09-4.49,5.55c.25,4.81-.07,9.65.1,14.48.13,3.54-2.22,2.9-4.33,3-2.36.14-3.78-.37-3.63-3.23.23-4.32.17-8.65.22-13,0-1.83.35-3.88-.8-5.35-3.08-3.9,0-5.31,2.52-7.17,1.81-1.34,3-1,3.8,1,1.14,3,2.47,2.07,4.26.5,2.91-2.56,6.34-3.82,10.13-2.2s4.37,5.27,4.68,8.77c.27,3.14.06,6.32.06,9.48Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M195.89,72.28c.49,2.92-2,7.2,2.79,9.84.76.41.3,3-.89,4.06a4.41,4.41,0,0,1-5.58.2c-2.38-2-4.08-1.92-6.69-.35a7.43,7.43,0,0,1-9.63-1.2c-3.2-3.33-3.53-7.47-1.71-11.61,1.66-3.79,4.9-5.13,8.92-5.09,1.7,0,3.64,2.1,5,0a4.12,4.12,0,0,0-.64-4.7c-1.61-1.87-3.88-1.59-6.05-1.16-1.93.38-4.12,2.22-5.19-1.26-.7-2.26-.68-3.6,2.19-4.26a27.38,27.38,0,0,1,9.89-.64c4.5.61,7.09,3.5,7.55,8C196.1,66.62,195.89,69.13,195.89,72.28Zm-11.68,9.66a4.65,4.65,0,0,0,4.37-4.56c.22-2.37-1-4.24-3.66-4.26s-3.83,1.59-4,4.08S181.65,81.36,184.21,81.94Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M267.4,79.31c1.35,3.8,0,5.72-3.54,6.9C253.34,89.7,246.2,84.81,246,73.82c-.09-4.42.51-8.65,3.07-12.38,3.27-4.79,9.45-6.87,14.51-4.94,4.32,1.65,6.62,6.68,5.92,12.59-.33,2.71-1.23,4.3-4.38,4-2.63-.26-5.33.09-8-.08-3.38-.22-3.59,1.43-2.65,4,1.25,3.4,3.89,4.4,7.18,3.89A56.83,56.83,0,0,0,267.4,79.31Zm-8.93-11c1.24-1.14,4.61,1.4,4.49-2.59-.07-2.51-1.12-4.61-4-4.77-3.53-.19-4.62,2.36-4.79,5.15C253.94,69.33,256.73,67.6,258.47,68.34Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M245.46,228.42c-.06,6.22-5.11,11.07-11.62,11.14a11.29,11.29,0,1,1-.21-22.56C240.35,217,245.51,221.93,245.46,228.42Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M245.43,174.82c.08,6.34-4.75,11.16-11.33,11.31-6.8.15-12-4.64-12.1-11.06s4.81-11.16,11.36-11.31C240.21,163.61,245.35,168.31,245.43,174.82Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M319.75,78.6c2.4.73,4.72,1.54,7.1,2.12,1.79.43,3.92.78,4.76-1.42s-1.05-3.22-2.75-4-3.42-1.34-5-2.25c-3.77-2.18-5-5.64-4.31-9.8.73-4.39,3.69-6.6,7.87-7.12a30.56,30.56,0,0,1,6.48.11c3.23.29,3.35,2.66,3.11,5.13-.35,3.61-2.68,1.18-4.1,1.24-1.13,0-2.28-.47-3.43-.53-1.55-.07-3.08.21-3.55,2s.61,2.85,2,3.56c1.18.59,2.45,1,3.67,1.55,5.55,2.43,7.6,6.38,6.25,12-1,4.23-4.82,6.28-10.76,5.78C320.49,86.43,319.33,85.16,319.75,78.6Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M115,61.34c1.52-1.41,2.31-2.27,3.22-3,1.43-1.1,3.06-3,4.75-2.08,2.13,1.12,1.16,3.88,1.37,5.88.3,2.73-2.3,1.78-3.66,2.06-3.36.7-5.31,2-4.88,6s0,8.32.35,12.45c.23,2.69-.55,3.64-3.17,3.36-2.27-.25-5.25,1-5-3.34s.11-8.64.14-13c0-2.35,0-4.73-1.39-6.74s-1-2.93.9-4.39C111.18,55.94,113.82,55,115,61.34Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M100.9,72c0,3.16-.21,6.34,0,9.48.28,3.34-.58,4.66-4.27,4.68-3.88,0-3.76-2-3.71-4.66.13-7,.28-14,0-21C92.86,57,94.68,57,97.27,56.92s3.94.58,3.72,3.6c-.27,3.8-.06,7.64-.06,11.47Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M233,71.08c0-3.16.18-6.33,0-9.47s.28-4.8,4.15-4.77,3.82,1.8,3.76,4.6c-.14,7-.22,14,0,20.94.12,3.45-1.54,3.71-4.24,3.7s-4-.43-3.82-3.53c.26-3.81.06-7.64.06-11.47Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M306,71.2c0-3.33.18-6.67-.06-10-.22-3.12.61-4.34,4-4.37,3.61,0,4,1.5,3.9,4.47-.19,7-.22,14,0,20.95.11,3.27-1.28,3.79-4.12,3.83-3,.05-4.18-.76-3.93-3.94.29-3.63.06-7.31.06-11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M449.91,240.66c0-4,2.2-6,5.53-6.18,3.62-.2,6.21,1.8,6.32,5.57s-2.44,5.86-6,5.84C452.37,245.87,450.19,243.91,449.91,240.66Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M455.62,207.91c3.83.18,6.22,2.11,6.15,5.82-.06,3.4-2.21,5.42-5.83,5.42-3.79,0-6-1.8-6-5.7C450,209.85,452.25,208.18,455.62,207.91Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M500.87,87c-2.52,0-4.69-.89-4.72-3.79,0-2.7,1.72-4.15,4.45-4.24s4.69,1,4.8,3.83S503.64,86.9,500.87,87Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M101.49,47.08c-.52,2.77-2.11,4.09-4.88,3.91-2.37-.15-3.73-1.39-3.63-3.79.13-2.75,1.68-4.26,4.48-4.18C100.07,43.1,101.28,44.66,101.49,47.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M236.9,51c-2.72-.09-4.23-1.32-4.1-4a3.79,3.79,0,0,1,4.08-4c2.45,0,4.19,1.07,4.23,3.75C241.16,49.65,239.45,50.89,236.9,51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"47d7180d-6a46-4f66-bb22-842585ad3557\" d=\"M310.28,43c2.39.31,4,1.47,3.83,4.14-.18,2.88-2,3.95-4.7,3.85-2.38-.1-3.69-1.42-3.62-3.77C305.87,44.45,307.45,43.05,310.28,43Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M279.47,785.3c2.88-1.75,5-3.59,7.78-4.45,3.21-1,6.48-.67,8.25,1.78,2.59,3.61,4.28,2,6.83.27,8.09-5.45,15.48-1.95,16.14,7.73.39,5.8,0,11.65.17,17.48.08,2.57-1.07,2.94-3.28,3-2.44.06-2.65-1.14-2.62-3.05.07-5.33.06-10.66,0-16,0-3.91-1.31-7-5.89-7-4,0-7.76,3.47-7.8,7.26-.05,5.16-.08,10.32,0,15.48.05,2.15-.26,3.37-2.9,3.33-2.44,0-3.15-.84-3.09-3.19.14-5.33,0-10.66.05-16,0-3.78-1.2-6.61-5.46-6.89-3.83-.25-8,3.4-8.05,7.12-.11,5,0,10,0,15,0,1.94.51,3.94-2.78,4s-2.9-1.76-2.9-3.81c0-7.33-.07-14.66.09-22,0-1.48-1.35-3.79,1.62-4.37C279,780.33,278.61,783.14,279.47,785.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M246.23,693.46c-4,5.63-7.79,11.28-11.95,16.64-2,2.57-1.81,4.29.09,6.82,4.29,5.67,8.19,11.64,12.33,17.6-4.5,1.46-7.23.21-9.23-3.68-1.82-3.53-4.39-6.67-6.36-10.14-1.49-2.62-2.35-3.86-4.39-.3-2.23,3.89-5.32,7.28-7.54,11.16-1.91,3.34-4.32,4.14-8.2,3,4.51-6.21,8.81-12.28,13.3-18.22,1.41-1.87,1.53-3.19.11-5.17-4.15-5.77-8-11.73-12.1-17.73,4.48-1.36,7.2-.25,9.21,3.75,2.21,4.41,5.12,8.48,7.86,12.92,3.06-4.74,6.13-9.08,8.76-13.68C240,693.13,242.41,692.21,246.23,693.46Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M207.93,789.93c0-5.66.21-11.33-.08-17-.18-3.43,1.08-4.28,4.22-4,5.41.44,11-.88,16.15,1.89a12.6,12.6,0,0,1,6.25,15.24c-1.75,5.93-8.87,11.2-14.27,10.56-1.09-.13-1.95-.47-1.93-1.76,0-1.61.36-2.55,2.4-3,6.43-1.42,8.55-4.14,8.32-9.73-.27-6.43-8.36-11.21-14.09-8.32-1.83.92-1,2.63-1,4-.08,9.83-.06,19.65,0,29.48,0,2.06.26,3.84-2.91,3.87s-3-1.53-3-3.71C208,801.59,207.93,795.76,207.93,789.93Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M340.62,811.71c-8.14.15-14.32-6.05-14.49-14.53a16.37,16.37,0,0,1,16.05-16.88c8.17-.14,14.21,5.94,14.44,14.55A16.21,16.21,0,0,1,340.62,811.71Zm.71-26.7c-5.14-.11-9.07,4.34-9.17,10.39-.11,6.3,4,11.51,9.26,11.59s9.13-4.4,9.21-10.37C350.71,790.31,346.55,785.12,341.33,785Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M257.62,807.51c-1.76,1.08-3.24,2.18-4.87,3-4.74,2.26-9.56,1-11.66-3a9.24,9.24,0,0,1,4-12.39,20.33,20.33,0,0,1,8.07-2.19c1.66-.15,4.75,1.79,4.75-2.16,0-3.35-1.89-5.2-5.1-5.66-2.56-.37-4.87.57-7.12,1.69-1.23.62-2.56,2-3.4-.53-.62-1.86-.44-3.17,1.6-3.93a24,24,0,0,1,10.65-1.93c6.58.59,9,3.28,9.06,10,0,3.82-.1,7.65.05,11.46.09,2.26-.83,5,3.33,5.33,2,.14,1.38,2.11-.17,3.12C262.67,813,259.68,811.58,257.62,807.51ZM255.07,796c-5.92,0-9.11,2.11-8.94,6,.12,2.79,1.34,4.8,4.42,5,3.66.22,7.3-3.3,7.38-7C258,797.76,258.37,795.32,255.07,796Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M407.36,780.29c8.24.13,11.17,3,11.23,10.27,0,4-.06,8,0,12,.06,2-.39,4.31,3.06,4.55,2.49.18,1.65,2.15.31,3-2.61,1.63-5.7,3-7.81-.44-1.45-2.37-2.44-1.93-4.06-.52a10.13,10.13,0,0,1-2.57,1.5c-4.57,2-9.21.85-11.35-2.88a9.24,9.24,0,0,1,3.21-12.25,18.07,18.07,0,0,1,9.46-2.57c1.35,0,3.59,1.3,4-1.39a5.14,5.14,0,0,0-2.5-5.54c-3.3-2-6.37-.62-9.47.62-1.14.45-2.4,2.45-3.5-.11-.86-2-.58-3.46,1.67-4.29A32.21,32.21,0,0,1,407.36,780.29ZM412.93,800C413,796,413,796,409.78,796c-5.65,0-8.82,2.13-8.65,6,.12,2.79,1.35,4.8,4.44,5C409.22,807.18,412.86,803.66,412.93,800Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M312.69,727.27c0-5.86,4.95-9.81,12.43-10.36,1.93-.14,5.57,1.89,5.14-2.83-.34-3.75-2.74-5-6.15-5.07-2.24,0-4.17.94-6.14,1.83-1,.47-2.29,2-3-.37-.48-1.59-1.23-3.12,1.12-4,4.75-1.87,9.56-2.93,14.57-1.34,3.58,1.14,5.39,3.72,5.4,7.5,0,4.17-.09,8.33,0,12.49.09,2.55-1.2,6,3.62,6,1.31,0,1.12,1.77.48,2.34-2.21,2-5.84,3.77-7.43,1.2-2.68-4.35-4.5-1.72-6.9-.47C319.11,737.67,312.66,734.28,312.69,727.27Zm17.59-4.07c.63-2.54-.67-3.37-3.46-3.2-5.44.32-8.19,2.18-8.09,5.92.09,3,1.33,5.12,4.73,5.05C327.35,730.88,330.33,727.61,330.28,723.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M388.9,720c-2.33,0-4.68.19-7,0-3.84-.39-3.6,1.7-2.78,4.2,1.81,5.5,8.32,8,16,6.27,1.05-.24,2.34-1.34,3.07.08s-.25,2.57-1.61,3.12c-7.91,3.18-17.27,3.22-22.11-4.91-4.36-7.31-1.54-18.14,5.78-22.35,4.26-2.45,8.78-3,13.28-.58,4.12,2.18,5.43,5.92,5.68,10.36.17,3-.65,4.3-3.84,3.9A53.66,53.66,0,0,0,388.9,720ZM386.24,717a32.68,32.68,0,0,1,4,0c4.16.52,4-1.54,2.58-4.27-2.16-4.17-7.67-5-11.43-1.73-1.52,1.32-3.13,3-2.46,5s2.87.66,4.38.91A18.36,18.36,0,0,0,386.24,717Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M354.71,735.86c-2.66-.43-4.82-.65-6.91-1.15-1.88-.44-3.35-1.17-2.4-3.78.84-2.34,1.91-2,3.74-1.31,2.62,1,5.39,1.91,8.27,1.22,1.81-.44,3.53-1.25,3.81-3.44s-1.15-3.43-2.93-4.13c-2.3-.91-4.76-1.45-7.06-2.36-6.47-2.56-7.49-9.43-2-13.73,4.42-3.45,9.5-3.45,14.73-2.19,2.16.52,1.27,1.93,1.07,3.14-.23,1.37-.47,2.71-2.49,2-2.37-.79-4.79-1.55-7.33-1.09-2,.37-4,1.1-4.26,3.52-.28,2.27,1.43,3.27,3.14,4,2,.82,4.07,1.38,6.12,2,3.55,1.14,6.55,2.95,6.6,7.13s-2.53,7.14-6.37,8.67A40.12,40.12,0,0,1,354.71,735.86Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M364.13,788c0-6.48.05-13,0-19.43,0-2.23,0-3.76,3.06-3.7,2.75,0,2.8,1.41,2.79,3.44q-.07,19.66,0,39.35c0,2,0,3.4-2.78,3.45-3,.06-3.1-1.45-3.07-3.69C364.18,801,364.13,794.48,364.13,788Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M304.6,712c0,6.66-.09,13.32,0,20,.05,2.42-.81,3.1-3.17,3.12s-2.57-1.27-2.56-3.12q0-20,0-40c0-1.84.06-3.15,2.56-3.12s3.22.69,3.17,3.12C304.51,698.68,304.6,705.34,304.6,712Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M266.29,711.5c0-6.3,0-12.61,0-18.91,0-2.23.06-3.75,3.07-3.72,2.81,0,2.74,1.5,2.74,3.47q-.06,19.67,0,39.32c0,2,.06,3.43-2.74,3.47-3,0-3.09-1.5-3.07-3.72C266.33,724.77,266.29,718.14,266.29,711.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M390.39,810.52c-4.27,1.26-7.29.59-9.54-3.15a37,37,0,0,0-5.73-7.47c-3.68-3.59-3.2-6.51.4-9.71a33.22,33.22,0,0,0,4.88-5.63c2.14-3,4.72-4.5,9-3.14-3.29,3.65-6.33,7.26-9.64,10.6-1.91,1.93-1.91,3.23-.1,5.29C383.35,801.5,386.73,806,390.39,810.52Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M291.57,705.46c-3.35,3.71-6.34,7.22-9.57,10.5-1.81,1.84-2.16,3.12-.26,5.25,3.71,4.18,7.08,8.66,10.74,13.22-4.51,1.63-7.34.25-9.71-3.41a116.88,116.88,0,0,0-7.54-9.86c-1.26-1.55-1.31-2.66.15-4.2a100.63,100.63,0,0,0,7.43-8.68C284.94,705.48,287.4,704.12,291.57,705.46Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M412.81,720.16c0,4-.13,8,.05,11.93.12,2.57-1.05,3-3.25,3-2.43.06-2.64-1.17-2.62-3.07.06-8.12.09-16.24,0-24.36,0-2.29.94-2.73,3-2.74s3,.59,2.92,2.81C412.72,711.87,412.81,716,412.81,720.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M413.49,694.38c-.22,1.9-1,3.41-3.22,3.63a3.11,3.11,0,0,1-3.77-3c-.18-2.19.84-3.86,3.35-4C412.15,690.86,413,692.34,413.49,694.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M404.38,335c0,6.15.15,12.31-.06,18.45-.1,2.91.91,3.73,3.68,3.63,1.22-.05,4.28-1.24,3.49,1.56s1.52,7.78-3.21,8.17c-4,.33-4.07,2.08-3.92,5,.17,3.49.05,7,.28,10.47.15,2.21-.67,2.72-2.79,2.86-11,.72-11,.79-10.26-9.95.55-8.11.55-8.11-7.66-8.11-4.65,0-9.32.13-14-.06-2-.07-5,1.3-5.73-1.08-.8-2.68-2.11-5.93-.41-8.72,7.71-12.66,13.94-26.07,20.32-39.4a3.07,3.07,0,0,1,2.59-2q7.92-.84,15.82-1.79c2.57-.31,2.46,1.23,2.43,3.06-.08,6,0,12,0,17.95ZM392,326.76c-7.16,9.17-12.15,19.43-17.31,30.21,5.16,0,9.62-.16,14.07,0,2.7.13,3.33-.87,3.29-3.41C391.93,344.66,392,335.71,392,326.76Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M334.19,375c7.28,0,13.27.09,19.26-.05,2.6-.06,3.83.33,3.64,3.47-.45,7.63-.28,7.64-8.1,7.64-8.83,0-17.65.07-26.48-.06-1.79,0-4.59,1.23-5.2-1.21-.67-2.66-1.75-5.49.59-8.46,5.43-6.93,10.45-14.2,15.51-21.41a94.12,94.12,0,0,0,8.74-15.1,21.41,21.41,0,0,0,2.05-10.15c-.18-3.46-1.95-5.7-5.21-6.42s-5.92.69-7.52,3.6a15.62,15.62,0,0,0-1.53,4.7c-1.13,6.27-3.42,7.73-9.85,6.42-1.86-.38-1.89-1.37-1.91-2.81-.23-14.58,11.38-24.12,25.46-20.89,11.06,2.54,16.21,14,11.53,25.84-2.65,6.71-6.9,12.5-10.77,18.51C341.09,363.71,337.94,368.93,334.19,375Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M55.62,360.47c0-7.17-.18-14.34.08-21.49.12-3.45-1.18-4.46-4.34-4.1-2.6.3-4.77.27-5.19-3.45-.37-3.28,1.24-3.84,3.7-4.56,3.92-1.14,6.44-3.94,8-7.7,1-2.6,7.44-5.14,9.88-4.05,1.59.7.87,2,.82,3-1,20.66-.58,41.32-.33,62,0,3.69-.52,5.23-4.72,5.07-8.5-.34-8.47-.07-8.35-8.72.07-5.32,0-10.64,0-16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M424.39,373c4.51-3.63,8.79-6.94,13.65-.62,1.09,1.41,1.89-.61,2.63-1.19,2.54-1.95,5.32-3.07,8.33-1.69s3.9,4.4,4,7.53c.14,5.31.17,10.63.25,15.95.06,3.68-3,1.48-4.44,2.27-1.95,1.06-2.76-.2-2.75-2,0-4.33.18-8.65.22-13,0-2.6,0-5.2-3.72-5.19s-3.7,2.39-3.61,5.09c.13,4-.28,8,.21,12,.55,4.49-2.88,2.53-4.57,3.2-2.73,1.08-2.6-1.16-2.6-2.75,0-4.33.22-8.65.24-13,0-2.56-.69-4.66-3.92-4.53s-3.62,2.13-3.52,4.77c.16,4-.09,8,.21,12,.25,3.3-1.53,3.22-3.92,3.35-2.88.16-3.11-1.18-3.2-3.55-.22-5.88,1.56-11.84-1.44-17.66-1.09-2.11,2.3-2.66,3.61-3.95s2.28-.31,3,1C423.44,371.63,423.93,372.28,424.39,373Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M135.72,372.73c6.65-5.33,9.09-5.31,13.86.17.91-.71,1.78-1.48,2.73-2.13,5.54-3.83,10.89-1.68,11.51,5a160.75,160.75,0,0,1,.41,17.43c0,3.29-3.1,1.36-4.66,2.1-2.2,1-2.53-.74-2.53-2.33,0-4.33.19-8.65.23-13,0-2.42-.11-4.82-3.46-4.95s-4,1.95-3.87,4.83c.15,3.66-.55,7.43.14,11,.92,4.64-2,4.26-4.71,4.58-3.77.44-2.28-2.61-2.35-4.1-.18-4,.16-8,.18-12,0-2.38-.71-4.31-3.64-4.3s-3.92,1.67-3.78,4.51c.19,4.15-.06,8.33.2,12.48.2,3-1.42,3.12-3.66,3.07-1.95-.05-3.38.07-3.48-2.75-.21-6.2,1.72-12.5-1.51-18.63-.91-1.73,2.36-2.86,3.93-3.81C134.3,368.05,133.64,372.2,135.72,372.73Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M250.38,320.89c5.2-2.85,6.47-11.54,14.94-8.07l-10.11,9.39c8.4,2.44,10,5.06,9.12,12.64-.24,2.07-.72,3-3,3.6-3.35.79-4.24,0-3.63-3.31a16.17,16.17,0,0,0,.09-5c-.4-2.92-2.29-4.24-5.22-4.14-3.33.11-2.21,2.64-2.39,4.41a22.59,22.59,0,0,0,0,3.49c.15,2.45.3,4.35-3.4,4.24-3.32-.11-3.64-1.25-3.57-4.14.27-10.62.39-21.25.17-31.86-.08-3.67,2-2.94,4.09-3.2,2.52-.33,3.05.72,3,3.08C250.26,308.16,250.38,314.27,250.38,320.89Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M78.62,392c-.31-5.86,1.54-11.9-1.45-17.62-1.46-2.77,2-2.83,3.11-4.12,1.34-1.5,2.61-1.1,3.38.7.87,2,1.79,1.51,3.35.53,7.82-4.91,12.56-2.32,12.91,6.92.16,4-.09,8-1.87,11.69-1.51,3.17-3.89,6.17-7.42,5.75-6.5-.76-5.6,3.4-5.14,6.94.52,4-1.39,4.37-4.51,4.31-2,0-2.48-.74-2.41-2.64C78.72,400.29,78.62,396.13,78.62,392Zm6.74-9.2c0,1.84.08,3.34,0,4.83-.14,2.14.8,3.66,2.78,4.11,2.23.52,3.36-1.18,3.93-3a14.14,14.14,0,0,0,.9-5.33c-.27-3.07,2-7.9-3.4-8.26C83.42,374.75,85.92,380,85.36,382.78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M202,378c5.24-3.3,6.63-11.69,14.79-8.28l-9.47,9.44c3.13,1.32,6,1.69,7.58,4.25s.95,5.47,1.13,8.26c.19,3-1.66,3.41-3.89,3.91-2.53.56-3.41-.24-3-2.75.37-2.3.76-4.59-.09-6.9-.92-2.52-2.88-3-5.19-2.87-2.7.15-1.82,2.27-1.94,3.75a25.89,25.89,0,0,0,0,4.49c.27,2.63-.38,3.89-3.43,3.81-2.73-.07-3.67-.66-3.61-3.62.24-10.65.35-21.32.09-32-.09-3.74,1.89-3.36,4.29-3.59,3.4-.32,2.75,1.89,2.75,3.82Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M477.93,372.83c3.19-2.36,6.6-5.59,11-3.19,4.58,2.5,3.8,7.32,3.87,11.6.05,3.49-.31,7,.14,10.44.38,2.88-.77,3-3.09,3.52-3.19.68-4.2-.09-4-3.25.22-3.81.23-7.64.28-11.46,0-2.79-.08-5.54-4-5.47-3.54.06-4.3,2.12-4.12,5.26.23,4,0,8,.2,12,.16,2.78-1.33,3-3.37,2.8-1.69-.14-3.72.64-3.74-2.46-.06-6.35,2-12.78-1.47-19.05-.79-1.45,2.45-2.85,4.1-3.72C476.61,368.3,476.1,372.11,477.93,372.83Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M498,380.56c0-2,.39-4.09-.08-6-1-4.13,1.18-4.76,4.4-4.9,3.87-.16,2.43,2.81,2.48,4.47.12,3.64-.39,7.3-.38,10.94,0,2.43.66,4.84,3.8,4.79s4.11-2,3.93-5c-.24-3.81.05-7.65-.22-11.46-.21-2.94.95-3.63,3.69-3.57,2.45.05,3.43.52,3.47,3.29.09,6-1.68,12.14,1.48,18.1.92,1.73-2.48,2.58-3.89,3.84-1.64,1.45-2.35,0-2.88-1.21-.91-2-1.73-1.72-3.16-.39-2.44,2.28-5.44,3.5-8.67,2-3.5-1.63-4-5-4-8.47,0-2.16,0-4.32,0-6.48Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M238.89,382.74c.71,2.88-2.3,7,2.5,9.19.22.1-.16,2.91-1,3.52a4.11,4.11,0,0,1-5.11-.08c-1.86-1.79-3.12-1.26-5.05-.24-3,1.57-6.13,1.64-8.67-1s-2.89-5.9-1.71-9.27,3.7-4.64,7.23-5c1.84-.19,3.86,2.19,5.28,0,.77-1.21.18-3.07-.7-4.24-1.73-2.29-4.07-1.69-6.32-.81s-3.1-.27-3.77-2.38c-.81-2.55,1-2.39,2.3-2.67C234.93,367.27,240.32,370.13,238.89,382.74Zm-6.3,4.9c-.29-2-1.24-3.63-3.46-3.45S226,385.89,226,388s.77,3.87,3,3.77S232.28,389.8,232.59,387.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M290.65,324.45c.1,9.31-5.16,15.11-13.12,14.61a9.47,9.47,0,0,1-4.23-1.31c-4.95-2.87-7-10.6-4.77-17.5,1.91-5.89,6.26-8.74,12.57-8.27C287,312.43,290.56,317.15,290.65,324.45Zm-6.78.9c-.38-3.83.42-8.88-4.43-9s-4.73,5-4.69,8.51c0,3.72-1.17,9.56,4.2,9.65C284.07,334.62,283.25,328.87,283.87,325.35Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M115.45,380.77c.63-6.2-.65-7.49-6.38-6.13-2.14.51-3.34.49-4.08-1.95-.92-3.07,1.48-2.88,3-3.28,9.91-2.6,14.46,1.33,14.4,11.45,0,3.56-3.1,8.29,2.38,10.95.25.12-.14,2.95-1,3.56a4.45,4.45,0,0,1-5.54-.22c-1.33-1.07-2.07-1.73-3.91-.42-2.91,2.07-6.38,2.2-9.19-.36-3.1-2.83-3.08-6.61-1.68-10.17s4.56-4.61,8.2-4.19C113,380.15,114.18,380.51,115.45,380.77Zm.47,6.71c-.27-2-1.38-3.46-3.46-3.3-2.32.18-3.35,2-3.19,4.18.13,1.88,1,3.76,3.29,3.41S115.81,389.76,115.92,387.48Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M167.91,382.33a14.2,14.2,0,0,1,3.23-9.6c3.14-3.79,7.4-4.44,11.79-3.52,3.86.81,6.15,3.65,7.23,7.49,1.9,6.83-.18,14.44-5,17.59a10.61,10.61,0,0,1-11.35.57C169.16,392.34,167.89,387.91,167.91,382.33Zm6.86,1a37.1,37.1,0,0,0,.51,4.53c.47,2,1.45,3.95,3.83,4,2.06,0,3.21-1.55,3.85-3.38a20.42,20.42,0,0,0,.38-11.79c-.48-1.92-1.67-3.43-3.73-3.49s-3.11,1.52-3.88,3.33C174.85,378.56,175,380.72,174.77,383.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M551.41,396c-5.81,0-9.21-2.33-10.1-7.3s-.92-10.3,2-14.94c2.81-4.39,8.69-6.2,13.09-4.14,3.89,1.82,6,8,4.45,12.63a2.27,2.27,0,0,1-2.56,1.75,29.61,29.61,0,0,0-6,.09c-1.52.3-4.49-1.81-4.38,1.92a4.63,4.63,0,0,0,4.65,4.86c1.27.08,2.56-.62,3.85-.66,1.11,0,2.58-1.65,3.27.14a3.11,3.11,0,0,1-1.51,4.24A12.86,12.86,0,0,1,551.41,396Zm.05-16c1.34-.73,4.09,1.32,4.06-1.89,0-2.38-.94-4.93-3.77-4.93s-3.66,2.45-3.83,4.89C547.71,381.19,550.2,379.45,551.46,380.05Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M207.61,319.3c0-4.82.27-9.66-.09-14.44-.26-3.36,1.65-2.88,3.63-2.9s3.86-.34,3.73,2.9c-.3,7.46,0,14.95-.38,22.4-.24,4.14,1.3,5.19,5,4.75,2-.23,4,0,6-.05s2.11,1.07,2.12,2.56-.3,2.54-2.16,2.52c-5.32-.05-10.63-.07-15.95,0-2.16,0-2.3-1.09-2.26-2.83.11-5,0-10,0-14.92Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M565,388.87c2.16.66,3.87,1.2,5.6,1.7s3.53,1.05,4.29-1c.88-2.37-1.07-3.12-2.86-3.78-.93-.34-1.82-.8-2.72-1.21-4.47-2-5.34-5.75-4.42-10,.86-4,3.94-5.66,7.8-5.53,2.45.09,5.79-1.33,7,2.05.81,2.3.53,4.95-3.36,3.57a12.53,12.53,0,0,0-2.91-.59c-1.43-.14-2.77.23-3.25,1.71s.48,2.52,1.78,3.15c1.5.71,3,1.33,4.53,2.05,4.16,2,5,5.59,4.17,9.66s-3.82,5.46-7.79,5.43C566.16,396,564.69,394.82,565,388.87Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M533.57,361.26c.66,1.27.1,2.55-.1,3.83-.42,2.58-1.51,5.54,3.16,4.93,1.36-.17,1.48.88,1.45,2,0,1.47-.77,2.21-2.17,2-3.24-.49-3.45,1.55-3.44,3.88,0,3-.1,6,0,9,0,1.69.37,3.33,2.78,3.24,1.08,0,2.85-1,2.79,1.47,0,2-.45,3.53-2.6,4.25-4.54,1.51-8.32-.6-9.18-5.57-.76-4.44-.22-8.94,0-13.41.05-1,.39-2.72.09-2.83-8.09-3.17-.27-4.29.81-6.11C528.78,365.2,528.32,360.46,533.57,361.26Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M465.05,382.47c0,3-.19,6,.06,9,.24,2.78-.57,3.7-3.47,3.69s-3.72-.91-3.54-3.7c.37-6.12,1-12.26.17-18.38-.41-3,1.23-3.17,3.52-3.13s3.84-.07,3.45,3.09a76.48,76.48,0,0,0-.09,9.46Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M230.94,325.09c0-2.65.17-5.32-.05-7.95-.25-3,.38-4.35,3.9-4.3,4.07.05,2.91,2.42,2.88,4.61-.06,5.8-.26,11.61.05,17.4.15,2.92-1,3.27-3.38,3.23-2.21,0-3.85,0-3.61-3.06.26-3.29.06-6.62.06-9.93Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M234.7,308c-2.44,0-3.86-.88-3.93-3.12s.91-3.83,3.42-3.92c2.32-.08,3.88.89,3.91,3.38A3.27,3.27,0,0,1,234.7,308Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M462.45,365c-2.63,0-4.15-.9-4.27-3a3.45,3.45,0,0,1,3.44-4c2.38-.19,4,1.05,4,3.33A3.3,3.3,0,0,1,462.45,365Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M553,358.38c1.29.28,3,.58,3.14,2.77.14,2.36-1.43,3.37-3.4,3.45-1.8.07-3.33-1-3.29-3S550.67,358.61,553,358.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M113.56,522A28.38,28.38,0,0,1,85,492.13c.78-16.11,15.17-28.43,31.44-27.25,3.51.25,3,2.46,3.08,4.42a19,19,0,0,0,7.84,15.41,16.89,16.89,0,0,0,10.68,3.45c2.3,0,3.91.41,4.07,3.57C143,508.48,130.33,522,113.56,522ZM92.82,493.79c.05,10.57,7.51,19.13,18.32,21,9,1.56,19.64-5.69,23.06-15.38,1-2.91.92-4.3-2.44-5.28-9.88-2.86-16.25-9.45-18.58-19.51-.68-3-2-2.81-4.2-2.25A22,22,0,0,0,92.82,493.79Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M381.74,463.93a28.9,28.9,0,0,1,29.07,28.71c.13,15.51-13.24,29.06-28.89,29.24s-29.06-13-29.15-28.79A28.56,28.56,0,0,1,381.74,463.93ZM381.18,515A22.18,22.18,0,0,0,403.93,493c.06-12.24-9.77-22.52-21.78-22.76a22.68,22.68,0,0,0-22.79,22.3A22.19,22.19,0,0,0,381.18,515Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M227.4,517.08c6.28-17.12,13.34-33.22,21-50.08-7.6,0-14.62.08-21.65-.08-1.38,0-4,1.51-3.94-1.89,0-2.6.49-4.26,3.9-4.15,8.66.27,17.33.2,26,0,3.67-.07,3.83,1.36,2.65,4.18C248.5,481.51,241.73,498,236,514.8,234.42,519.29,230.64,516.17,227.4,517.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M527.42,523c-6.78.2-11.47-1-13.68-6.49-.72-1.8-2.2-4.81.76-5.35,2.28-.41,6-2.44,7.55,1.77.72,1.93,2,3.13,4.06,3,1.93-.13,3.59-.92,4-3,.47-2.28-.71-3.63-2.85-3.74-1.92-.1-2.76-.56-2.31-2.61.39-1.78.27-3.76,3-3.59,1.79.12,3.84.13,4.43-2.11.24-.94-.67-1.83-1.61-2.31a3.71,3.71,0,0,0-5.21,1.45c-2,3.75-5.22,1.85-7.91,2.1-2,.18-1.31-1.34-1-2.42a11.13,11.13,0,0,1,9-8.33c4.73-.88,9.73-1.14,13.52,2.85,2.83,3,2.5,7.17-.61,10.15-.84.8-2.18.81-1.07,2.86,4.39,8.13.14,15.27-9.14,15.83C527.63,523.05,526.8,523,527.42,523Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M210.05,489.19c0,8-.12,15.95.06,23.93.07,2.89-.5,4-3.76,4s-4.17-1-4.13-4.25c.17-12.29-.06-24.59.15-36.88,0-3.35-1-4.32-4.19-4.06s-6.31,0-9.47.06c-1.45,0-2.1-.5-2.1-2s.56-2,2-2.1c6.19-.49,12-1.81,16.9-6.2,2.06-1.83,4.63-1.64,4.55,2.53C209.94,472.57,210.05,480.88,210.05,489.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M491.5,484q-13.23,0-26.48,0c-1.78,0-4,.44-4.2-2.24-.19-3,2.12-2.81,4.17-2.81h49.46a35.38,35.38,0,0,0,4-.08c1.47-.17,2.58-1.05,2.34-2.63-.27-1.78-1.54-2.53-3.29-1.91s-4.11,2.1-4.59-1.14c-.39-2.62,1.92-3.68,4.11-4.16,4.13-.9,8.45,2.44,8.88,6.7a7.62,7.62,0,0,1-7.41,8.24C509.49,484.11,500.49,484,491.5,484Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M282.61,484.84c0,2.33,0,4.67,0,7,.08,3.34,1.55,5.79,4.88,6.73s6.33.51,8.54-2.3c1.19-1.51,2.21-3.44,4.22-1.54,1.81,1.72.15,3.49-1,4.79-3.49,4-8.26,4.13-12.9,3.22a9.73,9.73,0,0,1-8.13-9,109.18,109.18,0,0,1,0-18.44c.38-4.59,3.21-8.25,8-9.11s9.76-.85,13.19,3.65c1,1.37,2.72,3.14.65,4.76-1.69,1.32-2.84-.05-4-1.49-2.64-3.28-6.44-2.63-9.68-1.66-3,.88-3.83,3.88-3.78,6.94C282.63,480.51,282.6,482.68,282.61,484.84Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M484.56,487H505c3.25,0,5.34,1.79,6.47,4.61a7.42,7.42,0,0,1-1.57,8.31,6.53,6.53,0,0,1-7.3,1.82c-2-.7-4.38-2-3.46-4.64.85-2.48,2.83-1.44,4.53-.56s2.92.06,3.29-1.68-.68-2.51-2.17-2.72a25.32,25.32,0,0,0-3.49-.08c-11.65,0-23.3.05-34.95,0-2.1,0-5.44,1.17-5.51-2.39-.08-4.1,3.57-2.5,5.71-2.56C472.57,486.84,478.57,487,484.56,487Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M273.58,473.26a7.4,7.4,0,1,1-7.89-7.29A7.67,7.67,0,0,1,273.58,473.26Zm-3.69.17c-.49-2-1.67-3.34-3.72-3.3a3.16,3.16,0,0,0-3.39,3.42,3.21,3.21,0,0,0,3.52,3.32C268.3,476.81,269.52,475.46,269.89,473.43Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M346.16,901.1c2.29-6.87,4.25-12.34,5.92-17.9.75-2.48,1.95-3.46,4.59-3.29,3.05.21,2.18,2.41,2.31,4,.5,6.3.9,12.6,1.31,18.9.08,1.2.94,2.81-1.17,3.15s-2.3-1.29-2.42-2.83L355.53,887l-1.27-.15c-1.77,5.27-3.48,10.55-5.35,15.79-.5,1.4-.41,3.44-2.84,3.44s-2.39-2-2.9-3.42c-1.89-5.26-3.66-10.56-6.63-15.71-.45,5.34-.87,10.67-1.35,16-.12,1.33.53,3.35-2,3.05-2.26-.26-1.2-2-1.15-3.13.34-6.48.8-12.94,1.24-19.41.11-1.61-.17-3.4,2.41-3.5,2.29-.08,3.64.45,4.38,2.89C341.77,888.49,343.79,894.07,346.16,901.1Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M334.5,848.69c-1.8,5.24-3.57,10.49-5.4,15.72-.52,1.47-.41,3.46-2.73,3.61-2.72.16-2.59-2.21-3.15-3.75-1.9-5.27-3.62-10.6-5.76-17-1.91,5.12-1.18,9.38-1.59,13.5-.19,1.82-.41,3.64-.59,5.45-.12,1.16-.64,1.82-1.9,1.72-1.48-.12-1.37-1.23-1.3-2.19.47-7.13,1-14.26,1.46-21.39.11-1.52.56-2.47,2.36-2.46,2,0,3.45.08,4.18,2.45,1.77,5.84,3.82,11.6,6.2,18.72,2.27-6.72,4.17-12.19,5.93-17.69.72-2.25,1.59-3.71,4.42-3.53,3.45.23,2.26,2.69,2.43,4.38.6,6.11,1.05,12.24,1.52,18.37.11,1.38.9,3.19-1.57,3.34s-1.95-1.76-2.07-3.14c-.46-5.33-.86-10.68-1.29-16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M121.32,873.68a39.48,39.48,0,0,1,.93-4.66c1.54-5.13,5.41-8.15,10.07-8,4.49.09,7.49,3,9,8.46a15,15,0,0,1,.34,6.89c-1.34,7.24-5.63,11.23-11.46,10.7C125.06,886.55,121.28,881.18,121.32,873.68Zm16.7,1.51a17.71,17.71,0,0,0-1.59-8,5.3,5.3,0,0,0-9.93.29,15.85,15.85,0,0,0,.21,13c1,2.28,2.71,3.68,5.41,3.54,2.54-.12,3.91-1.75,4.69-3.81A33.38,33.38,0,0,0,138,875.19Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M166.49,873.41c0,7.38-4.07,13.13-9.72,13.62-4.13.35-7-1.47-8.93-5-2.82-5.22-2.21-13.09,1.39-17.45a9.39,9.39,0,0,1,9.79-3.41C163.45,862.12,166.45,867.22,166.49,873.41Zm-4,.86c0-6.43-2.25-10.22-6.13-10.31-4.14-.1-6.53,3.85-6.36,10.49.15,5.8,2.7,9.6,6.44,9.6S162.5,880.43,162.51,874.27Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M429.77,868c-5,0-8.62-3.74-8.67-8.92a9.79,9.79,0,0,1,10-10.14c5,0,8.62,3.73,8.69,8.92A9.8,9.8,0,0,1,429.77,868Zm6.26-9.26c-.78-3.23-1.26-6.85-5.76-6.76-4,.09-5.32,2.88-5.22,6.42s1.34,6.33,5.28,6.56C434.51,865.23,435.4,862.08,436,858.77Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M385.2,849.53c3.49-.38,3.49-.38,8.3,13.55,2.37-3.51,2.7-7.54,4.08-11.17.59-1.55.89-3.56,3.18-2.82,2.63.86.43,2.6.1,3.57-2.43,7.21-5.15,14.32-7.73,21.49-.58,1.6-1.1,3.62-3.23,2.73-2.34-1-.24-2.6.27-3.53,1.75-3.17,1.53-6.06.16-9.34C388.36,859.31,386.89,854.39,385.2,849.53Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M413.33,901.38c2.12-3.66,2.6-7.33,3.86-10.7.64-1.72.75-4.69,3.6-3.48,2.28,1,.1,2.84-.33,4.11-2.4,7.09-5,14.1-7.56,21.12-.5,1.39-1,3.22-3,2.49-2.62-1-.34-2.52.11-3.47,1.49-3.15,1.81-6,.23-9.35a76.12,76.12,0,0,1-4-11.26c-.32-1.11-2.32-2.77,0-3.71s3.09,1,3.65,2.84C411,893.61,412.06,897.25,413.33,901.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M372.64,906a8.93,8.93,0,0,1-8.3-9.4A10,10,0,0,1,374.89,887c5,.21,8.27,4,8.11,9.38A9.61,9.61,0,0,1,372.64,906Zm6.57-9.4c-.48-3.43-1.38-6.7-5.75-6.62-4.11.08-5.32,3.24-5.18,6.53s1.34,6.41,5.44,6.46S378.89,900.14,379.21,896.63Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M459.69,848.94c4.59-.35,6.56,1.81,6.93,6.36.29,3.48-2,7.59,2.11,10.39.52.36-.05,1.21-.6,1.64a2.89,2.89,0,0,1-3.68.24c-1.24-1-2.06-1.84-3.75-.65-2.19,1.55-4.65,1.8-6.87,0a4.55,4.55,0,0,1-1.39-5.4c1.11-3,3.61-4.06,6.56-4.5,1.73-.26,5.11,1.16,3.55-3-.9-2.38-3-2.11-5.07-1.94-1.35.11-3.17,2.88-4,0-.69-2.5,2.21-2.28,3.71-2.94A7.62,7.62,0,0,1,459.69,848.94ZM459.12,865c2-.44,3.84-1.24,3.89-4,0-1.59-.74-2.1-2.13-1.93-2.14.27-4.55.3-4.79,3.24C455.93,864.13,457,865,459.12,865Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M450.89,887c5.08,0,8.55,3.61,8.61,8.9A9.69,9.69,0,0,1,449.61,906c-5.08,0-8.54-3.63-8.59-8.92A9.65,9.65,0,0,1,450.89,887Zm4.93,9.75c-.73-3.23-1.27-6.79-5.75-6.7-4.08.08-5.18,2.93-5.13,6.45s1.37,6.28,5.27,6.52C454.43,903.25,455.21,900,455.82,896.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M354.31,849c5.23-.09,8.62,3.26,8.77,8.64.17,6-3.81,10.36-9.52,10.42-5.07.06-8.74-3.48-8.95-8.65A9.86,9.86,0,0,1,354.31,849Zm5,9.47c-.46-3.1-1.22-6.41-5.6-6.44-4.2,0-5.24,3.16-5.18,6.45s1.23,6.4,5.28,6.54S359,862.27,359.32,858.44Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M101.55,865c2.6-4.29,6.06-4.32,9.48-3.89a5.43,5.43,0,0,1,4.79,3.87c1.05,3.68-2,5.23-4.41,7.4,4.09,1.86,6.58,4.53,4.35,9.12-1.65,3.4-10,6.75-13.09,5.46a1.33,1.33,0,0,1-1-1.46,1.53,1.53,0,0,1,1.69-1.43,15.84,15.84,0,0,0,5.84-1c2.05-.88,3.39-2.21,3.28-4.47s-1.71-3.42-4-3.67c-.92-.1-2.12.23-2.48-1.07s.6-1.63,1.5-2.16c2.39-1.39,5.89-2.79,4-6.18-1.62-2.95-5-1.64-7.66-.75A15.43,15.43,0,0,1,101.55,865Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M479.68,886.94c4.21-.16,6.28,1.48,6.62,6.06.25,3.55-2.54,8,2.4,10.67.44.24-.07,1.2-.64,1.64a3.07,3.07,0,0,1-3.72.3c-1.21-.86-1.94-2-3.71-.74-2.15,1.58-4.62,1.87-6.9,0a4.63,4.63,0,0,1-1.45-5.42c1-3.07,3.57-4.21,6.55-4.49,2.22-.2,5.33.51,3.26-3.5-1.06-2-3.06-1.54-4.88-1.4-1.34.11-3.2,2.9-3.87-.13-.54-2.42,2.31-2.26,3.87-2.87A8.34,8.34,0,0,1,479.68,886.94Zm-.8,16.08c2-.36,3.81-1.15,3.94-3.91.09-1.93-1.07-2.24-2.53-2-1.93.29-4.12.41-4.3,3.12C475.86,902,476.65,903.05,478.88,903Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M431.14,881.28c.37,4.08,1.28,6.71,5.27,5.76.52-.13,1.4,0,1.42.92a1.72,1.72,0,0,1-1.82,1.91c-8.15.19-3.25,6.29-4,9.54-1,4.06,2.62,3.62,5.26,3.66.24,0,.47.36,1,.77-1.78,2.76-4.48,2.52-6.95,1.89s-3.24-2.62-3.18-5c.06-2-.11-4,0-6,.21-2.76.23-5.27-4.85-5.32C427.23,887.19,429,884.72,431.14,881.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M418.52,865.15c-1.65,3.42-4.28,3.08-6.59,2.73s-3.63-2.2-3.71-4.63c-.07-2.16-.13-4.33,0-6.48.15-2.7.35-5.31-5.07-5.42,4.43-2,5.84-4.77,8.28-8,.18,4.14,1.15,6.67,5.12,5.68.59-.15,1.4,0,1.44.89s-.23,1.88-1.2,1.86c-8.76-.13-4,6.45-4.67,10C411.31,866.2,415.71,864.65,418.52,865.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M480.34,852c-1.93,0-4.31-.62-4.78,1.71s1.87,2.7,3.57,3.28c3.37,1.15,7.11,2.17,5.37,7-1.3,3.64-7.4,5.42-11.22,3.48-.87-.45-1.79-.8-1.37-2.18s1.19-1.34,2.27-1A13.8,13.8,0,0,0,477,865c1.62.09,3.59.44,4-1.78s-1.44-2.63-3-3.17c-3-1-6.64-1.69-5.9-6s4.09-5.31,7.9-5.06c1.41.09,3.83-1,3.77,1.76C483.8,853.86,481.5,851.81,480.34,852Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M497,873c-1.65-.21-1.13-1.38-.89-2.25q4-14.9,8.15-29.77c.28-1,.8-2,2-1.78,1.88.38,1,1.86.74,2.8-2.59,9.6-5.28,19.17-7.9,28.77C498.78,872,498.54,873.05,497,873Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M387.2,892c0-3.83,0-7.66,0-11.49,0-1.55.36-2.6,2.21-2.49s1.59,1.39,1.59,2.53q0,11.49,0,23c0,1.17.09,2.39-1.64,2.49-1.88.1-2.17-1-2.16-2.53C387.22,899.64,387.2,895.81,387.2,892Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M371.07,854.26v11.48c0,1.26-.16,2.29-1.84,2.26s-1.91-1-1.91-2.28V842.26c0-1.29.32-2.25,1.93-2.26s1.82,1,1.82,2.29Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M440.38,876.64C445,871.32,444,865,444,859c0-2.65,0-5.31,0-8,0-1.07.19-2,1.58-2,1.2,0,1.9.51,1.87,1.73-.16,6.78,1,13.65-.85,20.3C445.87,873.77,444.3,876.48,440.38,876.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M460.55,914.88c5.26-7.45,2.68-15.79,3.32-23.7.12-1.43-1.06-3.91,1.44-4,3.1-.15,1.71,2.64,1.77,4.12.17,4.82.19,9.66,0,14.48C466.9,910.09,464.91,913.32,460.55,914.88Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M402.27,887.37c-1.72,3.68-6.82,5.3-5.7,9.18.95,3.26,4.14,5.87,6.45,8.91-3.36.41-10.92-6.43-10.95-9.54C392.05,893.49,399.35,887.27,402.27,887.37Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M383.44,867.73c-3.65.07-11.42-7.21-11.27-9.92.14-2.5,7.41-8.55,10.13-8.4-1.25,3.51-6.68,5.12-5.57,9.1C377.63,861.76,380.86,864.36,383.44,867.73Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M467.78,881.07a2.18,2.18,0,0,1-2.42,1.9,1.84,1.84,0,0,1-1.85-2.28,1.94,1.94,0,0,1,2.07-1.68A2.15,2.15,0,0,1,467.78,881.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M178.82,597.15c0,9.35-.06,18.59,0,27.84,0,3.3-.17,5.91-4.58,6-4.61.08-5-2.55-5-6.13.1-9.13,0-18.27,0-28.58-4.24,4.29-7.84,7.78-11.26,11.45-2.18,2.32-3.95,3.14-6.58.43s-2.75-4.46,0-7q9.72-9.33,19.09-19c2.5-2.57,4.45-2.81,7.05-.12q9.55,9.87,19.43,19.41c2.57,2.49,2.16,4.25-.15,6.65-2.51,2.6-4.26,2.21-6.6-.18C186.74,604.25,183,601,178.82,597.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M369.78,613.32c0-9.28.07-18.4,0-27.51,0-3.5.07-6.14,4.85-6.09,4.58,0,4.52,2.6,4.49,5.85-.09,9.27,0,18.54,0,28.25,4-3.84,7.73-7.25,11.27-10.82,2.12-2.14,3.93-3.44,6.64-.71,2.46,2.46,2.93,4.42.18,7.07-6.59,6.34-13,12.83-19.41,19.4-2.39,2.47-4.19,2.45-6.6,0q-9.53-9.87-19.42-19.38c-2.77-2.67-2.24-4.65.2-7.08,2.68-2.69,4.49-1.43,6.65.71C362.08,606.47,365.83,609.71,369.78,613.32Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M534.69,605.39c-7.61-7.14-8.66-12.16-3.82-17,5.28-5.29,15.13-5.36,19.78-.14,4.33,4.85,2.92,9.22-5.48,16.16,5.5,3.29,11.13,6.66,8.44,14.46-1.77,5.16-8,8.84-14.41,8.82-6.14,0-11.73-3.42-12.92-8.26C524.51,612.26,529.81,609,534.69,605.39Zm13.78,10.75c0-3.24-5.81-8.67-9.62-8.93-2.61-.18-6.9,4.71-7,8-.16,4.49,3.38,7.77,8.4,7.79C544.88,623,548.43,620.06,548.47,616.14ZM539.39,589c-2.68.29-5.42,1.53-5.7,5.45-.2,2.85,4.48,7.38,7.55,7.52,2.49.12,5.88-3.9,5.87-7C547.11,591.35,544.31,588.93,539.39,589Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M471.29,605c0,6-1.25,11.81-5.25,16.65-7.78,9.43-21.17,7.61-25.92-3.63a27.78,27.78,0,0,1,.75-24.12c3.08-6.15,8.11-9.68,15.12-9.54,6.41.13,11.54,4.69,14,11.69A31.42,31.42,0,0,1,471.29,605Zm-6.19,1.4c.06-4.55-.48-9-3-12.87-4-6.09-11.12-6.11-15.13-.12-4.14,6.19-3.81,19.85.63,25.68,4.2,5.53,11.21,5.21,14.83-.73C464.63,614.7,465.12,610.59,465.1,606.4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M222.45,602c6.45.11,11.54,7.82,9.13,15.36a15.35,15.35,0,0,1-14.41,10.35c-6.09,0-11.19-4.05-13.13-10.36-4.31-14,5.89-30.38,20.24-32.16,1.49-.19,4.23-1.88,4.83,1.47.63,3.54-2.17,3-4.17,3.24-12.83,1.61-20.6,18.59-13.38,29.3,2.19,3.25,5.2,4.65,9,3.45s6-5.4,5.32-9.67c-.61-3.67-2.59-5.93-6.57-6.35-1.43-.15-4.13,1.87-4.2-1.35-.05-2.83,2.72-2.84,4.77-3.27A18.53,18.53,0,0,1,222.45,602Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M316.38,597.57c0,2,0,4,0,6,0,3.48-1.23,7.87,5,6.84,1.22-.2,1.78.7,1.56,1.91s-.31,2.76-1.77,2.58c-6.27-.78-4.64,3.65-4.84,7-.09,1.61.73,3.6-.58,4.73-.8.68-2.58.55-3.83.32-2-.35-1.1-2.14-1.15-3.3-.36-8.59-.33-8.59-9-8.59-2,0-4,0-6,0-4.67,0-5.26-1-2.73-5.23,4.58-7.53,9.45-14.9,13.88-22.52,2.11-3.62,5.28-2.42,7.93-2.13,3,.32,1.25,3.23,1.46,4.93A60.33,60.33,0,0,1,316.38,597.57Zm-5.61-9L298,610.32c3.83,0,6.8-.06,9.76,0,2,.06,3.09-.44,3.05-2.75C310.7,601.69,310.77,595.79,310.77,588.61Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M405.46,591.51a3,3,0,0,1,1-4.25c4.7-3.57,13.43-3.83,17.85-.42s5.4,9.25,2.33,15.9c-3.38,7.33-9.15,12.89-15.38,19.59,5.76,0,10.49-.05,15.21,0,1.32,0,3.3-.63,3,2-.19,1.95-1.08,2.8-3.23,2.75-6.82-.14-13.65,0-20.48-.06-.95,0-2.2.44-2.75-.54-.75-1.34.56-2.09,1.35-2.87,4.6-4.59,9.22-9.16,12.89-14.56,2.44-3.6,4.67-7.3,4.82-11.85.19-5.89-3.23-9.08-9.08-8.07A56.29,56.29,0,0,0,405.46,591.51Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M275.54,603.29c5.25,1.71,9.1,4.28,9,9.81s-3.54,8.74-8.17,11a27.82,27.82,0,0,1-12,2.86c-1.49,0-3.89,1.37-4.28-1.71s1.91-2.87,3.87-3a24.58,24.58,0,0,0,9.66-2c3.42-1.66,5.17-4.18,4.48-8s-3.69-4.7-7-5.29c-1.44-.26-3.58,1.17-4.19-1.3-.71-2.85,1.86-3,3.52-3.84,5.66-2.85,8.14-6.44,6.67-9.66s-5.91-4.06-11.66-2.19c-1.51.5-3,1.12-4.94,1.86.23-6.06,4.91-6.06,8.37-6.94,6.25-1.6,12.22.87,14.2,5.35C284.94,594.25,283.47,596.86,275.54,603.29Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M514.81,605.85c0,6-.07,12,0,18,0,2.25-.49,3.25-3,3.27s-3-1.09-2.94-3.28c.09-8.83-.14-17.66.12-26.49.11-3.53-.9-4.83-4.41-4.35a34.69,34.69,0,0,1-5.49,0c-.95,0-2.08.14-2.15-1.35-.06-1.33.72-1.59,1.86-1.71,4.5-.46,8.7-1.47,12.43-4.46,1.9-1.51,3.67-.69,3.6,2.36C514.72,593.85,514.81,599.85,514.81,605.85Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M484.87,627.66c-2.79-.57-4.33-2.08-4.2-4.86s1.79-4.49,4.44-4.35,4.12,2,4,4.77S487.32,627.32,484.87,627.66Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M246.11,627.67c-3-.36-4.66-1.93-4.7-4.58s1.56-4.62,4.24-4.65,4.27,1.74,4.36,4.49S248.33,627.06,246.11,627.67Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M246.31,608c-3.27.06-4.74-1.73-4.84-4.29s1.19-4.57,4.06-4.71,4.3,1.64,4.45,4.29S248.74,607.68,246.31,608Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M489.17,603.47c-.2,2.68-1.35,4.51-4.23,4.52s-4.23-1.79-4.22-4.45,1.33-4.5,4.18-4.52S488.92,600.87,489.17,603.47Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M619.59,33.38c-.51,3-1.17,5.74-1.38,8.53-.13,1.75.06,3.82,2.45,4.27,2.21.41,3.38-1,4.12-2.79.82-2,1.47-4.06,2.34-6a6.26,6.26,0,0,1,6.33-4,6.91,6.91,0,0,1,6.64,4.38c1.55,3.7,1.17,7.47.52,11.26-.35,2-1.92,2-3.45,1.78-1.85-.3-1.14-1.75-.93-2.75.51-2.45,1.12-4.88.27-7.35-.45-1.3-1.23-2.46-2.73-2.55a2.82,2.82,0,0,0-2.59,2c-.86,2-1.43,4-2.2,6.06-1.41,3.68-4.11,5.64-8.06,5.21s-6.28-3-6.76-6.85a37.46,37.46,0,0,1,.22-7.91C614.65,33.67,616.19,32.21,619.59,33.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M631.86,127.9c-4.58.22-9.32-1.19-13.77.88-1.43.67-2.12-.34-2.9-1.17s-1.57-1.66-.39-2.46c2.26-1.54,1-2.8.14-4.46-2.44-4.63-.39-8.33,4.87-8.65,5-.31,11.6-.89,13,4.61,1.47,6,4.31,6.15,8.8,5.73,2.48-.24,2.36,1.6,2.54,3.31.26,2.37-1.21,2.24-2.77,2.22C638.17,127.88,635,127.9,631.86,127.9ZM624.31,117c-2.95.05-5.9-.28-5.75,3.4s3.25,2.29,5.32,2.53a20.18,20.18,0,0,0,2.46,0c1.8,0,4,.35,4.33-2.12.38-2.73-2.13-2.94-3.89-3.57A8.47,8.47,0,0,0,624.31,117Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M622.42,183.09c-2,0-4-.33-5.95.07-2.89.62-2.34-1.4-2.69-2.87-.57-2.36.93-2.35,2.54-2.32,3.15.06,6.31.07,9.46.11,2.13,0,3.54-.62,3.45-3.11s-1.3-3.11-3.54-3c-3,.14-6-.05-9,.1-2.1.1-2.91-.52-2.88-2.77s1.07-2.25,2.76-2.36c4.56-.29,9.23,1.1,13.7-1.24,1.28-.68,1.93,1.42,2.79,2.36,1.06,1.17.76,2-.53,2.68-.94.47-1.5.63-.87,2.07,3.78,8.59,2.65,10.22-6.78,10.23h-2.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M623.81,82.88c-1.91.42-4.65-1.73-6.31,1.63-.38.79-1.88.1-2.68-.45a2.44,2.44,0,0,1-.56-3.54c1.43-1.66,1.3-2.78.26-4.6a5,5,0,0,1,1-6.42c2.18-2.07,4.91-2,7.47-1.07s3.14,3.09,3.4,5.61c.13,1.28-2.11,3.54.65,3.77,3.08.25,3.23-2.36,2.71-4.62-.41-1.77-.88-3.18,1.66-3.51s2.29,1.79,2.54,3.16C635.27,80.35,632.47,83.19,623.81,82.88ZM620.21,78a2.42,2.42,0,0,0,2.67-2.46c.06-1.81-1.1-2.61-2.88-2.6-1.54,0-2.72.59-2.62,2.22A3,3,0,0,0,620.21,78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M622.21,106.28c-1.82,0-3.78-.42-5.44.09-2.63.82-2.64-.62-3-2.4-.4-2.17.25-3.1,2.52-3,3.15.17,6.31.26,9.46.27,2,0,3.62-.54,3.44-3.13-.17-2.24-1.14-3.27-3.48-3.13-2.65.16-5.31.15-8,.14-1.87,0-4,.71-3.94-2.7.09-3.57,2.52-2.25,4.19-2.4,3.91-.36,7.91.91,11.75-1,2-1,2.35,1.19,3.29,2.19,1.14,1.18.79,2.07-.53,2.67-1.57.7-1.12,1.37-.43,2.61,3.69,6.64,2,9.49-5.41,9.62-1.49,0-3,0-4.48,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M623.06,145.84c7.07,0,11,3,11.05,8.57.06,4.86-5.44,8.5-9.84,6.42-2.43-1.15-.76-3.58-1.41-5.27-.57-1.5,1.83-4.68-1.87-4.35-2.58.23-3,2.63-2.79,5,.09,1.24,2.47,3.22-.66,3.73-2.49.41-2.9-1.81-3.34-3.51C612.43,149.63,615.65,145.83,623.06,145.84Zm5.37,5.27c-2.15-.32-2.32.89-2.14,2.07s-1,3.33,1.14,3.63a2.83,2.83,0,0,0,3.31-2.81A2.9,2.9,0,0,0,628.43,151.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M624,62.17c-2.33,0-4.66-.08-7,0-1.73.07-3.17.43-3.19-2.27s.91-3,3.22-2.92c4.64.2,9.31.19,14,.05,2.36-.07,3.26.63,3.17,3.08S633,62.7,631,62.41a50.59,50.59,0,0,0-7-.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M624,134.84c2.48,0,5,.12,7.45,0,2.25-.14,2.77.84,2.76,2.91,0,2.23-1.21,2.28-2.86,2.26-4.81-.08-9.62-.22-14.42,0-2.49.11-3.14-.7-3-3.06s1.09-2.59,3.17-2.29a48.64,48.64,0,0,0,6.94.08Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M644.73,43.55c.16-2-.11-3.23.4-3.86,1.19-1.47,2.85-4,4.4-3.32,2.4,1.05.38,3.18-.57,4.49-1.32,1.82-.35,3,.55,4.42s1.88,2.88.19,3.87c-1.27.74-2-1.23-3-1.87C644.86,46.19,644.3,44.59,644.73,43.55Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M643.11,136.43c-.08,2.7-.93,3.71-2.73,3.61s-2.43-1.3-2.44-3a2.25,2.25,0,0,1,2.43-2.45C641.9,134.65,643.16,135.49,643.11,136.43Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M643.11,59.9c-.08,1.71-.85,3-2.63,3s-2.58-1.32-2.53-3.07c0-1.5.76-2.63,2.32-2.67C642,57.07,642.93,58.19,643.11,59.9Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M614,258.05a163.69,163.69,0,0,1,24.16,8c1.93.81,3.22,1.84,3.37,4.27.17,2.65-1.72,3-3.28,3.63a125.51,125.51,0,0,1-21.11,7.15c-1.18.27-3,2-3.22-.91-.14-1.66-1.11-3.84,1.87-4.21a21.11,21.11,0,0,1,2.4-.61c4.82-.11,3.35-3.66,3.79-6.42.55-3.44-1.52-4.57-4-4.71C614,264,613.36,261.86,614,258.05Zm20.89,12.47c0-.36,0-.71.07-1.06l-5.46-1.9c-1.34-.47-3.14-1.55-3.94-.1a6,6,0,0,0-.05,4.76c.88,1.91,2.56.37,3.86,0C631.24,271.7,633.06,271.09,634.9,270.52Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M622.91,360.84c7.38.09,9.76,1.78,11.12,8.49.32,1.56.81,1.87,2.16,1.8,1.66-.08,3.34.09,5-.05,2.73-.24,2.81,1.47,2.94,3.45.14,2.37-1.32,2.2-2.89,2.14-5-.19-10-.31-14.94-.52a15.27,15.27,0,0,0-7.33,1c-1.66.81-2.59.63-3.8-.72s-1-2.26.26-3.24c1-.76.74-1.48.3-2.54C612.55,363.05,614.28,360.73,622.91,360.84Zm2,10.49c1.64-.75,5.53,1.64,5.52-2.21,0-3.35-3.63-3.05-6.24-3.12a17.35,17.35,0,0,0-3.46.12,2.57,2.57,0,0,0-2.16,2.87,2.12,2.12,0,0,0,2.48,2.35C622.2,371.31,623.36,371.33,624.91,371.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M622.06,303.07c-1.83,0-3.73-.33-5.46.08-2.71.63-2.48-1.1-2.83-2.72-.47-2.21.62-2.54,2.42-2.47,3,.1,6,.1,9,.13,2.1,0,4.09,0,4.08-3,0-2.73-1.57-3.24-3.9-3.14-3,.13-6,0-9,.09-2,.09-2.48-.75-2.5-2.63s.78-2.4,2.62-2.5c4.56-.26,9.23,1.13,13.7-1.19,1.29-.67,4.27,3.65,3.21,4.19-3.28,1.65-1.27,3-.3,4.79,2.44,4.41.5,7.91-4.56,8.28-2.14.15-4.31,0-6.47,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M622,432c-2,0-4-.11-6,0-2.44.16-1.92-1.69-2.26-3-.54-2,.76-2.2,2.2-2.19,3.15,0,6.31.06,9.47.15,2.39.08,3.86-.74,3.77-3.4s-1.75-2.79-3.77-2.73c-3,.1-6-.06-9,.15-2.45.17-2.55-1.12-2.62-3-.08-2.28,1.14-2.18,2.79-2.23,4.42-.11,8.94,1.13,13.22-1.15,2-1.07,2.25,1.31,3.19,2.21s1,2-.47,2.66c-1.23.54-1.53.9-.66,2.4,4,6.88,2.09,10-5.91,10.08h-4Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M625.71,349.75c4.17,0,4.74-2.29,3.91-5-.56-1.85-.26-2.66,1.56-3.25,2.58-.83,2.31,1.33,2.6,2.5,1.89,7.51-1.2,11.08-9,10.72-2.57-.12-5.57-2.05-7.53,1.52-.15.27-2,0-2.71-.53-1-.77-.81-2.22-.39-3.23.59-1.43,2-2.4.61-4.36a5,5,0,0,1,.78-6.82c2.2-2.1,5-1.82,7.54-.95,2.72,1,3.36,3.47,3.11,6.17C626.09,347.46,625.9,348.43,625.71,349.75ZM620,344.86c-1.49-.05-2.72.44-2.66,2.12a2.84,2.84,0,0,0,2.91,2.78,2.36,2.36,0,0,0,2.61-2.37C623,345.51,621.74,344.85,620,344.86Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M613.94,402.4c-.21-3.33.91-6.06,4.16-7.17,4.62-1.59,9.23-1.3,13.21,1.79a7.53,7.53,0,0,1,2.52,8.56c-1.17,3.83-4.48,4.5-8,4.35-4.18-.17-2.44-3.41-2.93-5.56-.35-1.49,1.36-4.08-1.53-4.29-2.53-.18-2.87,2-3.3,4.11-.34,1.62,3.21,4.18-.49,4.61-3.33.4-3.21-3-3.61-5.42A8,8,0,0,1,613.94,402.4Zm12.3.3c.4,1-.83,2.95,1.4,2.89,1.46,0,3-.77,3.11-2.63a2.7,2.7,0,0,0-2.64-3C626,399.7,626.32,401.33,626.24,402.7Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M641,315.72c-2.87,1.2-6.77-2-7.35,3.39-.14,1.35-2.55.77-2.9-1.17-.94-5.18-5-2.17-7.59-2.76-2-.46-5.05-.56-4.46,3.32.12.76-.2,1.32-1,1.18-1.3-.22-2.89-.32-3.34-1.76-.91-2.93-.85-5.67,2.69-6.93,2.89-1,5.86-.86,8.86-.54,2,.21,4.66,1.95,5.35-1.89,0-.26,1.64-.51,1.65-.48C634.21,312,640,311.31,641,315.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M633.77,335.79c-2.62.18-5.71,1.61-5.86-3.16-.07-2-1.9-2-3.42-2-2.66.06-5.33.05-8,.32-2.43.24-2.62-1-2.66-2.94-.05-2.33,1.07-3,3-2.67,4.33.74,8.6.86,12.7-.94,2.17-.95,2.47,1,3.37,2,1.17,1.24,1.08,2.29-.66,3-1.42.55-1.59,1.25-.34,2.37C633.05,332.76,634.14,333.91,633.77,335.79Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M624,388.66c-2.31,0-4.64-.18-6.93,0s-3.24-.44-3.17-2.92c.07-2.24.89-2.74,3-2.62,4.76.24,9.51,1.09,14.29.2,2.46-.46,3.05.91,3,3.17,0,2.63-1.56,2.33-3.29,2.25-2.31-.1-4.62,0-6.94,0Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M640.29,389c-1.76-.32-2.42-1.5-2.34-3.18a2.37,2.37,0,0,1,2.47-2.53,2.66,2.66,0,0,1,2.66,3C643,388,642.18,389,640.29,389Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1917.68,428.38c1.3.93,3.19,1.54,2.4,3.74-.72,2-2.41,1.93-4.15,1.86-2-.08-4,0-5.94,0-8,0-10.45-4.18-7-11.85,2-.24.84,2.35,1.76,2.31,5.51-.24,7.31,2.46,6.54,7.57,0,.25.61.61.94.92,1.61-3.56,4.47,1.69,5.68-.64,1-1.87-1.46-1.92-2.65-2.5a2.42,2.42,0,0,1-1.56-2.8,2.2,2.2,0,0,1,2.45-2c1.22.1,2.81-.68,3.55.86.48,1,.23,2-1.34,1.58-.39-1.05-1.12-1.64-2.24-1.25-.3.11-.41.76-.6,1.16Zm-8.67,1.3c-.12-1.7.52-3.79-2.45-3.75-2.57,0-2.16,1.73-2.26,3.34-.13,2.09.51,3.77,2.7,3.92C1909.59,433.37,1908.83,431.15,1909,429.68Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1843.56,428.47c1.44.84,3.15,1.6,2.32,3.73-.73,1.91-2.44,1.88-4.16,1.76a71.26,71.26,0,0,0-7.3-.28c-1.73.05-3.77,1.27-4.54-1.35s2-2.87,3.31-4.1c.7-.17,1.73-.06,1.4-1.25a1.46,1.46,0,0,0-1-.79c-1.1-.18-1.3.51-1.1,1.43-.76.21-1.64.72-2.18-.22s.38-1.53,1-1.92c3-1.89,5.44,0,5.76,4.22.08,1.07.42,3.21.58,3,2.11-2.33,4.59,1.31,5.87-.13,1.82-2.06-1-2.05-2-2.6-1.26-.68-2.32-1.39-2-3a2.16,2.16,0,0,1,2-1.93c1.41-.07,3.09-.68,4.07.76.68,1,.23,1.86-1.18,1.83-.35-1-.9-1.75-2.07-1.49-.35.08-.89.59-.86.85C1841.54,428.32,1842.81,428,1843.56,428.47Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1900.42,433.92c-3.91,0-7.13-.08-10.34,0-1.57.05-3.17.24-3.64-1.65s.79-2.67,2.3-3.33c1-.45,3.18-.62,2.14-2.29s-1.62.41-2.38,1a1.3,1.3,0,0,1-1.24-.09c-.6-.58-.21-1.18.26-1.69,1.06-1.13,2.44-.92,3.75-.83,1.62.1,2.27,1.26,2.43,2.69a31.22,31.22,0,0,1,.09,3.49c0,1.15.49,2.06,1.67,2s1.59-1,1.54-2.15a15.48,15.48,0,0,1,0-4c.18-.76-3-1.6,0-2.08,1.36-.21,2.12.25,2.17,1.85C1899.23,429.13,1898.45,431.55,1900.42,433.92Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1815.3,426.12l2.24-4.67c.92,3,2.43,4.21,5.25,3.65,2-.38,3.93-.23,2.51,3a4.28,4.28,0,0,0,1.41,5.4c-2.55,1.29-5.14-.29-7.69.39-2,.54-2.19-1.15-2.48-2.74s1.36-4-1.36-5.11Zm7.84,3.37c-.18-1.62.57-3.78-2.51-3.59-2.18.13-2,1.47-2.14,3-.14,2.25.45,4.28,2.82,4.36S1823,431,1823.14,429.49Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1800.82,434c-1.64,0-2.62,0-3.61,0-.48,0-1-.11-1.47-.17a15.72,15.72,0,0,0-.12-12.86c1.9,0,3.87,0,5.83,0s3.64.71,3.92,2.89-1.11,3.31-3,4C1798.36,429.39,1798.26,429.71,1800.82,434Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1857.33,433.82h-5c1.7-4.17,2.09-8.35-.22-12.84h6c2,0,3.67.6,4,2.87s-1.2,3.34-3,4C1855.25,429.37,1855.05,429.9,1857.33,433.82Zm2.31-9.36c-.28-1.17-.79-2.3-2.39-2.41s-1.48,1.05-1.36,2c.14,1.08-.86,2.92,1.41,2.87C1858.6,426.87,1859.23,425.84,1859.64,424.46Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1871.14,426.14c1.82-.71,1.71-2.87,3.36-4.87.36,3.92,2.53,4.13,5.11,3.77,1.28-.18,3.24-.13,2.81,1.61-.63,2.59-.93,4.88.92,7.35-2.63,0-5.08,0-7.52,0-2.75.06-2.43-1.86-2.79-3.69-.29-1.51,1.76-4.41-2-4.33Zm4,3.14c-.35,2.37.69,4.07,3.09,4s1.74-2.34,1.77-3.85c0-1.77.37-3.77-2.62-3.58C1874.83,426,1875,427.54,1875.1,429.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1815.18,426.08c-2,0,.06,3.44-2.73,3-1.17-.18-3.34-1.11-3.75,1-.37,1.87,1.58,2.59,3.15,3.44-2.67,1.16-4.22,0-5.27-2.17a4.36,4.36,0,0,1,.88-5.06c1.53-1.7,3.43-1.67,5.43-.79.75.34,1.24,1.81,2.4.62Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M1871,426c-.15,1.29.83,3.09-1.83,3.09-1.26,0-3.37-1-3.74,1s1.83,2.63,3.51,3.6c-2.89.91-4.61-.09-5.57-2.36a4.41,4.41,0,0,1,1-5c2.21-2.26,4.51-1.18,6.79-.09Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1161,1024.64c-.39,3-1.92,4.38-4.63,4.35-2.44,0-4.2-1.19-4.37-3.7-.19-2.79,1.49-4.16,4.21-4.29S1160.34,1022.4,1161,1024.64Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M349.87,1025c-.39,2.8-2,4.16-4.74,4.08s-4.48-1.45-4.38-4.29c.1-2.6,1.84-3.77,4.34-3.81C347.84,1020.9,349.42,1022.27,349.87,1025Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M941.28,1024.91c-.17,2.72-1.67,4-4.18,4.07-2.73.09-4.63-1.26-4.7-4-.07-2.51,1.65-3.88,4.18-4C939.32,1020.92,941,1022.18,941.28,1024.91Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1010.89,1028.2c.71,3.85-1.12,6.59-5.38,6.69s-5.43-3.14-5.48-6.8c0-4.37,2.44-6.91,6.52-7.12C1012.14,1020.69,1010.76,1024.68,1010.89,1028.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1230.14,1028.17c.67,3.65-.79,6.75-5.49,6.73-4.24,0-5.28-3.42-5.33-7-.06-4.26,2.68-6.82,6.71-7C1231.36,1020.76,1229.93,1024.58,1230.14,1028.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M401.11,1027.54c0,5.16-1.79,7.72-5.51,7.42-4.25-.35-5.25-3.54-5.28-7.08,0-4.25,2.72-6.79,6.77-6.91C402.46,1020.8,400.87,1024.69,401.11,1027.54Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M733.89,1028.78c0-5.52,1.74-8,5.42-7.75,4,.3,5.15,3.22,5.36,6.56a7,7,0,0,1-6.89,7.44C732.13,1035.35,734.39,1031.16,733.89,1028.78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1685.48,1066.33c3.24-.65,3.86.2,3.8,2.16-.08,2.94-1.87,4.13-4.36,4.45-2.07.26-3-1.1-3-3.06C1681.88,1066.56,1684.54,1066.59,1685.48,1066.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1085.69,1066.29c3-.54,3.59.19,3.59,1.94,0,3.16-1.82,4.51-4.59,4.71-2.13.15-2.87-1.4-2.77-3.29C1082.09,1066.39,1084.78,1066.53,1085.69,1066.29Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M220.48,1066.33c3.24-.65,3.86.2,3.8,2.16-.08,2.94-1.87,4.13-4.36,4.45-2.07.26-3-1.1-3-3.06C216.88,1066.56,219.54,1066.59,220.48,1066.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M1178.81,1028.21c3.23-.51,4,.27,3.89,2.23-.18,3.06-2.09,4.32-4.76,4.56-2,.19-3-1.18-3-3.08C1175,1028.42,1177.77,1028.46,1178.81,1028.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M735.11,1066.21c3.07-.49,4,0,3.92,2.12-.06,3.18-2,4.31-4.65,4.67-2,.29-3-1.18-3.11-3C731.15,1066.5,734.06,1066.57,735.11,1066.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M1455.36,1066c2.13-.18,3.41-.1,3.36,2.15-.07,3.09-1.9,4.4-4.53,4.81-2,.31-3.09-.91-3.21-2.84C1450.76,1066.66,1453.48,1066.49,1455.36,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M1278.82,1067.42c-.33,4-2.2,5.38-4.9,5.59-2,.15-3-1.22-2.94-3.12,0-3.45,2.74-3.56,5.18-3.9C1278,1065.72,1279,1066.48,1278.82,1067.42Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M881.23,1066c.27-3.63,1.42-6.57,5.57-7,3.43-.31,6.11,2.67,6.3,6.77s-2.18,7.32-5.69,7.16C883.06,1072.77,881.77,1069.65,881.23,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M104.85,1066.2c.08-4,1.38-6.82,5.51-7.17,3.52-.29,6.51,3.14,6.31,7.32-.16,3.63-1.64,6.62-5.8,6.58C106.47,1072.89,105.21,1069.68,104.85,1066.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1030.72,1064.37c-1.73-1.14-4.51.93-4.67-1.7-.15-2.32,2.15-3.52,4.51-3.65s4.64,1.19,4.51,3.52C1034.89,1065.87,1031.72,1062.52,1030.72,1064.37Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M768.71,1028.89c-.43,2.95-1.59,5.92-5.8,6.08-3.58.14-6.15-3.13-6-7.52.13-3.81,1.79-6.37,5.91-6.41C766.12,1021,768.72,1024.35,768.71,1028.89Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1350.69,1064c.63-3.67,2.49-4.93,5.28-5,2.29,0,4,1.29,4.13,3.45.1,2.75-2.35,1.25-3.63,1.44A42.1,42.1,0,0,1,1350.69,1064Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M180.58,1066.17c-.38,3.42-1.43,6.44-5.6,6.8-3.47.3-6-2.61-6.22-6.79s2.11-7.3,5.65-7.15C178.8,1059.22,180,1062.38,180.58,1066.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1207.78,1066.2c-.42,3.49-1.53,6.48-5.71,6.77-3.44.25-6-2.72-6.17-6.86s2.19-7.28,5.75-7.08C1206,1059.28,1207.22,1062.47,1207.78,1066.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M77,1066.38c-.51,3.5-1.72,6.44-5.92,6.59-3.54.14-6.2-3.24-6-7.54.16-3.79,1.86-6.55,6-6.35C75.32,1059.29,76.5,1062.62,77,1066.38Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M527,1028.21c-.44,3.54-1.61,6.49-5.78,6.76-3.4.23-6-2.82-6.17-6.9s2.28-7.27,5.84-7C525.21,1021.33,526.43,1024.49,527,1028.21Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M419.69,1028c2.35-.31,2.36,1.13,2.3,2.75-.1,2.91-2.09,3.91-4.47,4.21-2.07.25-3-1.26-3-3.07C414.56,1028.42,417.45,1028.55,419.69,1028Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1501.79,1066.11c2-.18,3.26-.27,3.25,2.07,0,3.15-1.84,4.39-4.46,4.76-2.06.3-3-1.2-3.06-3C1497.45,1066.81,1500,1066.53,1501.79,1066.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1589,1068c.16,3.34-1.83,4.59-4.47,4.92-2.07.26-3-1.25-3-3.06,0-3.09,2.44-3.47,4.75-3.8C1587.85,1065.85,1589.35,1065.91,1589,1068Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M960.69,1028c2.27-.35,2.37,1,2.31,2.67-.1,2.92-2.07,3.93-4.45,4.25-2.07.28-3-1.23-3-3C955.56,1028.51,958.32,1028.44,960.69,1028Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M566.92,1066c2.2-.37,2.14,1.16,2.07,2.73-.14,2.87-2.1,3.91-4.51,4.17-2.07.22-2.88-1.29-3-3.1C561.38,1067.65,563.88,1065.92,566.92,1066Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M664.5,1064c-2.4,0-4.7,0-7,0-.87,0-2.13.55-2.46-.84-.24-1,.5-1.86,1.21-2.58C659.3,1057.48,663,1058.88,664.5,1064Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M494.84,1068.66c-.29,2.91-2.19,4.24-4.9,4.34-2,.08-3-1.4-2.85-3.24.21-3.35,2.9-3.48,5.36-3.78C494.47,1065.73,495.1,1066.77,494.84,1068.66Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M808.62,1028.28c3.81-.64,3.54,1.07,3.48,2.57-.13,3-2.22,4-4.67,4.08-2.16.11-2.78-1.58-2.63-3.42C805.06,1028.27,807.77,1028.49,808.62,1028.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M1399,1069.58c.48-3.08,3-3.34,5.46-3.61,2.08-.23,2.51.9,2.36,2.67-.26,3.06-2.26,4.24-4.94,4.36C1399.87,1073.08,1399.16,1071.55,1399,1069.58Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M587.1,1066.15c2.85-.39,3.83.09,3.77,2.18-.09,3.14-2.06,4.32-4.66,4.67-2,.27-3.08-1.11-3.12-3C583,1066.58,585.77,1066.44,587.1,1066.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1827.53,1066.3c3.87-.67,3.63,1,3.57,2.53-.12,3-2.2,4-4.66,4.1-2.16.12-2.79-1.56-2.65-3.41C1824,1066.28,1826.75,1066.49,1827.53,1066.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M1031.87,1029.75c0,3.61-2,4.92-4.63,5.26-2,.25-3.1-1.08-3.15-3-.08-3.41,2.57-3.76,5.05-4C1030.74,1027.82,1032.28,1028,1031.87,1029.75Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1243.4,1026a4.82,4.82,0,0,1,4.26-4.92,4.19,4.19,0,0,1,4.64,2c1.08,1.75,1.24,3.06-1.52,2.94C1248.36,1025.89,1245.94,1026,1243.4,1026Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M561.23,1026.35c-1.55-1.18-4.41,1.14-4.34-1.83.06-2.27,2.25-3.51,4.68-3.51s4.67,1.39,4.34,3.69C565.51,1027.57,562.5,1024.79,561.23,1026.35Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1796,1064.17c-1.3-1-4.17,1.34-4.06-1.68.07-2.27,2.27-3.49,4.7-3.48s4.67,1.42,4.31,3.72C1800.48,1065.4,1797.59,1063.24,1796,1064.17Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M720.84,1026a39.3,39.3,0,0,1-5.57-.06c-1.4-.21-3.89,1.28-4-1.06s2-3.64,4.37-3.81C718.84,1020.8,720.33,1022.62,720.84,1026Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path d=\"M1136.92,1064.16c-1.41-1.08-4.39,1.42-4.59-1.54-.14-2.13,2.15-3.49,4.54-3.61,2.76-.14,4.89,1.53,4.67,3.89S1138.51,1063.28,1136.92,1064.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M624.31,117a8.47,8.47,0,0,1,2.47.25c1.76.63,4.27.84,3.89,3.57-.35,2.47-2.53,2.11-4.33,2.12a20.18,20.18,0,0,1-2.46,0c-2.07-.24-5.16,1.13-5.32-2.53S621.36,117,624.31,117Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M620.21,78a3,3,0,0,1-2.83-2.84c-.1-1.63,1.08-2.21,2.62-2.22,1.78,0,2.94.79,2.88,2.6A2.42,2.42,0,0,1,620.21,78Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M628.43,151.11a2.9,2.9,0,0,1,2.31,2.89,2.83,2.83,0,0,1-3.31,2.81c-2.14-.3-.94-2.36-1.14-3.63S626.28,150.79,628.43,151.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M634.9,270.52c-1.84.57-3.66,1.18-5.52,1.7-1.3.37-3,1.91-3.86,0a6,6,0,0,1,.05-4.76c.8-1.45,2.6-.37,3.94.1l5.46,1.9C634.94,269.81,634.92,270.16,634.9,270.52Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"78048b61-63fd-4f45-bbea-49152384ee27\" d=\"M624.91,371.33c-1.55,0-2.71,0-3.86,0a2.12,2.12,0,0,1-2.48-2.35,2.57,2.57,0,0,1,2.16-2.87,17.35,17.35,0,0,1,3.46-.12c2.61.07,6.24-.23,6.24,3.12C630.44,373,626.55,370.58,624.91,371.33Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M620,344.85c1.71,0,3,.66,2.86,2.54a2.36,2.36,0,0,1-2.61,2.37,2.84,2.84,0,0,1-2.91-2.78C617.31,345.3,618.54,344.81,620,344.85Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"375c44f0-5c40-4069-b2aa-d0f1c674c26a\" d=\"M626.24,402.7c.08-1.37-.27-3,1.87-2.74a2.7,2.7,0,0,1,2.64,3c-.1,1.86-1.65,2.58-3.11,2.63C625.41,405.65,626.64,403.66,626.24,402.7Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"5e684107-0101-4f74-9afb-e0f40f5dc987\" d=\"M362.17,493.58c7-4.3,11.17-9.32,10.25-15.8l25.64,23.51-.65,1.13Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M31.07,418.09Q60.56,418,90,418q99.2,0,198.39,0c6.71,0,6.71,0,6.53,6.93-13.33,0-26.66.12-40,.12H37.51C30.86,425,30.86,425,31.07,418.09Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M594.87,832.05Q451.44,832,308,832q-138.43,0-276.87,0c0,27.17,0,54.33-.24,81.49-.05,5,1,6.59,6.38,6.59Q313,919.89,588.73,920a25,25,0,0,1,3,0c2.75.36,3.32-1,3.31-3.47Q594.88,874.3,594.87,832.05Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M166.33,1022.1c0,3.67,0,7.33,0,11,0,4.05-2.33,5.53-6,3.55-1.2-.66-1.78-1.46-3.29-.61-3.35,1.89-6.71,1.87-9.55-1.07-3.14-3.26-3.32-7.27-1.92-11.18s4.69-7,9-6.76c4.59.21,4.61-2,4.58-5.32,0-1.91-1.48-4.85,2.72-5,3.37-.09,4.85.74,4.55,4.38S166.33,1018.44,166.33,1022.1Zm-7.31,4c-.57-1.53,1.51-5-2.5-4.79-3.49.19-4.34,3-4.28,6.1,0,2.4.42,5.17,3.3,5.2C159.68,1032.67,159.08,1029.22,159,1026.12Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M314.41,1048.94c3.32-1,4.7.77,5.58,3.75,1.91,6.53,4.14,13,6,19.5.32,1.13,2.6,3.39-.46,3.79-2.14.29-5.58,1.72-6.38-1.76s-2.66-4.08-5.89-4.18c-3.43-.1-4.62,1.32-5.23,4.3s-3.25,1.9-4.94,1.71c-2.75-.32-1-2.28-.63-3.4,2-6.66,4.39-13.23,6.28-19.94C309.64,1049.55,311.11,1048.12,314.41,1048.94Zm2.26,16.71c-1-3.74-2-7.23-3.15-11.3-1.06,4.14-1.95,7.61-2.9,11.3Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M117.71,1022.29c0,3.48,0,7,0,10.46,0,4.82-2,6-6.24,3.28a1.85,1.85,0,0,0-2.39-.12c-4.2,2.14-8,2-10.91-2.14a10.53,10.53,0,0,1,1.1-13.3c1.85-2,4.13-3.79,6.86-3.52,4.2.43,4.52-1.66,4.41-4.94-.07-2.1-1.41-5.22,3-5.27,3.14,0,4.49.69,4.23,4.09C117.49,1014.63,117.71,1018.47,117.71,1022.29Zm-7.15,4.06c-.73-1.48,1.56-5-2.24-5-3.45-.05-4.54,2.94-4.61,5.9-.06,2.52.59,5.45,3.7,5.42C111.3,1032.61,110.5,1029.24,110.56,1026.35Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M42.58,1030.5c1.93-6.65,3.74-12.07,5-17.62.83-3.52,3.27-3.64,5.57-2.87,2.79.93.55,3.09.14,4.45-2.06,6.8-4.53,13.48-6.56,20.3-.73,2.43-2.25,2.67-4.11,2.37s-4.49,1.35-5.5-1.76c-2.72-8.31-5.45-16.61-8.19-25,7.41-1.2,7.42-1.2,9.33,5.32C39.64,1020.27,41,1024.84,42.58,1030.5Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M206.24,1026.92c0-2,0-4,0-6,.05-3.84,2.76-5.94,5.41-3.65,2.18,1.89,3.24.9,5,.22,5.56-2.19,9.62.49,9.82,6.48.1,3.16-.13,6.34.06,9.49.16,2.7-.55,3.77-3.53,3.83-3.27.06-4-1.2-3.78-4.1s0-5.66,0-8.5c0-1.92-.72-3.47-2.75-3.27-1.63.15-3.17,1.06-3.08,3.24.07,1.66.4,3.46-.08,5-.84,2.65,3.1,7.75-3.63,7.54-6.46-.2-2.34-5.15-3.41-7.77A6.84,6.84,0,0,1,206.24,1026.92Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M363.86,1065.67a44.46,44.46,0,0,0-.05-6c-.59-4.27,3-5.08,4.66-3.54,2.87,2.63,4.53.48,6.74-.11,4.69-1.27,8.42,1.24,8.8,6.12.26,3.32-.08,6.68.12,10,.16,2.83-.43,4.13-3.75,4.17-3.55,0-3.67-1.7-3.55-4.3s0-5,0-7.5c.07-2-.38-4-2.6-4.09s-3.47,1.41-3.31,3.94c.18,2.82-.15,5.68.08,8.49.26,3.26-1.59,3.27-4,3.39-2.86.15-3.36-1.17-3.21-3.57S363.86,1068,363.86,1065.67Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M131.32,1016.82c7.1,0,9,1.93,9.2,8.4.08,2.78-1.2,5.94,1.91,8.18.72.53.36,1.91-.56,2.58-1.72,1.24-4.23,2.08-5.56.87-2.46-2.22-4.13-1.11-6.45-.13-2.79,1.17-5.82.85-7.26-2.27s-1-6.24,2.36-8.17a10.94,10.94,0,0,1,5.17-1.53c1.08,0,3.14.67,2.88-1.53-.21-1.77-1.88-2.2-3.47-2a10.89,10.89,0,0,0-3.27,1.1c-1.45.76-2.49.87-3-1-.35-1.36-.54-2.7,1.14-3.3C126.78,1017.24,129.15,1016.47,131.32,1016.82Zm-.13,11.46c-1.06.4-2.64.48-2.67,2.24a1.78,1.78,0,0,0,2.33,1.85c1.26-.24,2.54-.74,2.4-2.58C133.15,1028.43,132.53,1028.08,131.19,1028.28Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M397.12,1055.83c7.49,0,9.5,2.05,9.77,8.83.11,2.62-1.19,5.66,1.86,7.7.62.42.41,1.62-.26,2.23-1.58,1.43-4.11,2.51-5.45,1.38-3-2.53-5.19-.87-7.92,0a5,5,0,0,1-6.37-2.55,5.47,5.47,0,0,1,1.21-7.22,9.45,9.45,0,0,1,6.34-2.45c1.1,0,3.12.48,2.69-1.76-.28-1.51-1.71-2-3.15-1.76a12.68,12.68,0,0,0-3.29,1.07c-1.38.66-2.31,1-3-.9s-.35-2.88,1.43-3.47C393.15,1056.23,395.34,1055.38,397.12,1055.83Zm2.43,12.89c.06-1.4-.87-1.68-1.91-1.47-1.4.28-3.1.62-2.94,2.51a1.84,1.84,0,0,0,2.51,1.56C398.53,1071,399.66,1070.38,399.55,1068.72Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M252.11,1016.82c7.28,0,9.19,2,9.34,8.86.06,2.67-1,5.65,1.85,7.78.59.44.39,1.63-.29,2.24-1.61,1.41-4,2.33-5.5,1.24-2.76-2-4.77-1-7.43,0a5,5,0,0,1-6.93-3.06c-1.26-3.1-.25-5.57,2.34-7.37a10.36,10.36,0,0,1,5.63-1.73c1,0,3.16.75,2.79-1.51-.27-1.65-1.9-2.23-3.53-2a19.41,19.41,0,0,0-2.83.91c-1.31.44-2.67,1.73-3.42-.84-.61-2.11,0-3,2-3.57A16.2,16.2,0,0,1,252.11,1016.82Zm2,12.83c.17-1.36-.76-1.6-1.81-1.39-1.4.28-3,.5-2.87,2.53a1.63,1.63,0,0,0,2,1.59C252.83,1032.12,254.41,1031.78,254.14,1029.65Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M64.48,1016.83c7.31,0,9.08,1.84,9.29,8.81.08,2.6-1.32,5.74,2.11,7.57.73.38.52,1.58-.1,2.22-1.5,1.55-3.93,2.63-5.4,1.56-3.09-2.26-5.49-1-8.39,0a4.78,4.78,0,0,1-6.2-2.82,5.62,5.62,0,0,1,1.19-6.87,9.75,9.75,0,0,1,5.82-2.53c1.26-.14,3.66.71,3.33-1.64s-2.5-2.19-4.39-1.59a11.4,11.4,0,0,0-2.33.87c-1.3.79-2.07.55-2.67-.87s-.76-2.67.84-3.35C59.88,1017.24,62.27,1016.49,64.48,1016.83Zm2.15,13c0-1.41-.78-1.85-1.92-1.58-1.4.34-3.18.61-2.92,2.61a1.91,1.91,0,0,0,2.56,1.6C65.7,1032.06,66.84,1031.45,66.63,1029.79Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M189.33,1028.18c2.2,4.71,5.51,4.57,9,4,1.06-.18,2.4-.85,2.92.79.42,1.34-.44,2.13-1.49,2.82-3.59,2.35-11.43,1.83-14.59-1s-3.92-7.77-1.93-11.94a11.29,11.29,0,0,1,12.56-5.9,7.91,7.91,0,0,1,5.45,4c2.69,4.89,1.33,7.24-4.18,7.25Zm.17-3.81c2.26.22,4.27,1.08,5.8-.45.68-.68-.32-1.94-1.25-2.33C191.56,1020.53,190.5,1022,189.5,1024.37Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M339.43,1067c.76-2.68,1.87-5.32,2.2-8,.42-3.5,2.72-3.45,5-3,3.36.64,1,2.76.66,4.13-1.1,4-2.54,7.88-3.61,11.88-.76,2.85-1.83,4.36-5.31,4.43-3.73.08-4.8-1.61-5.62-4.62-1.08-4-2.68-7.84-3.67-11.85-.28-1.12-2.62-3.45.36-3.82,2.16-.27,5.51-2,6.62,2.06.81,3,1.6,6,2.4,8.93Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M420,1055.84c2.33,0,3.16,0,4,0,1.51.07,3.28,0,2.84,2.31-.36,1.86-.9,3.68-3.59,2.56-1.72-.72-4.18-1.35-4.71.81-.46,1.87,2.16,1.92,3.67,2.34,3.23.89,6.28,2.21,5.71,6.25-.53,3.79-3.4,5.64-7,6-2.61.22-5.28.41-7.89-.53-1.83-.66-2.09-1.54-1.56-3.37.59-2,1.54-2.23,3.18-1.39a6.23,6.23,0,0,0,1,.23c1.85.61,4.44,2,5.09-.59.56-2.21-2.45-1.89-4-2.49-2.53-1-4.94-2-4.95-5.44s2-5.17,4.88-6.1A15,15,0,0,1,420,1055.84Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M85.91,1020.58a41,41,0,0,1,3.85-3.25,4.17,4.17,0,0,1,4.3-.18c1.5,1,.29,2.74.36,4.16.1,2-1.46,1.81-2.77,1.88-6.39.36-5.39,5.09-5.18,9.11.17,3.3-.18,5.48-4.4,5-2.09-.26-2.91-.81-2.86-3,.11-4.32-.09-8.64.1-12.95.06-1.55-1.27-4,1.61-4.44C83.34,1016.57,86.11,1016.22,85.91,1020.58Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M238.6,1027.06c0,2-.11,4,0,6,.18,2.67-.13,4.28-3.61,4.25s-3.66-1.76-3.59-4.36c.11-4,.14-8,0-12-.11-2.75.34-4.19,3.72-4.24,3.66-.06,3.57,1.88,3.48,4.36C238.54,1023.06,238.6,1025.06,238.6,1027.06Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M178.41,1027.11c0,2-.11,4,0,6,.19,2.68-.18,4.23-3.6,4.23s-3.73-1.51-3.64-4.21c.15-4.46.16-8.94,0-13.4-.1-2.65,1.27-3,3.37-2.89s4.1-.32,3.88,2.87C178.27,1022.14,178.41,1024.63,178.41,1027.11Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M358.84,1066.15c0,2-.13,4,0,6,.24,2.88-.56,4.15-3.81,4.15s-3.47-1.43-3.39-4c.13-4.49.15-9,0-13.48-.08-2.46.88-3.22,3.2-3.07,2,.14,4.15-.31,4,2.87C358.73,1061.15,358.83,1063.65,358.84,1066.15Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M266.92,1026.88c0-2,.12-4,0-6-.21-2.76.28-4.23,3.68-4.18s3.18,1.93,3.16,4.17c-.05,4.5-.15,9,0,13.49.1,2.74-1.39,2.84-3.44,2.84s-3.63-.09-3.43-2.84C267.06,1031.89,266.92,1029.38,266.92,1026.88Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M435.7,1064.16c-2.1-.08-3.44-1.78-3.41-4.09a3.91,3.91,0,0,1,4.38-4.23,3.81,3.81,0,0,1,4,4.11C440.64,1062.51,439.13,1064.22,435.7,1064.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M440.77,1072.07c-.58,2.65-1.89,4.3-4.75,4.08a3.75,3.75,0,0,1-3.73-4.31c.15-2.57,1.74-4.2,4.61-4C439.58,1068.05,440.37,1069.93,440.77,1072.07Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M284.76,1038.2c-3.15-.07-4.61-1.68-4.64-4.06,0-2.64,1.52-4.38,4.41-4.28,2.68.09,3.85,1.75,3.82,4.26A3.75,3.75,0,0,1,284.76,1038.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M283.69,1016.81c2.64.14,4,1.6,4,4.15s-1.28,4.1-3.92,4.19c-2.92.09-4.4-1.7-4.31-4.34A4,4,0,0,1,283.69,1016.81Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M274.39,1011c-.5,2.34-2,3.27-4.32,3.19-2.07-.07-3.79-.85-3.7-3.12.09-2.45,1.92-3.25,4.2-3.22C272.69,1007.85,274,1008.79,274.39,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M239.27,1011a3.93,3.93,0,0,1-4.34,3.21c-2.07-.07-3.71-.78-3.65-3.11.06-2.54,1.88-3.22,4.12-3.23A3.58,3.58,0,0,1,239.27,1011Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M174.92,1014.2c-2.09.06-3.78-.6-3.93-2.85-.17-2.46,1.43-3.46,3.76-3.53,2.06-.06,3.72.6,3.9,2.84C178.84,1013.18,177.13,1014.06,174.92,1014.2Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M96.37,638.23c-2.09-.22-2.43-2.08-3.17-3.49-4.12-7.79-4.1-7.8-12.14-5.19-1.7.54-3.45,1.74-5.13.28-1.92-1.66.15-3.36.24-5.05,0-.31.27-.6.37-.92,2.41-7.29,2.41-7.29-4.45-10.73-.89-.45-1.83-.81-2.67-1.34-2.63-1.67-3.14-3.29,0-5.08,3-1.7,7.77-2.24,8.65-5.16.85-2.77-1.47-6.53-2.49-9.83-.93-3,.22-4.07,3.18-3.57.16,0,.3.13.46.17,3.18.9,6.47,3.39,9.45,2.41s3.32-5.4,5-8.17c2.16-3.48,3.52-3.55,5.59-.12.08.14.14.3.23.44,1.78,2.72,2,7.28,5.08,8,2.6.65,5.93-1.48,8.91-2.48,1.31-.44,2.51-.94,3.68.22s.53,2.39.2,3.69c-.82,3.18-3.74,6.73-2.31,9.3s5.41,3.4,8.33,4.93c3.24,1.69,3.41,3.4.18,5.27-3,1.73-7.69,2.19-8.67,5.13-.86,2.58,1.45,6.26,2.5,9.41s-.3,5.12-3.21,3.69c-7.77-3.81-12.86-2.51-15.24,6.26A2.47,2.47,0,0,1,96.37,638.23Zm.16-43.07a14.1,14.1,0,0,0-14.16,14.27,14.78,14.78,0,0,0,14,14.19c7.55.14,14.34-6.59,14.4-14.29A14.2,14.2,0,0,0,96.53,595.16Z\" transform=\"translate(-15.64 -9.12)\" />\n            <path class=\"abb2b51d-c096-48c8-94b6-b8897bc5f630\" d=\"M96.52,620.29a10.92,10.92,0,0,1-11.09-11,11.49,11.49,0,0,1,11-11.33c6-.15,11.61,5.51,11.47,11.49A11.2,11.2,0,0,1,96.52,620.29Z\" transform=\"translate(-15.64 -9.12)\" />\n        </svg>\n    <mat-form-field class=\"full-width\">\n        <input matInput type=\"text\" placeholder=\"Pavadinimas\" name=\"name\" [(ngModel)]=\"this.screen.name\">\n    </mat-form-field>\n\n    <div class=\"flex\">\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"Pagrindinė spalva\" name=\"primaryColor\" [(ngModel)]=\"this.screen.settings.primaryColor\">\n        </mat-form-field>\n\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"Akcentinė spalva\" name=\"accentColor\" [(ngModel)]=\"this.screen.settings.accentColor\">\n        </mat-form-field>\n    </div>\n    <div class=\"flex\">\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"1 teksto spalva\" name=\"text1\" [(ngModel)]=\"this.screen.settings.text1\">\n        </mat-form-field>\n\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"1 fono spalva\" name=\"bg1\" [(ngModel)]=\"this.screen.settings.bg1\">\n        </mat-form-field>\n    </div>\n    <div class=\"flex\">\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"2 teksto spalva\" name=\"text2\" [(ngModel)]=\"this.screen.settings.text2\">\n        </mat-form-field>\n\n        <mat-form-field class=\"block\">\n            <input matInput type=\"color\" placeholder=\"2 fono spalva\" name=\"bg2\" [(ngModel)]=\"this.screen.settings.bg2\">\n        </mat-form-field>\n\n    </div>\n\n    <mat-form-field class=\"block-double\">\n        <mat-label>Vykstančių pamokų kortelės pasikeičia kas</mat-label>\n        <input matInput type=\"number\" name=\"timetableDuration\" [(ngModel)]=\"this.screen.settings.timetableDuration\" min=\"0.6\" max=\"4\" step=\"0.1\" value=\"1\">\n        <mat-hint>sek.</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"block-double\">\n        <mat-label>Skambučio grojimo trukmė</mat-label>\n        <input matInput type=\"number\" name=\"bellDuration\" [(ngModel)]=\"this.screen.settings.bellDuration\" min=\"15\" max=\"300\" step=\"0.1\" value=\"60\">\n        <mat-hint>sek.</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"block-double\">\n        <mat-label>Turinio kortelės / nuotraukos pasikeičia kas</mat-label>\n        <input matInput type=\"number\" name=\"SlideDuration\" [(ngModel)]=\"this.screen.settings.SlideDuration\" min=\"15\" max=\"300\" step=\"0.1\" value=\"60\">\n        <mat-hint>sek.</mat-hint>\n    </mat-form-field>\n\n    <div class=\"flex\">\n        <div style=\"margin-right: 40px;\">Lietuvos valstybės vėliava<br>rodoma atmintinomis dienomis</div>\n        <mat-slide-toggle (change)=\"this.screen.settings.LT = !this.screen.settings.LT;\" [checked]=\"this.screen.settings.LT\">{{ this.screen.settings.LT ? 'Taip': 'Ne' }}</mat-slide-toggle>\n    </div>\n    <!-- <div class=\"toggle-grid\">\n        <label><i class=\"fas fa-redo-alt\"></i> Rodomi Horoskopai</label>\n        <mat-slide-toggle (change)=\"this.formData.repeatTimes = !this.formData.repeatTimes;\" [checked]=\"this.formData.repeatTimes\">{{ this.formData.repeatTimes ? 'Kartoti': 'Nėra' }}</mat-slide-toggle>\n    </div> -->\n\n    <!-- <div class=\"toggle-grid\">\n        <label><i class=\"fas fa-redo-alt\"></i> Pasikartojimas</label>\n        <mat-slide-toggle (change)=\"this.formData.repeatTimes = !this.formData.repeatTimes;\" [checked]=\"this.formData.repeatTimes\">{{ this.formData.repeatTimes ? 'Kartoti': 'Nėra' }}</mat-slide-toggle>\n    </div> -->\n\n    <!-- <div class=\"toggle-grid\">\n        <label><i class=\"fas fa-redo-alt\"></i> Pasikartojimas</label>\n        <mat-slide-toggle (change)=\"this.formData.repeatTimes = !this.formData.repeatTimes;\" [checked]=\"this.formData.repeatTimes\">{{ this.formData.repeatTimes ? 'Kartoti': 'Nėra' }}</mat-slide-toggle>\n    </div> -->\n\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">{{ (this.config.edit) ? 'Išsaugoti' : 'Pridėti' }}</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-times/new-times.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-times/new-times.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Naujas pamokų laikas</h1>\n<div *ngIf=\"!this.busy\">\n    <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Pavadinimas\" [(ngModel)]=\"this.name\">\n    </mat-form-field>\n    <div class=\"flex\">\n        <div class=\"allTimes\">\n            <span *ngFor=\"let t of new; let i = index\"> {{ ((i + 1) % 2 == 1) ? math.round((i+1) / 2) + '. ' + wrap(t.h) + ':' + wrap(t.m)  : ' - ' + wrap(t.h) + ':' + wrap(t.m) + ' \\n' }}</span>\n            <div *ngIf=\"this.input\">{{ this.current }}.&nbsp;<input type=\"time\" class=\"inline\" [(ngModel)]=\"this.startTime\"> - <input type=\"time\" class=\"inline\" [(ngModel)]=\"this.endTime\"></div>\n        </div>\n        <button type=\"button\" class=\"btn small\" (click)=\"addLesson()\"><i [ngClass]=\"{ 'fas': true, 'fa-plus': !this.input, 'fa-check': this.input }\" ></i>&nbsp;{{ this.input ? 'Patvirtinti' : 'Pridėti ' + (this.current + 1) + ' pamoką' }}</button>\n    </div>\n    <mat-dialog-actions>\n        <button type=\"button\" (click)=\"save()\" class=\"btn\">Išsaugoti šį rinkinį</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</div>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/show-key/show-key.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/show-key/show-key.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Ekrano nuoroda</h1>\n<div *ngIf=\"!this.config.data.clue\" class=\"error\"><i class=\"fas fa-times-circle\"></i>Prašome perkrauti puslapį!</div>\n<textarea rows=\"8\" cols=\"35\" readonly>{{ 'https://ekranas.info/show/' + this.config.data.clue }}</textarea>\n<mat-dialog-actions>\n    <button type=\"button\" class=\"btn\" (click)=\"updateKey()\">Generuoti naują raktą</button>\n    <button type=\"button\" class=\"btn\" mat-dialog-close>Atlikta</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/logo/logo.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/logo/logo.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex margin20\">\n    <img [src]=\"this.loginService.user.school.logo\" style=\"width:200px;\" class=\"logo\" alt=\"Logotipo nepavyko rasti arba jis dar neįkeltas!\">\n    <div *ngIf=\"this.loginService.user.role > 1\">\n        <input type=\"file\" name=\"logo\" accept=\"image/*\" #logo (change)=\"logoUpload(logo.files);logo.value ='';\">\n        <button type=\"button\" class=\"btn\" name=\"button\" (click)=\"logo.click()\">Keisti</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/screens/screens.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/screens/screens.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container margin flex\" style=\"max-width: 700px;\" *ngFor=\"let screen of this.screens; let i = index\">\n    <span>{{ screen.name }}</span>\n    <span style=\"color: var(--s4)\">Būsena nežinoma</span>\n    <div><button class=\"btn small\" (click)=\"showKey(i)\">Nuoroda</button></div>\n    <div><button class=\"btn small\" (click)=\"edit(i)\">Pasirinktys</button></div>\n</div>\n<button style=\"margin-left:20px;\" class=\"btn\" (click)=\"add()\"><i class=\"fas fa-plus\"></i>&nbsp;Pridėti naują ekraną</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Nustatymai</div>\n\n<section class=\"fixed\">\n\n    <div class=\"container\">\n        <h3>\n            <i class=\"fas fa-desktop\"></i>\n            <span>Ekranai</span>\n        </h3>\n        <div class=\"margin20\">\n            <app-screens></app-screens>\n        </div>\n    </div>\n\n\n    <div class=\"container\">\n        <h3>\n            <i class=\"fas fa-clock\"></i>\n            <span>Pamokų laikas</span>\n        </h3>\n        <app-times></app-times>\n    </div>\n\n\n    <!-- <div class=\"container\">\n        <h3>\n            <i class=\"fas fa-sliders-h\"></i>\n            <span>Pritaikymas</span>\n        </h3>\n        <div class=\"margin20\">\n            <label for=\"timetableRepeat\" class=\"bl\">Vykstančių pamokų kortelės pasikeičia kas</label>\n            <input type=\"number\" name=\"timetableRepeat\" id=\"timetableRepeat\" min=\"0.4\" max=\"5\" step=\"0.1\" value=\"1\">s\n            <label for=\"bellDuration\" class=\"bl\">Skambučio grojimo trukmė </label>\n            <input type=\"number\" name=\"bellDuration\" min=\"10\" max=\"300\" step=\"0.1\" id=\"bellDuration\" value=\"60\">s\n        </div>\n    </div> -->\n\n\n    <div class=\"container\" *ngIf=\"this.loginService.user.role > 1\">\n        <h3>\n            <i class=\"fas fa-users\"></i>\n            <span>Vartotojai</span>\n        </h3>\n        <app-users></app-users>\n    </div>\n\n\n\n    <div class=\"container\">\n        <h3>\n            <i class=\"fas fa-image\"></i>\n            <span>Švietimo įstaigos logotipas</span>\n        </h3>\n        <app-logo></app-logo>\n    </div>\n\n    <div class=\"container\">\n        <h3>\n            <i class=\"fas fa-sitemap\"></i>\n            <span> interneto tinklo viešas IP adresas </span>\n        </h3>\n        <div class=\"margin20\">\n            <input type=\"text\" name=\"ip\" (change)=\"update()\" [(ngModel)]=\"this.settings.ip\" pattern=\"^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$\" required class=\"in\">\n        </div>\n        <div class=\"margin20\">\n            <div class=\"info\"><i class=\"fas fa-info-circle\"></i> IP viešas adresas svarbus saugumo atžvelgiu, jis suteikia galimybę informaciniam ekranui veikti įstaigos patalpose.</div>\n            <!-- <div class=\"info\"><i class=\"fas fa-info-circle\"></i>\n            <span onclick=\"$(this).html('</i>Šio tinklo viešas IP ').css('font-weight', 'bold');\">\n              Norėdami sužinoti šio tinklo viešą IP adresą spauskite čia.\n            </span>\n        </div> -->\n        </div>\n    </div>\n\n\n    <!-- Pagrindinės informacijos rodymo laikas -->\n    <div class=\"container\">\n        <h3>\n            <i class=\"far fa-eye\"></i>\n            <span>Ekranų funkcionavimo laikas</span>\n        </h3>\n        <div class=\"margin20\">\n            <input type=\"time\" required name=\"turnOnTime\" (change)=\"update()\" [(ngModel)]=\"this.settings.turnOnTime\"> - <input type=\"time\" required name=\"turnOffTime\" (change)=\"update()\" [(ngModel)]=\"this.settings.turnOffTime\">\n        </div>\n        <div class=\"margin20\">\n            <div class=\"info\"><i class=\"fas fa-info-circle\"></i> Į ši laikotarpį nepatenkančiu laiku bei šeštadieniais ir sekmadieniais bus rodomas tik dabartinis laikas ir įstaigos logotipas! </div>\n        </div>\n    </div>\n\n\n\n\n    <!-- <div class=\"container\">\n          <h3>\n          <i class=\"fab fa-facebook\"></i>\n          <span>Facebook puslapio fanų atvaizdavimas</span>\n        </h3>\n          <div style=\"margin:20px;\">\n            <a href=\"#fbbb\" rel=\"modal:open\">\n              <button type=\"button\" class=\"btn\">Rodyti pasirinkimus</button>\n            </a>\n            <div class=\"modal\" id=\"fbbb\">\n              <h1>Facebook duomenys</h1>\n              <label for=\"fbToken\">Access Token:</label>\n              <input type=\"text\" name=\"fbToken\" value=\"\">\n              <h3>Sukurta - </h3>\n            </div>\n          </div>\n        </div> -->\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/times/times.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/times/times.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display:flex;flex-wrap: wrap;\">\n    <div class=\"option\" *ngFor=\"let time of times; let k = index\">\n        <i class=\"fas fa-minus-circle minus\" title=\"Ištrinti šių laikų rinkinį\" (click)=\"delete(k)\" *ngIf=\"this.loginService.user.role > 1\"></i>\n        <div class=\"selectBox\" [class.active]=\"time.active\" (click)=\"select(k)\">\n            <h2>{{ time.name }}</h2>\n            <div>\n                <span *ngFor=\"let t of time.times; let i = index\"> {{ ((i + 1) % 2 == 1) ? math.round((i+1) / 2) + '. ' + wrap(t.h) + ':' + wrap(t.m)  : ' - ' + wrap(t.h) + ':' + wrap(t.m) + ' \\n' }}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"option selectBox add\" (click)=\"add()\" *ngIf=\"this.loginService.user.role > 1\">\n        <i class=\"fas fa-plus\"></i>\n        <h2>Pridėti</h2>\n    </div>\n\n    <div class=\"margin20\" *ngIf=\"this.loginService.user.role > 1\">\n        <div class=\"info\"><i class=\"fas fa-info-circle\"></i>Pridėjus naują pamokų laiką, nepamirškite paspausti ant jo kortelės, tada jis taptų numatytasis (kraštinės spalva pasikeis į raudonai rusvą)!</div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/users/users.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/users/users.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"responsive\" style=\"padding:5px 10px;\">\n    <table>\n        <thead>\n            <tr>\n                <th>Prisijungimo vardas</th>\n                <th>Vardas, pavardė</th>\n                <th>El. pašto adresas</th>\n                <th>Teisės</th>\n                <th>Paskutinis prisijungimas</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of users; let i = index\">\n                <td [class.disabled]=\"!user.username\">{{ (user.username) ? user.username : 'Nenustatyta' }}</td>\n                <td>{{ user.name }}</td>\n                <td>{{ user.email }}</td>\n                <td>{{ this.getRoleName(user.role) }}</td>\n                <td>{{ user.lastLogin }}</td>\n                <td *ngIf=\"this.loginService.user.role > 1\">\n                    <div class=\"flex\" *ngIf=\"user.role < 3\">\n                        <i class=\"fas fa-edit\" (click)=\"edit(i);\"></i>\n                        <i class=\"fas fa-trash\" (click)=\"delete(i)\"></i>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<button style=\"margin-left:20px;\" class=\"btn\" (click)=\"add()\"><i class=\"fas fa-plus\"></i>&nbsp;Pridėti naują vartotoją</button>\n<div class=\"margin20\">\n    <div class=\"info\">\n        <i class=\"fas fa-info-circle\"></i>\n        <div>\n            <div>Administratorius - Gali koreguoti visą turinį ir nustatymus (įskaitant vartotojus).</div>\n            <div>Redaktorius - Gali koreguoti visą turinį (tvarkaraščiai, pranešimai).</div>\n            <div>Mokytojas - Gali tik pridėti naujus pranešimus.</div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/dialog-change-settings/dialog-change-settings.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/dialog-change-settings/dialog-change-settings.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tvarkarasčio nustatymai</h1>\n<form #timetableSettings=\"ngForm\" (ngSubmit)=\"sendSettings(timetableSettings)\" *ngIf=\"!this.busy\">\n\n    <mat-form-field class=\"full-width\">\n        <mat-label></mat-label>\n        <mat-select [(ngModel)]=\"this.dialogData.settings.showTimetable\" name=\"showTimetable\">\n            <mat-option [value]=\"true\">Tvarkaraščio rodymas įjungtas</mat-option>\n            <mat-option [value]=\"false\">Tvarkaraščio rodymas išjungtas</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <div class=\"full-width semesters\">\n        <mat-form-field>\n            <mat-label>Pirmas pusmetis prasideda</mat-label>\n            <input matInput type=\"date\" name=\"firstSemester\" [(ngModel)]=\"this.dialogData.settings.firstSemester\">\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Antras pusmetis prasideda</mat-label>\n            <input matInput type=\"date\" name=\"secondSemester\" [(ngModel)]=\"this.dialogData.settings.secondSemester\">\n        </mat-form-field>\n    </div>\n\n    <mat-form-field class=\"full-width\">\n        <mat-label>Mokslo metų pabaiga</mat-label>\n        <input matInput type=\"date\" name=\"endSemesters\" [(ngModel)]=\"this.dialogData.settings.endSemesters\">\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button type=\"submit\" class=\"btn\">Išsaugoti</button>\n        <button type=\"button\" class=\"btn\" mat-dialog-close>Atšaukti</button>\n    </mat-dialog-actions>\n</form>\n<spinner *ngIf=\"this.busy\"></spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/edit-timetable/edit-timetable.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/edit-timetable/edit-timetable.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">{{ this.semester == 1 ? 'I' : 'II' }} pusmečio {{ this.days[this.day - 1] }}</div>\r\n<div class=\"margin20 container\">\r\n    <div class=\"responsive\">\r\n        <table id=\"timetable\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Disciplina</th>\r\n                    <th>1 pamoka</th>\r\n                    <th>2 pamoka</th>\r\n                    <th>3 pamoka</th>\r\n                    <th>4 pamoka</th>\r\n                    <th>5 pamoka</th>\r\n                    <th>6 pamoka</th>\r\n                    <th>7 pamoka</th>\r\n                    <th>8 pamoka</th>\r\n                    <th *ngIf=\"this.loginService.user.role > 0\">Veiksmai</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let row of rows; let i = index\" [class.blink]='row.busy'>\r\n                    <td>\r\n                        <div>\r\n                            <p>\r\n                                <span>{{ row.name }}</span>\r\n                                <span style=\"color:red;\" *ngIf=\"!row.name\">NERASTA DISCIPLINA!</span>\r\n                            </p>\r\n                            <p class=\"dinfo\">\r\n                                {{ (row.name) ? row.teacher + ' · ' + row.room : 'Prašome pasirinkti iš naujo!' }}\r\n                            </p>\r\n                        </div>\r\n                        <button *ngIf=\"row.edit\" type=\"button\" class=\"btn small\" (click)=\"openDisciplineSelectDialog(i);\"><i class=\"fas fa-chalkboard\"></i>&nbsp;Keisti</button>\r\n                    </td>\r\n                    <ng-template [ngIf]=\"row.edit\" [ngIfElse]=\"notEditInput\">\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[1]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[2]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[3]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[4]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[5]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[6]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[7]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"row.lessons[8]\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </ng-template>\r\n                    <ng-template #notEditInput>\r\n                        <td>{{ row.lessons[1] }}</td>\r\n                        <td>{{ row.lessons[2] }}</td>\r\n                        <td>{{ row.lessons[3] }}</td>\r\n                        <td>{{ row.lessons[4] }}</td>\r\n                        <td>{{ row.lessons[5] }}</td>\r\n                        <td>{{ row.lessons[6] }}</td>\r\n                        <td>{{ row.lessons[7] }}</td>\r\n                        <td>{{ row.lessons[8] }}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"this.loginService.user.role > 0\">\r\n                        <div class=\"flex\">\r\n                            <ng-template [ngIf]=\"row.edit\" [ngIfElse]=\"notEditing\">\r\n                                <button (click)=\"save(i)\" class=\"save btn\">Išsaugoti</button>\r\n                            </ng-template>\r\n                            <ng-template #notEditing>\r\n                                <i class=\"fas fa-edit\" (click)=\"edit(i)\"></i>\r\n                                <i class=\"fas fa-trash\" (click)=\"delete(i)\"></i>\r\n                            </ng-template>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot *ngIf=\"this.loginService.user.role > 0\">\r\n                <tr>\r\n                    <td>\r\n                        <p>\r\n                            <span>{{ this.newRow.name }}</span>\r\n                        </p>\r\n                        <p class=\"dinfo\" *ngIf=\"this.newRow.room\">\r\n                            {{ this.newRow.teacher + ' · ' + this.newRow.room }}\r\n                        </p>\r\n                        <button type=\"button\" name=\"button\" (click)=\"openDisciplineSelectDialog();\" class=\"btn small\"><i class=\"fas fa-chalkboard\"></i>&nbsp;Pasirinkti</button>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[1]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                            <mat-autocomplete #main=\"matAutocomplete\">\r\n                                <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-autocomplete>\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[2]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[3]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[4]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[5]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[6]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[7]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" maxlength=\"20\" [(ngModel)]=\"this.newRow.lessons[8]\" (input)=\"filter($event.target.value)\" (change)=\"all()\" [matAutocomplete]=\"main\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <button (click)=\"save()\" class=\"btn\">Pridėti</button>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"container flex\">\r\n    <input type=\"button\" class=\"btn\" [routerLink]=\"['/tvarkarastis']\" value=\"Grįžti\">\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/select-discipline/select-discipline.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/select-discipline/select-discipline.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Disciplinos pasirinkimas</h1>\n<div class=\"selectedDiscipline flex\" *ngIf=\"this.current.name\">\n    <h4>Pasirinkta:</h4>\n    <div>\n        <p>{{ this.current.name }}</p>\n        <p class=\"dinfo\">{{ this.current.teacher + ' · ' + this.current.room}}</p>\n    </div>\n</div>\n<div style=\"margin: 20px 0px;\">\n    <!-- <input type=\"text\" class=\"full-width\" name=\"dfg\" id=\"Sdiscipline\"> -->\n    <form class=\"example-form\">\n        <mat-form-field class=\"full-width\">\n            <input type=\"text\" placeholder=\"Disciplina\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.id\">\n                    <div class=\"option\">{{ option.name }}</div>\n                    <div class=\"option dinfo\">{{ option.teacher + ' · ' + option.room }}</div>\n                </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"fixed\">\r\n    <div class=\"main-title\">\r\n        <h1>Tvarkaraštis</h1>\r\n        <div class=\"tools\">\r\n            <button type=\"button\" class=\"transparent\" (click)=\"openSettings()\"><mat-icon>settings</mat-icon></button>\r\n            <button type=\"button\" name=\"button\" routerLink=\"/disciplinos\">Disciplinos<mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </div>\r\n        <div class=\"mobile\">\r\n            <button type=\"button\" name=\"button\" routerLink=\"/disciplinos\">Disciplinos<mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            <button type=\"button\" (click)=\"openSettings()\">Tvarkaraščio nustatymai<mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            <button type=\"button\" name=\"button\" (click)=\"this.selected = (this.selected == 1 ? 2 : 1)\">{{ this.selected == 1 ? 'Antras' : 'Pirmas'}} pusmetis <mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"warning\" *ngIf=\"this.data.currentSemester != 0 && this.data.numberOfSavedRows < 0\" @EnterLeaveX>\r\n        <i class=\"fas fa-exclamation-triangle\"></i>\r\n        <span>Pusmetis jau prasidėjęs, bet nėra įvesta {{this.data.currentSemester == 1 ? 'pirmojo' : 'antrojo'}} tvarkaraščio duomenų!</span>\r\n    </div>\r\n    <div class=\"info\" *ngIf=\"!this.data.settings.showTimetable && this.data.settings.firstSemester != ''\" @EnterLeaveX>\r\n        <i class=\"fas fa-info\"></i>\r\n        <span>Tvarkaraštis nerodomas!</span>\r\n    </div>\r\n    <div class=\"container\" *ngIf=\"this.data.settings.firstSemester != ''\" @EnterLeaveY>\r\n        <div class=\"selector\">\r\n            <button type=\"button\" style=\"background: transparent;border: none;\" (click)=\"this.selected = (this.selected == 1 ? 2 : 1)\" *ngIf=\"this.selected == 2\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon>\r\n            </button>\r\n            <div class=\"semester\">\r\n                <h1>{{ this.selected == 1 ? 'Pirmas' : 'Antras'}} pusmetis</h1>\r\n                <h2>{{ this.selected == 1 ? this.data.settings.firstSemester + \" - \" + this.data.settings.secondSemester : this.data.settings.secondSemester + \" - \" + this.data.settings.endSemesters}}</h2>\r\n            </div>\r\n            <button type=\"button\" class=\"transparent\" (click)=\"this.selected = (this.selected == 1 ? 2 : 1)\" *ngIf=\"this.selected == 1\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"week\">\r\n            <button type=\"button\" class=\"day\" [routerLink]=\"[this.selected, 1]\">\r\n                <p>P</p>\r\n                <div class=\"label\">PIRMADIENIS</div>\r\n                <mat-icon>{{ this.loginService.user.role == 0 ? 'remove_red_eye' : 'edit'}}</mat-icon>\r\n            </button>\r\n            <button type=\"button\" class=\"day\" [routerLink]=\"[this.selected, 2]\">\r\n                <p>A</p>\r\n                <div class=\"label\">ANTRADIENIS</div>\r\n                <mat-icon>{{ this.loginService.user.role == 0 ? 'remove_red_eye' : 'edit'}}</mat-icon>\r\n            </button>\r\n            <button type=\"button\" class=\"day\" [routerLink]=\"[this.selected, 3]\">\r\n                <p>T</p>\r\n                <div class=\"label\">TREČIADIENIS</div>\r\n                <mat-icon>{{ this.loginService.user.role == 0 ? 'remove_red_eye' : 'edit'}}</mat-icon>\r\n            </button>\r\n            <button type=\"button\" class=\"day\" [routerLink]=\"[this.selected, 4]\">\r\n                <p>K</p>\r\n                <div class=\"label\">KETVIRTADIENIS</div>\r\n                <mat-icon>{{ this.loginService.user.role == 0 ? 'remove_red_eye' : 'edit'}}</mat-icon>\r\n            </button>\r\n            <button type=\"button\" class=\"day\" [routerLink]=\"[this.selected, 5]\">\r\n                <p>Pn</p>\r\n                <div class=\"label\">PENKTADIENIS</div>\r\n                <mat-icon>{{ this.loginService.user.role == 0 ? 'remove_red_eye' : 'edit'}}</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/not-found/not-found.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/not-found/not-found.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-container flex\">\n    <a [routerLink]=\"['/']\">\n        <img class=\"logo\" src=\"assets/logolight.svg\" alt=\"Ekranas.info\">\n    </a>\n    <div class=\"text-container\">\n        <div class=\"status-code\">404</div>\n        <h1>Toks puslapis nerastas!</h1>\n    </div>\n    <button type=\"button\" class=\"btn\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Sugrįžti atgal!</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/snackbar/snackbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/snackbar/snackbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @snackbar [ngClass]=\"['snackbar', snackbar.type]\" *ngFor=\"let snackbar of this.snackbars\">\n    <i [ngClass]=\"{'fas': true, 'fa-times': snackbar.type == 'error', \n                    'fa-exclamation': snackbar.type == 'warning', \n                    'fa-info': snackbar.type == 'info', \n                    'fa-check': snackbar.type == 'success'\n                }\"></i>\n    <span> {{ snackbar.message }}</span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/spinner/spinner.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/spinner/spinner.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/p.gif\" alt=\"Loading ...\" />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/unauthorized/unauthorized.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/unauthorized/unauthorized.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-container flex\">\n    <div class=\"flex\">\n        <img src=\"assets/logolight.svg\">\n        <mat-icon matSuffix>lock</mat-icon>\n    </div>\n    <div class=\"text-container\">\n        <h1>Neautorizuota prieiga!</h1>\n        <h2>Prašome prisijungti</h2>\n    </div>\n    <button type=\"button\" class=\"btn\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Prisijungti</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".account {\n  max-width: 900px;\n  margin: 20px auto; }\n\n.item-row button {\n  width: 100px;\n  justify-self: end; }\n\n.item-row {\n  padding: 20px;\n  box-shadow: 0 0 10px 5px #0000001a;\n  margin: 10px;\n  display: grid;\n  border-radius: 100px;\n  margin: 30px auto; }\n\n.item-row > div,\n.item-row > strong {\n  align-self: center; }\n\n@media only screen and (min-width: 800px) {\n  .item-row {\n    grid-template-columns: 3fr 4fr 1fr;\n    position: relative;\n    overflow: hidden; }\n  .item-row::before {\n    content: \"\";\n    -webkit-clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);\n    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);\n    background: var(--ff);\n    height: 100%;\n    position: absolute;\n    width: 300px;\n    z-index: -9; } }\n\n@media only screen and (max-width: 800px) {\n  .item-row {\n    grid-template-columns: 2fr auto;\n    grid-column-gap: 10px;\n    max-width: 500px; }\n  .item-row > :first-child {\n    font-size: 0.9em;\n    color: #dbb064; }\n  .item-row strong {\n    grid-row: 2;\n    word-break: break-word; }\n  .item-row button {\n    grid-column: 2;\n    grid-row: 1/3;\n    justify-self: center;\n    align-self: center; } }\n\n#userRights > section {\n  display: grid; }\n\n#userRights > section > div {\n  padding: 15px 30px;\n  background: #eee;\n  margin: 10px;\n  border-radius: 100px; }\n\n#userRights > section > div.selected {\n  background: var(--s4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9DOlxcVXNlcnNcXG1hcnR5XFxPbmVEcml2ZVxcRG9rdW1lbnRhaVxcZWtyYW5hcy5pbmZvXFxhZG1pbi1wYXJ0L3NyY1xcYXBwXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBRWIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUdyQjs7RUFFSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxXQUFXO0lBQ1gsMkRBQTJEO0lBQzNELG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVyxFQUFBLEVBQ2Q7O0FBR0w7RUFDSTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBRWxCO0lBQ0ksV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBRTFCO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCLEVBQUEsRUFDckI7O0FBR0w7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLXJvdyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbi5pdGVtLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCA1cHggIzAwMDAwMDFhO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4ICMwMDAwMDAxYTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1yb3c+ZGl2LFxyXG4uaXRlbS1yb3c+c3Ryb25nIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLml0ZW0tcm93IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnIgMWZyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcm93OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAlLCA4NSUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwJSwgODUlIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZmKTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB6LWluZGV4OiAtOTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLml0ZW0tcm93IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciBhdXRvO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcm93PiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgY29sb3I6ICNkYmIwNjQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yb3cgc3Ryb25nIHtcclxuICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcm93IGJ1dHRvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN1c2VyUmlnaHRzPnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuI3VzZXJSaWdodHM+c2VjdGlvbj5kaXYge1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4jdXNlclJpZ2h0cz5zZWN0aW9uPmRpdi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zNCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-email/change-email.component */ "./src/app/account/change-email/change-email.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/account/change-password/change-password.component.ts");
/* harmony import */ var _change_username_change_username_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-username/change-username.component */ "./src/app/account/change-username/change-username.component.ts");
/* harmony import */ var _show_role_show_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-role/show-role.component */ "./src/app/account/show-role/show-role.component.ts");








var AccountComponent = /** @class */ (function () {
    function AccountComponent(loginService, dialog) {
        this.loginService = loginService;
        this.dialog = dialog;
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.openRoleDialog = function () {
        this.dialog.open(_show_role_show_role_component__WEBPACK_IMPORTED_MODULE_7__["ShowRoleComponent"], {
            data: { role: this.loginService.user.role }
        });
    };
    AccountComponent.prototype.openUsernameDialog = function () {
        this.dialog.open(_change_username_change_username_component__WEBPACK_IMPORTED_MODULE_6__["ChangeUsernameComponent"], {
            data: { username: this.loginService.user.username }
        });
    };
    AccountComponent.prototype.openEmailDialog = function () {
        this.dialog.open(_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_4__["ChangeEmailComponent"], {
            data: { email: this.loginService.user.email }
        });
    };
    AccountComponent.prototype.openPasswordDialog = function () {
        this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], {
            data: {}
        });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/change-email/change-email.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/account/change-email/change-email.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/change-email/change-email.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/change-email/change-email.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangeEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailComponent", function() { return ChangeEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");






var ChangeEmailComponent = /** @class */ (function () {
    function ChangeEmailComponent(config, dialogRef, http, snackBar, logginService) {
        this.config = config;
        this.dialogRef = dialogRef;
        this.http = http;
        this.snackBar = snackBar;
        this.logginService = logginService;
        this.email = '';
        this.password = '';
        this.busy = false;
    }
    ChangeEmailComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid)
            return;
        this.busy = true;
        this.http.post('/api/auth/change/email', form.value).subscribe(function (success) {
            _this.logginService.user.email = _this.email;
            _this.snackBar.show(success.message, 'success');
            _this.dialogRef.close();
        }, function (error) {
            _this.snackBar.show('Klaida! ' + error.error, 'error');
            _this.busy = false;
        });
    };
    ChangeEmailComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    ChangeEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-email',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-email/change-email.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-email.component.scss */ "./src/app/account/change-email/change-email.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ChangeEmailComponent);
    return ChangeEmailComponent;
}());



/***/ }),

/***/ "./src/app/account/change-password/change-password.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/change-password/change-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(data, dialogRef, http, snackBar) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.http = http;
        this.snackBar = snackBar;
        this.busy = false;
    }
    ChangePasswordComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        this.http.post('/api/auth/change/password', form.value).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
            _this.dialogRef.close();
        }, function (error) {
            _this.snackBar.show('Klaida! ' + error.error, 'error');
            _this.busy = false;
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.component.scss */ "./src/app/account/change-password/change-password.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/account/change-username/change-username.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/account/change-username/change-username.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2hhbmdlLXVzZXJuYW1lL2NoYW5nZS11c2VybmFtZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/change-username/change-username.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/change-username/change-username.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangeUsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUsernameComponent", function() { return ChangeUsernameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");






var ChangeUsernameComponent = /** @class */ (function () {
    function ChangeUsernameComponent(config, dialogRef, http, snackBar, logginService) {
        this.config = config;
        this.dialogRef = dialogRef;
        this.http = http;
        this.snackBar = snackBar;
        this.logginService = logginService;
        this.NewUsername = '';
        this.password = '';
        this.busy = false;
        this.OldUsername = this.config.username;
    }
    ChangeUsernameComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        this.http.post('/api/auth/change/username', form.value).subscribe(function (success) {
            _this.logginService.user.username = _this.NewUsername;
            _this.snackBar.show(success.message, 'success');
            _this.dialogRef.close();
        }, function (error) {
            _this.snackBar.show('Klaida! ' + error.error, 'error');
            _this.busy = false;
        });
    };
    ChangeUsernameComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    ChangeUsernameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-username',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-username.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-username/change-username.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-username.component.scss */ "./src/app/account/change-username/change-username.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ChangeUsernameComponent);
    return ChangeUsernameComponent;
}());



/***/ }),

/***/ "./src/app/account/show-role/show-role.component.scss":
/*!************************************************************!*\
  !*** ./src/app/account/show-role/show-role.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  display: grid; }\n\nsection > div {\n  padding: 15px 30px;\n  background: #eee;\n  margin: 10px;\n  border-radius: 100px; }\n\nsection > div.selected {\n  background: var(--s4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaG93LXJvbGUvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcYWNjb3VudFxcc2hvdy1yb2xlXFxzaG93LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Nob3ctcm9sZS9zaG93LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbnNlY3Rpb24+ZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuc2VjdGlvbj5kaXYuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tczQpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/account/show-role/show-role.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/show-role/show-role.component.ts ***!
  \**********************************************************/
/*! exports provided: ShowRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRoleComponent", function() { return ShowRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var ShowRoleComponent = /** @class */ (function () {
    function ShowRoleComponent(config) {
        this.config = config;
    }
    ShowRoleComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ShowRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-role',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/show-role/show-role.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-role.component.scss */ "./src/app/account/show-role/show-role.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], ShowRoleComponent);
    return ShowRoleComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./need-auth-guard.service */ "./src/app/need-auth-guard.service.ts");
/* harmony import */ var _ui_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/not-found/not-found.component */ "./src/app/ui/not-found/not-found.component.ts");
/* harmony import */ var _ui_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/unauthorized/unauthorized.component */ "./src/app/ui/unauthorized/unauthorized.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _timetable_edit_timetable_edit_timetable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timetable/edit-timetable/edit-timetable.component */ "./src/app/timetable/edit-timetable/edit-timetable.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _disciplines_disciplines_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./disciplines/disciplines.component */ "./src/app/disciplines/disciplines.component.ts");
/* harmony import */ var _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./invitation/invitation.component */ "./src/app/invitation/invitation.component.ts");






// Components








var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"] },
    { path: 'kvietimas/:clue', component: _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_13__["InvitationComponent"] },
    { path: 'pranesimai', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'tvarkarastis', component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_6__["TimetableComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'disciplinos', component: _disciplines_disciplines_component__WEBPACK_IMPORTED_MODULE_12__["DisciplinesComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'tvarkarastis/:semester/:day', component: _timetable_edit_timetable_edit_timetable_component__WEBPACK_IMPORTED_MODULE_7__["EditTimetableComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'nustatymai', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'paskyra', component: _account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"], canActivate: [_need_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]] },
    { path: 'unauthorized', component: _ui_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_5__["UnauthorizedComponent"] },
    { path: '404', component: _ui_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap\");\nbody {\n  margin: 0;\n  font-family: 'Nunito', 'sans-serif';\n  font-size: 18px; }\n.container {\n  width: 80%;\n  margin: 0 auto; }\nheader {\n  background: #6f00ff;\n  padding: 0.4em 1em; }\nheader a {\n    color: white;\n    text-decoration: none; }\nheader .logo {\n    width: 60px; }\nheader nav {\n    float: right; }\nheader nav ul {\n      list-style-type: none;\n      margin: 0;\n      display: -webkit-box;\n      display: flex; }\nheader nav ul li a {\n        padding: 1em; }\nheader nav ul li a:hover {\n          background: #5900cc; }\nh1 {\n  margin-top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFZO0FBSVo7RUFDSSxTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGVBQWUsRUFBQTtBQUduQjtFQUNJLFVBQVU7RUFDVixjQUFjLEVBQUE7QUFHbEI7RUFDSSxtQkFiQTtFQWNBLGtCQUFrQixFQUFBO0FBRnRCO0lBSVEsWUFBWTtJQUNaLHFCQUFxQixFQUFBO0FBTDdCO0lBUVEsV0FBVyxFQUFBO0FBUm5CO0lBV1EsWUFBWSxFQUFBO0FBWHBCO01BYVkscUJBQXFCO01BQ3JCLFNBQVM7TUFDVCxvQkFBYTtNQUFiLGFBQWEsRUFBQTtBQWZ6QjtRQWlCZ0IsWUFBWSxFQUFBO0FBakI1QjtVQW1Cb0IsbUJBQWlDLEVBQUE7QUFPckQ7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kcHJpbWFyeTogcmdiKDExMSxcclxuMCxcclxuMjU1KTtcclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsICdzYW5zLXNlcmlmJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDFlbTtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaSBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: fader, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");




var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ], { optional: true }),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true })
    ]),
]);
var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.title = 'school-screen-admin-web';
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData;
        // && outlet.activatedRouteData['animation'];
    };
    AppComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            animations: [
                fader
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/__ivy_ngcc__/fesm5/ngx-loading-bar-http-client.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/__ivy_ngcc__/esm5/ngx-scrollreveal.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _ui_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/spinner/spinner.component */ "./src/app/ui/spinner/spinner.component.ts");
/* harmony import */ var _ui_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/unauthorized/unauthorized.component */ "./src/app/ui/unauthorized/unauthorized.component.ts");
/* harmony import */ var _ui_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ui/not-found/not-found.component */ "./src/app/ui/not-found/not-found.component.ts");
/* harmony import */ var _notifications_dialogs_select_notification_select_notification_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./notifications/dialogs/select-notification/select-notification.component */ "./src/app/notifications/dialogs/select-notification/select-notification.component.ts");
/* harmony import */ var _notifications_dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./notifications/dialogs/add-notification/add-notification.component */ "./src/app/notifications/dialogs/add-notification/add-notification.component.ts");
/* harmony import */ var _notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./notifications/notification/notification.component */ "./src/app/notifications/notification/notification.component.ts");
/* harmony import */ var _notifications_dialogs_delete_notification_delete_notification_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./notifications/dialogs/delete-notification/delete-notification.component */ "./src/app/notifications/dialogs/delete-notification/delete-notification.component.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm5/ngx-masonry.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _timetable_edit_timetable_edit_timetable_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./timetable/edit-timetable/edit-timetable.component */ "./src/app/timetable/edit-timetable/edit-timetable.component.ts");
/* harmony import */ var _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./account/change-password/change-password.component */ "./src/app/account/change-password/change-password.component.ts");
/* harmony import */ var _account_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./account/change-email/change-email.component */ "./src/app/account/change-email/change-email.component.ts");
/* harmony import */ var _account_change_username_change_username_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./account/change-username/change-username.component */ "./src/app/account/change-username/change-username.component.ts");
/* harmony import */ var _account_show_role_show_role_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./account/show-role/show-role.component */ "./src/app/account/show-role/show-role.component.ts");
/* harmony import */ var _disciplines_disciplines_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./disciplines/disciplines.component */ "./src/app/disciplines/disciplines.component.ts");
/* harmony import */ var _disciplines_new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./disciplines/new-discipline/new-discipline.component */ "./src/app/disciplines/new-discipline/new-discipline.component.ts");
/* harmony import */ var _timetable_select_discipline_select_discipline_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./timetable/select-discipline/select-discipline.component */ "./src/app/timetable/select-discipline/select-discipline.component.ts");
/* harmony import */ var _settings_dialogs_new_times_new_times_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./settings/dialogs/new-times/new-times.component */ "./src/app/settings/dialogs/new-times/new-times.component.ts");
/* harmony import */ var _settings_dialogs_show_key_show_key_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./settings/dialogs/show-key/show-key.component */ "./src/app/settings/dialogs/show-key/show-key.component.ts");
/* harmony import */ var _settings_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./settings/dialogs/edit-user/edit-user.component */ "./src/app/settings/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var _ui_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ui/snackbar/snackbar.component */ "./src/app/ui/snackbar/snackbar.component.ts");
/* harmony import */ var _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./invitation/invitation.component */ "./src/app/invitation/invitation.component.ts");
/* harmony import */ var _settings_users_users_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./settings/users/users.component */ "./src/app/settings/users/users.component.ts");
/* harmony import */ var _settings_times_times_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./settings/times/times.component */ "./src/app/settings/times/times.component.ts");
/* harmony import */ var _settings_logo_logo_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./settings/logo/logo.component */ "./src/app/settings/logo/logo.component.ts");
/* harmony import */ var _settings_dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./settings/dialogs/new-screen/new-screen.component */ "./src/app/settings/dialogs/new-screen/new-screen.component.ts");
/* harmony import */ var _settings_screens_screens_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./settings/screens/screens.component */ "./src/app/settings/screens/screens.component.ts");
/* harmony import */ var _timetable_dialog_change_settings_dialog_change_settings_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./timetable/dialog-change-settings/dialog-change-settings.component */ "./src/app/timetable/dialog-change-settings/dialog-change-settings.component.ts");







// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
























// import { MatSnackBarModule} from '@angular/material/snack-bar';



























// import { from } from 'rxjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__["TimetableComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsDialogComponent"],
                _ui_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"],
                _ui_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_30__["UnauthorizedComponent"],
                _ui_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"],
                _notifications_dialogs_select_notification_select_notification_component__WEBPACK_IMPORTED_MODULE_32__["SelectNotificationComponent"],
                _notifications_dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_33__["AddNotificationComponent"],
                _notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
                _notifications_dialogs_delete_notification_delete_notification_component__WEBPACK_IMPORTED_MODULE_35__["DeleteNotificationComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_38__["AccountComponent"],
                _timetable_edit_timetable_edit_timetable_component__WEBPACK_IMPORTED_MODULE_39__["EditTimetableComponent"],
                _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_40__["ChangePasswordComponent"],
                _account_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_41__["ChangeEmailComponent"],
                _account_change_username_change_username_component__WEBPACK_IMPORTED_MODULE_42__["ChangeUsernameComponent"],
                _account_show_role_show_role_component__WEBPACK_IMPORTED_MODULE_43__["ShowRoleComponent"],
                _disciplines_disciplines_component__WEBPACK_IMPORTED_MODULE_44__["DisciplinesComponent"],
                _disciplines_new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_45__["NewDisciplineComponent"],
                _timetable_select_discipline_select_discipline_component__WEBPACK_IMPORTED_MODULE_46__["SelectDisciplineComponent"],
                _settings_dialogs_new_times_new_times_component__WEBPACK_IMPORTED_MODULE_47__["NewTimesComponent"],
                _settings_dialogs_show_key_show_key_component__WEBPACK_IMPORTED_MODULE_48__["ShowKeyComponent"],
                _settings_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_49__["EditUserComponent"],
                _ui_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_50__["SnackbarComponent"],
                _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_51__["InvitationComponent"],
                _settings_users_users_component__WEBPACK_IMPORTED_MODULE_52__["UsersComponent"],
                _settings_times_times_component__WEBPACK_IMPORTED_MODULE_53__["TimesComponent"],
                _settings_logo_logo_component__WEBPACK_IMPORTED_MODULE_54__["LogoComponent"],
                _settings_dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_55__["NewScreenComponent"],
                _settings_screens_screens_component__WEBPACK_IMPORTED_MODULE_56__["ScreensComponent"],
                _timetable_dialog_change_settings_dialog_change_settings_component__WEBPACK_IMPORTED_MODULE_57__["DialogChangeSettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                // MatSnackBarModule,
                ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_16__["NgsRevealModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_36__["NgxMasonryModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"],
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
            ],
            entryComponents: [
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsDialogComponent"],
                _notifications_dialogs_select_notification_select_notification_component__WEBPACK_IMPORTED_MODULE_32__["SelectNotificationComponent"],
                _notifications_dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_33__["AddNotificationComponent"],
                _notifications_dialogs_delete_notification_delete_notification_component__WEBPACK_IMPORTED_MODULE_35__["DeleteNotificationComponent"],
                _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_40__["ChangePasswordComponent"],
                _account_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_41__["ChangeEmailComponent"],
                _account_change_username_change_username_component__WEBPACK_IMPORTED_MODULE_42__["ChangeUsernameComponent"],
                _account_show_role_show_role_component__WEBPACK_IMPORTED_MODULE_43__["ShowRoleComponent"],
                _disciplines_new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_45__["NewDisciplineComponent"],
                _timetable_select_discipline_select_discipline_component__WEBPACK_IMPORTED_MODULE_46__["SelectDisciplineComponent"],
                _settings_dialogs_new_times_new_times_component__WEBPACK_IMPORTED_MODULE_47__["NewTimesComponent"],
                _settings_dialogs_show_key_show_key_component__WEBPACK_IMPORTED_MODULE_48__["ShowKeyComponent"],
                _settings_dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_55__["NewScreenComponent"],
                _settings_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_49__["EditUserComponent"],
                _timetable_dialog_change_settings_dialog_change_settings_component__WEBPACK_IMPORTED_MODULE_57__["DialogChangeSettingsComponent"]
            ],
            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MAT_DATE_LOCALE"], useValue: 'lt-LT' }, _login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"], _disciplines_disciplines_component__WEBPACK_IMPORTED_MODULE_44__["DisciplinesComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n  form > *:not(button) {\n    width: 100%; }\n  button {\n  background: var(--s5);\n  color: white;\n  border-radius: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXG1hcnR5XFxPbmVEcml2ZVxcRG9rdW1lbnRhaVxcZWtyYW5hcy5pbmZvXFxhZG1pbi1wYXJ0L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUYxQjtJQUlRLFdBQVcsRUFBQTtFQWdCbkI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICY+Kjpub3QoYnV0dG9uKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5kaWFsb2ctY29udGVudCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgdG9wOiA1ZW07XHJcbi8vICAgYm90dG9tOiAwcHg7XHJcbi8vICAgbGVmdDogMHB4O1xyXG4vLyAgIHJpZ2h0OiAwcHg7XHJcbi8vICAgbWF4LWhlaWdodDogdW5zZXQ7XHJcbi8vICAgbWFyZ2luOiAxMnB4O1xyXG4vLyB9XHJcbi8vIC5uZy10cmlnZ2VyLWRpYWxvZ0NvbnRhaW5lciB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactUsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsDialogComponent", function() { return ContactUsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var ContactUsDialogComponent = /** @class */ (function () {
    function ContactUsDialogComponent(data, http, snackBar) {
        this.data = data;
        this.http = http;
        this.snackBar = snackBar;
        this.msg = false;
        this.busy = false;
        this.themes = [
            { value: 'get-started-0', viewValue: 'Noriu pradėti naudoti!' },
            { value: 'questions-1', viewValue: 'Turiu klausimų!' },
            { value: 'feedback-2', viewValue: 'Atsiliepimas' }
        ];
    }
    ContactUsDialogComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        console.log(form.value);
        this.busy = true;
        this.http.post('/api/contact', form.value).subscribe(function (success) {
            _this.msg = true;
            _this.busy = false;
        }, function (error) {
            _this.busy = false;
            _this.snackBar.show('Nepavyko išsiųsti', 'error');
        });
    };
    ContactUsDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    ContactUsDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-contact-us',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], ContactUsDialogComponent);
    return ContactUsDialogComponent;
}());



/***/ }),

/***/ "./src/app/disciplines.service.ts":
/*!****************************************!*\
  !*** ./src/app/disciplines.service.ts ***!
  \****************************************/
/*! exports provided: DisciplinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinesService", function() { return DisciplinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




var DisciplinesService = /** @class */ (function () {
    function DisciplinesService(snackBar, http) {
        var _this = this;
        this.snackBar = snackBar;
        this.http = http;
        this.disciplines = [];
        this.http.get('/api/disciplines').subscribe(function (success) {
            if (success.disciplines) {
                _this.disciplines = success.disciplines;
            }
        }, function (error) {
            _this.snackBar.show(error.error);
        });
    }
    DisciplinesService.prototype.returnDisciplineIndexById = function (id) {
        return this.disciplines.findIndex(function (x) { return x.id === id; });
    };
    DisciplinesService.ctorParameters = function () { return [
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DisciplinesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DisciplinesService);
    return DisciplinesService;
}());



/***/ }),

/***/ "./src/app/disciplines/disciplines.component.scss":
/*!********************************************************!*\
  !*** ./src/app/disciplines/disciplines.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NpcGxpbmVzL2Rpc2NpcGxpbmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/disciplines/disciplines.component.ts":
/*!******************************************************!*\
  !*** ./src/app/disciplines/disciplines.component.ts ***!
  \******************************************************/
/*! exports provided: DisciplinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinesComponent", function() { return DisciplinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _disciplines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../disciplines.service */ "./src/app/disciplines.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-discipline/new-discipline.component */ "./src/app/disciplines/new-discipline/new-discipline.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");








var DisciplinesComponent = /** @class */ (function () {
    function DisciplinesComponent(dialog, http, loginService, snackBar, disciplinesService) {
        this.dialog = dialog;
        this.http = http;
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.disciplinesService = disciplinesService;
    }
    DisciplinesComponent.prototype.ngOnInit = function () {
    };
    DisciplinesComponent.prototype.create = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_4__["NewDisciplineComponent"], {
            data: { edit: false }
        });
        dialogRef.afterClosed().subscribe(function (callback) {
            if (callback && callback.id) {
                _this.disciplinesService.disciplines.push(callback);
            }
        });
    };
    DisciplinesComponent.prototype.edit = function (id) {
        var _this = this;
        var indexx = this.disciplinesService.returnDisciplineIndexById(id);
        if (indexx !== -1) {
            var dialogRef = this.dialog.open(_new_discipline_new_discipline_component__WEBPACK_IMPORTED_MODULE_4__["NewDisciplineComponent"], {
                data: { edit: true, data: this.disciplinesService.disciplines[indexx] }
            });
            dialogRef.afterClosed().subscribe(function (callback) {
                if (callback && callback.id) {
                    _this.disciplinesService.disciplines[indexx] = callback;
                }
            });
        }
    };
    DisciplinesComponent.prototype.remove = function (id) {
        var _this = this;
        var indexx = this.disciplinesService.returnDisciplineIndexById(id);
        this.http.delete('/api/disciplines/' + id).subscribe(function (success) {
            if (indexx !== -1) {
                _this.disciplinesService.disciplines.splice(indexx, 1);
                _this.snackBar.show(success.message, 'success');
            }
            else {
                _this.snackBar.show('Ištrinta, bet prašome perkrauti puslapį (F5)', 'error');
            }
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
    };
    DisciplinesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
        { type: _disciplines_service__WEBPACK_IMPORTED_MODULE_1__["DisciplinesService"] }
    ]; };
    DisciplinesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-disciplines',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./disciplines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/disciplines.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./disciplines.component.scss */ "./src/app/disciplines/disciplines.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"],
            _disciplines_service__WEBPACK_IMPORTED_MODULE_1__["DisciplinesService"]])
    ], DisciplinesComponent);
    return DisciplinesComponent;
}());



/***/ }),

/***/ "./src/app/disciplines/new-discipline/new-discipline.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/disciplines/new-discipline/new-discipline.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NpcGxpbmVzL25ldy1kaXNjaXBsaW5lL25ldy1kaXNjaXBsaW5lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/disciplines/new-discipline/new-discipline.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/disciplines/new-discipline/new-discipline.component.ts ***!
  \************************************************************************/
/*! exports provided: NewDisciplineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDisciplineComponent", function() { return NewDisciplineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var NewDisciplineComponent = /** @class */ (function () {
    function NewDisciplineComponent(dialogRef, config, http, snackBar) {
        this.dialogRef = dialogRef;
        this.config = config;
        this.http = http;
        this.snackBar = snackBar;
        this.busy = false;
        if (!this.config.edit) {
            this.config.data = {};
        }
    }
    NewDisciplineComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        if (!this.config.edit) {
            this.http.post('/api/disciplines', {
                name: this.config.data.name,
                room: this.config.data.room,
                teacher: this.config.data.teacher
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.discipline);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
            });
        }
        else {
            this.http.put('/api/disciplines/' + this.config.data.id, {
                discipline: this.config.data
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.discipline);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
            });
        }
    };
    NewDisciplineComponent.prototype.ngOnInit = function () {
    };
    NewDisciplineComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    NewDisciplineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-discipline',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-discipline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disciplines/new-discipline/new-discipline.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-discipline.component.scss */ "./src/app/disciplines/new-discipline/new-discipline.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], NewDisciplineComponent);
    return NewDisciplineComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feature img {\n  min-height: 230px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcaW5kZXhcXGluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlIGltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/__ivy_ngcc__/esm5/ngx-scrollreveal.es5.js");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(dialog, loginService, ngaReveal) {
        this.dialog = dialog;
        this.loginService = loginService;
        this.LTdays = [[1, 1], [1, 13], [2, 16], [2, 24], [3, 11],
            [3, 29], [5, 1], [5, 9], [6, 14], [6, 15], [7, 6], [7, 15], [8, 23],
            [8, 31], [9, 23], [10, 25], [11, 18], [11, 23]];
        this.backgrounds = ['https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&q=50&exp=-9',
            'https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&q=50&exp=-4',
            'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50&exp=-10',
            'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50&exp=-9',
            'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&q=50&exp=-9',
            'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&q=50&flip=h&exp=-6',
            'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&q=50&exp=-9',
            'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&q=50&exp=-4',
            'https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?auto=format&q=50&exp=-9',
            // 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&q=50&flip=h&exp=-4',
            'https://images.unsplash.com/45/tkLOe7nnQ7mnMsiuijBy_hm.jpg?auto=format&q=50&exp=-9'];
        this.randomNumber = Math.floor(Math.random() * this.backgrounds.length);
        this.currentBg = 'url(' + this.backgrounds[this.randomNumber] + ')';
        var curDate = new Date();
        for (var _i = 0, _a = this.LTdays; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day[0] === curDate.getMonth() + 1 && day[1] === curDate.getDate()) {
                // getMonth() return 0-11
                this.currentBg = 'url(https://ekranas.info/assets/img/layout/lt.png)';
                break;
            }
        }
        this.currentLogo = this.getCookie('logo');
        // console.log('Sausainis logo lygus = ', this.currentLogo);
    }
    IndexComponent.prototype.openDialog = function () {
        this.dialog.open(_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsDialogComponent"], {
            width: '90%',
            // height: '85%',
            hasBackdrop: true,
            closeOnNavigation: true,
            data: {}
        });
    };
    IndexComponent.prototype.loginUser = function (form) {
        // console.log(form.value);
        this.loginService.loginAttempt(form.value);
        form.reset();
    };
    IndexComponent.prototype.getCookie = function (cname) {
        cname += '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
            var c = ca_1[_i];
            // tslint:disable-next-line: triple-equals
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return '';
    };
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_5__["NgsRevealModule"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_5__["NgsRevealModule"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/invitation/invitation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/invitation/invitation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 600px) {\n  .card {\n    min-width: 600px; } }\n\n@media only screen and (max-width: 500px) {\n  .card {\n    width: 100% !important;\n    margin: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRhdGlvbi9DOlxcVXNlcnNcXG1hcnR5XFxPbmVEcml2ZVxcRG9rdW1lbnRhaVxcZWtyYW5hcy5pbmZvXFxhZG1pbi1wYXJ0L3NyY1xcYXBwXFxpbnZpdGF0aW9uXFxpbnZpdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFHTDtFQUNJO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQixFQUFBLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaW52aXRhdGlvbi9pbnZpdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/invitation/invitation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/invitation/invitation.component.ts ***!
  \****************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var InvitationComponent = /** @class */ (function () {
    function InvitationComponent(http, route, snackBar) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.snackBar = snackBar;
        this.state = 'busy';
        this.user = {};
        this.passwordReset = false;
        this.usernameDialog = false;
        this.http.get('/api/users/' + this.route.snapshot.paramMap.get('clue')).subscribe(function (success) {
            _this.user = success.user;
            _this.passwordReset = success.passwordReset;
            _this.state = 'edit';
        }, function () {
            _this.state = 'error';
        });
    }
    InvitationComponent.prototype.ngOnInit = function () {
    };
    InvitationComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.snackBar.show('Prašome užpildyti visus formos laukelius', 'error');
            return;
        }
        this.state = 'busy';
        this.http.post('/api/users/' + this.route.snapshot.paramMap.get('clue'), form.value).subscribe(function (success) {
            _this.user = success.user;
            _this.state = 'end';
        }, function (error) {
            _this.state = 'edit';
            _this.snackBar.show(error.error, 'error');
        });
        console.log(form.value);
    };
    InvitationComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    InvitationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invitation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invitation/invitation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invitation.component.scss */ "./src/app/invitation/invitation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], InvitationComponent);
    return InvitationComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");



// import { CookieService } from 'ngx-cookie-service';


var LoginService = /** @class */ (function () {
    function LoginService(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.user = {};
        this.busy = false;
        this.fail = false;
        this.check();
        // this.currentLogo = this.cookieService.get('logo');
        // public cookieService: CookieService
        // setInterval(() => {
        //   // this.auth.refreshToken();
        //   // console.log(this.isLogged());
        //   this.http.post<LoginResponse>('api/auth/user', {}, {
        //     observe: 'response'
        //   }).subscribe(data => {
        //     if (!data.body.success) { this.loggout(false); }
        //   });
        // }, 10000);
        // this.http.post<LoginResponse>('api/auth/user', {}).subscribe(data => {
        //   console.log(data);
        //   if (data.user) {
        // this.user = data.user;
        // this.router.navigate(['/pranesimai']);
        //   }
        // },
        // error => {
        //   this.snackBar.show('Nepavyko gauti duomenų!', 'error');
        // });
    }
    LoginService.prototype.check = function () {
        var _this = this;
        this.http.post('api/auth/user', {}).subscribe(function (data) {
            if (data.user) {
                _this.user = data.user;
                _this.setChatData(data);
            }
        }, function () { });
    };
    LoginService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    LoginService.prototype.loggout = function () {
        var _this = this;
        this.http.get('api/auth/loggout').subscribe(function () {
            _this.user = {};
            _this.router.navigate(['/']);
            _this.snackBar.show('Sėkmingai atsijungėte', 'success');
        }, function () {
            _this.snackBar.show('Atsiprašome, bet atsijungti nepavyko! Parašyk pagalbai žinutę.', 'error');
        });
    };
    LoginService.prototype.loginAttempt = function (formData) {
        var _this = this;
        this.busy = true;
        this.http.post('api/auth/login', formData).subscribe(function (data) {
            if (data.message) {
                _this.snackBar.show(data.message, 'success');
            }
            if (data.success) {
                _this.user = data.user;
                _this.router.navigate(['/pranesimai']);
                _this.setCookie('logo', _this.user.school.logo, 30);
                _this.setChatData(data);
            }
            _this.busy = false;
        }, function (error) {
            _this.fail = true;
            _this.busy = false;
            _this.snackBar.show(error.error.message, 'error');
        });
    };
    LoginService.prototype.isLogged = function () {
        return (this.user.name ? true : false);
    };
    LoginService.prototype.setChatData = function (data) {
        try {
            window.Tawk_API.setAttributes({
                'name': data.user.name,
                'email': data.user.email,
                'school': data.user.school.name,
                'hash': data.hash
            });
        }
        catch (error) { }
    };
    LoginService.prototype.getRoleName = function () {
        switch (this.user.role) {
            case 0:
                return 'Mokytojas';
                break;
            case 1:
                return 'Redaktorius';
                break;
            case 2:
                return 'Administratorius';
                break;
            case 3:
                return 'Administratorius';
                break;
            default:
                return 'Vartotojas';
                break;
        }
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background-color: #131b2c;\n  min-height: 80px;\n  min-width: 150px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  padding: 0px 8px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  box-shadow: 0px 5px 5px #0009; }\n\nheader > div {\n  float: left;\n  color: white;\n  font-size: 20px;\n  /* margin: 0.5em; */\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  line-height: 1;\n  height: 80px; }\n\nheader h1 {\n  font-size: 20px;\n  padding-left: 10px; }\n\nheader img {\n  /* width: 52px; */\n  height: 60px; }\n\nheader img + img {\n  margin-left: 5px; }\n\n.status.ok {\n  color: var(--s2); }\n\n.status.error {\n  color: var(--s5); }\n\n.status {\n  font-size: 0.7em;\n  color: var(--s3);\n  margin: 0px -0.8em;\n  background: #0c111c;\n  padding: 12px 16px; }\n\nheader #menuToggle {\n  display: block;\n  float: right;\n  color: white;\n  text-decoration: none;\n  padding: 0.75em;\n  border: 1.5px var(--s2) solid;\n  margin: 0.8em;\n  cursor: pointer; }\n\nheader #toggled {\n  clear: left;\n  list-style-type: none;\n  color: white;\n  padding-left: 0;\n  margin-bottom: 0;\n  display: none; }\n\nheader #toggled a {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center; }\n\nheader > nav > #toggled > * {\n  color: white;\n  padding: 1em 0em 1em 1.4em;\n  border-top: 2px var(--s2) solid; }\n\ni.fas + span,\ni.fa + span {\n  padding-left: 6px; }\n\nheader #toggled > *:hover {\n  background-color: #192239;\n  border-color: var(--s5); }\n\n.dropdown-right > *:hover:not(.details) {\n  background-color: #ddd; }\n\n.dropdown {\n  position: relative; }\n\n.dropdown a i {\n  font-size: 1.5em; }\n\n.dropdown-right,\n.dropdown-left {\n  -webkit-transition: 1s;\n  transition: 1s;\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 40;\n  top: 55px; }\n\n.dropdown-right {\n  right: 0px; }\n\n.dropdown-left {\n  left: 0px; }\n\n.dropdown-left a,\n.dropdown-right a {\n  color: black !important;\n  display: grid !important;\n  grid-template-columns: 1fr 3fr; }\n\n.dropdown-left img,\n.dropdown-right img {\n  height: auto;\n  width: 180px;\n  margin: 0px auto; }\n\n.dropdown-left > *:not(.status),\n.dropdown-right > *:not(.status) {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@media only screen and (max-width: 400px) {\n  header div h1 {\n    display: none; } }\n\n@media screen and (max-width: 1024px) {\n  .details {\n    display: none !important; }\n  .dropdown-right {\n    display: block !important;\n    position: static !important;\n    margin: 1em 0em;\n    box-shadow: none !important; } }\n\n.active {\n  border-color: var(--s5) !important; }\n\n/* if wider than 1024 px */\n\n@media screen and (min-width: 1024px) {\n  header #menuToggle {\n    display: none; }\n  header nav {\n    float: right; }\n  header #toggled {\n    display: -webkit-box !important;\n    display: flex !important;\n    height: 80px;\n    -webkit-box-align: end;\n            align-items: flex-end; }\n  header > nav > #toggled > * {\n    float: left;\n    display: -webkit-box;\n    display: flex;\n    padding: 0.8em;\n    border-top: none;\n    border-bottom: var(--s2) 5px solid; }\n  header a.active {\n    border-color: var(--s5); }\n  .dropdown:hover .dropdown-right,\n  .dropdown:active .dropdown-right,\n  .dropdown:hover .dropdown-left,\n  .dropdown:active .dropdown-left {\n    display: block;\n    -webkit-animation: fade 0.5s ease-in forwards;\n            animation: fade 0.5s ease-in forwards; } }\n\na:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsVUFBVTtFQUVWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFFdEIsY0FBYztFQUVkLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFBO0VBQ0Esb0JBQW9CO0VBRXBCLGFBQWE7RUFDYix5QkFBeUI7RUFFekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFBO0VBQ0EsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFFcEIsYUFBYTtFQUNiLHlCQUF5QjtFQUV6QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUduQzs7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLHNCQUFzQjtFQUV0QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdiO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksU0FBUyxFQUFBOztBQUdiOztFQUVJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2xDOztFQUVJLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQUxsQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtFQUNJO0lBQ0ksd0JBQXdCLEVBQUE7RUFFNUI7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZiwyQkFBMkIsRUFBQSxFQUM5Qjs7QUFHTDtFQUNJLGtDQUFrQyxFQUFBOztBQUl0QywwQkFBQTs7QUFFQTtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksWUFBWSxFQUFBO0VBRWhCO0lBQ0ksK0JBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osc0JBQXFCO1lBQXJCLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0ksV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0NBQWtDLEVBQUE7RUFFdEM7SUFDSSx1QkFBdUIsRUFBQTtFQUUzQjs7OztJQUlJLGNBQWM7SUFDZCw2Q0FBcUM7WUFBckMscUNBQXFDLEVBQUEsRUFDeEM7O0FBR0w7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFiMmM7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyBtYXJnaW46IDBweCAtMC44ZW07XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4ICMwMDA5O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggIzAwMDk7XHJcbn1cclxuXHJcbmhlYWRlcj5kaXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAuNWVtOyAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaGVhZGVyIGltZyB7XHJcbiAgICAvKiB3aWR0aDogNTJweDsgKi9cclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuaGVhZGVyIGltZytpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnN0YXR1cy5vayB7XHJcbiAgICBjb2xvcjogdmFyKC0tczIpO1xyXG59XHJcblxyXG4uc3RhdHVzLmVycm9yIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zNSk7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zMyk7XHJcbiAgICBtYXJnaW46IDBweCAtMC44ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGMxMTFjO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG59XHJcblxyXG5oZWFkZXIgI21lbnVUb2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjc1ZW07XHJcbiAgICBib3JkZXI6IDEuNXB4IHZhcigtLXMyKSBzb2xpZDtcclxuICAgIG1hcmdpbjogMC44ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciAjdG9nZ2xlZCB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgI3RvZ2dsZWQgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyPm5hdj4jdG9nZ2xlZD4qIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAwZW0gMWVtIDEuNGVtO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLXMyKSBzb2xpZDtcclxufVxyXG5cclxuaS5mYXMrc3BhbixcclxuaS5mYStzcGFuIHtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG5oZWFkZXIgI3RvZ2dsZWQ+Kjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMjM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zNSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1yaWdodD4qOmhvdmVyOm5vdCguZGV0YWlscykge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGEgaSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tcmlnaHQsXHJcbi5kcm9wZG93bi1sZWZ0IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiA0MDtcclxuICAgIHRvcDogNTVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1sZWZ0IHtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWxlZnQgYSxcclxuLmRyb3Bkb3duLXJpZ2h0IGEge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1sZWZ0IGltZyxcclxuLmRyb3Bkb3duLXJpZ2h0IGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbGVmdD4qOm5vdCguc3RhdHVzKSxcclxuLmRyb3Bkb3duLXJpZ2h0Pio6bm90KC5zdGF0dXMpIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBoZWFkZXIgZGl2IGgxIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMWVtIDBlbTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIGlmIHdpZGVyIHRoYW4gMTAyNCBweCAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBoZWFkZXIgI21lbnVUb2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgI3RvZ2dsZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyPm5hdj4jdG9nZ2xlZD4qIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tczIpIDVweCBzb2xpZDtcclxuICAgIH1cclxuICAgIGhlYWRlciBhLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zNSk7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLXJpZ2h0LFxyXG4gICAgLmRyb3Bkb3duOmFjdGl2ZSAuZHJvcGRvd24tcmlnaHQsXHJcbiAgICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWxlZnQsXHJcbiAgICAuZHJvcGRvd246YWN0aXZlIC5kcm9wZG93bi1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBhbmltYXRpb246IGZhZGUgMC41cyBlYXNlLWluIGZvcndhcmRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5hOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.hidden = true;
        // setInterval(()=> {
        //   console.log(this.router.url);
        // }, 2000);
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.hide = function () {
        this.hidden = true;
    };
    NavComponent.prototype.toggleMenu = function () {
        this.hidden = !this.hidden;
    };
    NavComponent.prototype.loggout = function () {
        this.hide();
        this.loginService.loggout();
    };
    NavComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/need-auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/need-auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: NeedAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedAuthGuard", function() { return NeedAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(loginService, router, httpClient) {
        this.loginService = loginService;
        this.router = router;
        this.httpClient = httpClient;
    }
    // state: RouterStateSnapshot
    NeedAuthGuard.prototype.canActivate = function (route) {
        // const redirectUrl = route['routerState']['url'];
        var _this = this;
        if (this.loginService.isLogged()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.httpClient.post('/api/auth/user', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            if (res.success) {
                return true;
            }
            else {
                _this.router.navigate(['/unauthorized'], { skipLocationChange: true });
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.router.navigate(['/unauthorized'], { skipLocationChange: true });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
        // else {
        // }
    };
    NeedAuthGuard.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    NeedAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());



/***/ }),

/***/ "./src/app/notifications/dialogs/add-notification/add-notification.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/add-notification/add-notification.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  display: block; }\n\n.toggle-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-gap: 10px;\n  padding-bottom: 1.25em;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  max-width: 600px; }\n\n.contents {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\nfieldset {\n  border: 3px #cb4332 solid; }\n\n.file-select {\n  background-color: #e9ecef;\n  color: black; }\n\n.photos {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  grid-template-columns: 300px;\n  flex-wrap: wrap; }\n\n.photos img {\n  padding: 5px;\n  width: 20vw;\n  height: 20vw;\n  min-width: 250px;\n  min-height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px; }\n\nimg.selected::after {\n  background: white;\n  border-radius: 50%;\n  bottom: 0.3rem;\n  box-shadow: inset 0 0 0 0.15rem var(--s5);\n  color: var(--s5);\n  content: attr(data-pos);\n  font-size: 1.5rem;\n  font-weight: bold;\n  height: 2em;\n  line-height: 2em;\n  opacity: 0;\n  position: absolute;\n  right: 0.3rem;\n  text-align: center;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  width: 2em; }\n\n/* ................... Uploads ................... */\n\n#preview-box {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n\n.preview {\n  margin: 5px;\n  background: #e9ecef;\n  position: relative; }\n\n.preview:first-child:last-child img {\n  width: 100%;\n  height: auto; }\n\n.preview img,\n.preview div {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.preview div {\n  text-align: center;\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #d8000c;\n  background: #ffbaba; }\n\n.preview i.minus {\n  position: absolute;\n  bottom: -0.4em;\n  right: -0.4em;\n  padding: 0px;\n  background: red;\n  background: #fff;\n  border-radius: 60%;\n  font-size: 1em;\n  color: var(--s5); }\n\nimg[src^=\"assets/p.gif\"] {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6); }\n\n.preview span {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  height: 1.8em;\n  display: block;\n  background: #e9ecef;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100px;\n  overflow: hidden;\n  font-size: 0.6em;\n  border-top-right-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9kaWFsb2dzL2FkZC1ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcZGlhbG9nc1xcYWRkLW5vdGlmaWNhdGlvblxcYWRkLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG9CQUFvQjtFQUVwQixhQUFhO0VBRWIsZUFBZTtFQUVmLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsVUFBVSxFQUFBOztBQUlkLG9EQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7O0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL2RpYWxvZ3MvYWRkLW5vdGlmaWNhdGlvbi9hZGQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udG9nZ2xlLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50cyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogM3B4ICNjYjQzMzIgc29saWQ7XHJcbn1cclxuXHJcbi5maWxlLXNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGhvdG9zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5waG90b3MgaW1nIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pbWcuc2VsZWN0ZWQ6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiAwLjNyZW07XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjE1cmVtIHZhcigtLXM1KTtcclxuICAgIGNvbG9yOiB2YXIoLS1zNSk7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtcG9zKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAuM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IDJlbTtcclxufVxyXG5cclxuXHJcbi8qIC4uLi4uLi4uLi4uLi4uLi4uLi4gVXBsb2FkcyAuLi4uLi4uLi4uLi4uLi4uLi4uICovXHJcblxyXG4jcHJldmlldy1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByZXZpZXcge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJldmlldzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnByZXZpZXcgaW1nLFxyXG4ucHJldmlldyBkaXYge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ucHJldmlldyBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZDgwMDBjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmFiYTtcclxufVxyXG5cclxuLnByZXZpZXcgaS5taW51cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0wLjRlbTtcclxuICAgIHJpZ2h0OiAtMC40ZW07XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogdmFyKC0tczUpO1xyXG59XHJcblxyXG5pbWdbc3JjXj1cImFzc2V0cy9wLmdpZlwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbn1cclxuXHJcbi5wcmV2aWV3IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/notifications/dialogs/add-notification/add-notification.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/add-notification/add-notification.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationComponent", function() { return AddNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");







var AddNotificationComponent = /** @class */ (function () {
    function AddNotificationComponent(dialogRef, config, loginService, http, snackBar) {
        this.dialogRef = dialogRef;
        this.config = config;
        this.loginService = loginService;
        this.http = http;
        this.snackBar = snackBar;
        this.busy = false;
        this.formData = {};
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        // console.log(config.files);
        if (!config.edit) {
            // Kuriamas naujas pranešimas
            this.formData.displayAuthor = false;
            this.formData.important = false;
            this.formData.showBefore = true;
            this.formData.visibility = true;
            this.formData.repeatTimes = false;
            this.formData.note = '';
            this.formData.author = this.loginService.user.name;
            this.formData.images = [];
        }
        else {
            this.formData = Object.assign({}, config.data);
            // console.log(this.formData);
            config.files = this.formData.images.length > 0 ? true : false;
        }
    }
    AddNotificationComponent.prototype.getDateString = function (date) {
        if (!date) {
            return '0000-00-00';
        }
        var dateString = date.getFullYear() + '-';
        if (date.getMonth() + 1 < 10) {
            dateString += '0';
        }
        dateString += (date.getMonth() + 1) + '-';
        if (date.getDate() < 10) {
            dateString += '0';
        }
        dateString += date.getDate();
        return dateString;
    };
    AddNotificationComponent.prototype.showDatesList = function () {
        var dates = [];
        var date1 = new Date(this.formData.date1);
        if (isNaN(date1.getTime())) {
            return 'Nenurodyta data!';
        }
        var date2 = new Date(this.formData.date2);
        var dayminus = new Date(this.formData.date1);
        dayminus.setDate(dayminus.getDate() - 1);
        // --------------------------------------------
        if (this.formData.showBefore) {
            dates.push(this.getDateString(dayminus), this.getDateString(date1));
        }
        else {
            dates.push(this.getDateString(date1));
        }
        if (this.formData.repeatTimes) {
            if (isNaN(date2.getTime())) {
                return 'Nenurodyta data!';
            }
            // Select last Date in array
            var d = new Date(dates[dates.length - 1]);
            d.setDate(d.getDate() + 1);
            for (var dii = d; dii <= date2; dii.setDate(dii.getDate() + 1)) {
                dates.push(this.getDateString(dii));
            }
        }
        return 'Pranešimas bus rodomas ' + dates.join(', ');
    };
    AddNotificationComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        if (!this.config.edit) {
            delete this.formData.id;
            this.http.post('/api/notifications', {
                notification: this.formData
            }).subscribe(function (success) {
                // console.log(success.notification);
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.notification);
            }, function (error) {
                _this.snackBar.show(error.error.message, 'error');
                _this.busy = false;
                // console.log(error);
            });
        }
        else {
            this.http.put('/api/notifications/' + this.config.data.id, {
                notification: this.formData
            }).subscribe(function (success) {
                // console.log(success.notification);
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.notification);
            }, function (error) {
                _this.snackBar.show(error.error.message, 'error');
                _this.busy = false;
                // console.log(error);
            });
        }
    };
    AddNotificationComponent.prototype.uploadsDistribution = function (fileList) {
        // console.log(fileList);
        // uploadsDistribution(a: any) {
        //   console.log(a);
        if (fileList.length <= 0) {
            return false;
        }
        // tslint:disable-next-line: prefer-for-of
        for (var x = 0; x < fileList.length; x++) {
            var id = Math.floor(Math.random() * 10000000 + 20);
            this.upload(fileList[x], id);
            this.formData.images.push({ name: fileList[x].name, size: fileList[x].size, id: id, url: 'assets/p.gif' });
        }
    };
    // checkURL: function () {
    //   var url = $('input#image-url').val();
    //   if (!url) {
    //     snackbar('Nenurodyta nuoroda', 'warning');
    //     return false;
    //   }
    //   var regx = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+");
    //   if (!url.match(regx)) {
    //     snackbar('Neteisingai nurodyta nuoroda', 'error');
    //     return false;
    //   }
    //   let id = 'p' + Math.floor(Math.random() * 100000 + 20);
    //   let name = getFileName(url);
    //   if (!name) {
    //     snackbar('Nuoroda neturi nurodyto failo vardo', 'warning');
    //     return false;
    //   }
    //   // Siųsti
    //   $.ajax({
    //     data: {action: 'url_upload', url: url.match(regx)[0]},
    //     success: notifications.afterUpload(g),
    //     error: function () {
    //       alert("Užklausa nepavyko bandykite vėliau :(");
    //     }
    //   });
    // },
    AddNotificationComponent.prototype.removeUpload = function (id) {
        var index = this.formData.images.findIndex(function (x) { return x.id === id; });
        this.formData.images.splice(index, 1);
    };
    AddNotificationComponent.prototype.upload = function (fileToUpload, id) {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('image', fileToUpload);
        this.http.post('/api/uploads', uploadData).subscribe(function (success) {
            var index = _this.formData.images.findIndex(function (x) { return x.id === id; });
            if (index > -1) {
                _this.snackBar.show(success.message, 'success');
                _this.formData.images[index] = success.image;
            }
            else {
                _this.snackBar.show('Gaila, bet failas įkėlimo metu pasiklydo bandyk dar kartą', 'error');
                // restart browser;
            }
        }, function (error) {
            var index = _this.formData.images.findIndex(function (x) { return x.id === id; });
            if (index > -1) {
                _this.formData.images.splice(index, 1);
            }
            _this.snackBar.show(error.error, 'error');
        });
    };
    AddNotificationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] }
    ]; };
    AddNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/add-notification/add-notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-notification.component.scss */ "./src/app/notifications/dialogs/add-notification/add-notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]])
    ], AddNotificationComponent);
    return AddNotificationComponent;
}());



/***/ }),

/***/ "./src/app/notifications/dialogs/delete-notification/delete-notification.component.sass":
/*!**********************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/delete-notification/delete-notification.component.sass ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvZGlhbG9ncy9kZWxldGUtbm90aWZpY2F0aW9uL2RlbGV0ZS1ub3RpZmljYXRpb24uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/notifications/dialogs/delete-notification/delete-notification.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/delete-notification/delete-notification.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNotificationComponent", function() { return DeleteNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var DeleteNotificationComponent = /** @class */ (function () {
    function DeleteNotificationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteNotificationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delete-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/delete-notification/delete-notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delete-notification.component.sass */ "./src/app/notifications/dialogs/delete-notification/delete-notification.component.sass")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteNotificationComponent);
    return DeleteNotificationComponent;
}());



/***/ }),

/***/ "./src/app/notifications/dialogs/select-notification/select-notification.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/select-notification/select-notification.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maxi {\n  font-size: 100px;\n  width: 160px;\n  height: 160px;\n  background: white;\n  color: var(--s5);\n  padding: 30px;\n  display: inline-block;\n  border-radius: 90px;\n  margin: 15px; }\n\n.card {\n  background-color: var(--s1);\n  color: white;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9kaWFsb2dzL3NlbGVjdC1ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcZGlhbG9nc1xcc2VsZWN0LW5vdGlmaWNhdGlvblxcc2VsZWN0LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9kaWFsb2dzL3NlbGVjdC1ub3RpZmljYXRpb24vc2VsZWN0LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXhpIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogdmFyKC0tczUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXMxKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/notifications/dialogs/select-notification/select-notification.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/notifications/dialogs/select-notification/select-notification.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNotificationComponent", function() { return SelectNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var SelectNotificationComponent = /** @class */ (function () {
    function SelectNotificationComponent(data) {
        this.data = data;
    }
    SelectNotificationComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SelectNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/dialogs/select-notification/select-notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-notification.component.scss */ "./src/app/notifications/dialogs/select-notification/select-notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], SelectNotificationComponent);
    return SelectNotificationComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notification/notification.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/notifications/notification/notification.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex1 {\n  text-align: center;\n  -webkit-box-flex: 1;\n  flex: 1; }\n\n.flex2 {\n  text-align: center;\n  -webkit-box-flex: 2;\n  flex: 2; }\n\n.flex3 {\n  text-align: center;\n  -webkit-box-flex: 3;\n  flex: 3; }\n\n.notification {\n  background: white;\n  color: black;\n  position: relative;\n  padding: 0px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  margin: 7px; }\n\n.notification .content {\n    padding: 5px;\n    margin: 5px; }\n\n.notification:hover .tools {\n    /* opacity: 1; */\n    -webkit-animation: bk 0.5s ease-out forwards;\n    animation: bk 0.5s ease-out forwards; }\n\n.notification .tools i {\n    color: var(--s5); }\n\n.notification .tools i:hover {\n    color: var(--s3); }\n\n.notification > :nth-child(1) i {\n  color: white; }\n\n.notification > :nth-child(1) {\n  background: -webkit-gradient(linear, left top, right top, from(#10192d), to(var(--s5)));\n  background: linear-gradient(90deg, #10192d, var(--s5));\n  color: white;\n  padding: 6px; }\n\n.notification.relevant:not(.disabled) > :nth-child(1) {\n  border-left: 12px red solid;\n  -webkit-animation: blink alternate infinite 3s;\n  animation: blink alternate infinite 3s; }\n\n@-webkit-keyframes blink {\n  50% {\n    border-left: 12px white solid; } }\n\n@keyframes blink {\n  50% {\n    border-left: 12px white solid; } }\n\n@-webkit-keyframes bk {\n  from {\n    right: 150px;\n    opacity: 0; }\n  to {\n    right: 5px;\n    opacity: 1; } }\n\n@keyframes bk {\n  from {\n    right: 150px;\n    opacity: 0; }\n  to {\n    right: 5px;\n    opacity: 1; } }\n\n.tools {\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n  -webkit-box-align: baseline;\n  align-items: baseline;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid #c13d1059;\n  border-radius: 50px;\n  padding: 0px 10px; }\n\n.tools > * {\n  padding: 5px;\n  margin: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBRW5CLE9BQU8sRUFBQTs7QUFHWDtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFFbkIsT0FBTyxFQUFBOztBQUdYO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixPQUFPLEVBQUE7O0FBR1g7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBRXRCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBUmY7SUFVUSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVhuQjtJQWNRLGdCQUFBO0lBQ0EsNENBQTRDO0lBQzVDLG9DQUFvQyxFQUFBOztBQWhCNUM7SUFtQlEsZ0JBQWdCLEVBQUE7O0FBbkJ4QjtJQXNCUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBR0ksdUZBQXNEO0VBQXRELHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLDJCQUEyQjtFQUMzQiw4Q0FBOEM7RUFDOUMsc0NBQXNDLEVBQUE7O0FBRzFDO0VBQ0k7SUFDSSw2QkFBNkIsRUFBQSxFQUFBOztBQUlyQztFQUNJO0lBQ0ksNkJBQTZCLEVBQUEsRUFBQTs7QUFJckM7RUFDSTtJQUNJLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSSxVQUFVO0VBQ1Ysb0JBQW9CO0VBRXBCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBRTlCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFFM0IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtFQUV0QixjQUFjO0VBQ2Qsb0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4MSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZmxleDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgIC1tcy1mbGV4OiAyO1xyXG4gICAgZmxleDogMjtcclxufVxyXG5cclxuLmZsZXgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDM7XHJcbiAgICAtbXMtZmxleDogMztcclxuICAgIGZsZXg6IDM7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLnRvb2xzIHtcclxuICAgICAgICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiayAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbjogYmsgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcclxuICAgIH1cclxuICAgIC50b29scyBpIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tczUpO1xyXG4gICAgfVxyXG4gICAgLnRvb2xzIGk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zMyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24+IDpudGgtY2hpbGQoMSkgaSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24+IDpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzEwMTkyZCwgdmFyKC0tczUpKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTAxOTJkLCB2YXIoLS1zNSkpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTAxOTJkLCB2YXIoLS1zNSkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLnJlbGV2YW50Om5vdCguZGlzYWJsZWQpPiA6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHJlZCBzb2xpZDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayBhbHRlcm5hdGUgaW5maW5pdGUgM3M7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIGFsdGVybmF0ZSBpbmZpbml0ZSAzcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEycHggd2hpdGUgc29saWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgNTAlIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMTJweCB3aGl0ZSBzb2xpZDtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJrIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHJpZ2h0OiAxNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiayB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICByaWdodDogMTUwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b29scyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxM2QxMDU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4udG9vbHM+KiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/notifications/notification/notification.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/notifications/notification/notification.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications.component */ "./src/app/notifications/notifications.component.ts");



var IsDateInRange = function (start, end, repeat, tomorrow) {
    if (repeat === void 0) { repeat = false; }
    if (tomorrow === void 0) { tomorrow = false; }
    var startDate = new Date(start);
    var date = new Date();
    if (tomorrow) {
        date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    }
    var endDate = new Date(end);
    startDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    if (startDate.getTime() === date.getTime()) {
        return true;
    }
    // If end date is invalid
    if (end === null || end === '0000-00-00') {
        endDate = startDate;
    }
    if (repeat) {
        return (startDate.getTime() <= date.getTime() && date.getTime() <= endDate.getTime());
    }
    else {
        return false;
    }
};
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(list) {
        this.list = list;
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.remove = function () {
        this.list.remove(this.index);
    };
    NotificationComponent.prototype.edit = function () {
        this.list.edit(this.index);
    };
    NotificationComponent.prototype.isRelevant = function () {
        if (this.data.showBefore) {
            return IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes) ||
                IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes, true);
        }
        else {
            return IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes);
        }
    };
    NotificationComponent.prototype.toggleVisibility = function () {
        this.list.toggleVisibility(this.index);
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NotificationComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NotificationComponent.prototype, "index", void 0);
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notification/notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/notifications/notification/notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-block > * {\n  margin: 10px; }\n\n.filter-block {\n  background: -webkit-gradient(linear, left top, right top, from(#10192d), to(var(--s2)));\n  background: linear-gradient(90deg, #10192d, var(--s2));\n  padding: 0px 20px;\n  margin: 10px 7px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.split {\n  height: 40px;\n  border-left: 3px solid white;\n  margin: 0px 10px;\n  display: inline-block;\n  line-height: 0; }\n\n.filter.active {\n  background: var(--s5); }\n\n.filter {\n  display: inline-block;\n  background: var(--s2);\n  color: white;\n  padding: 4px 15px;\n  margin: 14px 5px;\n  border-radius: 30px;\n  /* width: 100px; */\n  text-align: center;\n  font-size: 0.9em;\n  font-weight: bolder;\n  /* text-transform: uppercase; */ }\n\nbutton {\n  display: block;\n  margin: 10px auto; }\n\n.fa-sticky-note {\n  font-size: 150px; }\n\n@media (min-width: 668px) {\n  .notification {\n    width: 50% !important; } }\n\n@media (max-width: 668px) {\n  .notification {\n    width: 100% !important; }\n  .filter-block {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9DOlxcVXNlcnNcXG1hcnR5XFxPbmVEcml2ZVxcRG9rdW1lbnRhaVxcZWtyYW5hcy5pbmZvXFxhZG1pbi1wYXJ0L3NyY1xcYXBwXFxub3RpZmljYXRpb25zXFxub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHVGQUFzRDtFQUF0RCxzREFBc0Q7RUFDdEQsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtCQUFBLEVBQWdDOztBQUdwQztFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFRckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0k7SUFDSSxzQkFBc0IsRUFBQTtFQUUxQjtJQUNJLGFBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRlbXBvcmFyeSBcclxuLy8gLmNvbHVtbnMge1xyXG4vLyAgICAgLW1vei1jb2x1bW4tY291bnQ6IDI7XHJcbi8vICAgICAtbW96LWNvbHVtbi1nYXA6IDIlO1xyXG4vLyAgICAgLW1vei1jb2x1bW4td2lkdGg6IDUwJTtcclxuLy8gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xyXG4vLyAgICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAyJTtcclxuLy8gICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiA1MCU7XHJcbi8vICAgICBjb2x1bW4tY291bnQ6IDI7XHJcbi8vICAgICBjb2x1bW4tZ2FwOiAyJTtcclxuLy8gICAgIGNvbHVtbi13aWR0aDogNTAlO1xyXG4vLyB9XHJcbi5maWx0ZXItYmxvY2s+KiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTAxOTJkLCB2YXIoLS1zMikpO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGxpdCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmlsdGVyLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zNSk7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tczIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDE0cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAvLyBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcclxuICAgIC8vIGJvdHRvbTogMTBweDtcclxuICAgIC8vIGxlZnQ6IDUwJTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLmZhLXN0aWNreS1ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjhweCkge1xyXG4gICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjY4cHgpIHtcclxuICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialogs_delete_notification_delete_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/delete-notification/delete-notification.component */ "./src/app/notifications/dialogs/delete-notification/delete-notification.component.ts");
/* harmony import */ var _dialogs_select_notification_select_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/select-notification/select-notification.component */ "./src/app/notifications/dialogs/select-notification/select-notification.component.ts");
/* harmony import */ var _dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/add-notification/add-notification.component */ "./src/app/notifications/dialogs/add-notification/add-notification.component.ts");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");








var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(httpClient, dialog, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.busy = false;
        this.notifications = [];
        this.filters = {
            mode: 'relevant',
            textual: true,
            visual: true
        };
        this.myOptions = {
            transitionDuration: '1.8s'
        };
    }
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.httpClient.get('/api/notifications', {
            params: {
                type: this.filters.mode
            }
        }).subscribe(function (res) {
            // console.log(res);
            _this.notifications = res.notifications;
        }, function (errorr) {
            // console.log(errorr);
            _this.snackBar.show(errorr.error.message);
        });
    };
    NotificationsComponent.prototype.selectNotificationDialog = function () {
        var _this = this;
        // const dialogRef = this.dialog.open(SelectNotificationComponent, {
        //   data: { new: true }
        // });
        var dialogRef = this.dialog.open(_dialogs_select_notification_select_notification_component__WEBPACK_IMPORTED_MODULE_5__["SelectNotificationComponent"], {
            data: { new: true }
        });
        dialogRef.afterClosed().subscribe(function (result) { return _this.openNotificationDialog(result); });
    };
    NotificationsComponent.prototype.openNotificationDialog = function (result) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_6__["AddNotificationComponent"], {
            data: { files: (result === 1) ? false : true, edit: false },
            width: '95%'
        });
        dialogRef.afterClosed().subscribe(function (callback) {
            if (callback) {
                if (typeof callback.id === 'number') {
                    callback.rights = true;
                    // callback.date1 = callback.date1.slice(0, 10);
                    // if(callback.hasOwnProperty('date2')) {
                    //   callback.date2 = callback.date2.slice(0, 10);
                    // }
                    _this.notifications.push(callback);
                }
            }
        });
    };
    NotificationsComponent.prototype.toggleVisibility = function (index) {
        var _this = this;
        this.httpClient.put('/api/notifications/visibility/' + this.notifications[index].id, {}).subscribe(function (res) {
            _this.snackBar.show(res.message, 'success');
            _this.notifications[index].visibility = !_this.notifications[index].visibility;
        }, function (errorr) {
            _this.snackBar.show(errorr.error.message);
        });
    };
    NotificationsComponent.prototype.remove = function (index) {
        // this.notifications[index].id
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_delete_notification_delete_notification_component__WEBPACK_IMPORTED_MODULE_4__["DeleteNotificationComponent"], {
            data: { id: this.notifications[index].id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result === 'number') {
                var NotificationIndex = _this.notifications.findIndex(function (x) { return x.id === result; });
                _this.performDeletion(NotificationIndex);
                // console.log(NotificationIndex);
            }
        });
    };
    NotificationsComponent.prototype.performDeletion = function (index) {
        var _this = this;
        this.httpClient.delete('/api/notifications/' + this.notifications[index].id).subscribe(function (res) {
            _this.notifications.splice(index, 1);
            _this.snackBar.show(res.message, 'success');
        }, function (errorr) {
            _this.snackBar.show(errorr.error.message);
        });
    };
    NotificationsComponent.prototype.edit = function (index) {
        var _this = this;
        // const dialogRef =
        var dialogRef = this.dialog.open(_dialogs_add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_6__["AddNotificationComponent"], {
            data: { edit: true, data: this.notifications[index] },
            width: '95%'
        });
        dialogRef.afterClosed().subscribe(function (callback) {
            if (typeof callback.id === 'number') {
                _this.notifications[index] = callback;
            }
        });
    };
    NotificationsComponent.prototype.toggleFilter = function (name) {
        if (!this.busy) {
            this.filters.mode = name;
            this.getNotifications();
        }
        else {
            this.snackBar.show('Prašome palaukti');
        }
    };
    NotificationsComponent.prototype.toggleType = function (type) {
        if (type === 1) {
            this.filters.textual = !this.filters.textual;
            if (!this.filters.textual && !this.filters.visual) {
                this.filters.visual = true;
            }
        }
        else {
            this.filters.visual = !this.filters.visual;
            if (!this.filters.textual && !this.filters.visual) {
                this.filters.textual = true;
            }
        }
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"] }
    ]; };
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/notifications/notifications.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/settings/dialogs/edit-user/edit-user.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/settings/dialogs/edit-user/edit-user.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RpYWxvZ3MvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/dialogs/edit-user/edit-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/dialogs/edit-user/edit-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(dialogRef, http, snackBar, loginService, config) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.snackBar = snackBar;
        this.loginService = loginService;
        this.config = config;
        if (!this.config.edit) {
            this.user = {};
        }
        else {
            this.user = this.config.user;
        }
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    EditUserComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        if (!this.config.edit) {
            // New user
            this.http.post('/api/users', {
                name: this.user.name,
                email: this.user.email,
                role: this.user.role
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
            });
        }
        else {
            this.http.put('/api/users/' + this.user.id, {
                user: this.user
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.discipline);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
            });
        }
    };
    EditUserComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/edit-user/edit-user.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/settings/dialogs/edit-user/edit-user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], Object])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/settings/dialogs/new-screen/new-screen.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/settings/dialogs/new-screen/new-screen.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block {\n  display: block;\n  margin: 10px 0px; }\n\n.block-double {\n  display: block;\n  margin: 20px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvZGlhbG9ncy9uZXctc2NyZWVuL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHNldHRpbmdzXFxkaWFsb2dzXFxuZXctc2NyZWVuXFxuZXctc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RpYWxvZ3MvbmV3LXNjcmVlbi9uZXctc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmJsb2NrLWRvdWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/settings/dialogs/new-screen/new-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/dialogs/new-screen/new-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewScreenComponent", function() { return NewScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var NewScreenComponent = /** @class */ (function () {
    function NewScreenComponent(dialogRef, http, snackBar, config) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.snackBar = snackBar;
        this.config = config;
        this.screen = {};
        this.busy = false;
        if (!this.config.edit) {
            this.screen.name = '';
            this.screen.settings = {
                primaryColor: '#233151',
                accentColor: '#90A711',
                text1: '#FFFFFF',
                text2: '#FFFFFF',
                bg1: '#233151',
                bg2: '#233151',
                LT: false,
                timetableDuration: 1,
                bellDuration: 40,
                SlideDuration: 10
            };
        }
        else {
            this.screen = this.config.data;
        }
    }
    NewScreenComponent.prototype.ngOnInit = function () {
    };
    NewScreenComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.busy = true;
        if (!this.config.edit) {
            delete this.screen.id;
            this.http.post('/api/settings/screens', {
                screen: this.screen
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.screen);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
                console.log(error);
            });
        }
        else {
            this.http.put('/api/settings/screens/' + this.screen.id, {
                screen: this.screen
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.screen);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
                console.log(error);
            });
        }
    };
    NewScreenComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    NewScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-screen',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-screen/new-screen.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-screen.component.scss */ "./src/app/settings/dialogs/new-screen/new-screen.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"], Object])
    ], NewScreenComponent);
    return NewScreenComponent;
}());



/***/ }),

/***/ "./src/app/settings/dialogs/new-times/new-times.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/settings/dialogs/new-times/new-times.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=time] {\n  background: var(--s3); }\n\n.allTimes > span {\n  white-space: pre-wrap; }\n\n.btn.small {\n  justify-self: center;\n  align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvZGlhbG9ncy9uZXctdGltZXMvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcc2V0dGluZ3NcXGRpYWxvZ3NcXG5ldy10aW1lc1xcbmV3LXRpbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvZGlhbG9ncy9uZXctdGltZXMvbmV3LXRpbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10aW1lXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zMyk7XHJcbn1cclxuXHJcbi5hbGxUaW1lcz5zcGFuIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLmJ0bi5zbWFsbCB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/dialogs/new-times/new-times.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/dialogs/new-times/new-times.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewTimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTimesComponent", function() { return NewTimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");






var NewTimesComponent = /** @class */ (function () {
    function NewTimesComponent(dialogRef, config, loginService, http, snackBar) {
        this.dialogRef = dialogRef;
        this.config = config;
        this.loginService = loginService;
        this.http = http;
        this.snackBar = snackBar;
        this.math = Math;
        this.new = [];
        this.input = false;
        this.busy = false;
        this.current = 0;
        this.name = '';
    }
    NewTimesComponent.prototype.ngOnInit = function () {
    };
    NewTimesComponent.prototype.addLesson = function () {
        if (!this.input) {
            this.current++;
            this.input = true;
        }
        else {
            if (!this.startTime || !this.endTime) {
                console.log(this.startTime);
                this.snackBar.show('Nenurodyti ar neužpildyti ' + this.current + ' pamokos pradžios ir pabaigos laikai!', 'error');
                return false;
            }
            if (!this.compare(this.startTime, this.endTime)) {
                return false;
            }
            else {
                this.new.push({
                    h: parseInt(this.startTime.split(':')[0], 10),
                    m: parseInt(this.startTime.split(':')[1], 10),
                    lesson: true,
                    lessonN: this.current
                });
                this.new.push({
                    h: parseInt(this.endTime.split(':')[0], 10),
                    m: parseInt(this.endTime.split(':')[1], 10),
                    lesson: false,
                    lessonN: (this.current + 1)
                });
                this.input = false;
            }
        }
    };
    NewTimesComponent.prototype.timeToMili = function (c) {
        return (parseInt(c.split(':')[0], 10) * 60) + parseInt(c.split(':')[1], 10);
    };
    NewTimesComponent.prototype.compare = function (a, b) {
        if (this.timeToMili(a) < this.timeToMili(b)) {
            return true;
        }
        else if (this.timeToMili(a) === this.timeToMili(b)) {
            this.snackBar.show(this.current + ' Pamokos pradžios laikas negali būti lygus pabaigos laikui!', 'error');
            return false;
        }
        else {
            this.snackBar.show(this.current + ' Pamokos pradžios laikas negali būti didesnis už pabaigos laiką!', 'error');
            return false;
        }
    };
    NewTimesComponent.prototype.save = function () {
        var _this = this;
        if (this.input) {
            this.snackBar.show('Išsaugoti nepavyko, kadangi yra neužpildytų laukelių! Užpildę, paspauskite patvirtinti!', 'info');
            return false;
        }
        else if (!this.name) {
            this.snackBar.show('Prieš išsaugojimą įveskite antraštę pamokų laikui', 'info');
        }
        else {
            this.busy = true;
            this.http.post('/api/settings/times', {
                name: this.name,
                times: this.new
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.dialogRef.close(success.time);
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
                _this.busy = false;
                console.log(error);
            });
        } // input check
    }; // save
    NewTimesComponent.prototype.wrap = function (num) {
        if (num === 0) {
            return '00';
        }
        else if (num < 10) {
            return (' ' + num);
            // return ('&nbsp;' + num);
        }
        else {
            return num;
        }
    };
    NewTimesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"] }
    ]; };
    NewTimesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-times',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-times.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/new-times/new-times.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-times.component.scss */ "./src/app/settings/dialogs/new-times/new-times.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]])
    ], NewTimesComponent);
    return NewTimesComponent;
}());



/***/ }),

/***/ "./src/app/settings/dialogs/show-key/show-key.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/settings/dialogs/show-key/show-key.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RpYWxvZ3Mvc2hvdy1rZXkvc2hvdy1rZXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/dialogs/show-key/show-key.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/settings/dialogs/show-key/show-key.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowKeyComponent", function() { return ShowKeyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var ShowKeyComponent = /** @class */ (function () {
    function ShowKeyComponent(http, snackBar, config) {
        this.http = http;
        this.snackBar = snackBar;
        this.config = config;
        this.busy = false;
    }
    ShowKeyComponent.prototype.updateKey = function () {
        var _this = this;
        this.http.put('/api/settings/screens/key/' + this.config.data.id, {}).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
            _this.config.data.clue = success.clue;
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
            _this.busy = false;
            console.log(error);
        });
    };
    ShowKeyComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ShowKeyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-key',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-key.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/dialogs/show-key/show-key.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-key.component.scss */ "./src/app/settings/dialogs/show-key/show-key.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"], Object])
    ], ShowKeyComponent);
    return ShowKeyComponent;
}());



/***/ }),

/***/ "./src/app/settings/logo/logo.component.scss":
/*!***************************************************!*\
  !*** ./src/app/settings/logo/logo.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/logo/logo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/settings/logo/logo.component.ts ***!
  \*************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");





var LogoComponent = /** @class */ (function () {
    function LogoComponent(loginService, http, snackBar) {
        this.loginService = loginService;
        this.http = http;
        this.snackBar = snackBar;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.logoUpload = function (files) {
        var _this = this;
        if (files.length <= 0) {
            return;
        }
        var uploadData = new FormData();
        uploadData.append('image', files[0]);
        this.http.post('/api/uploads/logo', uploadData).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
            _this.loginService.user.school.logo = success.url;
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
    };
    LogoComponent.ctorParameters = function () { return [
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/logo/logo.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logo.component.scss */ "./src/app/settings/logo/logo.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/settings/screens/screens.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/settings/screens/screens.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NjcmVlbnMvc2NyZWVucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/screens/screens.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/settings/screens/screens.component.ts ***!
  \*******************************************************/
/*! exports provided: ScreensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreensComponent", function() { return ScreensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/new-screen/new-screen.component */ "./src/app/settings/dialogs/new-screen/new-screen.component.ts");
/* harmony import */ var _dialogs_show_key_show_key_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/show-key/show-key.component */ "./src/app/settings/dialogs/show-key/show-key.component.ts");







var ScreensComponent = /** @class */ (function () {
    function ScreensComponent(dialog, http, snackBar) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.snackBar = snackBar;
        this.screens = [];
        this.http.get('/api/settings/screens').subscribe(function (res) {
            _this.screens = res.screens;
        }, function (errorr) {
            _this.snackBar.show(errorr.error);
        });
    }
    ScreensComponent.prototype.ngOnInit = function () {
    };
    ScreensComponent.prototype.add = function () {
        var _this = this;
        var dialog = this.dialog.open(_dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_5__["NewScreenComponent"], {
            data: { edit: false }
        });
        dialog.afterClosed().subscribe(function (callback) {
            if (callback.id) {
                _this.screens.push(callback);
            }
        });
    };
    ScreensComponent.prototype.edit = function (index) {
        var _this = this;
        var dialog = this.dialog.open(_dialogs_new_screen_new_screen_component__WEBPACK_IMPORTED_MODULE_5__["NewScreenComponent"], {
            data: { edit: true, data: this.screens[index] }
        });
        dialog.afterClosed().subscribe(function (callback) {
            if (callback.id) {
                _this.screens[index] = callback;
            }
        });
    };
    ScreensComponent.prototype.showKey = function (index) {
        var _this = this;
        var dialog = this.dialog.open(_dialogs_show_key_show_key_component__WEBPACK_IMPORTED_MODULE_6__["ShowKeyComponent"], {
            data: { data: this.screens[index] }
        });
        dialog.afterClosed().subscribe(function (callback) {
            if (typeof callback === 'string' && callback.length > 100) {
                _this.screens[index].clue = callback;
            }
        });
    };
    ScreensComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] }
    ]; };
    ScreensComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screens',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./screens.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/screens/screens.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./screens.component.scss */ "./src/app/settings/screens/screens.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], ScreensComponent);
    return ScreensComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700\");\n.container h3 i {\n  padding-right: 20px;\n  font-size: 1.5em; }\n.container {\n  background: #0003;\n  padding: 0px;\n  padding-bottom: 10px; }\n.container h3 {\n  background: var(--ff);\n  padding: 8px 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFZO0FBQ1o7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvOjQwMCw3MDAnKTtcclxuLmNvbnRhaW5lciBoMyBpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAzO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaDMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZmYpO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dialog, http, snackBar, loginService) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.snackBar = snackBar;
        this.loginService = loginService;
        this.math = Math;
        this.settings = {
            ip: '',
            turnOnTime: '',
            turnOffTime: ''
        };
        this.http.get('/api/settings').subscribe(function (res) {
            _this.settings = res.settings;
        }, function (errorr) {
            _this.snackBar.show(errorr.error);
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.update = function () {
        var _this = this;
        if (this.loginService.user.role < 1) {
            return;
        }
        this.http.put('/api/settings', this.settings).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
        }, function (error) {
            _this.snackBar.show('Klaida! ' + error.error, 'error');
        });
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/times/times.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/settings/times/times.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectBox.active {\n  border-color: var(--s5); }\n\n.selectBox:hover h2 {\n  color: var(--s5); }\n\n.option {\n  position: relative;\n  margin: 20px; }\n\n.selectBox {\n  padding: 5px;\n  text-align: center;\n  min-width: 230px;\n  width: 15vw;\n  border-color: #464646;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 5px;\n  background: var(--ss);\n  min-height: 250px; }\n\n.selectBox div {\n  font-family: 'Source Code Pro', monospace;\n  padding-top: 10px;\n  color: white;\n  white-space: pre-wrap; }\n\n.selectBox i,\n.option i {\n  color: white; }\n\n.option i:hover {\n  font-size: 1.6em; }\n\n.selectBox.add {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.selectBox.add i {\n  font-size: 2.5em; }\n\n.option i.minus {\n  position: absolute;\n  bottom: -12px;\n  right: -12px;\n  padding: 0px;\n  background: red;\n  background: #000;\n  border-radius: 60%;\n  font-size: 1.4em; }\n\n.alltimes p {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvdGltZXMvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcc2V0dGluZ3NcXHRpbWVzXFx0aW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3pCOztFQUVJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUE4QjtFQUE5Qiw4QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvdGltZXMvdGltZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0Qm94LmFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXM1KTtcclxufVxyXG5cclxuLnNlbGVjdEJveDpob3ZlciBoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0tczUpO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnNlbGVjdEJveCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zcyk7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnNlbGVjdEJveCBkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnNlbGVjdEJveCBpLFxyXG4ub3B0aW9uIGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3B0aW9uIGk6aG92ZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxufVxyXG5cclxuLnNlbGVjdEJveC5hZGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdEJveC5hZGQgaSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG59XHJcblxyXG4ub3B0aW9uIGkubWludXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTJweDtcclxuICAgIHJpZ2h0OiAtMTJweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcblxyXG4uYWxsdGltZXMgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/settings/times/times.component.ts":
/*!***************************************************!*\
  !*** ./src/app/settings/times/times.component.ts ***!
  \***************************************************/
/*! exports provided: TimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesComponent", function() { return TimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialogs_new_times_new_times_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/new-times/new-times.component */ "./src/app/settings/dialogs/new-times/new-times.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");







var TimesComponent = /** @class */ (function () {
    // Remove first element times.shift();
    function TimesComponent(dialog, http, snackBar, loginService) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.snackBar = snackBar;
        this.loginService = loginService;
        this.math = Math;
        this.times = [];
        this.http.get('/api/settings/times').subscribe(function (res) {
            _this.times = res.times;
        }, function (errorr) {
            _this.snackBar.show(errorr.error);
        });
    }
    TimesComponent.prototype.ngOnInit = function () {
    };
    TimesComponent.prototype.wrap = function (num) {
        if (num === 0) {
            return '00';
        }
        else if (num < 10) {
            return (' ' + num);
            // return ('&nbsp;' + num);
        }
        else {
            return num;
        }
    };
    TimesComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_new_times_new_times_component__WEBPACK_IMPORTED_MODULE_3__["NewTimesComponent"], {
            data: {},
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (callback) {
            if (callback.name) {
                _this.times.push(callback);
            }
        });
    };
    TimesComponent.prototype.delete = function (index) {
        var _this = this;
        this.http.delete('/api/settings/times/' + this.times[index].id).subscribe(function (res) {
            _this.times.splice(index, 1);
            _this.snackBar.show(res.message, 'success');
        }, function (error) {
            _this.snackBar.show(error.error);
        });
    };
    TimesComponent.prototype.select = function (index) {
        var _this = this;
        var id = this.times[index].id;
        if (this.times[index].active) {
            this.snackBar.show('Šis pamokų laikas yra numatytasis', 'warning');
            return false;
        }
        this.http.put('/api/settings/times/' + id, {}).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
            _this.times.forEach(function (element) {
                element.active = (element.id === id) ? true : false;
            });
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
    };
    TimesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
    ]; };
    TimesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-times',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./times.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/times/times.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./times.component.scss */ "./src/app/settings/times/times.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"], src_app_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], TimesComponent);
    return TimesComponent;
}());



/***/ }),

/***/ "./src/app/settings/users/users.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/settings/users/users.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/users/users.component.ts":
/*!***************************************************!*\
  !*** ./src/app/settings/users/users.component.ts ***!
  \***************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/edit-user/edit-user.component */ "./src/app/settings/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(dialog, http, snackBar, loginService) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.snackBar = snackBar;
        this.loginService = loginService;
        this.users = [];
        this.http.get('/api/users').subscribe(function (success) {
            if (success.users) {
                _this.users = success.users;
            }
        }, function (error) {
            _this.snackBar.show('Nepavyko gauti vartotojų duomenų ', 'error');
        });
    }
    UsersComponent.prototype.delete = function (index) {
        var _this = this;
        if (!confirm('Ar tikrai norite ištrinti šį vartotoją? \n\ Vartotojui, bus pranešta el. paštu, jog jo paskyra jau nebegalioja!')) {
            return;
        }
        this.http.delete('/api/users/' + this.users[index].id).subscribe(function () {
            _this.snackBar.show('Vartotojas sėkmingai ištrintas', 'success');
            _this.users.splice(index, 1);
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
    };
    UsersComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"], {
            data: { edit: false }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.user) {
                _this.users.push(result.user);
            }
        });
    };
    UsersComponent.prototype.edit = function (index) {
        this.dialog.open(_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"], {
            data: { edit: true, user: this.users[index] }
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.returnUserIndexById = function (id) {
        return this.users.findIndex(function (x) { return x.id === id; });
    };
    // timeAgo(date: Date) {
    //   const diff = new Date((new Date().getTime()) - date.getTime());
    //   if (diff.geMonth > 0) {
    //     return diff.m + '&nbsp;'.linksniai(diff.m, 'mėnesį', 'mėnesius', 'mėnesių');
    //   }
    //   else if (diff.d > 0) {
    //     return diff.d + '&nbsp;'.linksniai(diff.d, 'dieną', 'dienas', 'dienų');
    //   }
    //   else if (diff.h > 0) {
    //     return diff.h + '&nbsp;'.linksniai(diff.h, 'valandą', 'valandas', 'valandų');
    //   }
    //   else if (diff.i > 0) {
    //     return diff.i + '&nbsp;'.linksniai(diff.i, 'minutę', 'minutes', 'minučių');
    //   }
    //   else if (diff.s > 0) {
    //     return diff.s + '&nbsp;'.linksniai(diff.s, 'sekundę', 'sekundes', 'sekundžių');
    //   }
    // }
    // linksniai(sk, aa, bb, cc) {
    //   // aa minutė
    //   // bb minutės
    //   // cc minučių
    //   // tslint:disable-next-line: triple-equals
    //   if (sk >= 11 && sk <= 19) {
    //     return cc;
    //   } else if (sk === 1 || sk % 10 === 1) {
    //     return aa;
    //   } else if (sk % 10 === 0) {
    //     return cc;
    //   } else {
    //     return bb;
    //   }
    // }
    UsersComponent.prototype.getRoleName = function (role) {
        switch (role) {
            case 0:
                return 'Mokytojas';
                break;
            case 1:
                return 'Redaktorius';
                break;
            case 2:
                return 'Administratorius';
                break;
            case 3:
                return 'Administratorius';
                break;
            default:
                return 'Vartotojas';
                break;
        }
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/users/users.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.scss */ "./src/app/settings/users/users.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/timetable/dialog-change-settings/dialog-change-settings.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/timetable/dialog-change-settings/dialog-change-settings.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".semester > * {\n  width: 100%; }\n\n@media all and (min-width: 400px) {\n  .semester > * {\n    width: auto; }\n  .semesters {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 10px 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXRhYmxlL2RpYWxvZy1jaGFuZ2Utc2V0dGluZ3MvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcdGltZXRhYmxlXFxkaWFsb2ctY2hhbmdlLXNldHRpbmdzXFxkaWFsb2ctY2hhbmdlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC90aW1ldGFibGUvZGlhbG9nLWNoYW5nZS1zZXR0aW5ncy9kaWFsb2ctY2hhbmdlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbWVzdGVyPioge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuc2VtZXN0ZXI+KiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2VtZXN0ZXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/timetable/dialog-change-settings/dialog-change-settings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/timetable/dialog-change-settings/dialog-change-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogChangeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangeSettingsComponent", function() { return DialogChangeSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");






var DialogChangeSettingsComponent = /** @class */ (function () {
    function DialogChangeSettingsComponent(dialogData, dialogRef, loginService, http, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.loginService = loginService;
        this.http = http;
        this.snackBar = snackBar;
        this.busy = false;
    }
    DialogChangeSettingsComponent.prototype.sendSettings = function (form) {
        var _this = this;
        if (form.invalid)
            return;
        this.busy = true;
        this.http.put('/api/settings/timetable', {
            settings: this.dialogData.settings
        }).subscribe(function (data) {
            _this.snackBar.show(data.message, 'success');
            _this.dialogRef.close({
                status: true,
                settings: _this.dialogData.settings
            });
        }, function (error) {
            _this.busy = false;
            _this.dialogRef.close();
            _this.snackBar.show('Klaida! ' + error.error, 'error');
        });
    };
    DialogChangeSettingsComponent.prototype.ngOnInit = function () {
    };
    DialogChangeSettingsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"] }
    ]; };
    DialogChangeSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-change-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog-change-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/dialog-change-settings/dialog-change-settings.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog-change-settings.component.scss */ "./src/app/timetable/dialog-change-settings/dialog-change-settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]])
    ], DialogChangeSettingsComponent);
    return DialogChangeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/timetable/edit-timetable/edit-timetable.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/timetable/edit-timetable/edit-timetable.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\n  width: 100px;\n  height: 80px; }\n\n.small {\n  margin-top: 10px; }\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.4; } }\n\n@keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.4; } }\n\n.blink {\n  text-decoration: blink;\n  -webkit-animation: blinker 0.6s ease-in-out infinite alternate;\n          animation: blinker 0.6s ease-in-out infinite alternate; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXRhYmxlL2VkaXQtdGltZXRhYmxlL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHRpbWV0YWJsZVxcZWRpdC10aW1ldGFibGVcXGVkaXQtdGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQSxFQUFBOztBQUxwQjtFQUNJO0lBQ0ksWUFBWSxFQUFBO0VBRWhCO0lBQ0ksWUFBWSxFQUFBLEVBQUE7O0FBSXBCO0VBQ0ksc0JBQXNCO0VBQ3RCLDhEQUFzRDtVQUF0RCxzREFBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS9lZGl0LXRpbWV0YWJsZS9lZGl0LXRpbWV0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxufVxyXG5cclxuLmJsaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogYmxpbms7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMC42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/timetable/edit-timetable/edit-timetable.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/timetable/edit-timetable/edit-timetable.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditTimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimetableComponent", function() { return EditTimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _select_discipline_select_discipline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-discipline/select-discipline.component */ "./src/app/timetable/select-discipline/select-discipline.component.ts");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");








var EditTimetableComponent = /** @class */ (function () {
    function EditTimetableComponent(route, dialog, router, loginService, snackBar, http) {
        var _this = this;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.http = http;
        this.days = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis'];
        this.filteredOptions = [];
        this.rows = [];
        this.classes = [];
        this.newRow = {
            edit: false,
            lessons: {},
            disciplineId: 0,
            room: '',
            name: '',
            teacher: ''
        };
        this.day = parseInt(this.route.snapshot.paramMap.get('day'), 10);
        this.semester = parseInt(this.route.snapshot.paramMap.get('semester'), 10);
        if (!this.day || !this.semester || this.semester < 0 || this.semester > 2 || this.day < 0 || this.day > 5) {
            this.router.navigate(['/404']);
        }
        this.http.get('/api/timetables/' + this.semester + '/' + this.day).subscribe(function (res) {
            // console.log(res);
            _this.rows = res.rows;
            _this.filteredOptions = res.classes;
            _this.classes = res.classes;
        }, function (error) {
            _this.snackBar.show('Nepavyko gauti duomenų. ' + error.error);
            // Kritinė klaida
        });
    }
    EditTimetableComponent.prototype.ngOnInit = function () {
    };
    EditTimetableComponent.prototype.filter = function (value) {
        this.filteredOptions = this.classes.filter(function (option) { return option.toLowerCase().includes(value.toLowerCase()); });
    };
    EditTimetableComponent.prototype.all = function () {
        this.filteredOptions = this.classes;
    };
    EditTimetableComponent.prototype.addToClasses = function (value) {
        if (!value || value === '') {
            return;
        }
        if (this.classes.findIndex(function (x) { return x === value; }) === -1) {
            this.classes.push(value);
        }
    };
    EditTimetableComponent.prototype.edit = function (index) {
        this.rows[index].edit = true;
    };
    EditTimetableComponent.prototype.save = function (index) {
        var _this = this;
        if (index != null) {
            // Updating
            this.rows[index].edit = false;
            this.rows[index].busy = true;
            this.http.put('/api/timetables/' + this.rows[index].disciplineId, {
                row: this.rows[index],
                weekDay: this.day,
                semester: this.semester
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.rows[index].busy = false;
                for (var key in _this.rows[index].lessons) {
                    if (_this.rows[index].lessons.hasOwnProperty(key)) {
                        _this.addToClasses(_this.rows[index].lessons[key]);
                    }
                }
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
            });
        }
        else {
            // new
            this.http.post('/api/timetables/', {
                row: this.newRow,
                weekDay: this.day,
                semester: this.semester
            }).subscribe(function (success) {
                _this.snackBar.show(success.message, 'success');
                _this.newRow.edit = false;
                _this.rows.push(_this.newRow);
                for (var key in _this.newRow.lessons) {
                    if (_this.newRow.lessons.hasOwnProperty(key)) {
                        _this.addToClasses(_this.newRow.lessons[key]);
                    }
                }
                _this.newRow = {
                    edit: false,
                    lessons: {},
                    disciplineId: 0,
                    room: '',
                    name: '',
                    teacher: ''
                };
            }, function (error) {
                _this.snackBar.show(error.error, 'error');
            });
        }
    };
    EditTimetableComponent.prototype.delete = function (index) {
        var _this = this;
        this.rows[index].busy = true;
        this.http.delete('/api/timetables/' + this.semester + '/' + this.day +
            '/' + this.rows[index].disciplineId).subscribe(function (success) {
            _this.snackBar.show(success.message, 'success');
            _this.rows.splice(index, 1);
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
        /// -
    };
    EditTimetableComponent.prototype.openDisciplineSelectDialog = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(_select_discipline_select_discipline_component__WEBPACK_IMPORTED_MODULE_4__["SelectDisciplineComponent"], {
            disableClose: true,
            data: {
                id: (index) ? this.rows[index].disciplineId : this.newRow.disciplineId
            }
        });
        dialogRef.afterClosed().subscribe(function (selected) {
            if (!selected) {
                _this.snackBar.show('Dialogas uždarytas! Nebuvo atlikta pasirinkimo!', 'warning');
                return;
            }
            if (!index) {
                _this.newRow.disciplineId = selected.id;
                _this.newRow.name = selected.name;
                _this.newRow.room = selected.room;
                _this.newRow.teacher = selected.teacher;
            }
            else {
                _this.rows[index].disciplineId = selected.id;
                _this.rows[index].name = selected.name;
                _this.rows[index].room = selected.room;
                _this.rows[index].teacher = selected.teacher;
            }
        });
    };
    EditTimetableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    EditTimetableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-timetable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-timetable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/edit-timetable/edit-timetable.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-timetable.component.scss */ "./src/app/timetable/edit-timetable/edit-timetable.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], EditTimetableComponent);
    return EditTimetableComponent;
}());



/***/ }),

/***/ "./src/app/timetable/select-discipline/select-discipline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/timetable/select-discipline/select-discipline.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: 100%; }\n\n.option {\n  line-height: 1; }\n\n.selectedDiscipline {\n  background-color: var(--s3);\n  margin: 0px 0px 20px 0px;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXRhYmxlL3NlbGVjdC1kaXNjaXBsaW5lL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHRpbWV0YWJsZVxcc2VsZWN0LWRpc2NpcGxpbmVcXHNlbGVjdC1kaXNjaXBsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGltZXRhYmxlL3NlbGVjdC1kaXNjaXBsaW5lL3NlbGVjdC1kaXNjaXBsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5zZWxlY3RlZERpc2NpcGxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tczMpO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/timetable/select-discipline/select-discipline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/timetable/select-discipline/select-discipline.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectDisciplineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDisciplineComponent", function() { return SelectDisciplineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_disciplines_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/disciplines.service */ "./src/app/disciplines.service.ts");







var SelectDisciplineComponent = /** @class */ (function () {
    function SelectDisciplineComponent(dialogRef, disciplinesService, config, http) {
        this.dialogRef = dialogRef;
        this.disciplinesService = disciplinesService;
        this.config = config;
        this.http = http;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.current = {};
        if (this.config.id) {
            var index = this.disciplinesService.returnDisciplineIndexById(this.config.id);
            if (index > -1) {
                this.current = this.disciplinesService.disciplines[index];
            }
        }
    }
    SelectDisciplineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.filter(value); }));
    };
    SelectDisciplineComponent.prototype.filter = function (value) {
        var filterValue = value.toString().toLowerCase();
        return this.disciplinesService.disciplines.filter(function (s) { return new RegExp(filterValue, 'gi').test(s.name) || new RegExp(filterValue, 'gi').test(s.teacher); });
    };
    SelectDisciplineComponent.prototype.selected = function (a) {
        // console.log(a.option.value);
        var index = this.disciplinesService.returnDisciplineIndexById(a.option.value);
        if (index > -1) {
            this.dialogRef.close(this.disciplinesService.disciplines[index]);
        }
        else {
            var dis = {
                name: 'Pasirinkimas Nerastas',
                id: 0,
                teacher: 'Prašome pasirinkti iš naujo',
                room: ''
            };
            this.dialogRef.close(dis);
        }
    };
    SelectDisciplineComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: src_app_disciplines_service__WEBPACK_IMPORTED_MODULE_6__["DisciplinesService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    SelectDisciplineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-discipline',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-discipline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/select-discipline/select-discipline.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-discipline.component.scss */ "./src/app/timetable/select-discipline/select-discipline.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            src_app_disciplines_service__WEBPACK_IMPORTED_MODULE_6__["DisciplinesService"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SelectDisciplineComponent);
    return SelectDisciplineComponent;
}());



/***/ }),

/***/ "./src/app/timetable/timetable.component.scss":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-title {\n  background: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n  .main-title .mobile {\n    display: none; }\n  .main-title h1 {\n    font-size: 2em;\n    padding: 0.4em; }\n  .main-title mat-icon {\n    font-size: 2em;\n    cursor: pointer; }\n  .main-title mat-icon:hover {\n      color: var(--s5); }\n  .main-title .tools {\n    margin-right: 0.5rem;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .main-title .tools > * {\n      margin: 0.5rem; }\n  @media (max-width: 500px) {\n    .main-title {\n      display: block; }\n      .main-title .mobile button {\n        width: 100%;\n        display: grid;\n        grid-template-columns: 9fr 1fr;\n        justify-items: center;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center;\n        margin: 5px 0px; }\n      .main-title .tools {\n        display: none; }\n      .main-title .mobile {\n        display: block; } }\n  button {\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  padding: 0px 0px 0px 10px; }\n  .selector {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  text-align: center; }\n  @media (max-width: 500px) {\n    .selector {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center; }\n      .selector mat-icon {\n        display: none; } }\n  .selector .semester {\n    margin: 0.6em; }\n  .selector h1 {\n    font-size: 1.6em;\n    font-weight: bold; }\n  .selector h2 {\n    font-size: 1.2em; }\n  .selector mat-icon {\n    font-size: 5em;\n    cursor: pointer; }\n  .mat-form-field-flex {\n  background: red;\n  border-radius: 4px 4px 0 0;\n  padding: .75em; }\n  .week {\n  min-width: 80%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  -webkit-box-align: center;\n  align-items: center; }\n  .week .day {\n    position: relative;\n    overflow: hidden;\n    min-width: 160px;\n    color: black;\n    word-break: break-all;\n    background-color: var(--s2);\n    padding: 5px;\n    margin: 10px 5px;\n    width: 14%;\n    height: 200px;\n    display: -ms-grid;\n    display: grid;\n    -webkit-box-pack: center;\n    justify-content: center;\n    align-content: center;\n    box-shadow: 0 0 8px #ffffff30;\n    -webkit-transition: 0.5s ease-in;\n    transition: 0.5s ease-in;\n    font-size: 3em; }\n  .week .day .label {\n      font-size: 1rem;\n      position: absolute;\n      bottom: 0.2em;\n      text-align: center;\n      left: 0px;\n      right: 0px;\n      opacity: 0.4;\n      margin: 0px; }\n  .week .day mat-icon {\n      color: white;\n      opacity: 0;\n      position: absolute;\n      bottom: 0%;\n      right: 0.1em;\n      font-size: 1em;\n      -webkit-transition: 0.4s ease-in;\n      transition: 0.4s ease-in;\n      -webkit-transform: translate(0%, 50%);\n              transform: translate(0%, 50%); }\n  .week .day:hover {\n      color: white;\n      background: var(--s5);\n      z-index: 9; }\n  .week .day:hover p {\n        color: white;\n        -webkit-transition: 0.4s ease-in;\n        transition: 0.4s ease-in;\n        -webkit-transform: scale(1.6);\n                transform: scale(1.6); }\n  .week .day:hover .label {\n        opacity: 1; }\n  .week .day:hover mat-icon {\n        bottom: 30%;\n        opacity: 1; }\n  @media (max-width: 500px) {\n    .week .day {\n      height: auto;\n      width: 100%;\n      padding: 1rem 0em; }\n    .week mat-icon {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXRhYmxlL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHRpbWV0YWJsZVxcdGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQWdDO0VBQ2hDLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCLEVBQUE7RUFKbEM7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFTUSxjQUFjO0lBQ2QsY0FBYyxFQUFBO0VBVnRCO0lBYVEsY0FBYztJQUNkLGVBQWUsRUFBQTtFQWR2QjtNQWdCWSxnQkFBZ0IsRUFBQTtFQWhCNUI7SUFvQlEsb0JBQW9CO0lBQ3BCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQXRCM0I7TUF3QlksY0FBYyxFQUFBO0VBR3RCO0lBM0JKO01BNEJRLGNBQWMsRUFBQTtNQTVCdEI7UUE4QlksV0FBVztRQUNYLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIscUJBQXFCO1FBQ3JCLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLGVBQWUsRUFBQTtNQXBDM0I7UUF1Q1ksYUFBYSxFQUFBO01BdkN6QjtRQTBDWSxjQUFjLEVBQUEsRUFDakI7RUFJVDtFQUNJLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTtFQUNsQjtJQUxKO01BTVEsb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2Qix5QkFBbUI7Y0FBbkIsbUJBQW1CLEVBQUE7TUFUM0I7UUFXWSxhQUFhLEVBQUEsRUFDaEI7RUFaVDtJQWVRLGFBQWEsRUFBQTtFQWZyQjtJQWtCUSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFuQnpCO0lBc0JRLGdCQUFnQixFQUFBO0VBdEJ4QjtJQXlCUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CO0VBRXBCLGFBQWE7RUFFYixlQUFlO0VBRWYsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUV6QixtQkFBbUIsRUFBQTtFQVh2QjtJQWFRLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdCQUF3QjtJQUV4Qix1QkFBdUI7SUFFdkIscUJBQXFCO0lBRXJCLDZCQUE2QjtJQUM3QixnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTtFQWpDdEI7TUFtQ1ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsWUFBWTtNQUVaLFdBQVcsRUFBQTtFQTNDdkI7TUE4Q1ksWUFBWTtNQUNaLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0NBQXdCO01BQXhCLHdCQUF3QjtNQUN4QixxQ0FBNkI7Y0FBN0IsNkJBQTZCLEVBQUE7RUFyRHpDO01Bd0RZLFlBQVk7TUFDWixxQkFBcUI7TUFFckIsVUFBVSxFQUFBO0VBM0R0QjtRQTZEZ0IsWUFBWTtRQUNaLGdDQUF3QjtRQUF4Qix3QkFBd0I7UUFDeEIsNkJBQXFCO2dCQUFyQixxQkFBcUIsRUFBQTtFQS9EckM7UUFrRWdCLFVBQVUsRUFBQTtFQWxFMUI7UUFxRWdCLFdBQVc7UUFDWCxVQUFVLEVBQUE7RUFJdEI7SUExRUo7TUE0RVksWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtJQTlFN0I7TUFpRlksYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC4yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC40ZW07XHJcbiAgICB9XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tczUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b29scyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICY+KiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC5tb2JpbGUgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9vbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZW1lc3RlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjZlbTtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IC43NWVtO1xyXG59XHJcblxyXG4ud2VlayB7XHJcbiAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5kYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zMik7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1ncmlkO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4ICNmZmZmZmYzMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNmZmZmZmYzMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMC4yZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICByaWdodDogMC4xZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zNSk7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgLmRheSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/snackbar/snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_change_settings_dialog_change_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-change-settings/dialog-change-settings.component */ "./src/app/timetable/dialog-change-settings/dialog-change-settings.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");








var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(loginService, http, snackBar, dialog) {
        var _this = this;
        this.loginService = loginService;
        this.http = http;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.selected = 1;
        this.data = {
            currentSemester: 0,
            numberOfSavedRows: 0,
            settings: {
                showTimetable: false,
                firstSemester: '',
                secondSemester: '',
                endSemesters: ''
            }
        };
        this.http.get('/api/settings/timetable').subscribe(function (data) {
            if (data.settings) {
                _this.data = data;
                _this.selected = (data.currentSemester == 2 ? 2 : 1);
            }
        }, function (error) {
            _this.snackBar.show(error.error, 'error');
        });
    }
    TimetableComponent.prototype.ngOnInit = function () {
    };
    TimetableComponent.prototype.openSettings = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_change_settings_dialog_change_settings_component__WEBPACK_IMPORTED_MODULE_6__["DialogChangeSettingsComponent"], {
            data: { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data.settings) }
        });
        dialogRef.afterClosed().subscribe(function (callback) {
            if (callback.status) {
                _this.data.settings = callback.settings;
            }
        });
    };
    TimetableComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    TimetableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timetable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('EnterLeaveY', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.5s 300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(200%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('EnterLeaveX', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)', height: '0px', margin: '0px' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.5s 300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)', height: '*' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)', height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(0)', height: '0px', margin: '0px' }))
                    ])
                ])
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timetable.component.scss */ "./src/app/timetable/timetable.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ui_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], TimetableComponent);
    return TimetableComponent;
}());



/***/ }),

/***/ "./src/app/ui/not-found/not-found.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/not-found/not-found.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container {\n  background: #0d102b !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh; }\n  .error-container .mat-icon {\n    font-size: 8em;\n    width: unset;\n    height: unset;\n    text-align: center;\n    margin: 1rem; }\n  .error-container img {\n    margin: 1rem;\n    width: 150px;\n    margin: 50px 10px 10px 10px; }\n  .error-container .status-code {\n    text-align: center;\n    font-size: 180px;\n    font-family: 'Catamaran', sans-serif;\n    font-weight: 800;\n    color: var(--s3);\n    line-height: 1; }\n  .error-container h1,\n  .error-container h2 {\n    text-align: center; }\n  .error-container .text-container {\n    padding: 20px; }\n  .error-container button {\n    align-self: center;\n    margin: 30px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbm90LWZvdW5kL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHVpXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0VBSnJCO0lBTVEsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQVZwQjtJQWFRLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCLEVBQUE7RUFmbkM7SUFrQlEsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUF2QnRCOztJQTJCUSxrQkFBa0IsRUFBQTtFQTNCMUI7SUE4QlEsYUFBYSxFQUFBO0VBOUJyQjtJQWlDUSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQxMDJiICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4ZW07XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDUwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3RhdHVzLWNvZGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zMyk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICBoMSxcclxuICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/ui/not-found/not-found.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/not-found/not-found.component.ts ***!
  \*****************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/not-found/not-found.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./not-found.component.scss */ "./src/app/ui/not-found/not-found.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/ui/snackbar/snackbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/snackbar/snackbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".snackbar {\n  font-size: 20px;\n  position: relative;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  z-index: 10000;\n  pointer-events: none;\n  margin: 0.1em; }\n\n.snackbar i {\n  font-size: 2em;\n  padding-right: 20px; }\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  border: none;\n  outline: none;\n  position: fixed;\n  left: 50%;\n  bottom: 1em;\n  left: 0;\n  right: 0;\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc25hY2tiYXIvQzpcXFVzZXJzXFxtYXJ0eVxcT25lRHJpdmVcXERva3VtZW50YWlcXGVrcmFuYXMuaW5mb1xcYWRtaW4tcGFydC9zcmNcXGFwcFxcdWlcXHNuYWNrYmFyXFxzbmFja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNuYWNrYmFyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAuMWVtO1xyXG59XHJcblxyXG4uc25hY2tiYXIgaSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDFlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ui/snackbar/snackbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/snackbar/snackbar.component.ts ***!
  \***************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackbar.service */ "./src/app/ui/snackbar/snackbar.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");




;
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackbarService) {
        this.snackbarService = snackbarService;
        this.snackbars = [];
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(function (state) {
            _this.snackbars.push({
                message: state.message,
                type: state.type
            });
            setTimeout(function () {
                _this.snackbars.shift();
            }, 6000);
        });
    };
    SnackbarComponent.prototype.ngOnDestroy = function () {
        this.snackbarSubscription.unsubscribe();
    };
    SnackbarComponent.ctorParameters = function () { return [
        { type: _snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"] }
    ]; };
    SnackbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/snackbar/snackbar.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('snackbar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(200%) scale(0.1)', height: '0px', margin: '0px' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            transform: 'translateY(0%) scale(1)',
                            opacity: 1,
                            height: '*'
                        })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            transform: 'translateY(-100%) scale(0.1)',
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/ui/snackbar/snackbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/ui/snackbar/snackbar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/snackbar/snackbar.service.ts ***!
  \*************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SnackbarService = /** @class */ (function () {
    function SnackbarService() {
        this.snackbarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.snackbarState = this.snackbarSubject.asObservable();
    }
    SnackbarService.prototype.show = function (message, type) {
        if (type === void 0) { type = 'info'; }
        // this.snackbarSubject.next({
        //   show: false,
        //   message: '',
        //   type: 'success'
        // });
        // setTimeout(() => {
        // }, 200, message, type);
        this.snackbarSubject.next({
            show: true,
            message: message,
            type: type
        });
    };
    SnackbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SnackbarService);
    return SnackbarService;
}());



/***/ }),

/***/ "./src/app/ui/spinner/spinner.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/spinner/spinner.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center; }\n\nimg {\n  width: 100px;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc3Bpbm5lci9DOlxcVXNlcnNcXG1hcnR5XFxPbmVEcml2ZVxcRG9rdW1lbnRhaVxcZWtyYW5hcy5pbmZvXFxhZG1pbi1wYXJ0L3NyY1xcYXBwXFx1aVxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui/spinner/spinner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/spinner/spinner.component.ts ***!
  \*************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'spinner',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/spinner/spinner.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./spinner.component.scss */ "./src/app/ui/spinner/spinner.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/ui/unauthorized/unauthorized.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/unauthorized/unauthorized.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh; }\n  .error-container .mat-icon {\n    font-size: 8em;\n    width: unset;\n    height: unset;\n    text-align: center;\n    margin: 1rem; }\n  .error-container img {\n    margin: 1rem;\n    width: 150px;\n    margin: 10px; }\n  .error-container h1 {\n    color: var(--s3); }\n  .error-container h1,\n  .error-container h2 {\n    text-align: center; }\n  .error-container .text-container {\n    padding: 20px; }\n  .error-container button {\n    align-self: center;\n    margin: 30px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdW5hdXRob3JpemVkL0M6XFxVc2Vyc1xcbWFydHlcXE9uZURyaXZlXFxEb2t1bWVudGFpXFxla3JhbmFzLmluZm9cXGFkbWluLXBhcnQvc3JjXFxhcHBcXHVpXFx1bmF1dGhvcml6ZWRcXHVuYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7RUFIckI7SUFLUSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0VBVHBCO0lBWVEsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFkcEI7SUFpQlEsZ0JBQWdCLEVBQUE7RUFqQnhCOztJQXFCUSxrQkFBa0IsRUFBQTtFQXJCMUI7SUF3QlEsYUFBYSxFQUFBO0VBeEJyQjtJQTJCUSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4ZW07XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXMzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui/unauthorized/unauthorized.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/unauthorized/unauthorized.component.ts ***!
  \***********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorized',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/unauthorized/unauthorized.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unauthorized.component.scss */ "./src/app/ui/unauthorized/unauthorized.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marty\OneDrive\Dokumentai\ekranas.info\admin-part\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map