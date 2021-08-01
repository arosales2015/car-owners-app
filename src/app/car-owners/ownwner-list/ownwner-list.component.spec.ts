import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnwnerListComponent } from './ownwner-list.component';

describe('OwnwnerListComponent', () => {
  let component: OwnwnerListComponent;
  let fixture: ComponentFixture<OwnwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnwnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
