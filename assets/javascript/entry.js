import '../css/app.scss';
import './slider/slider_dom';
import './maps';
import './menu';
import '../static/1.jpg';
import '../static/6.jpg';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js');
}
