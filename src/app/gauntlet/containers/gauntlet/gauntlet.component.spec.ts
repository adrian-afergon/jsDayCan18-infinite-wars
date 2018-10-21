import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntletComponent } from './gauntlet.component';
import { GauntletModule } from '../../gauntlet.module';

describe('GauntletComponent', () => {
  let component: GauntletComponent;
  let fixture: ComponentFixture<GauntletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GauntletModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GauntletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
