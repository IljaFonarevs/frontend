import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartDetailComponent } from './apart-detail.component';

describe('ApartDetailComponent', () => {
  let component: ApartDetailComponent;
  let fixture: ComponentFixture<ApartDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartDetailComponent]
    });
    fixture = TestBed.createComponent(ApartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
