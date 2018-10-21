import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {ShareModule} from '../../../share/share.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ShareModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a title', () => {
    const title = fixture.debugElement.nativeElement.querySelector('app-title');
    expect(title).toBeTruthy();
  });
  it('should have a links to pages', () => {
    const list = fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(list.length).toBe(2);
  });
});
