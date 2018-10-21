import { PopulationModule } from './population.module';

describe('PopulationModule', () => {
  let populationModule: PopulationModule;

  beforeEach(() => {
    populationModule = new PopulationModule();
  });

  it('should create an instance', () => {
    expect(populationModule).toBeTruthy();
  });
});
