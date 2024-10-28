import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApartService } from '../apart.service';
import { Dzivoklis } from '../Dzivoklis';

@Component({
  selector: 'app-apart-detail',
  templateUrl: './apart-detail.component.html',
  styleUrls: ['./apart-detail.component.css'],
})
export class ApartDetailComponent implements OnInit {
  houseAparts: Dzivoklis[] = [];
  editForm: FormGroup;
  editingApart?: Dzivoklis | null = null;
  usedID: number = -1;
  creatingApart: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apartService: ApartService,
    private location: Location
  ) {
    this.usedID = Number(this.route.snapshot.paramMap.get('id'));
    // Initialize the form with empty controls
    this.editForm = this.fb.group({
      dzivNumurs: [0],
      stavs: ['', Validators.required],
      istabSkaits: ['', Validators.required],
      ieiedzSkaits: ['', Validators.required],
      platiba: ['', Validators.required],
      dzivPlatiba: ['', Validators.required],
      majaID: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getHouseAparts();
  }
  createApart(): void {
    this.creatingApart = true;
  }

  getHouseAparts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apartService
      .getApartsFromHouse(id)
      .subscribe((a) => (this.houseAparts = a));
  }

  editApart(apart: Dzivoklis): void {
    this.editingApart = apart;
    this.editForm.patchValue(apart); // Populate the form with apartment data
  }

  onSubmit(): void {
    if (this.editForm.valid && this.editingApart) {
      const updatedApart: Dzivoklis = this.editForm.value;
      this.apartService
        .updateApart(this.editingApart.dzivNumurs, updatedApart)
        .subscribe({
          next: () => {
            // Update the displayed list of apartments after saving
            const index = this.houseAparts?.findIndex(
              (apart) => apart.dzivNumurs === this.editingApart!.dzivNumurs
            );
            if (index !== undefined && index > -1 && this.houseAparts) {
              this.houseAparts[index] = updatedApart;
            }
            this.editingApart = null; // Hide the form
          },
          error: (err) => {
            console.error('Error updating apartment:', err);
          },
        });
    }
  }
  onDelete(id: number): void {
    this.apartService.deleteApart(id).subscribe(() => {
      this.houseAparts = this.houseAparts.filter(
        (apart) => apart.dzivNumurs !== id
      );
    });
  }
  onSubmitCreate(): void {
    if (this.editForm.valid) {
      const updatedApart: Dzivoklis = this.editForm.value;
      this.apartService.createApart(updatedApart).subscribe({
        next: () => {
          this.creatingApart = false;
        },
        error: (err) => {
          console.error('Error updating apartment:', err);
        },
      });
    }
  }

  cancelEdit(): void {
    this.editingApart = null;
    this.editForm.reset();
    this.creatingApart = false;
  }

  goBack(): void {
    this.location.back();
  }
}
