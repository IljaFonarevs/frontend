import { Component, OnInit } from '@angular/core';
import { House } from '../House';
import { HouseService } from '../house.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit{
  houses: House[] = [];

  constructor(private houseService: HouseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHouses();
  }
  getHouses(): void {
    this.houseService.getHouses().subscribe(h => this.houses = h);
    this.messageService.add('Houses fetched');
  }
  onDelete(id: number): void {
    this.houseService.deleteHouse(id).subscribe(r => {console.log(r)});
  }
}
