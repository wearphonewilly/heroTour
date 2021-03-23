import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

    getHeroes(): Hero[] {
        return HEROES;
    }

    getHero(id:number): Hero {
        return HEROES.find((el) => el.id === id);
    }
    // Buscamos un hero en el array a través de su ID
}
