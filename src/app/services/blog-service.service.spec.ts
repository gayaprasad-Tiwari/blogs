import { inject, TestBed } from '@angular/core/testing';
import { BlogService } from './blog-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
describe('BlogServiceService', () => {
  let service: BlogService;
  let Mock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [BlogService] });
    service = TestBed.inject(BlogService);
  });
  beforeEach(inject(
    [BlogService, HttpTestingController],
    (blogService, httpMock: any) => {
      service = blogService;
      Mock = httpMock;
    }
  ));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be ablle to get blog list', () => {
    service
      .blogList()
      .subscribe((data) => {
        expect(data).toBeDefined();
        expect(data.length).toEqual(1);
        const req = Mock.expectOne(
          `${this.BASE_URL}blogList`);
        expect(req.request.method).toEqual('POST');
        req.flush(data);
        Mock.verify();
      });
  });
  it('should be ablle to get singlr blog', () => {
    service
      .blog(1)
      .subscribe((data) => {
        expect(data).toBeDefined();
        expect(data.id).toEqual(1);
        const req = Mock.expectOne(
          `${this.BASE_URL}blogList`);
        expect(req.request.method).toEqual('POST');
        req.flush(data);
        Mock.verify();
      });
  });
  it('should be ablle to get singlr blog', () => {
    const newUser = {
      title: 'Bar with negative stack',
      imageUrl: 'https://www.dummies.com/wp-content/uploads/blogging-ideas.jpg',
      description: 'ncncnfdrh',
      category: 'Car',
      date: '2020-09-08T14:31:08.012Z'
    };
    service
      .addList(newUser)
      .subscribe((data) => {
        expect(data).toBeDefined();
        expect(data.title).toEqual(newUser.title);
        expect(data.id).toBeTruthy();
        const req = Mock.expectOne(
          `${this.BASE_URL}blogList`);
        expect(req.request.method).toEqual('POST');
        req.flush(data);
        Mock.verify();
      });
  });
});
