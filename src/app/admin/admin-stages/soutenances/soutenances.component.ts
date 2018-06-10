import { Component, OnInit } from '@angular/core';
import {Soutenance} from "../../../model/model.Soutenance";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css']
})
export class SoutenancesComponent implements OnInit {
  idSoutenance:number = 0;
  soutenance: Soutenance = new Soutenance();
  constructor(public activatedRoute: ActivatedRoute,
              public soutenanceService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idSoutenance = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.soutenanceService.getSoutenance(this.idSoutenance)
      .subscribe(data => {
        this.soutenance = data;
      }, err => console.log(err))


  }
  onNewSoutenance(){

    this.route.navigate(['admin/stages/newSoutenances/',this.idSoutenance])
    location.reload();
  }
  onUpdateSoutenance(id:number){
    location.reload();
    this.route.navigate(['editSoutenance',id])
  }

  onDeleteSoutenance(id:number){
   this.soutenanceService.DeleteSoutenance(id)
       .subscribe(data=>{console.log(data);},err=>{console.log(err);})
     location.reload();
  }
}
