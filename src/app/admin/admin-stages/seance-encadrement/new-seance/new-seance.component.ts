import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../service/api.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {SeanceEncadrement} from "../../../../model/model.SeanceEncadrement";
import {Stage} from "../../../../model/model.Stage";

@Component({
  selector: 'app-new-seance',
  templateUrl: './new-seance.component.html',
  styleUrls: ['./new-seance.component.css']
})
export class NewSeanceComponent implements OnInit {
  stag:Stage = new Stage();
  seanceEncadrement:SeanceEncadrement = new SeanceEncadrement();
  stage:Stage = new Stage();
  idStage:number=0;
  constructor(public activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public seanceEncadrementService: StagiaireService) {
    this.http = http;


    this.idStage = activatedRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.seanceEncadrementService.getStageById(this.idStage).subscribe(data => {
      console.log(data);
      this.stag =data;
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }
  saveSeance(DataForm) {
    console.log(this.stag);
    this.seanceEncadrement= DataForm;
    this.stage.id = +this.stag.id;
    this.seanceEncadrement.stage = this.stage;


    this.seanceEncadrementService.saveSeanceEncadrement(DataForm).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(JSON.parse(err._body).message);
    })

    location.reload();
    this.router.navigate(['admin/stages/seanceEncadrement/',this.idStage])
  }


}
