import { MiniCartModule } from './mini-cart.module';

describe('MiniCartModule', () => {
  let miniCartModule: MiniCartModule;

  beforeEach(() => {
    miniCartModule = new MiniCartModule();
  });

  it('should create an instance', () => {
    expect(miniCartModule).toBeTruthy();
  });
});
