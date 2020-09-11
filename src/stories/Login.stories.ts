import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { reducers } from '../app/models/store/app.state';
import { AuthService } from '../app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LogInComponent } from '../app/log-in/log-in.component';
export default {
  title: 'blogs/Login',
  component:  LogInComponent,
  decorators: [
    moduleMetadata({
      declarations: [ LogInComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule,
        StoreModule.forRoot(reducers, { }), ],
      providers: [ AuthService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }),
  ],
} as Meta;

const Template: Story<LogInComponent> = (args: LogInComponent) => ({
  component: LogInComponent,
  props: args,
});

export const header = Template.bind({});
header.args = {
};
