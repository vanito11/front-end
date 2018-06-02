import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {Stagiaires} from "../../../model/model.Stagiaire";
import {EncadrantService} from "../../../service/encadrant.service";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from '../../../service/config.service';
import {ApiService} from '../../../service/api.service';
import {Http} from '@angular/http';
import {Filiere} from "../../../model/model.Filiere";

@Component({
  selector: 'app-new-stagiaires',
  templateUrl: './new-stagiaires.component.html',
  styleUrls: ['./new-stagiaires.component.css']
})
export class NewStagiairesComponent implements OnInit {
  currentFiliere;
  filiere: any;
  fil: any;


  stagiaire: Stagiaires = new Stagiaires();

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              public stagiaireServices: StagiaireService) {
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

  saveStagiaire(dataForm) {
    this.stagiaire=dataForm;
    var y = parseInt(dataForm.filiereid);
    console.log('y : '+y);
    this.stagiaire.filiere.id = y;

    console.log(this.stagiaire);
    /*
    this.stagiaireServices.saveStagiaire(this.stagiaire).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(JSON.parse(err._body).message);
    })*/
  }


}
