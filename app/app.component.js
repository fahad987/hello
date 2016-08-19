"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//     <h2>My Heroes</h2>
//     <ul class="heroes">
//       <li *ngFor="let hero of heroes"
//         [class.selected]="hero === selectedHero"
//         (click)="onSelect(hero)">
//         <span class="badge">{{hero.id}}</span> {{hero.name}}
//       </li>
//     </ul>
//     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
//   `,
//   providers: [HeroService]
// })
// export class AppComponent implements OnInit {
//   title = 'Tour of Heroes';
//   heroes: Hero[];
//   selectedHero: Hero;
//   constructor(private heroService: HeroService) { }
//   getHeroes() {
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
//   ngOnInit() {
//     this.getHeroes();
//   }
//   onSelect(hero: Hero) { this.selectedHero = hero; }
// }
// /*
// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */
var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    MyComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-cmp',
            template: "<p>my-component</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.hasChild = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-amm',
            template: "<button (click)=\"SubmitData\">Data Submit</button>\n          <input [(ngModel)]=\"value\" name=\"name\">"
        }),
        core_1.Component({
            selector: 'app',
            template: "\n    <button (click)=\"hasChild =! hasChild\">\n      {{hasChild ? 'Destroy' : 'Create'}} MyComponent\n    </button>\n    <my-cmp *ngIf=\"hasChild\"></my-cmp>\n    <my-amm *ngFor=\"\"></my-amm>",
            directives: [MyComponent,]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map