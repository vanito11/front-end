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
import {AdminCreateComponent} from './admin/admin-create/admin-create.component';
import {AdminStagiairesComponent} from './admin/admin-stagiaires/admin-stagiaires.component';
import {AdminTuteursComponent} from './admin/admin-tuteurs/admin-tuteurs.component';
import {AdminEncadrantsComponent} from './admin/admin-encadrants/admin-encadrants.component';
import {AdminStagesComponent} from './admin/admin-stages/admin-stages.component';
import {FiliereComponent} from './admin/filiere/filiere.component';
import {NewStagiairesComponent} from './admin/stagiaire/new-stagiaires/new-stagiaires.component';
import {UppdateStagiairesComponent} from './admin/stagiaire/uppdate-stagiaires/uppdate-stagiaires.component';

export const routes: Routes = [

  {
    path: 'admin/stagiaire/newstagiaires',
    component: NewStagiairesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editStagiaire/:id',
    component: UppdateStagiairesComponent,
    canActivate: [AdminGuard],
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
    path: 'admin/add',
    component: AdminCreateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/stagiaires',
    component: AdminStagiairesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/tuteurs',
    component: AdminTuteursComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/encadrantes',
    component: AdminEncadrantsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/stage',
    component: AdminStagesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/filiere',
    component: FiliereComponent,
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

