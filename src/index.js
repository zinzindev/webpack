import { Header } from './app/header';
import './style.css';
import './styles/scss/main.scss';

import webpackPng from './assets/images/webpack.png';

let header = new Header();
let firstHeading = header.getFirstHeading();

console.log(firstHeading);

document.getElementById('webpack-png').setAttribute('src', webpackPng);
