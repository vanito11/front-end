import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-admin-tuteurs',
  templateUrl: './admin-tuteurs.component.html',
  styleUrls: ['./admin-tuteurs.component.css']
})
export class AdminTuteursComponent implements OnInit {

  currentTuteur;
  tuteurs: any;
  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get(this.config.tuteurs_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.tuteurs = data;
        }, error => {
          console.log('GET TUTEURS ERROR :' + error);
        }
      )
  }

}
