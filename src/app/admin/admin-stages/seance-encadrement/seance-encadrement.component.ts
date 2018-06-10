import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {SeanceEncadrement} from "../../../model/model.SeanceEncadrement";

@Component({
  selector: 'app-seance-encadrement',
  templateUrl: './seance-encadrement.component.html',
  styleUrls: ['./seance-encadrement.component.css']
})
export class SeanceEncadrementComponent implements OnInit {
  idSeanceEncadrement:number = 0;
  seanceEncadrement: SeanceEncadrement = new SeanceEncadrement();
  constructor(public activatedRoute: ActivatedRoute,
              public seanceEncadrementSevice: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idSeanceEncadrement = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.seanceEncadrementSevice.getStageSeanceEncadrement(this.idSeanceEncadrement)
      .subscribe(data => {
        this.seanceEncadrement = data;
      }, err => console.log(err))


  }
  onNewSeance(){

    this.route.navigate(['admin/stages/newSeance/',this.idSeanceEncadrement])
    location.reload();
  }
  onUpdateSeanceEncadrement(id:number){
    location.reload();
    this.route.navigate(['editSeance',id])
  }

  onDeleteSeanceEncadrement(id:number){
    this.seanceEncadrementSevice.DeleteSeanceEncadrement(id)
      .subscribe(data=>{console.log(data);},err=>{console.log(err);})
    location.reload();
  }

}
