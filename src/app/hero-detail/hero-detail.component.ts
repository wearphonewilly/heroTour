import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    // @Input() hero?: Hero; // El Input sirve para hacer la comunicación entre padre e hijo --- de hijo a padre será @Output()
    hero?: Hero;
    
    constructor(
        private route: ActivatedRoute, // Trabajar con la ruta activa, ver cual está puesta y coger información
        private hero$: HeroService,    // Trabajar con la petición
        private location: Location     // Hacer el back
    ) {}

    ngOnInit() {
        this.getHero()
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');  // Coge la id de la ruta. (El + delante es para transformar de string a int)
        this.hero = this.hero$.getHero(id);
    }

    goBack(): void {
        this.location.back();
    }

}
