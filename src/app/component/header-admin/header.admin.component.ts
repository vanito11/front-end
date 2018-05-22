import { Component, OnInit } from '@angular/core';
import {
  UserService,
  AuthService
} from '../../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './header.admin.component.html',
  styleUrls: ['./header.admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      location.reload();
      location.reload();
      location.reload();
      this.router.navigate(['/']);

    });
  }

  hasSignedIn() {
    return !!this.userService.currentUser;
  }

  userName() {
    const user = this.userService.currentUser;
    return user.firstname + ' ' + user.lastname;
  }

}
