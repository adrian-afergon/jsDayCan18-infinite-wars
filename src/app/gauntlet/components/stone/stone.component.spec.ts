import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneComponent } from './stone.component';
import {TagComponent} from '../../../shared/components/tag/tag.component';
import {TitleComponent} from '../../../shared/components/title/title.component';
import {StoneModel} from '../../viewmodel/Stone.model';

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
    component.stone = aStone({} as StoneModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const aStone = ({ id = 'irrelevant',
                  name = 'irrelevant',
                  image = 'irrelevant',
                  action = 'irrelevant',
                  description = 'irrelevant',
                  equipped = false}): StoneModel => ({
  id,
  name,
  image,
  action,
  description,
  equipped
});

