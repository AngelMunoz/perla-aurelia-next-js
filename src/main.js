import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app.js';

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
