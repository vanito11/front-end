import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceEncadrementComponent } from './seance-encadrement.component';

describe('SeanceEncadrementComponent', () => {
  let component: SeanceEncadrementComponent;
  let fixture: ComponentFixture<SeanceEncadrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceEncadrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
