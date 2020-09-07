import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBlog } from '../models/blog';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { Insert, LoadSingle, Edit } from '../store/actions/blog.action';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-blog-list',
  templateUrl: './add-edit-blog-list.component.html',
  styleUrls: ['./add-edit-blog-list.component.scss']
})
export class AddEditBlogListComponent implements OnInit {
  addeditblogForm;
  blogObj: IBlog;
  addEditText = 'Add';
  blogsObservable: Observable<any>;
  message: any;
  editId: any;
  submitted = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.blogsObservable = this.store.select(state => state.blog);
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        if (val.url === '/addEdit'){
          this.addeditblogForm.reset();
          this.editId = null;
        }
      }
  });
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
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
    if (this.editId) {
      this.addEditText = 'Edit';
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
  get f() { return this.addeditblogForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.addeditblogForm.invalid){
      return;
    }
    this.blogObj = {
      title: this.addeditblogForm.controls.title.value,
      imageUrl: this.addeditblogForm.controls.imageUrl.value,
      description: this.addeditblogForm.controls.description.value,
      category: this.addeditblogForm.controls.category.value,
      date: new Date()
    };
    if (this.editId) {
      this.blogObj.id = this.editId;
      this.store.dispatch(new Edit(this.blogObj));
    } else {
      this.store.dispatch(new Insert(this.blogObj));
    }
    this.submitted = false;
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


