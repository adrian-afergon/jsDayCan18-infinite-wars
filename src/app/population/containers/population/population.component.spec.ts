import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationComponent } from './population.component';
import {SharedModule} from '../../../shared/shared.module';

describe('PopulationComponent', () => {
  let component: PopulationComponent;
  let fixture: ComponentFixture<PopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
