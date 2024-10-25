import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartCreateComponent } from './apart-create.component';

describe('ApartCreateComponent', () => {
  let component: ApartCreateComponent;
  let fixture: ComponentFixture<ApartCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartCreateComponent]
    });
    fixture = TestBed.createComponent(ApartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
