import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginElement} from './login-element/login-element';
import { RegistrationComponent } from './registration/registration.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditBlogListComponent } from './add-edit-blog-list/add-edit-blog-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './models/store/app.state';
import { StoreModule } from '@ngrx/store';
import { BlogEffects } from './store/effects/blog.effects';
import { CanActivateAddEdit } from './canActivateAddEdit';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    BlogListComponent,
    AddEditBlogListComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { }),
    EffectsModule.forRoot([AuthEffects, BlogEffects])
  ],
  providers: [AuthService, CanActivateAddEdit],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  ngDoBootstrap(){
    customElements.define('login-element', LoginElement);
  }
 }
