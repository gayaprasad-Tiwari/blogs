import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore} from '@ngrx/store/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { LogOut } from '../store/actions/auth.actions';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore: MockStore;
  let service: ThemeService;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ AuthService, ThemeService, provideMockStore({initialState}) ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    service = TestBed.inject(ThemeService);
  }));

  beforeEach(() => {
    const theme = 'ligth';
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change theme to be called', () => {
    component.changeTheme();
    spyOn(service, 'setLightTheme');
    spyOn(service, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalledTimes(1);
      expect(component.theme).toBe('light');
      expect(service.setLightTheme).toBeCalledTimes(1);
      expect(service.setDarkTheme).not.toHaveBeenCalled();
    });
  });
  it('change theme to be called', () => {
    component.theme = 'dark';
    component.changeTheme();
    spyOn(component.themeService, 'setLightTheme');
    spyOn(component.themeService, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalled();
      expect(component.theme).toBe('');
      expect(component.themeService.setLightTheme).not.toHaveBeenCalled();
      expect(component.themeService.setDarkTheme).toBeCalledTimes(1);
    });
  });
});
