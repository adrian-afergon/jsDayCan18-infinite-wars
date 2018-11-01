import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {SharedModule} from '../../../shared/shared.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent],
      imports: [SharedModule]
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
