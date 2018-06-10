import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-admin-stages',
  templateUrl: './admin-stages.component.html',
  styleUrls: ['./admin-stages.component.css']
})
export class AdminStagesComponent implements OnInit {



  currentStage;
  stage: any;
  httpp: Http;

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http) {
    this.http = http;
  }


  ngOnInit() {
    this.http.get(this.config.stages_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.stage = data;
        }, error => {
          console.log('GET TUTEURS ERROR :' + error);
        }
      )
  }

}
