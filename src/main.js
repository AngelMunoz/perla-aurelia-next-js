import Aurelia, { RouterConfiguration/*, StyleConfiguration*/ } from 'aurelia';
import { MyApp } from './my-app.js';

Aurelia
  .register(RouterConfiguration.customize({ useUrlFragmentHash: true }))
  .app(MyApp)
  .start();
