import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ConfigService} from '../../service/config.service';
import {ApiService} from '../../service/api.service';
import {Router} from "@angular/router";
import {StagiaireService} from "../../service/stagiaire.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-admin-stagiaires',
  templateUrl: './admin-stagiaires.component.html',
  styleUrls: ['./admin-stagiaires.component.css'],

})
export class AdminStagiairesComponent implements OnInit {
  currentEncadrant;
  stagiaires: any;
  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              public router:Router,
              public stagiairesServices:StagiaireService,
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
  onUpdateStagiaire(id:number){
    location.reload();
    this.router.navigate(['editStagiaire',id])
  }

  onDeleteStagiaire(id:number){
    this.stagiairesServices.DeleteStagiaire(id)
      .subscribe(data=>{console.log(data); alert("stagiaire supprimer");},err=>{console.log(err); alert("Probleme");})
    location.reload();
  }
}
