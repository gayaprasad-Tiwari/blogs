import {inject, TestBed } from '@angular/core/testing';
import { BlogService } from './blog-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
describe('BlogServiceService', () => {
  let service: BlogService;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ], providers: [ BlogService ]});
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be ablle to login for registered user', () => {
    const user = {
      id: 1,
      userName: 'abc',
      email: 'mock@gmail.com',
      password: 'mockpassword',
    };
    service
      .blogList()
      .subscribe((data) => {
        expect(data).toBeDefined();
        });
  });
});
