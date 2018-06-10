import { Component, OnInit } from '@angular/core';
import {Soutenance} from "../../../../model/model.Soutenance";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../service/api.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";
import {Stage} from "../../../../model/model.Stage";
import {StagiaireService} from "../../../../service/stagiaire.service";

@Component({
  selector: 'app-new-soutenances',
  templateUrl: './new-soutenances.component.html',
  styleUrls: ['./new-soutenances.component.css']
})
export class NewSoutenancesComponent implements OnInit {
  stag:Stage = new Stage();
  soutenance:Soutenance = new Soutenance();
  stage:Stage = new Stage();
  idStage:number=0;
  constructor(public activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public soutenanceService: StagiaireService) {
    this.http = http;


    this.idStage = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.soutenanceService.getStageById(this.idStage).subscribe(data => {
      console.log(data);
      this.stag =data;
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }


  saveSoutenance(DataForm) {
    console.log(this.stag);
    this.soutenance= DataForm;
    this.stage.id = +this.stag.id;
    this.soutenance.stage = this.stage;


    this.soutenanceService.saveSoutenance(DataForm).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(JSON.parse(err._body).message);
    })

    location.reload();
    this.router.navigate(['admin/stages/Soutenance/',this.idStage])
  }
}
