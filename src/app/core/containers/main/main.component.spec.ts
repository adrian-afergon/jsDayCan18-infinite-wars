import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, HeaderComponent, FooterComponent ],
      imports: [
        BrowserModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a header`, async(() => {
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('app-header')).toBeTruthy();
  }));
  it(`should have a footer`, async(() => {
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('footer')).toBeTruthy();
  }));

  it(`should have a main-section`, async(() => {
    const appComponent = fixture.debugElement.nativeElement;
    expect(appComponent.querySelector('.main-section')).toBeTruthy();
  }));
});
