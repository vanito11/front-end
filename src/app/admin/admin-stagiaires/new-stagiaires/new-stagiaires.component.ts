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
  filieree:any;
filiere:Filiere = new Filiere();

  stagiaires: Stagiaires = new Stagiaires();

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public stagiaireServices: StagiaireService) {
    this.http = http;

  }

  ngOnInit() {

    this.http.get(this.config.filiere_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.filieree = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )
  }

  saveStagiaire(DataForm) {

        this.stagiaires= DataForm;
        this.filiere.id = +DataForm.filiere;
        this.stagiaires.filiere = this.filiere;

         this.stagiaireServices.saveStagiaire(this.stagiaires).subscribe(data => {
            console.log(data)

            this.router.navigate(['admin/stagiaires']);
          }, err => {
            console.log(JSON.parse(err._body).message);
          })
        }


}
