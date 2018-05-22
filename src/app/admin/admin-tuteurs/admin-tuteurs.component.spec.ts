import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTuteursComponent } from './admin-tuteurs.component';

describe('AdminTuteursComponent', () => {
  let component: AdminTuteursComponent;
  let fixture: ComponentFixture<AdminTuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
