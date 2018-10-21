import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        RouterTestingModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have a header`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('header')).toBeTruthy();
  }));
  it(`should have a footer`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('footer')).toBeTruthy();
  }));

  it(`should have a main-section`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('.main-section')).toBeTruthy();
  }));
});
