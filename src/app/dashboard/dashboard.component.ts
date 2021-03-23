import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes:Hero[] = []; //Le indicamos que es un array de heroes. Esto lo hacemos para que podamos usarlo en la vista

    constructor(private hero$: HeroService) {}  // Le colocamos el $ detrás para indicar que es un servicio

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroes = this.hero$.getHeroes().slice(1,5);
    }
}
