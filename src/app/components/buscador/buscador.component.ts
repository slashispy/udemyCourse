import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      console.log('Termino: ' + params['termino']);
      this.termino = params['termino'];
      this.heroes = this.service.buscarHeroes(params['termino']);
    });
  }

}
