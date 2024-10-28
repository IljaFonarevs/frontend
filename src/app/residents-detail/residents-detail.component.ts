import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Resident } from '../Resident';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-residents-detail',
  templateUrl: './residents-detail.component.html',
  styleUrls: ['./residents-detail.component.css'],
})
export class ResidentsDetailComponent implements OnInit {
  apartResidents: Resident[] = [];
  editForm: FormGroup;
  editingResident: Resident | null = null;
  creatingResident: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private residentService: ResidentService,
    private location: Location
  ) {
    // Initialize the form with empty controls
    this.editForm = this.fb.group({
      vards: [''],
      uzvards: [''],
      persKods: [0],
      dzivNumurs: [0],
      isOwner: [false],
      dzimDat: [''],
    });
  }

  ngOnInit(): void {
    this.getApartResidents();
  }
  createResident(): void {
    this.creatingResident = true;
  }

  getApartResidents(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residentService
      .getResidentsFromApart(id)
      .subscribe((r) => (this.apartResidents = r));
  }

  editResident(resident: Resident): void {
    this.editingResident = resident;
    this.editForm.patchValue(resident); // Populate the form with resident data
  }

  onSubmit(): void {
    if (this.editingResident) {
      const updatedResident: Resident = {
        ...this.editingResident,
        ...this.editForm.value,
      };
      this.residentService.updateResident(updatedResident).subscribe({
        next: () => {
          // Update the displayed list of residents after saving
          const index = this.apartResidents?.findIndex(
            (res) => res.persKods === updatedResident.persKods
          );
          if (index !== undefined && index > -1 && this.apartResidents) {
            this.apartResidents[index] = updatedResident;
          }
          this.editingResident = null; // Hide the form
        },
        error: (err) => {
          console.error('Error updating resident:', err);
        },
      });
    }
  }
  onSubmitCreate(): void {
    if (this.editForm.valid) {
      const updatedResident: Resident = {
        ...this.editForm.value,
      };
      this.residentService.createResident(updatedResident).subscribe({
        next: () => {
          this.creatingResident = false; // Hide the form
        },
        error: (err) => {
          console.error('Error updating resident:', err);
        },
      });
    }
  }

  cancelEdit(): void {
    this.editingResident = null;
    this.editForm.reset();
    this.creatingResident = false;
  }
  onDelete(id: number): void {
    this.residentService.deleteResident(id).subscribe(() => {
      this.apartResidents = this.apartResidents.filter(
        (resident) => resident.persKods !== id
      );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
