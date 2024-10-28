import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House } from '../House';
import { HouseService } from '../house.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
})
export class HouseViewComponent implements OnInit {
  houses: House[] = [];
  editForm: FormGroup;
  editingHouse: House | null = null;
  creatingHouse: boolean = false;

  constructor(
    private fb: FormBuilder,
    private houseService: HouseService,
    private messageService: MessageService
  ) {
    // Initialize form with empty controls
    this.editForm = this.fb.group({
      iela: ['', Validators.required],
      pilseta: ['', Validators.required],
      valsts: ['', Validators.required],
      pastIndeks: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(): void {
    this.houseService.getHouses().subscribe((h) => (this.houses = h));
    this.messageService.add('Houses fetched');
  }

  editHouse(house: House): void {
    this.editingHouse = house;
    this.editForm.patchValue(house); // Populate form with house data
  }
  createHouse(): void {
    this.creatingHouse = true;
  }

  onSubmit(): void {
    if (this.editForm.valid && this.editingHouse) {
      const updatedHouse: House = {
        ...this.editingHouse,
        ...this.editForm.value,
      };
      this.houseService.updateHouse(updatedHouse).subscribe({
        next: () => {
          // Update the displayed list of houses
          const index = this.houses.findIndex(
            (h) => h.majaNumurs === updatedHouse.majaNumurs
          );
          if (index !== -1) {
            this.houses[index] = updatedHouse;
          }
          this.editingHouse = null; // Hide form after saving
          this.messageService.add('House updated');
        },
        error: (err) => {
          console.error('Error updating house:', err);
        },
      });
    }
  }
  onSubmitCreate(): void {
    if (this.editForm.valid) {
      const updatedHouse: House = {
        ...this.editForm.value,
      };
      this.houseService.createHouse(updatedHouse).subscribe({
        next: () => {
          // Update the displayed list of houses
          const index = this.houses.findIndex(
            (h) => h.majaNumurs === updatedHouse.majaNumurs
          );
          if (index !== -1) {
            this.houses[index] = updatedHouse;
          }
          this.editingHouse = null; // Hide form after saving
          this.messageService.add('House updated');
        },
        error: (err) => {
          console.error('Error updating house:', err);
        },
      });
    }
  }

  cancelEdit(): void {
    this.editingHouse = null;
    this.editForm.reset();
    this.creatingHouse = false;
  }

  onDelete(id: number): void {
    this.houseService.deleteHouse(id).subscribe(() => {
      this.houses = this.houses.filter((house) => house.majaNumurs !== id);
      this.messageService.add('House deleted');
    });
  }
}
