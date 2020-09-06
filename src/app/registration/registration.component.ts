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
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: [''],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    const name = this.registrationForm.controls.userName.value;
    const email = this.registrationForm.controls.emai.value;
    const phoneNo = this.registrationForm.controls.phoneNo.value;
    const password = this.registrationForm.controls.password.value;
    const payload = {
      name,
      email,
      phoneNo,
      password
    };
    this.store.dispatch(new SignUp(payload));
    this.registrationForm.reset();
  }
}
