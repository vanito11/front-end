import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFiliereComponent } from './update-filiere.component';

describe('UpdateFiliereComponent', () => {
  let component: UpdateFiliereComponent;
  let fixture: ComponentFixture<UpdateFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
