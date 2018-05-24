import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ConfigService} from '../../service/config.service';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-admin-stagiaires',
  templateUrl: './admin-stagiaires.component.html',
  styleUrls: ['./admin-stagiaires.component.css']
})
export class AdminStagiairesComponent implements OnInit {
  currentEncadrant;
  stagiaires: any;
  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get(this.config.stagiaires_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.stagiaires = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )
  }
}
