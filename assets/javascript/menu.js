function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop,
  });
}

document.querySelector('.menu')
  .addEventListener('click', () => {
    document.querySelector('.menu-screen').classList.add('active');
  });

document.querySelector('.close')
  .addEventListener('click', () => {
    document.querySelector('.menu-screen').classList.remove('active');
  });

const links = document.querySelectorAll('.menu-screen a');

links.forEach((link) => {
  link.addEventListener('click', (ev) => {
    document.querySelector('.menu-screen').classList.remove('active');

    const paths = this.href.split('/');

    const selector = paths[paths.length - 1];

    if (window.scrollTo) ev.preventDefault();

    scrollToElement(document.querySelector(selector));

    return !!window.scrollTo;
  });
});
