import { GauntletModule } from './gauntlet.module';

describe('GauntletModule', () => {
  let gauntletModule: GauntletModule;

  beforeEach(() => {
    gauntletModule = new GauntletModule();
  });

  it('should create an instance', () => {
    expect(gauntletModule).toBeTruthy();
  });
});
