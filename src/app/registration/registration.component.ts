import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm
  constructor(private fb:FormBuilder) {  }

  ngOnInit(): void {
    this.registrationForm =this.fb.group({
      'userName':[''],
      'emailID':[''],
      'phoneNo':[''],
      'password':[''],
      'confrimPassword':['']
    })
  }
  onSubmit(){
   let name =this.registrationForm.controls['name'].value;
   let emailID = this.registrationForm.controls['emailID'].value;
   let phoneNo = this.registrationForm.controls['phoneNo'].value;
   let password = this.registrationForm.controls['password'].value;
   let confrimPassword = this.registrationForm.controls['confrimPassword'].value;
   
   this.registrationForm.reset()
  }
}
