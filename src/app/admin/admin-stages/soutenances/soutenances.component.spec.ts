import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenancesComponent } from './soutenances.component';

describe('SoutenancesComponent', () => {
  let component: SoutenancesComponent;
  let fixture: ComponentFixture<SoutenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
