import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';
import {TuteurService} from "../../service/tuteur.service";
import {Router} from "@angular/router";

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
              private tuteurService: TuteurService,
              private route:Router,
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


  onUpdateTuteur(id:number){
    location.reload();
    this.route.navigate(['editTuteur',id])
  }

  onDeleteTuteur(id:number){

    this.tuteurService.DeleteTuteur(id)
      .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    location.reload();
  }

}
