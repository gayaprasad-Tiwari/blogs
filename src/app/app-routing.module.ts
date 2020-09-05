import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component'
import {RegistrationComponent} from './registration/registration.component'
import {BlogListComponent} from './blog-list/blog-list.component'
import { AddEditBlogListComponent} from './add-edit-blog-list/add-edit-blog-list.component'
import {CanActivateAddEdit} from './canActivateAddEdit'
import { from } from 'rxjs';
const routes: Routes =[
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: RegistrationComponent },
  { path:'addEdit',component:AddEditBlogListComponent, canActivate:[CanActivateAddEdit]},
  { path: '', component: BlogListComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
