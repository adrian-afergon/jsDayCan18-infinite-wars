import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {SocketService} from '../../services/socket.service';
import {of} from 'rxjs';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SharedModule} from '../../../shared/shared.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
      ],
      providers: [
        { provide: SocketService, useClass: SocketServiceMock}
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

class SocketServiceMock {
  constructor() { }

  onEvent = jasmine.createSpy('onEvent').and.callFake(
    () => of(Object.assign({}, 'irrelevant'))
  );
  public initSocket = jasmine.createSpy('initSocket').and.callFake(
    () => {}
  );

  public snap = jasmine.createSpy('snap').and.callFake(
    () => {}
  );

  // public onEvent(event: Event): Observable<any> {
  //   return of('irrelevant');
  // }

}
