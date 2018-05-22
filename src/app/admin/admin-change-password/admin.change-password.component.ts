import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'app/service';
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayMessage} from '../../shared/models/display-message';
import {UserService} from '../../service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin.change-password.component.html',
  styleUrls: ['./admin.change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {

  form: FormGroup;
  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

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

  /**
   * Diagnostic message from received
   * form request error
   */
  notification: DisplayMessage;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }


  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authService.changePassowrd(this.form.value)
    // show me the animation
      .delay(1000)
      .mergeMap(() => this.authService.logout())
      .subscribe(() => {
        this.router.navigate(['/login', {msgType: 'success', msgBody: 'Success! Please sign in with your new password.'}]);
      }, error => {
        this.submitted = false;
        this.notification = {msgType: 'error', msgBody: 'Invalid old password.'};
      });

  }

}
