import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSoutenancesComponent } from './new-soutenances.component';

describe('NewSoutenancesComponent', () => {
  let component: NewSoutenancesComponent;
  let fixture: ComponentFixture<NewSoutenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSoutenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSoutenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
