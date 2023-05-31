import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/navbar';
import './component/jumbotron';
import './component/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

import Home from './views/pages/home';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.line'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main'),
});

document.addEventListener('DOMContentLoaded', async () => {
  const mainContent = document.querySelector('#content');
  mainContent.innerHTML = await Home.render();
  await Home.afterRender();

  const skipLink = document.querySelector('.skip-link');

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
