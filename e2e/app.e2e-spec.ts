import { IntlTelPage } from './app.po';

describe('intl-tel App', () => {
  let page: IntlTelPage;

  beforeEach(() => {
    page = new IntlTelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
