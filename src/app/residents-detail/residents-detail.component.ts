import { Component } from '@angular/core';
import { Resident } from '../Resident';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResidentService } from '../resident.service';
@Component({
  selector: 'app-residents-detail',
  templateUrl: './residents-detail.component.html',
  styleUrls: ['./residents-detail.component.css'],
})
export class ResidentsDetailComponent {
  apartResidents?: Resident[] = [];
  constructor(
    private route: ActivatedRoute,
    private residentService: ResidentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getApartResidents();
  }

  getApartResidents(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residentService
      .getResidentsFromApart(id)
      .subscribe((r) => (this.apartResidents = r));
  }
  goBack(): void {
    this.location.back();
  }
}
