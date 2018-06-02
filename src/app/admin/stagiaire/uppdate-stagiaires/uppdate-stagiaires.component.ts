import {Component, OnInit} from '@angular/core';
import {Stagiaires} from "../../../model/model.Stagiaire";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../service/stagiaire.service";
import {Http} from "@angular/http";
import {ConfigService} from "../../../service/config.service";


@Component({
  selector: 'app-uppdate-stagiaires',
  templateUrl: './uppdate-stagiaires.component.html',
  styleUrls: ['./uppdate-stagiaires.component.css']
})
export class UppdateStagiairesComponent implements OnInit {
  model: number = 1;
  stagiaires: Stagiaires = new Stagiaires();
  filiere: any;
  idStagiaire: number = 0;

  constructor(public activatedRoute: ActivatedRoute,
              public stagiairesService: StagiaireService,
              private config: ConfigService,
              public route: Router,
              private http: Http) {

    this.idStagiaire = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {

    this.http.get(this.config.filiere_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.filiere = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )


    this.stagiairesService.getStagiaires(this.idStagiaire)
      .subscribe(data => {
        this.stagiaires = data;
      }, err => console.log(err))

  }

  updateStagiaire(stagiaires: Stagiaires) {
    this.stagiairesService.updateStagiaire(this.stagiaires)
      .subscribe(data => {
          console.log(data);
          alert("mise a jour effectue");
          this.route.navigate(['admin/stagiaires']);
        },
        err => {
          console.log(err);
          alert("Probleme");
        })
  }
}
