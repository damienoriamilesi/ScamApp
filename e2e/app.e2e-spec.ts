import { AppPage } from './app.po';

describe('scam-app-bootstrap App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Angular App');
  });

  it('should display welcome message', () => {
    page.navigateTo();
      page.getElementAndClick();
  });
});
