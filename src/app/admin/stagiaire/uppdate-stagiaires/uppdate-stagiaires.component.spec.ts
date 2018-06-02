import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateStagiairesComponent } from './uppdate-stagiaires.component';

describe('UppdateStagiairesComponent', () => {
  let component: UppdateStagiairesComponent;
  let fixture: ComponentFixture<UppdateStagiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppdateStagiairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppdateStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
