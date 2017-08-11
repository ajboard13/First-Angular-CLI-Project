import { FitMeUpPage } from './app.po';

describe('fit-me-up App', () => {
  let page: FitMeUpPage;

  beforeEach(() => {
    page = new FitMeUpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
