import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSoutenancesComponent } from './update-soutenances.component';

describe('UpdateSoutenancesComponent', () => {
  let component: UpdateSoutenancesComponent;
  let fixture: ComponentFixture<UpdateSoutenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSoutenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSoutenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
