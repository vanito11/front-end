import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../service';
import { StagiaireGuard } from './stagiaire.guard';
import { MockUserService } from '../service/mocks';

export class RouterStub {
  navigate(commands?: any[], extras?: any) {}
}

describe('StagiaireGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StagiaireGuard,
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

  it('should ...', inject([StagiaireGuard], (guard: StagiaireGuard) => {
    expect(guard).toBeTruthy();
  }));
});
