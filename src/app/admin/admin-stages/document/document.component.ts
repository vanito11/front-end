import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Document} from "../../../model/Document";
import {Stage} from "../../../model/model.Stage";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  idDocument:number = 0;
  document: Document = new Document();


  constructor(public activatedRoute: ActivatedRoute,
              public documentService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idDocument = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {


    this.documentService.getDocument(this.idDocument)
      .subscribe(data => {
        this.document = data;
      }, err => console.log(err))


  }

  onNewDocument(){

  this.route.navigate(['admin/stages/newDocument/',this.idDocument])
  location.reload();
}

  onUpdateDocument(id:number){
    location.reload();
    this.route.navigate(['editDocument',id])
  }

  onDeleteDocument(id:number){
   this.documentService.DeleteDocument(id)
      .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    location.reload();
  }
}
