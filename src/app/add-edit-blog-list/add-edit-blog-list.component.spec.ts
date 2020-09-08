import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditBlogListComponent } from './add-edit-blog-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BlogState } from '../models/blog-state';
import { Insert, LoadSingle, Edit, blogActionType} from '../store/actions/blog.action';
import { skip } from 'rxjs/operators';

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
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [provideMockStore({initialState})],
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
  afterEach(() => {
    mockStore.resetSelectors();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should allow tracing dispatched Edit actions', () => {
    const expectedAction = { payload: 1, type: '[blog] Load Single'};
    spyOn(mockStore, 'dispatch');
    component.getEditBlog(1);
    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
  });
  it('should be called insert action', () => {
    component.addeditblogForm.patchValue({
      title: 'abc',
      imageUrl: 'http://google.com',
      description: 'ahahuf iawhfiwf',
      category: 'other'
    });
    spyOn(mockStore, 'dispatch');
    component.onSubmit();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
