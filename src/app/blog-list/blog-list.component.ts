import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Load, DeleteBlog } from '../store/actions/blog.action';
import { Observable, Unsubscribable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogsObservable: Observable<any>;
  subscription: Unsubscribable;
  bloglist: any;
  isloggedin = false;
  constructor(private store: Store<any>, private router: Router, private authService: AuthService, ) {
    this.blogsObservable = this.store.select(state => state.blog);
  }

  ngOnInit(): void {
    this.authService.token.subscribe((value) => {
      if (value) {
        this.isloggedin = true;
      } else {
        this.isloggedin = false;
      }
    });
    this.subscription = this.blogsObservable.subscribe((data) => {
      if (data) {
        this.bloglist = data.blog;
      }
      if (data && data.Message === 'Succesfully deleted the blog') {
        alert(data.Message);
        this.store.dispatch(new Load());
      }
    });
    this.store.dispatch(new Load());
  }
  editBlock(id) {
    this.router.navigate(['addEdit', { id }]);
  }
  DeleteBlog(id) {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.store.dispatch(new DeleteBlog(id));
    }
  }
  ngOnDestroy(){
    if (this.subscription){
    this.subscription.unsubscribe();
    }
  }
}
