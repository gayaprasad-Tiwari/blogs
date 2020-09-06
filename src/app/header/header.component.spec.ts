import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../services/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[FormsModule,ReactiveFormsModule],
      providers:[AuthService,ThemeService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents().catch((data)=> console.log(data));
  }));

  beforeEach(() => {
    const theme = 'ligth';
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
