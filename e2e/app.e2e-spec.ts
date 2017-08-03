import { GuestPage } from './app.po';

describe('guest App', () => {
  let page: GuestPage;

  beforeEach(() => {
    page = new GuestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
