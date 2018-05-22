import {Component, OnInit} from '@angular/core';
import {
  UserService,
  AuthService
} from '../service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  public show: boolean = false;
  public buttonName: any = 'Show';

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

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = 'Hide';
    else
      this.buttonName = 'Show';
  }


}

