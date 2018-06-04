import { Component, OnInit } from '@angular/core';
import {Tuteur} from "../../../model/model.Tuteur";
import {ApiService} from "../../../service/api.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {TuteurService} from "../../../service/tuteur.service";
import {Entreprise} from "../../../model/model.Entreprise";

@Component({
  selector: 'app-new-tuteur',
  templateUrl: './new-tuteur.component.html',
  styleUrls: ['./new-tuteur.component.css']
})
export class NewTuteurComponent implements OnInit {
  tut:any;
  tuteur:Tuteur = new Tuteur();
  entreprise: Entreprise = new Entreprise();
  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              private router: Router,
              public tuteurService: TuteurService) {
    this.http = http;

  }

  ngOnInit() {
    this.http.get(this.config.entreprises_url)
      .map(resp => resp.json())
      .subscribe(data => {
          this.tut = data;
        }, error => {
          console.log('GET STAGIAIRES ERROR :' + error);
        }
      )
  }



  saveTuteur(DataForm)
  {

    this.tuteur= DataForm;
    this.entreprise.id = +DataForm.entreprise;
    this.tuteur.entreprise = this.entreprise;

    this.tuteurService.saveTuteur(DataForm).subscribe(data => {
      console.log(data)

      this.router.navigate(['admin/tuteurs']);
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }
}
