import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';
import {Router} from "@angular/router";
import {StagiaireService} from "../../service/stagiaire.service";

@Component({
  selector: 'app-admin-stages',
  templateUrl: './admin-stages.component.html',
  styleUrls: ['./admin-stages.component.css']
})
export class AdminStagesComponent implements OnInit {



  currentStage;
  stagestagiaires: any;
  httpp: Http;

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private router:Router,
              public stagiairesServices:StagiaireService,
              private http: Http) {
    this.http = http;
  }


  ngOnInit() {
    this.http.get(this.config.stagestagiaires_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.stagestagiaires = data;
        }, error => {
          console.log('GET ERROR :' + error);
        }
      )
  }


  PageSeanceEncadrement(id:number){
    location.reload();
    this.router.navigate(['admin/stages/seanceEncadrement',id])

  }

  PageVisite(id:number){
    location.reload();
    this.router.navigate(['admin/stages/Visite',id])
  }

  PageDocument(id:number){
    location.reload();
    this.router.navigate(['admin/stages/Document',id])
  }


  PageSoutenance(id:number){
    location.reload();
    this.router.navigate(['admin/stages/Soutenance',id])
  }

  onDeleteStage(id:number){
      this.stagiairesServices.DeleteStage(id)
        .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    //npnpm   location.reload();
    }


}
