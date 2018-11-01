import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityGauntletComponent } from './infinity-gauntlet.component';

describe('InfinityGauntletComponent', () => {
  let component: InfinityGauntletComponent;
  let fixture: ComponentFixture<InfinityGauntletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinityGauntletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityGauntletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
