import { CustomElement } from 'aurelia';
import { MissingPage } from './missing-page.js';
import { AboutPage } from './about-page.js';
import { WelcomePage } from './welcome-page.js';
import './my-app.css';

export const MyApp =
    CustomElement.define({
        name: 'my-app',
        dependencies: [
            MissingPage,
            AboutPage,
            WelcomePage,
        ],
        template: `
        <nav>
            <a load="welcome-page">Welcome</a>
            <a load="about-page">About</a>
        </nav>

        <au-viewport default="welcome-page" fallback="missing-page"></au-viewport>`
    },
        class { });
