import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable,of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class HeroService {
    constructor(private msgservice:MessageService,
                private http:HttpClient      
      ){}

      // private heroesUrl = '../api./mock-heroes';

      getHeroes(): Observable<Hero[]> {
        this.msgservice.add('HeroService: fetched heroes');
        return of(HEROES);
      }
   
    // getHeroes(): Observable<Hero[]> {
    //     this.msgservice.add('HeroService: fetched heroes');
    //     return this.http.get<Hero[]>(this.heroesUrl);
    //   }

      getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.msgservice.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
      }
}