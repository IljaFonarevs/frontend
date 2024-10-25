import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House } from '../House';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css'],
})
export class HouseCreateComponent implements OnInit {
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
  }
  onSubmit(): void {
    const house: House = this.editForm.value;
    this.houseService.createHouse(house).subscribe((response) => {
      console.log(response);
    });
    console.log(house.iela + house.majaNumurs);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
