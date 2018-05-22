import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import {
  AuthService,
  ConfigService,
  ApiService,
  UserService
} from '../../../service';
import {
  MockUserService,
  MockApiService
} from '../../../service/mocks';
import { AccountMenuAdminComponent } from './account-menuadmin.component';

describe('AccountMenuAdminComponent', () => {
  let component: AccountMenuAdminComponent;
  let fixture: ComponentFixture<AccountMenuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: UserService,
          useClass: MockUserService
        },
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        ConfigService
      ],
      declarations: [AccountMenuAdminComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
