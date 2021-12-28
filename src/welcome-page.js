import { CustomElement } from 'aurelia';

export const WelcomePage = CustomElement.define({
  name: 'welcome-page',
  template: "<h1>${message}</h1>"
}, class {
  message = 'Welcome to Aurelia 2!';
});