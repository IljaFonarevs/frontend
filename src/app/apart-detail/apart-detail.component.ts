import { Component } from '@angular/core';
import { Dzivoklis } from '../Dzivoklis';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApartService } from '../apart.service';
@Component({
  selector: 'app-apart-detail',
  templateUrl: './apart-detail.component.html',
  styleUrls: ['./apart-detail.component.css'],
})
export class ApartDetailComponent {
  houseAparts?: Dzivoklis[] = [];
  constructor(
    private route: ActivatedRoute,
    private apartService: ApartService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHouseAparts();
  }
  getHouseAparts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apartService
      .getApartsFromHouse(id)
      .subscribe((a) => (this.houseAparts = a));
  }
  goBack(): void {
    this.location.back();
  }
}
