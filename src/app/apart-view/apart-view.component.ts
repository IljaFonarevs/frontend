import { Component, OnInit } from '@angular/core';
import { ApartService } from '../apart.service';
import { Dzivoklis } from '../Dzivoklis';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-apart-view',
  templateUrl: './apart-view.component.html',
  styleUrls: ['./apart-view.component.css']
})
export class ApartViewComponent implements OnInit{
  aparts: Dzivoklis[] = [];
  constructor(private apartService: ApartService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getAparts();
  }
  getAparts() : void {
    this.apartService.getAparts().subscribe(a => this.aparts = a);
    this.messageService.add('Apparts fetched');
  }

}
