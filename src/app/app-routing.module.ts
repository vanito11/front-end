import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AdminComponent } from './admin';
import { UserComponent } from './user';
import { ProfComponent } from './prof';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { TuteurComponent } from './tuteur/tuteur.component';
import { LoginGuard } from './guard';
import { UserGuard } from './guard/user.guard';
import { ProfGuard } from './guard/prof.guard';
import { StagiaireGuard} from './guard/stagiaire.guard';
import { TuteurGuard} from './guard/tuteur.guard';
import { GuestGuard, AdminGuard } from './guard';
import { NotFoundComponent } from './not-found';
import { ChangePasswordComponent } from './change-password';
import { ForbiddenComponent } from './forbidden';
import { SignupComponent } from './signup';
import {AdminSignupComponent} from './admin/admin-signup';
import {AdminChangePasswordComponent} from './admin/admin-change-password';
import {AdminTuteursComponent} from './admin/admin-tuteurs';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'tuteurs',
    component: AdminTuteursComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'create',
    component: AdminSignupComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'changepassword',
    component: AdminChangePasswordComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'encadrant',
    component: ProfComponent,
    canActivate: [ProfGuard]
  },
  {
    path: 'stagiaire',
    component: StagiaireComponent,
    canActivate: [StagiaireGuard]
  },
  {
    path: 'tuteur',
    component: TuteurComponent,
    canActivate: [TuteurGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
