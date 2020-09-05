import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/blog';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { Load } from '../store/actions/blog.action';
import { Observable } from 'rxjs';
import { BlogState } from '../models/blog-state';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogsObservable:Observable<any>
  bloglist
  constructor(private store: Store<any>,private router: Router ) { 
    this.blogsObservable = this.store.select(state => state.blog)
    }

  ngOnInit(): void {
    this.blogsObservable.subscribe((data)=>{
      if(data){
        this.bloglist = data.blog  
      }
    })
    this.store.dispatch(new Load())
  }
  editBlock(id){
    this.router.navigate(['addEdit', { id: id }]);
  }
}
