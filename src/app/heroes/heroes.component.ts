import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes', // Este es el nombre que hay que pner en app.component.html para que nos lo coja: <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
