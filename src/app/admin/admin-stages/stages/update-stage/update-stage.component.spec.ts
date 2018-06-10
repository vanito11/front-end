import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStageComponent } from './update-stage.component';

describe('UpdateStageComponent', () => {
  let component: UpdateStageComponent;
  let fixture: ComponentFixture<UpdateStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
