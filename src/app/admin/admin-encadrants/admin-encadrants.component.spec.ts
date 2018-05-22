import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncadrantsComponent } from './admin-encadrants.component';

describe('AdminEncadrantsComponent', () => {
  let component: AdminEncadrantsComponent;
  let fixture: ComponentFixture<AdminEncadrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEncadrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEncadrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
