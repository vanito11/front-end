import { Component, OnInit } from '@angular/core';
import {Visite} from "../../../../model/model.Visite";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../service/api.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {Stage} from "../../../../model/model.Stage";

@Component({
  selector: 'app-new-visites',
  templateUrl: './new-visites.component.html',
  styleUrls: ['./new-visites.component.css']
})
export class NewVisitesComponent implements OnInit {
  stag:Stage = new Stage();
  visite:Visite = new Visite();
  stage:Stage = new Stage();
  idStage:number=0;
  constructor(public activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public visiteService: StagiaireService) {
    this.http = http;


    this.idStage = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.visiteService.getStageById(this.idStage).subscribe(data => {
      console.log(data);
      this.stag =data;
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }


  saveDocument(DataForm) {
    console.log(this.stag);
    this.visite= DataForm;
    this.stage.id = +this.stag.id;
    this.visite.stage = this.stage;


    this.visiteService.saveVisite(DataForm).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(JSON.parse(err._body).message);
    })

    location.reload();
    this.router.navigate(['admin/stages/Visite',this.idStage])
  }
}
