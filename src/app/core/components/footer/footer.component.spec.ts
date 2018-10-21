import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {TitleComponent} from '../title/title.component';
import {SubtitleComponent} from '../subtitle/subtitle.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, TitleComponent, SubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a title', () => {
    const title = fixture.debugElement.nativeElement.querySelector('h1');
    expect(title).toBeTruthy();
  });
  it('should have a links to social newtorks', () => {
    const links = fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(links.length).toBe(5);
  });
});
