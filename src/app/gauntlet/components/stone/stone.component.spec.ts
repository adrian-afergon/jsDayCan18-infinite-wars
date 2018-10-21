import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneComponent } from './stone.component';
import {TagComponent} from '../../../share/components/tag/tag.component';
import {TitleComponent} from '../../../share/components/title/title.component';

describe('StoneComponent', () => {
  let component: StoneComponent;
  let fixture: ComponentFixture<StoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneComponent, TagComponent, TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
