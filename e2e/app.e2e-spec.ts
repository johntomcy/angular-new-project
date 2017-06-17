import { AngularNewProjectPage } from './app.po';

describe('angular-new-project App', () => {
  let page: AngularNewProjectPage;

  beforeEach(() => {
    page = new AngularNewProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
