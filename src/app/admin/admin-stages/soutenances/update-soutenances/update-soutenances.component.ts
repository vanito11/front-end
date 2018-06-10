import { Component, OnInit } from '@angular/core';
import {Soutenance} from "../../../../model/model.Soutenance";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-update-soutenances',
  templateUrl: './update-soutenances.component.html',
  styleUrls: ['./update-soutenances.component.css']
})
export class UpdateSoutenancesComponent implements OnInit {

  soutenance:Soutenance = new Soutenance();

  idSoutenance: number = 0;
  constructor(public activatedRoute: ActivatedRoute,
              public soutenanceService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idSoutenance = activatedRoute.snapshot.params['id'];

  }


  ngOnInit() {
    this.soutenanceService.SoutenancebyID(this.idSoutenance)
      .subscribe(data => {
        this.soutenance = data;
      }, err => console.log(err))
  }

  updateSoutenance(soutenance:Soutenance) {

    this.soutenanceService.updateSoutenance(this.soutenance)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/stages/Soutenance',soutenance.stage.id])

  }
}

