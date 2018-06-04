import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Tuteur} from "../model/model.Tuteur";

@Injectable()
export class TuteurService {


  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              public http: Http) {
    this.http = http;
  }


  getTuteur(id:number)
  {
    return this.http.get(this.config.tuteurs_url+"/"+id).map(resp => resp.json());
  }
  saveTuteur(tuteur:Tuteur) {
    return this.http.post(this.config.tuteurs_url,tuteur)
      .map(resp => resp.json());
  }

  updateTuteur(tuteur:Tuteur) {
    console.log(tuteur);
    return this.http.put(this.config.tuteurs_url+"/update/"+tuteur.id,tuteur)
      .map(resp => resp.json());
  }
  DeleteTuteur(id:number) {
    return this.http.delete(this.config.tuteurs_url+"/"+id)
      .map(resp => resp.json());
  }



/*

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
  }*/

}
