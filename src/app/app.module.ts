import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { ApartViewComponent } from './apart-view/apart-view.component';
import { ApartDetailComponent } from './apart-detail/apart-detail.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { ResidentsDetailComponent } from './residents-detail/residents-detail.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HouseCreateComponent } from './house-create/house-create.component';
import { ApartEditComponent } from './apart-edit/apart-edit.component';
import { ApartCreateComponent } from './apart-create/apart-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ApartViewComponent,
    ApartDetailComponent,
    HouseViewComponent,
    ResidentsDetailComponent,
    HouseEditComponent,
    HouseCreateComponent,
    ApartEditComponent,
    ApartCreateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
