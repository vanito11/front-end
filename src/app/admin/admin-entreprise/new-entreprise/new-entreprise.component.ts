import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../../model/model.Entreprise";
import {EntrepriseService} from "../../../service/entreprise.service";
import {ApiService} from "../../../service/api.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-entreprise',
  templateUrl: './new-entreprise.component.html',
  styleUrls: ['./new-entreprise.component.css']
})
export class NewEntrepriseComponent implements OnInit {

  entreprise:Entreprise = new Entreprise();
  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public entrepriseService: EntrepriseService) {
    this.http = http;

  }

  ngOnInit() {
  }
  saveEntreprise(DataForm) {



    this.entrepriseService.saveEntreprise(DataForm).subscribe(data => {
      console.log(data)

      this.router.navigate(['admin/entreprises']);
    }, err => {
      console.log(JSON.parse(err._body).message);
      alert("Filiere ne peux pas etres supprimer");
    })
  }
}
