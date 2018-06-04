import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Stagiaires} from "../model/model.Stagiaire";
import {Encadrant} from "../model/model.Encadrant";

@Injectable()
export class EncadrantService {

  currentEncadrant;
  encadrants: any;
  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              public http: Http) {
    this.http = http;
  }

  getAllEncadrants() {
    return this.http.get(this.config.encadrants_url)
      .map(resp => resp.json());
  }
  getEncadrant(id:number)
  {
    return this.http.get(this.config.encadrants_url+"/"+id).map(resp => resp.json());
  }
  getEncadrantByEmail(email: String) {
    return this.http.get(this.config.encadrant_search_email_url + email)
      .map(resp => resp.json());
  }


  saveEncadrant(encadrant:Encadrant) {
    return this.http.post(this.config.encadrants_url,encadrant)
      .map(resp => resp.json());
  }
  updateEncadrants(encadrant:Encadrant) {
    console.log(encadrant);
    return this.http.put(this.config.encadrants_url+"/update/"+encadrant.id,encadrant)
      .map(resp => resp.json());
  }
  DeleteEncadrant(id:number) {
    return this.http.delete(this.config.encadrants_url+"/"+id)
      .map(resp => resp.json());
  }

}
