import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitesComponent } from './update-visites.component';

describe('UpdateVisitesComponent', () => {
  let component: UpdateVisitesComponent;
  let fixture: ComponentFixture<UpdateVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
