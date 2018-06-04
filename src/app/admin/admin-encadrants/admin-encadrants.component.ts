import {Component, OnInit} from '@angular/core';
import {EncadrantService} from '../../service/encadrant.service';
import {ConfigService} from '../../service/config.service';
import {Http} from '@angular/http';
import {ApiService} from '../../service/api.service';
import {Router} from "@angular/router";

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
              private router:Router,
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
  onUpdateEncadrant(id:number){
    location.reload();
    this.router.navigate(['editEncadrant',id])
  }
  onDeleteEncadrant(id:number){
    this.encadrantService.DeleteEncadrant(id)
      .subscribe(data=>{console.log(data); },err=>{console.log(err); })
    location.reload();
  }

}
