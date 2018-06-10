import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {ConfigService} from "../../../../service/config.service";
import {Http} from "@angular/http";
import {Document} from "../../../../model/Document";
import {Stage} from "../../../../model/model.Stage";

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  document:Document = new Document();

  idDocument: number = 0;
  constructor(public activatedRoute: ActivatedRoute,
              public documentService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idDocument = activatedRoute.snapshot.params['id'];

  }


  ngOnInit() {
    this.documentService.DocumentbyID(this.idDocument)
      .subscribe(data => {
        this.document = data;
      }, err => console.log(err))
  }

  updateDocument(document:Document) {
    console.log("----------");
    console.log(this.document);
    this.documentService.updateDocuments(this.document)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/stages/Document',document.stage.id])

  }
}
