import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Entreprise} from "../model/model.Entreprise";


@Injectable()
export class EntrepriseService {




  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              public http: Http) {
    this.http = http;
  }

  getEntreprise(id: number) {
    return this.http.get(this.config.entreprises_url + "/" + id).map(resp => resp.json());
  }

  saveEntreprise(entreprise: Entreprise) {
    return this.http.post(this.config.entreprises_url, entreprise)
      .map(resp => resp.json());
  }

  updateEntreprise(entreprise: Entreprise) {

    return this.http.put(this.config.entreprises_url + "/update/" + entreprise.id, entreprise)
      .map(resp => resp.json());
  }

  DeleteEntreprise(id: number) {
    return this.http.delete(this.config.entreprises_url + "/" + id)
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
