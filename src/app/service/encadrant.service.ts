import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Stagiaires} from "../model/model.Stagiaire";

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

  getEncadrantByEmail(email: String) {
    return this.http.get(this.config.encadrant_search_email_url + email)
      .map(resp => resp.json());
  }



}
