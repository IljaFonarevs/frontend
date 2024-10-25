import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartViewComponent } from './apart-view/apart-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { ApartDetailComponent } from './apart-detail/apart-detail.component';
import { ResidentsDetailComponent } from './residents-detail/residents-detail.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { HouseCreateComponent } from './house-create/house-create.component';
import { ApartEditComponent } from './apart-edit/apart-edit.component';
import { ApartCreateComponent } from './apart-create/apart-create.component';
const routes: Routes = [
  { path: '', redirectTo: '/apartView', pathMatch: 'full' },
  { path: 'apartView', component: ApartViewComponent },
  { path: 'houseApart/:id', component: ApartDetailComponent },
  { path: 'apartResidents/:id', component: ResidentsDetailComponent },
  { path: 'editHouse/:id', component: HouseEditComponent },
  { path: 'houseView', component: HouseViewComponent },
  { path: 'createHouse', component: HouseCreateComponent },
  { path: 'editApart/:id', component: ApartEditComponent },
  { path: 'createApart', component: ApartCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
