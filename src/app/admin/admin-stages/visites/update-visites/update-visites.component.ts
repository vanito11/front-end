import { Component, OnInit } from '@angular/core';
import {Visite} from "../../../../model/model.Visite";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-update-visites',
  templateUrl: './update-visites.component.html',
  styleUrls: ['./update-visites.component.css']
})
export class UpdateVisitesComponent implements OnInit {

  visite:Visite = new Visite();

  idVisite: number = 0;
  constructor(public activatedRoute: ActivatedRoute,
              public visiteService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idVisite = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.visiteService.VisitebyID(this.idVisite)
      .subscribe(data => {
        this.visite = data;
      }, err => console.log(err))
  }
  updateVisite(visite:Visite) {
    this.visiteService.updateVisite(this.visite)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/stages/Visite',visite.stage.id])

  }
}
