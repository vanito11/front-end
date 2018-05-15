import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../service';
import { TuteurGuard } from './tuteur.guard';
import { MockUserService } from '../service/mocks';

export class RouterStub {
  navigate(commands?: any[], extras?: any) {}
}

describe('TuteurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TuteurGuard,
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

  it('should ...', inject([TuteurGuard], (guard: TuteurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
