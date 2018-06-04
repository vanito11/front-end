import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// material
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatIconRegistry,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { LoginGuard, GuestGuard, AdminGuard } from './guard';
import { ProfGuard} from './guard/prof.guard';
import { StagiaireGuard} from './guard/stagiaire.guard';
import { TuteurGuard} from './guard/tuteur.guard';
import { UserGuard} from './guard/user.guard';
import { NotFoundComponent } from './not-found';
import { AccountMenuComponent } from './component/header/account-menu/account-menu.component';
import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent,
  GithubComponent
} from './component';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProfComponent } from './prof/prof.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { TuteurComponent } from './tuteur/tuteur.component';
import { SignupComponent } from './signup/signup.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminStagiairesComponent } from './admin/admin-stagiaires/admin-stagiaires.component';
import { AdminTuteursComponent } from './admin/admin-tuteurs/admin-tuteurs.component';
import { AdminEncadrantsComponent } from './admin/admin-encadrants/admin-encadrants.component';
import { AdminStagesComponent } from './admin/admin-stages/admin-stages.component';
import {EncadrantService} from './service/encadrant.service';
import { NewStagiairesComponent } from './admin/admin-stagiaires/new-stagiaires/new-stagiaires.component';
import { UppdateStagiairesComponent } from './admin/admin-stagiaires/uppdate-stagiaires/uppdate-stagiaires.component';
import {StagiaireService} from "./service/stagiaire.service";
import { NewEncadrantComponent } from './admin/admin-encadrants/new-encadrant/new-encadrant.component';
import { NewTuteurComponent } from './admin/admin-tuteurs/new-tuteur/new-tuteur.component';
import { UpdateTuteurComponent } from './admin/admin-tuteurs/update-tuteur/update-tuteur.component';
import { UpdateEncadrantComponent } from './admin/admin-encadrants/update-encadrant/update-encadrant.component';
import { AdminFiliereComponent } from './admin/admin-filiere/admin-filiere.component';
import { NewFiliereComponent } from './admin/admin-filiere/new-filiere/new-filiere.component';
import { UpdateFiliereComponent } from './admin/admin-filiere/update-filiere/update-filiere.component';
import {TuteurService} from "./service/tuteur.service";

import { AdminEntrepriseComponent } from './admin/admin-entreprise/admin-entreprise.component';
import { NewEntrepriseComponent } from './admin/admin-entreprise/new-entreprise/new-entreprise.component';
import { UpdateEntrepriseComponent } from './admin/admin-entreprise/update-entreprise/update-entreprise.component';
import {EntrepriseService} from "./service/entreprise.service";

export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    UserComponent,
    ProfComponent,
    TuteurComponent,
    StagiaireComponent,
    SignupComponent,
    AdminCreateComponent,
    AdminStagiairesComponent,
    AdminTuteursComponent,
    AdminEncadrantsComponent,
    AdminStagesComponent,
    NewStagiairesComponent,
    UppdateStagiairesComponent,
    NewEncadrantComponent,
    NewTuteurComponent,
    UpdateTuteurComponent,
    UpdateEncadrantComponent,
    AdminFiliereComponent,
    NewFiliereComponent,
    UpdateFiliereComponent,
    AdminEntrepriseComponent,
    NewEntrepriseComponent,
    UpdateEntrepriseComponent,



  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    LoginGuard,
    GuestGuard,
    AdminGuard,
    UserGuard,
    ProfGuard,
    StagiaireGuard,
    TuteurGuard,
    FooService,
    AuthService,
    EncadrantService,
    EntrepriseService,
    StagiaireService,
    TuteurService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry,

    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
