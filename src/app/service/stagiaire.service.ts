import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Stagiaires} from "../model/model.Stagiaire";
import {Filiere} from "../model/model.Filiere";

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

}
