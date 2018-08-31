import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  @Input() heroes: Heroe[] = [];
  @Input() buscador: boolean;
  constructor( private _heroesService: HeroesService,
               private router: Router ) {
    /* console.log('Constructor'); */
    this.buscador = false;
  }

  ngOnInit() {
    /* console.log('ngOnInit'); */
    if (!this.buscador) {
      this.heroes = this._heroesService.getHeroes();
    }
    /* console.log( this.heroes ); */
  }

  verHeroe(idx: number) {
    if ( this.buscador) {
      this.router.navigate( [ '/heroe', this.heroes[idx].idx ]);
    } else {
      this.router.navigate( [ '/heroe', idx ]);
    }
  }

}
