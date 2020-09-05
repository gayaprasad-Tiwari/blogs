import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { SignUp  } from '../store/actions/auth.actions';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm;
  registrationObj:IUser;
  constructor(private fb:FormBuilder, private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.registrationForm =this.fb.group({
      'userName':['', Validators.required],
      'email':['', Validators.required],
      'phoneNo':[''],
      'password':['', Validators.required],
      'confrimPassword':['', Validators.required]
    })
  }
  onSubmit(){
   let name =this.registrationForm.controls['userName'].value;
   let email = this.registrationForm.controls['email'].value;
   let phoneNo = this.registrationForm.controls['phoneNo'].value;
   let password = this.registrationForm.controls['password'].value;
   let confrimPassword = this.registrationForm.controls['confrimPassword'].value;
  let payload = {
    name,
    email,
    phoneNo,
    password
  }
  this.store.dispatch(new SignUp(payload));
   this.registrationForm.reset()
  }
}
