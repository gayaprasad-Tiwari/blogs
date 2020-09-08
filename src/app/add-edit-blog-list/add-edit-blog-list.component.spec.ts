import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditBlogListComponent } from './add-edit-blog-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BlogState } from '../models/blog-state';

describe('AddEditBlogListComponent', () => {
  let component: AddEditBlogListComponent;
  let fixture: ComponentFixture<AddEditBlogListComponent>;
  let mockStore: MockStore;
  const initialState: BlogState = {
    blog: [],
    Message: null
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBlogListComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, provideMockStore({initialState})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
