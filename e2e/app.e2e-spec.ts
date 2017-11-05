import { PhotoboothjsPage } from './app.po';

describe('photoboothjs App', function() {
  let page: PhotoboothjsPage;

  beforeEach(() => {
    page = new PhotoboothjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
