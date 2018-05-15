import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurComponent } from './tuteur.component';

describe('TuteurComponent', () => {
  let component: TuteurComponent;
  let fixture: ComponentFixture<TuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
