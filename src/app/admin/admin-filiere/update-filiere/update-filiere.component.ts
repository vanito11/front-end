import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Filiere} from "../../../model/model.Filiere";

@Component({
  selector: 'app-update-filiere',
  templateUrl: './update-filiere.component.html',
  styleUrls: ['./update-filiere.component.css']
})
export class UpdateFiliereComponent implements OnInit {
  idFiliere: number = 0;
  filiere: Filiere = new Filiere();
  constructor(public activatedRoute: ActivatedRoute,
              public filiereService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idFiliere = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.filiereService.getFiliere(this.idFiliere)
      .subscribe(data => {
        this.filiere = data;
      }, err => console.log(err))
  }

  updateFiliere(filiere: Filiere) {

    this.filiereService.updateFiliere(this.filiere)
      .subscribe(data => {
          console.log(data);


        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/filieres']);

  }

}
