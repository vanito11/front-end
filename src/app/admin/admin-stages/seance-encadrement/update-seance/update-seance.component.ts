import { Component, OnInit } from '@angular/core';
import {SeanceEncadrement} from "../../../../model/model.SeanceEncadrement";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../../../service/config.service";
import {StagiaireService} from "../../../../service/stagiaire.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-update-seance',
  templateUrl: './update-seance.component.html',
  styleUrls: ['./update-seance.component.css']
})
export class UpdateSeanceComponent implements OnInit {

  seance:SeanceEncadrement = new SeanceEncadrement();

  idSeanceEncadrement: number = 0;
  constructor(public activatedRoute: ActivatedRoute,
              public seanceEncadrementService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idSeanceEncadrement = activatedRoute.snapshot.params['id'];

  }
  ngOnInit() {
    this.seanceEncadrementService.SeanceEncadrementbyID(this.idSeanceEncadrement)
      .subscribe(data => {
        this.seance = data;
      }, err => console.log(err))
  }

  updateSeance(seance:SeanceEncadrement) {
    this.seanceEncadrementService.updateSeanceEncadrement(this.seance)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/stages/seanceEncadrement/',seance.stage.id])

  }

}
