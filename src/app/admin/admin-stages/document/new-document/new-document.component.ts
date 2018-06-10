import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../service/api.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {Stage} from "../../../../model/model.Stage";
import {Document} from "../../../../model/Document";

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit {
  stag:Stage = new Stage();
  document:Document = new Document();
  stage:Stage = new Stage();
  idStage:number=0;
  constructor(public activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public documentService: StagiaireService) {
    this.http = http;


    this.idStage = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.documentService.getStageById(this.idStage).subscribe(data => {
      console.log(data);
      this.stag =data;
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }


  saveDocument(DataForm) {
    console.log(this.stag);
    this.document= DataForm;
    this.stage.id = +this.stag.id;
    this.document.stage = this.stage;


    this.documentService.saveDocument(DataForm).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(JSON.parse(err._body).message);
     })

    location.reload();
    this.router.navigate(['admin/stages/Document',this.idStage])
  }
}
