import { FacePalmClientPage } from './app.po';

describe('face-palm-client App', () => {
  let page: FacePalmClientPage;

  beforeEach(() => {
    page = new FacePalmClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
