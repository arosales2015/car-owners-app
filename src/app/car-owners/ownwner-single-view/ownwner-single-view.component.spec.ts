import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnwnerSingleViewComponent } from './ownwner-single-view.component';

describe('OwnwnerSingleViewComponent', () => {
  let component: OwnwnerSingleViewComponent;
  let fixture: ComponentFixture<OwnwnerSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnwnerSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnwnerSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
