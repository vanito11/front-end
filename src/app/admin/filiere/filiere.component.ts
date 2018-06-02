import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ConfigService} from '../../service/config.service';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  currentFiliere;
  filiere: any;
  httpp: Http;

  constructor(private apiService: ApiService,
              private config: ConfigService,
  private http: Http) {
  this.http = http;
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
  }

}
