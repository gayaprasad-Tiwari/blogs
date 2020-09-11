import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { reducers } from '../app/models/store/app.state';
import { AuthService } from '../app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogListComponent } from '../app/blog-list/blog-list.component';
import { LogInComponent } from '../app/log-in/log-in.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { AddEditBlogListComponent } from '../app/add-edit-blog-list/add-edit-blog-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { BlogEffects } from '../app/store/effects/blog.effects';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'blogs/BlogList',
  component:  BlogListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ BlogListComponent, LogInComponent, RegistrationComponent, AddEditBlogListComponent  ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule,
        StoreModule.forRoot(reducers, { }),
        EffectsModule.forRoot([AuthEffects, BlogEffects])],
      providers: [ AuthService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }),
  ],
} as Meta;


const Template: Story<BlogListComponent> = (args: BlogListComponent) => ({
  component: BlogListComponent,
  props: {
    args
  }
});

export const blogList = Template.bind({});
blogList.args = {
};
