import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {ConfigService} from "../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {EntrepriseService} from "../../service/entreprise.service";

@Component({
  selector: 'app-admin-entreprise',
  templateUrl: './admin-entreprise.component.html',
  styleUrls: ['./admin-entreprise.component.css']
})
export class AdminEntrepriseComponent implements OnInit {

  entreprise:any;
  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router:Router,
              private entrepriseService:EntrepriseService,

  ) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(this.config.entreprises_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.entreprise = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )
  }
  onUpdateEntreprise(id:number){
    location.reload();
    this.router.navigate(['editEntreprise',id])
  }

  onDeleteEntreprise(id:number){
    this.entrepriseService.DeleteEntreprise(id)
      .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    location.reload();
  }

}
