import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-blog-list',
  templateUrl: './add-edit-blog-list.component.html',
  styleUrls: ['./add-edit-blog-list.component.scss']
})
export class AddEditBlogListComponent implements OnInit {
  addeditblogForm;
  blogObj;
  constructor(private fb:FormBuilder) {  }
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
  }

}
