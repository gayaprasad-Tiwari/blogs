import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { reducers } from '../app/models/store/app.state';
import { AuthService } from '../app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistrationComponent } from '../app/registration/registration.component';

export default {
  title: 'blogs/AppRegistrationComponent',
  component:  RegistrationComponent,
  decorators: [
    moduleMetadata({
      declarations: [ RegistrationComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule,
        StoreModule.forRoot(reducers, { }), ],
      providers: [ AuthService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }),
  ],
} as Meta;

const Template: Story<RegistrationComponent> = (args: RegistrationComponent) => ({
  component: RegistrationComponent,
  props: args,
});

export const header = Template.bind({});
header.args = {
};
