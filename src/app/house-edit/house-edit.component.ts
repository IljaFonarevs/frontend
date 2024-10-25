import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House } from '../House';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css'],
})
export class HouseEditComponent implements OnInit {
  houseID: number = -1;
  editForm: FormGroup = this.fb.group({
    majaNumurs: [this.houseID],
    iela: [''],
    pilseta: [''],
    valsts: [''],
    pastIndeks: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.houseID = Number(this.route.snapshot.paramMap.get('id'));
    this.editForm = this.fb.group({
      majaNumurs: [this.houseID],
      iela: [''],
      pilseta: [''],
      valsts: [''],
      pastIndeks: [''],
    });
    this.houseService.getHouse(this.houseID).subscribe((house: House) => {
      this.editForm.patchValue(house);
    });
  }
  onSubmit(): void {
    const house: House = this.editForm.value;
    this.houseService.updateHouse(house).subscribe((response) => {
      console.log(response);
    });
    console.log(house.iela + house.majaNumurs);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
