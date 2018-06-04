import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFiliereComponent } from './admin-filiere.component';

describe('AdminFiliereComponent', () => {
  let component: AdminFiliereComponent;
  let fixture: ComponentFixture<AdminFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
