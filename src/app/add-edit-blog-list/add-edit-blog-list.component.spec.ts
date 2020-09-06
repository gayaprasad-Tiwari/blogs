import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditBlogListComponent } from './add-edit-blog-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddEditBlogListComponent', () => {
  let component: AddEditBlogListComponent;
  let fixture: ComponentFixture<AddEditBlogListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBlogListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
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
