import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseViewComponent } from './house-view.component';

describe('HouseViewComponent', () => {
  let component: HouseViewComponent;
  let fixture: ComponentFixture<HouseViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseViewComponent]
    });
    fixture = TestBed.createComponent(HouseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
