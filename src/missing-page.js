import { CustomElement } from 'aurelia';

export const MissingPage = CustomElement.define({
  name: 'missing-page',
  template: "<h3>Ouch! Couldn't find '${missingComponent}'!</h3>"
}, class {
  static parameters = ['id'];
  missingComponent;

  enter(parameters) {
    this.missingComponent = parameters.id;
  }
});