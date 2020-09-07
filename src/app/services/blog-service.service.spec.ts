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
});
