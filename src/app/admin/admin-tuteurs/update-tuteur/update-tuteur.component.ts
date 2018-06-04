import { Component, OnInit } from '@angular/core';
import {TuteurService} from "../../../service/tuteur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Tuteur} from "../../../model/model.Tuteur";
import {Entreprise} from "../../../model/model.Entreprise";

@Component({
  selector: 'app-update-tuteur',
  templateUrl: './update-tuteur.component.html',
  styleUrls: ['./update-tuteur.component.css']
})
export class UpdateTuteurComponent implements OnInit {
  tuteur:any;
  idTuteur: number = 0;

  ent:Entreprise = new Entreprise();
  constructor(public activatedRoute: ActivatedRoute,
              public tuteurService: TuteurService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idTuteur = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.http.get(this.config.entreprises_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.ent = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )




    this.tuteurService.getTuteur(this.idTuteur)
      .subscribe(data => {
        this.tuteur = data;
      }, err => console.log(err))


  }

  updateTuteur(tuteur: Tuteur) {

    this.tuteurService.updateTuteur(this.tuteur)
      .subscribe(data => {
          console.log(data);


        },
        err => {
          console.log(err);

        })
    location.reload();
    this.route.navigate(['admin/tuteurs']);

  }
}
