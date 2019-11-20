import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = 'Windstone';
  //heroes = HEROES;
  heroes : Hero[];

  hero: Hero = {
    id: 1,
    name: 'Windstone'
  }

  selectedHero: Hero

 onSelect(hero: Hero)
 {
    this.selectedHero = hero;
 }



  constructor(private heroService: HeroService) { }

 


  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void
  {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

 
}
