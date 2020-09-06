import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditBlogListComponent } from './add-edit-blog-list.component';

describe('AddEditBlogListComponent', () => {
  let component: AddEditBlogListComponent;
  let fixture: ComponentFixture<AddEditBlogListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBlogListComponent ]
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
