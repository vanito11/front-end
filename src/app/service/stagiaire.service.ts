import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Stagiaires} from "../model/model.Stagiaire";
import {Filiere} from "../model/model.Filiere";
import {SeanceEncadrement} from "../model/model.SeanceEncadrement";
import {Soutenance} from "../model/model.Soutenance";
import {Visite} from "../model/model.Visite";
import {Document} from "../model/Document";



@Injectable()
export class StagiaireService {


  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              public http: Http) {
    this.http = http;
  }

  getStagiaires(id:number)
  {
    return this.http.get('http://localhost:8080/api/stagiaires/'+id).map(resp => resp.json());
  }
  saveStagiaire(stagiaire:Stagiaires) {
    return this.http.post(this.config.stagiaires_url,stagiaire)
      .map(resp => resp.json());
  }

  updateStagiaire(stagiaires:Stagiaires) {
    console.log(stagiaires);
    return this.http.put(this.config.stagiaires_url+"/update/"+stagiaires.id,stagiaires)
      .map(resp => resp.json());
  }
  DeleteStagiaire(id:number) {
    return this.http.delete(this.config.stagiaires_url+"/"+id)
      .map(resp => resp.json());
  }





  ///////Filiere service

  getFiliere(id:number)
  {
    return this.http.get(this.config.filiere_url+"/"+id).map(resp => resp.json());
  }
  saveFiliere(filiere:Filiere) {
    return this.http.post(this.config.filiere_url,filiere)
      .map(resp => resp.json());
  }

  updateFiliere(filiere:Filiere) {
    console.log(filiere);
    return this.http.put(this.config.filiere_url+"/update/"+filiere.id,filiere)
      .map(resp => resp.json());
  }
  Deletefiliere(id:number) {
    return this.http.delete(this.config.filiere_url+"/"+id)
      .map(resp => resp.json());
  }

  ///////Stage service
  getStageById(id:number)
  {
    return this.http.get(this.config.getStages_url+"/"+id).map(resp => resp.json());
  }
  DeleteStage(id:number) {
    return this.http.delete(this.config.getStages_url+"/"+id)
      .map(resp => resp.json());
  }

  ///SeanceEncadrement
  getStageSeanceEncadrement(id:number)
  {
    return this.http.get(this.config.getStages_url+"/seanceencadrements/"+id).map(resp => resp.json());
  }
  updateSeanceEncadrement(seanceEncadrement:SeanceEncadrement) {
    return this.http.put(this.config.seanceencadrements_url+"/update/"+seanceEncadrement.id,seanceEncadrement)
      .map(resp => resp.json());
  }
  DeleteSeanceEncadrement(id:number) {
    return this.http.delete(this.config.seanceencadrements_url+"/"+id)
      .map(resp => resp.json());
  }
  saveSeanceEncadrement(seanceEncadrement:SeanceEncadrement) {
    return this.http.post(this.config.seanceencadrements_url,seanceEncadrement)
      .map(resp => resp.json());
  }
  SeanceEncadrementbyID(id:number)
  {
    return this.http.get(this.config.seanceencadrements_url+"/"+id).map(resp => resp.json());
  }

  ///Visite
  getVisite(id:number)
  {
    return this.http.get(this.config.getStages_url+"/visites/"+id).map(resp => resp.json());
  }
  updateVisite(visite:Visite) {
    return this.http.put(this.config.visites_url+"/update/"+visite.id,visite)
      .map(resp => resp.json());
  }
  DeleteVisite(id:number) {
    return this.http.delete(this.config.visites_url+"/"+id)
      .map(resp => resp.json());
  }
  saveVisite(visite:Visite) {
    return this.http.post(this.config.visites_url,visite)
      .map(resp => resp.json());
  }
  VisitebyID(id:number)
  {
    return this.http.get(this.config.visites_url+"/"+id).map(resp => resp.json());
  }


  ///Soutenance
  getSoutenance(id:number)
  {
    return this.http.get(this.config.getStages_url+"/soutenances/"+id).map(resp => resp.json());
  }
  updateSoutenance(soutenance:Soutenance) {
    return this.http.put(this.config.soutenances_url+"/update/"+soutenance.id,soutenance)
      .map(resp => resp.json());
  }
  DeleteSoutenance(id:number) {
    return this.http.delete(this.config.soutenances_url+"/"+id)
      .map(resp => resp.json());
  }
  saveSoutenance(soutenance:Soutenance) {
    return this.http.post(this.config.soutenances_url,soutenance)
      .map(resp => resp.json());
  }
  SoutenancebyID(id:number)
  {
    return this.http.get(this.config.soutenances_url+"/"+id).map(resp => resp.json());
  }

  ///Document
  getDocument(id:number)
  {
    return this.http.get(this.config.getStages_url+"/documents/"+id).map(resp => resp.json());
  }
   updateDocuments(document:Document) {
    return this.http.put(this.config.documents_url+"/update/"+document.id,document)
      .map(resp => resp.json());
  }
  DeleteDocument(id:number) {
    return this.http.delete(this.config.documents_url+"/"+id)
      .map(resp => resp.json());
  }
  saveDocument(document:Document) {
    return this.http.post(this.config.documents_url,document)
      .map(resp => resp.json());
  }
  DocumentbyID(id:number)
  {
    return this.http.get(this.config.documents_url+"/"+id).map(resp => resp.json());
  }

}
