import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitesComponent } from './new-visites.component';

describe('NewVisitesComponent', () => {
  let component: NewVisitesComponent;
  let fixture: ComponentFixture<NewVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
