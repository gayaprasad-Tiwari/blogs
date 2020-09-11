import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { reducers } from '../app/models/store/app.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddEditBlogListComponent } from '../app/add-edit-blog-list/add-edit-blog-list.component';
import { RouterTestingModule } from '@angular/router/testing';


export default {
  title: 'blogs/AddEditBlogListComponent',
  component:  AddEditBlogListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ AddEditBlogListComponent ],
      imports: [  FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule,
        StoreModule.forRoot(reducers, { }), ],
      providers: [  ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }),
  ],
} as Meta;

const Template: Story<AddEditBlogListComponent> = (args: AddEditBlogListComponent) => ({
  component: AddEditBlogListComponent,
  props: args,
});

export const Add = Template.bind({});
Add.args = {

};
export const Edit = Template.bind({});
Edit.args = {
  editId : 1
};
