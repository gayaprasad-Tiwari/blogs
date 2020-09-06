import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBlog } from '../models/blog';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { Insert, LoadSingle, Edit } from '../store/actions/blog.action';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-blog-list',
  templateUrl: './add-edit-blog-list.component.html',
  styleUrls: ['./add-edit-blog-list.component.scss']
})
export class AddEditBlogListComponent implements OnInit {
  addeditblogForm;
  blogObj: IBlog;
  blogsObservable: Observable<any>;
  message: any;
  editId: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.blogsObservable = this.store.select(state => state.blog);
  }
  categoryList = [
    'Music',
    'Fashion',
    'Car',
    'Real State',
    'Beauty',
    'Travel',
    'others'
  ];
  ngOnInit(): void {
    this.addeditblogForm = this.fb.group({
      title: [''],
      imageUrl: [''],
      description: [''],
      category: ['']
    });
    if (this.editId) {
      this.blogsObservable.subscribe((data) => {
        if (data && data.Message === 'single blog loaded') {
          const dataObj = data.blog;
          this.addeditblogForm.patchValue({
            title: dataObj.title,
            imageUrl: dataObj.imageUrl,
            description: dataObj.description,
            category: dataObj.category
          });
        }
      });
      this.getEditBlog(this.editId);
    }
  }
  getEditBlog(id) {
    this.store.dispatch(new LoadSingle(id));
  }
  onSubmit() {
    const title = this.addeditblogForm.controls.title.value;
    const imageUrl = this.addeditblogForm.controls.imageUrl.value;
    const description = this.addeditblogForm.controls.description.value;
    const category = this.addeditblogForm.controls.category.value;
    const date = new Date();
    this.blogObj = {
      title,
      imageUrl,
      description,
      category,
      date
    };
    if (this.editId) {
      this.blogObj.id = this.editId;
      this.store.dispatch(new Edit(this.blogObj));
    } else {
      this.store.dispatch(new Insert(this.blogObj));
    }

    this.blogsObservable.subscribe((data) => {
      this.message = data.Message;
      if (this.message === 'blog Edited successfully') {
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 1000);
      }
      if (this.message === 'blog added successfully') {
        setTimeout(() => {
          this.message = null;
        }, 1000);
      }
      this.addeditblogForm.reset();
    });
  }
}


