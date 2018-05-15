import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../service';
import { ProfGuard } from './prof.guard';
import { MockUserService } from '../service/mocks';

export class RouterStub {
  navigate(commands?: any[], extras?: any) {}
}

describe('ProfGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfGuard,
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

  it('should ...', inject([ProfGuard], (guard: ProfGuard) => {
    expect(guard).toBeTruthy();
  }));
});
