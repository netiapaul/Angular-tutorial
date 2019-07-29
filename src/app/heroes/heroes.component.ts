import { HEROES } from './../mock-heroes';
import { OnInit, Component } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from './../hero.service';


@Component({
    selector:'app-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

     heroes:Hero[];

    ngOnInit(){
        
        this.heroservice.getHeroes().subscribe(
            data =>{
                this.heroes=data
            }
        )
    }

    constructor(private heroservice:HeroService){}

   

    selectedHero:Hero;


}