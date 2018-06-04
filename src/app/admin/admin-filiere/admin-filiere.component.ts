import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {ConfigService} from "../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {StagiaireService} from "../../service/stagiaire.service";
import {Filiere} from "../../model/model.Filiere";

@Component({
  selector: 'app-admin-filiere',
  templateUrl: './admin-filiere.component.html',
  styleUrls: ['./admin-filiere.component.css']
})
export class AdminFiliereComponent implements OnInit {
  currentFiliere;
  filiere: any;
  httpp: Http;
fil:Filiere = new Filiere();

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router:Router,
              public stagiairesServices:StagiaireService,
            ) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get(this.config.filiere_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.filiere = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )

  }

  onUpdateFiliere(id:number){
    location.reload();
    this.router.navigate(['editFiliere',id])
  }

  onDeleteFiliere(id:number){
    this.stagiairesServices.Deletefiliere(id)
      .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    location.reload();
  }
}
