import { ChangeDetectPage } from './app.po';

describe('change-detect App', function() {
  let page: ChangeDetectPage;

  beforeEach(() => {
    page = new ChangeDetectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
