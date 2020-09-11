import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { reducers } from '../app/models/store/app.state';
import { AppComponent } from '../app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../app/header/header.component';
import { LogInComponent } from '../app/log-in/log-in.component';

import { AppRoutingModule } from '../app/app-routing.module';
import { RegistrationComponent } from '../app/registration/registration.component';
import { BlogListComponent } from '../app/blog-list/blog-list.component';
import { AddEditBlogListComponent } from '../app/add-edit-blog-list/add-edit-blog-list.component';
import { AuthService } from '../app/services/auth.service';
import { CanActivateAddEdit } from '../app/canActivateAddEdit';
import { BlogEffects } from '../app/store/effects/blog.effects';
import { LoginElement } from '../app/login-element/login-element';

export default {
  title: 'blogs/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        HeaderComponent,
        LogInComponent,
        RegistrationComponent,
        BlogListComponent,
        AddEditBlogListComponent
      ],
      imports: [
          AppRoutingModule,
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          EffectsModule.forRoot([AuthEffects, BlogEffects]),
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [AuthService, CanActivateAddEdit]
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const app = Template.bind({});
app.args = {
  user: {},
};
