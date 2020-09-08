import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IUser } from '../models/user';


describe('AuthService', () => {
  let service: AuthService;
  let Mock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
  });
  beforeEach(inject(
    [AuthService, HttpTestingController],
    (authService, httpMock: any) => {
      service = authService;
      Mock = httpMock;
    }
  ));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be ablle to login for registered user', () => {
    const user = {
      id: 1,
      email: 'mock@gmail.com',
      password: 'mockpassword',
    };
    service
      .logIn('mock@gmail.com', 'mockpassword')
      .subscribe((data) => {
        expect(data).toBeDefined();
        expect(data.email).toEqual(user.email);
        expect(data.password).toEqual(user.password);
        const req = Mock.expectOne(
          'http://localhost:3000/login' );
        expect(req.request.method).toEqual('POST');
        req.flush(data);
        Mock.verify();
      });
  });

  it('should be ablle to login for registered user', () => {
    const user = {
      id: 1,
      userName: 'abc',
      email: 'mock@gmail.com',
      password: 'mockpassword',
    };
    service
      .signUp({ userName: 'abc', email: 'mock@gmail.com', password: 'mockpassword',
      })
      .subscribe((data) => {
        expect(data).toBeDefined();
        expect(data.email).toEqual(user.email);
        expect(data.password).toEqual(user.password);
        const req = Mock.expectOne(
          'http://localhost:3000/login' );
        expect(req.request.method).toEqual('POST');
        req.flush(data);
        Mock.verify();
      });
  });
  it('Get token should be caled', () => {
    spyOn(service, 'getToken').and.returnValue('abc');
    expect(service.getToken()).toEqual('abc');
  });
});
