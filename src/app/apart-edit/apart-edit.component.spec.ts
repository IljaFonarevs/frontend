import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartEditComponent } from './apart-edit.component';

describe('ApartEditComponent', () => {
  let component: ApartEditComponent;
  let fixture: ComponentFixture<ApartEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartEditComponent]
    });
    fixture = TestBed.createComponent(ApartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
