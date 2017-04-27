import { EncodeSitePage } from './app.po';

describe('encode-site App', () => {
  let page: EncodeSitePage;

  beforeEach(() => {
    page = new EncodeSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
