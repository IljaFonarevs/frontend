import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartViewComponent } from './apart-view.component';

describe('ApartViewComponent', () => {
  let component: ApartViewComponent;
  let fixture: ComponentFixture<ApartViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartViewComponent]
    });
    fixture = TestBed.createComponent(ApartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
