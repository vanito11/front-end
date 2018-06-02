import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStagiairesComponent } from './new-stagiaires.component';

describe('NewStagiairesComponent', () => {
  let component: NewStagiairesComponent;
  let fixture: ComponentFixture<NewStagiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStagiairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
