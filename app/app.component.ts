import { Component,OnInit,OnDestroy, } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

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
@Component({
  selector: 'my-cmp',
  template: `<p>my-component</p>`
})
class MyComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
@Component({
selector: 'my-amm',
template: `<button (click)="SubmitData">Data Submit</button>
          <input [(ngModel)]="value" name="name">`
})
@Component({
  selector: 'app',
  template: `
    <button (click)="hasChild =! hasChild">
      {{hasChild ? 'Destroy' : 'Create'}} MyComponent
    </button>
    <my-cmp *ngIf="hasChild"></my-cmp>
    <my-amm *ngFor=""></my-amm>`,
  directives: [MyComponent,]
})

export class AppComponent {
  hasChild = true;
}


