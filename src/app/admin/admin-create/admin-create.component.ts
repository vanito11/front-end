import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisplayMessage} from '../../shared/models/display-message';
import {Subject} from 'rxjs/Subject';
import {AuthService, UserService} from '../../service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
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


  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authService.signup(this.form.value)
    // show me the animation
      .delay(1000)
      .subscribe(data => {
          console.log(data);
          this.authService.login(this.form.value).subscribe(data => {
            this.userService.getMyInfo().subscribe();
          })
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          console.log('Sign up error' + JSON.stringify(error));
          this.notification = {msgType: 'error', msgBody: error['error'].errorMessage};
        });

  }


}
