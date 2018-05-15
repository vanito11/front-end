import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../service';
import { UserGuard } from './user.guard';
import { MockUserService } from '../service/mocks';

export class RouterStub {
  navigate(commands?: any[], extras?: any) {}
}

describe('UserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserGuard,
        {
          provide: Router,
          useClass: RouterStub
        },
        {
          provide: UserService,
          useClass: MockUserService
        }
      ]
    });
  });

  it('should ...', inject([UserGuard], (guard: UserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
