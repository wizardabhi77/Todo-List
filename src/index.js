import './styles.css';
import homeLoad from './home.js';
import menuLoad from './menu.js';
import aboutLoad from './about.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const content = document.querySelector('#content');

homeBtn.addEventListener('click', () => {
    content.innerHTML = '';
    homeLoad();
});

menuBtn.addEventListener('click', () => {
    content.innerHTML = '';
    menuLoad();
});

aboutBtn.addEventListener('click', () => {
    content.innerHTML = '';
    aboutLoad();
});




