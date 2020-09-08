import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogState } from '../models/blog-state';
describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let mockStore: MockStore;
  const initialState: BlogState = {
    blog: [],
    Message: null
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListComponent ],
      providers: [provideMockStore({initialState}), RouterTestingModule, AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
