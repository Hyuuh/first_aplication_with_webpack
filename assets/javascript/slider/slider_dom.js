import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

const SUBTITLESLIDER = document.querySelector('#slider-subtitle');
const TITLESLIDER = document.querySelector('#slider-title');
const TEXTSLIDER = document.querySelector('#slider-text');
const IMAGESLIDER = document.querySelector('#slider-image');
const TEXTCONTENT = document.querySelector('#slider-text-content');

const RIGHTARROW = document.querySelector('.left-arrow');
const LEFTARROW = document.querySelector('.right-arrow');

const slides = new Slider({
  elements,
  animationFunction: (element) => {
    TEXTCONTENT.classList.add('hide');
    IMAGESLIDER.classList.add('hide');

    setTimeout(() => {
      SUBTITLESLIDER.innerHTML = element.subtitle;
      TITLESLIDER.innerHTML = element.title;
      TEXTSLIDER.innerHTML = element.text;
      IMAGESLIDER.src = element.image;

      TEXTCONTENT.classList.remove('hide');
      IMAGESLIDER.classList.remove('hide');
    }, 600);
  },
  speed: 5000,
});

slides.play();

RIGHTARROW.addEventListener('click', slides.next);
LEFTARROW.addEventListener('click', slides.prev);

const imagePaths = elements.map((e) => e.image);

Preloader.preloadImages({
  images: imagePaths,
  completed: () => {
    document.querySelector('.controls').style.display = 'block';
  },
});
