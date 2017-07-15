import { BriolanPage } from './app.po';

describe('briolan App', () => {
  let page: BriolanPage;

  beforeEach(() => {
    page = new BriolanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
