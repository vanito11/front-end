import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Filiere} from "../../../model/model.Filiere";
import {StagiaireService} from "../../../service/stagiaire.service";

@Component({
  selector: 'app-new-filiere',
  templateUrl: './new-filiere.component.html',
  styleUrls: ['./new-filiere.component.css']
})
export class NewFiliereComponent implements OnInit {
  filieres:Filiere = new Filiere();
  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public filiereService: StagiaireService) {
    this.http = http;

  }

  ngOnInit() {
  }
  saveFiliere(DataForm) {



    this.filiereService.saveFiliere(DataForm).subscribe(data => {
      console.log(data)

      this.router.navigate(['admin/filieres']);
    }, err => {
      console.log(JSON.parse(err._body).message);
      alert("Filiere ne peux pas etres supprimer");
    })
  }



}
