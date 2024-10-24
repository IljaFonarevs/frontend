import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Hero[] = [];
  

  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
