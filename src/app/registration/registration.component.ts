import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { SignUp } from '../store/actions/auth.actions';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm;
  registrationObj: IUser;
  submitted = false;
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.minLength(10)],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registrationForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid){
      return;
    }
    const payload = {
      name: this.registrationForm.controls.userName.value,
      email: this.registrationForm.controls.email.value,
      phoneNo: this.registrationForm.controls.phoneNo.value,
      password: this.registrationForm.controls.password.value
    };
    this.store.dispatch(new SignUp(payload));
    this.submitted = false;
    this.registrationForm.reset();
  }
}
