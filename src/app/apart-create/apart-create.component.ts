import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApartService } from '../apart.service';
import { Dzivoklis } from '../Dzivoklis';

@Component({
  selector: 'app-apart-create',
  templateUrl: './apart-create.component.html',
  styleUrls: ['./apart-create.component.css'],
})
export class ApartCreateComponent {
  editForm: FormGroup = this.fb.group({
    dzivNumurs: [0],
    stavs: [''],
    istabSkaits: [''],
    ieiedzSkaits: [''],
    platiba: [''],
    dzivPlatiba: [''],
    majaID: [''],
  });
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apartService: ApartService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.editForm = this.fb.group({
      dzivNumurs: [0],
      stavs: [''],
      istabSkaits: [''],
      ieiedzSkaits: [''],
      platiba: [''],
      dzivPlatiba: [''],
      majaID: [''],
    });
  }
  onSubmit(): void {
    const apart: Dzivoklis = this.editForm.value;
    this.apartService.createApart(apart).subscribe({
      next: () => {
        this.goBack();
      },
      error: () => {},
    });
  }

  goBack(): void {
    this.location.back();
  }
}
