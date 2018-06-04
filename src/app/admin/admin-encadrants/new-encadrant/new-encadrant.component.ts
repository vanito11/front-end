import { Component, OnInit } from '@angular/core';
import {EncadrantService} from "../../../service/encadrant.service";
import {Encadrant} from "../../../model/model.Encadrant";
import {ApiService} from "../../../service/api.service";
import {ConfigService} from "../../../service/config.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-encadrant',
  templateUrl: './new-encadrant.component.html',
  styleUrls: ['./new-encadrant.component.css']
})
export class NewEncadrantComponent implements OnInit {
      encadrant:Encadrant = new Encadrant();
        constructor(private apiService: ApiService,
                    private config: ConfigService,
                    private http: Http,
                    private router: Router,
                    public encadrantService: EncadrantService) {
          this.http = http;

  }

  ngOnInit() {
  }



  saveEncadrant(DataForm)
  {
    this.encadrantService.saveEncadrant(DataForm).subscribe(data => {
      console.log(data)

      this.router.navigate(['admin/encadrantes']);
    }, err => {
      console.log(JSON.parse(err._body).message);
    })
  }
}
