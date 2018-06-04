import { Component, OnInit } from '@angular/core';
import {Encadrant} from "../../../model/model.Encadrant";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {EncadrantService} from "../../../service/encadrant.service";

@Component({
  selector: 'app-update-encadrant',
  templateUrl: './update-encadrant.component.html',
  styleUrls: ['./update-encadrant.component.css']
})
export class UpdateEncadrantComponent implements OnInit {
encadrant:Encadrant = new Encadrant();
  idEncadrant: number = 0;
  constructor(public activatedRoute: ActivatedRoute,
              public encadrantService: EncadrantService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idEncadrant = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.encadrantService.getEncadrant(this.idEncadrant)
      .subscribe(data => {
        this.encadrant = data;
      }, err => console.log(err))


  }
  updateEncadrant(encadrant: Encadrant) {

    this.encadrantService.updateEncadrants(this.encadrant)
      .subscribe(data => {
          console.log(data);


        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/encadrantes']);

  }


}
