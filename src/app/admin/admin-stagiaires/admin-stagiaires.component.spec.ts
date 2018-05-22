import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStagiairesComponent } from './admin-stagiaires.component';

describe('AdminStagiairesComponent', () => {
  let component: AdminStagiairesComponent;
  let fixture: ComponentFixture<AdminStagiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStagiairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
