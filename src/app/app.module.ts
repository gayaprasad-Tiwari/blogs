import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginElement} from './login/login-element';
import { RegistrationComponent } from './registration/registration.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditBlogListComponent } from './add-edit-blog-list/add-edit-blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    BlogListComponent,
    AddEditBlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  ngDoBootstrap(){
    customElements.define('login-element', LoginElement)
  }
 }
