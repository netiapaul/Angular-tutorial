import { Hero } from './../hero';
import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
@Component({
    selector:'app-hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

    constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ){}

    ngOnInit(){
      this.getHero()
    }

    @Input() hero:Hero;

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
      }

      goBack():void{
        this.location.back()
      }
}