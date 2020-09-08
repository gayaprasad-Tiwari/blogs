import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let mockStore: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [provideMockStore({initialState})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
