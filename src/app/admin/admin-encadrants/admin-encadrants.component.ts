import {Component, OnInit} from '@angular/core';
import {EncadrantService} from '../../service/encadrant.service';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-admin-encadrants',
  templateUrl: './admin-encadrants.component.html',
  styleUrls: ['./admin-encadrants.component.css']
})
export class AdminEncadrantsComponent implements OnInit {
  currentEncadrant;
  encadrants: any;
  httpp: Http;


  constructor(private apiService: ApiService,
              private config: ConfigService,
              private http: Http,
              public encadrantService: EncadrantService) {
    this.http = http;
  }

  ngOnInit() {
    this.encadrantService.getAllEncadrants()
      .subscribe(
        data => {
          this.encadrants = data;
        }, error => {
          console.log('ERROR GETTING ENCADRANTS LIST' + error)
        }
      )
  }

}
