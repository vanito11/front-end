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
import {AdminFiliereComponent} from './admin/admin-filiere/admin-filiere.component';
import {NewStagiairesComponent} from './admin/admin-stagiaires/new-stagiaires/new-stagiaires.component';
import {UppdateStagiairesComponent} from './admin/admin-stagiaires/uppdate-stagiaires/uppdate-stagiaires.component';
import {NewEncadrantComponent} from './admin/admin-encadrants/new-encadrant/new-encadrant.component';
import {UpdateEncadrantComponent} from './admin/admin-encadrants/update-encadrant/update-encadrant.component';
import { NewFiliereComponent } from './admin/admin-filiere/new-filiere/new-filiere.component';
import { UpdateFiliereComponent } from './admin/admin-filiere/update-filiere/update-filiere.component';
import { NewTuteurComponent } from './admin/admin-tuteurs/new-tuteur/new-tuteur.component';
import { UpdateTuteurComponent } from './admin/admin-tuteurs/update-tuteur/update-tuteur.component';
import { AdminEntrepriseComponent } from './admin/admin-entreprise/admin-entreprise.component';
import { NewEntrepriseComponent } from './admin/admin-entreprise/new-entreprise/new-entreprise.component';
import { UpdateEntrepriseComponent } from './admin/admin-entreprise/update-entreprise/update-entreprise.component';
import { SeanceEncadrementComponent } from './admin/admin-stages/seance-encadrement/seance-encadrement.component';
import { SoutenancesComponent } from './admin/admin-stages/soutenances/soutenances.component';
import { DocumentComponent } from './admin/admin-stages/document/document.component';
import { VisitesComponent } from './admin/admin-stages/visites/visites.component';
import { UpdateVisitesComponent } from './admin/admin-stages/Visites/update-visites/update-visites.component';
import { UpdateDocumentComponent } from './admin/admin-stages/document/update-document/update-document.component';
import { UpdateSoutenancesComponent } from './admin/admin-stages/soutenances/update-soutenances/update-soutenances.component';
import { UpdateSeanceComponent } from './admin/admin-stages/seance-encadrement/update-seance/update-seance.component';
import { NewDocumentComponent } from './admin/admin-stages/document/new-document/new-document.component';
import { NewSoutenancesComponent } from './admin/admin-stages/soutenances/new-soutenances/new-soutenances.component';
import { NewVisitesComponent } from './admin/admin-stages/Visites/new-visites/new-visites.component';
import { NewSeanceComponent } from './admin/admin-stages/seance-encadrement/new-seance/new-seance.component';

export const routes: Routes = [
  {
    path: 'admin/stages/newDocument/:id',
    component: NewDocumentComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/newSoutenances/:id',
    component: NewSoutenancesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/newVisite/:id',
    component: NewVisitesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/newSeance/:id',
    component: NewSeanceComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/newtuteur',
    component: NewTuteurComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editDocument/:id',
    component: UpdateDocumentComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editSoutenance/:id',
    component: UpdateSoutenancesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editSeance/:id',
    component: UpdateSeanceComponent,
    canActivate: [AdminGuard],
  },
   {
    path: 'admin/stages/Visite/:id',
    component: VisitesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/Document/:id',
    component: DocumentComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stages/Soutenance/:id',
    component: SoutenancesComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'admin/stages/seanceEncadrement/:id',
    component: SeanceEncadrementComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/entreprise/newentreprise',
    component: NewEntrepriseComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'admin/entreprises',
    component: AdminEntrepriseComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/tuteur/newtuteur',
    component: NewTuteurComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/filiere/newfiliere',
    component: NewFiliereComponent,
    canActivate: [AdminGuard],
  },
{
    path: 'admin/encadrant/newencadrant',
    component: NewEncadrantComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/stagiaire/newstagiaires',
    component: NewStagiairesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editVisite/:id',
    component: UpdateVisitesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editEntreprise/:id',
    component: UpdateEntrepriseComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editTuteur/:id',
    component: UpdateTuteurComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editFiliere/:id',
    component: UpdateFiliereComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editStagiaire/:id',
    component: UppdateStagiairesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editEncadrant/:id',
    component: UpdateEncadrantComponent,
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
    path: 'admin/filieres',
    component: AdminFiliereComponent,
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

