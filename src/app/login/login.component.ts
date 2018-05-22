import {Inject} from '@angular/core';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {DisplayMessage} from '../shared/models/display-message';
import {Subscription} from 'rxjs/Subscription';
import {
  UserService,
  AuthService
} from '../service';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'Login';
  githubLink = 'https://github.com/bfwg/angular-spring-starter';
  form: FormGroup;

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
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe((params: DisplayMessage) => {
        this.notification = params;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onResetCredentials() {
    this.userService.resetCredentials()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(res => {
        if (res.result === 'success') {
          alert('Password has been reset to 123 for all accounts');
        } else {
          alert('Server error');
        }
      });
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

    this.authService.login(this.form.value)
    // show me the animation
      .delay(1000)
      .subscribe(data => {
          this.userService.getMyInfo().subscribe();
          if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_ADMIN') !== -1) {
            this.router.navigate(['/admin']);
          }
          else if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_USER') !== -1) {
            this.router.navigate(['/user']);
          }
          else if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_ENCADRANT') !== -1) {
            this.router.navigate(['/encadrant']);
          }
          else if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_STAGIAIRE') !== -1) {
            this.router.navigate(['/stagiaire']);
          }
          else if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_TUTEUR') !== -1) {
            this.router.navigate(['/tuteur']);
          }
          location.reload();
        },
        error => {
          this.submitted = false;
          this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
        });

  }


}
