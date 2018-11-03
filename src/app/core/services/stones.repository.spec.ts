import { TestBed, inject } from '@angular/core/testing';

import { StonesRepository } from './stones.repository';

describe('StonesRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StonesRepository]
    });
  });

  it('should be created', inject([StonesRepository], (service: StonesRepository) => {
    expect(service).toBeTruthy();
  }));
});
