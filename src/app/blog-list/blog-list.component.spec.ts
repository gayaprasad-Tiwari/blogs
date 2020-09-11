import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogState } from '../models/blog-state';
import { Routes } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AddEditBlogListComponent } from '../add-edit-blog-list/add-edit-blog-list.component';
import { CanActivateAddEdit } from '../canActivateAddEdit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let mockStore: MockStore;
  let authService: AuthService;
  const initialState = {};
  const routes: Routes = [
    { path: 'log-in', component: LogInComponent },
    { path: 'sign-up', component: RegistrationComponent },
    { path: 'addEdit', component: AddEditBlogListComponent, canActivate: [CanActivateAddEdit] },
    { path: '', component: BlogListComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
  ];
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListComponent, LogInComponent, RegistrationComponent, AddEditBlogListComponent, BlogListComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes(
        routes
      )],
      providers: [provideMockStore({ initialState }), AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
