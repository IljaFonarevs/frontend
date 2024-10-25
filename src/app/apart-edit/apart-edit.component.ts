import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ApartService } from '../apart.service';
import { Dzivoklis } from '../Dzivoklis';

@Component({
  selector: 'app-apart-edit',
  templateUrl: './apart-edit.component.html',
  styleUrls: ['./apart-edit.component.css']
})
export class ApartEditComponent implements OnInit {
  apartID: number = 2;
  editForm: FormGroup=this.fb.group({
    dzivNumurs: [this.apartID],
    stavs: [''],
    istabSkaits: [''],
    ieiedzSkaits: [''],
    platiba: [''],
    dzivPlatiba: [''],
    majaID: ['']
});

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private apartService: ApartService,
  private location: Location
) { }

ngOnInit(): void {
  this.apartID = Number(this.route.snapshot.paramMap.get('id'));
  this.editForm = this.fb.group({
    dzivNumurs: [this.apartID],
    stavs: [''],
    istabSkaits: [''],
    ieiedzSkaits: [''],
    platiba: [''],
    dzivPlatiba: [''],
    majaID: ['']
});
}
onSubmit(): void {
    
  const apart: Dzivoklis = this.editForm.value;
  this.apartService.updateApart(this.apartID, apart)
    .subscribe({
      next: () =>{
        this.goBack();
        
      },
      error: () =>{

      }
    });
  

}

goBack(): void{
this.location.back();
}

}
