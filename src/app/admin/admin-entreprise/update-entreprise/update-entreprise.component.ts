import { Component, OnInit } from '@angular/core';
import {Entreprise} from "../../../model/model.Entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {EntrepriseService} from "../../../service/entreprise.service";

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {

  idEntreprise: number = 0;
  entreprise: Entreprise = new Entreprise();
  constructor(public activatedRoute: ActivatedRoute,
              public entrepriseService: EntrepriseService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idEntreprise = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.entrepriseService.getEntreprise(this.idEntreprise)
      .subscribe(data => {
        this.entreprise = data;
      }, err => console.log(err))
  }

  updateEntreprise(entreprise: Entreprise) {

    this.entrepriseService.updateEntreprise(this.entreprise)
      .subscribe(data => {
          console.log(data);


        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/entreprises']);

  }

}
