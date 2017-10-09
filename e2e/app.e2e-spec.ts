import { EClausWebPage } from './app.po';

describe('e-claus-web App', () => {
  let page: EClausWebPage;

  beforeEach(() => {
    page = new EClausWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
