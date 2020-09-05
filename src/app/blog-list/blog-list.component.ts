import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/blog';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { Load, deleteBlog } from '../store/actions/blog.action';
import { Observable } from 'rxjs';
import { BlogState } from '../models/blog-state';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogsObservable:Observable<any>
  bloglist: any;
  isloggedin: boolean = false;
  constructor(private store: Store<any>,private router: Router, private authService:AuthService, ) { 
    this.blogsObservable = this.store.select(state => state.blog)
    }

  ngOnInit(): void {
    if(this.authService.getToken()){
      this.isloggedin=true;
    }
    this.blogsObservable.subscribe((data)=>{
      if(data){
        this.bloglist = data.blog  
      }
      if(data.Message=='Succesfully deleted the blog'){
        alert(data.Message)
        this.store.dispatch(new Load())
      }
    })
    this.store.dispatch(new Load())
  }
  editBlock(id){
    this.router.navigate(['addEdit', { id: id }]);
  }
  deleteBlock(id){
    if(confirm("Are you sure you want to delete this blog?")){
      this.store.dispatch(new deleteBlog(id))
    }
  }
}
