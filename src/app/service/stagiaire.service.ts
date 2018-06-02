import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Stagiaires} from "../model/model.Stagiaire";

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


}
