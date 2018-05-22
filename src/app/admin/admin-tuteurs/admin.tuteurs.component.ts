import {Inject} from '@angular/core';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {DisplayMessage} from '../../shared/models/display-message';
import {Subscription} from 'rxjs/Subscription';
import {
  UserService,
  AuthService
} from '../../service';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-tuteurs',
  templateUrl: './admin.tuteurs.component.html',
  styleUrls: ['./admin.tuteurs.component.scss']
})
export class AdminTuteursComponent implements OnInit, OnDestroy {
  title = 'Sign up';
  githubLink = 'https://github.com/bfwg/angular-spring-starter';
  form: FormGroup;
  gender: string;


  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;

  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    const user = this.userService.getAll();
    console.log('xxxxxxxxxxxxxxxxxx'+user);
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      role: [''],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      firstname: [''],
      lastname: ['']
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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

  repository() {
    window.location.href = this.githubLink;
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;
    console.log(this.form.get('role').value);
    this.authService.signup(this.form.value)
    // show me the animation
      .delay(1000)
      .subscribe(data => {
          console.log(data);
          this.authService.login(this.form.value).subscribe(data => {
            this.userService.getMyInfo().subscribe();
          })
          this.router.navigate(['/create']);
        },
        error => {
          this.submitted = false;
          console.log('Sign up error' + JSON.stringify(error));
          this.notification = {msgType: 'error', msgBody: error['error'].errorMessage};
        });

  }


}
