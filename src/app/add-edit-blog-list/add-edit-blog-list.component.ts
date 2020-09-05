import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBlog } from '../models/blog';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { Insert, LoadSingle, Edit } from '../store/actions/blog.action';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
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
  editId
  constructor(private fb:FormBuilder, private route :ActivatedRoute,private store: Store<AppState>) {
    this.editId = this.route.snapshot.paramMap.get('id')
    this.blogsObservable = this.store.select(state => state.blog)
   }
  categoryList =[
    'Music',
    'Fashion',
    'Car',
    'Real State',
    'Beauty',
    'Travel',
    'others'
  ]
  ngOnInit(): void {
    this.addeditblogForm =this.fb.group({
      'title':[''],
      'imageUrl':[''],
      'description':[''],
      'category':['']
    })
    if(this.editId){
      this.blogsObservable.subscribe((data)=>{
        if(data && data.singleBlog && data.singleBlog.blog){
          let dataObj = data.singleBlog.blog
          this.addeditblogForm.patchValue({
            title :dataObj.title,
            imageUrl:dataObj.imageUrl,
            description:dataObj.description,
            category:dataObj.category
          })
        }
      })
      this.getEditBlog(this.editId)
    }
    
  }
  getEditBlog(id){
    this.store.dispatch(new LoadSingle(id))
  }
  onSubmit(){
    let title =this.addeditblogForm.controls['title'].value;
    let imageUrl =this.addeditblogForm.controls['imageUrl'].value;
    let description =this.addeditblogForm.controls['description'].value;
    let category =this.addeditblogForm.controls['category'].value;
    let date = new Date()
    this.blogObj={
      title,
      imageUrl,
      description,
      category,
      date
    }
    if(this.editId){
      this.blogObj.id=this.editId;
      this.store.dispatch(new Edit(this.blogObj))
    }else{
         this.store.dispatch(new Insert(this.blogObj))
    }
 
    this.blogsObservable.subscribe((data)=>{
      this.message = data.Message;
      this.addeditblogForm.reset()
    })
  }

}
