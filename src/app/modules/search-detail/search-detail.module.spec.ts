import { SearchDetailModule } from './search-detail.module';

describe('SearchDetailModule', () => {
  let searchDetailModule: SearchDetailModule;

  beforeEach(() => {
    searchDetailModule = new SearchDetailModule();
  });

  it('should create an instance', () => {
    expect(searchDetailModule).toBeTruthy();
  });
});
