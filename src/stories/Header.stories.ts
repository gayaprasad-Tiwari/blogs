import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../app/header/header.component';
import { reducers } from '../app/models/store/app.state';
import { AuthService } from '../app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'blogs/AppHeader',
  component:  HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ HeaderComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule,
        StoreModule.forRoot(reducers, { }), ],
      providers: [ AuthService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const header = Template.bind({});
header.args = {
}