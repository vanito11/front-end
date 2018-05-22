import { Component, OnInit, Input } from '@angular/core';
import {
  ConfigService,
  AuthService,
  UserService
} from '../../../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-menuadmin',
  templateUrl: './account-menuadmin.component.html',
  styleUrls: ['./account-menuadmin.component.scss']
})
export class AccountMenuAdminComponent implements OnInit {

  // TODO define user interface
  user: any;

  constructor(
    private config: ConfigService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }
}
