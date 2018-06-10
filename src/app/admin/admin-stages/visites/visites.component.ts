import { Component, OnInit } from '@angular/core';
import {Visite} from "../../../model/model.Visite";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {
  idVisite:number = 0;
  visite: Visite = new Visite();
  constructor(public activatedRoute: ActivatedRoute,
              public visiteService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idVisite = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.visiteService.getVisite(this.idVisite)
      .subscribe(data => {
        this.visite = data;
      }, err => console.log(err))
  }
  onNewVisite(){

    this.route.navigate(['admin/stages/newVisite/',this.idVisite])
    location.reload();
  }
  onUpdateVisite(id:number){
    location.reload();
    this.route.navigate(['editVisite',id])
  }

  onDeleteVisite(id:number){
    this.visiteService.DeleteVisite(id)
       .subscribe(data=>{console.log(data);},err=>{console.log(err);})
     location.reload();
  }
}
