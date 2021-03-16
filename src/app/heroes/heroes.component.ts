import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // Este es el nombre que hay que pner en app.component.html para que nos lo coja: <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    
    /* hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }; */
    
    heroes:Hero[] = HEROES; //Le indicamos que es un array de heroes. Esto lo hacemos para que podamos usarlo en la vista
    selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void { //Esta función solo se llama desde el front por tanto no necesitará un return y será una función void
    this.selectedHero = hero; //Pasaremos el hero al front que será el que se haya clickado
  }

}
