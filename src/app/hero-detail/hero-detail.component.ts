import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
  @Input() hero?: Hero; // El Input sirve para hacer la comunicación entre padre e hijo --- de hijo a padre será @Output()

  constructor() { }

  ngOnInit() {
  }

}
