import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsDetailComponent } from './residents-detail.component';

describe('ResidentsDetailComponent', () => {
  let component: ResidentsDetailComponent;
  let fixture: ComponentFixture<ResidentsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentsDetailComponent]
    });
    fixture = TestBed.createComponent(ResidentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
