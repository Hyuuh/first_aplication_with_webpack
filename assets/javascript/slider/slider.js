export default class Slider {
  constructor({ elements, animationFunction, speed }) {
    this.elements = elements;
    this.animationFunction = animationFunction;
    this.speed = speed;

    this.index = 0;
    this.size = elements.length;

    this.innerNext = this.prev.bind(this);
    this.stop = this.stop.bind(this);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  innerNext() {
    this.index += 1;
    if (this.index >= this.size) this.index = 0;

    this.animationFunction(this.elements[this.index]);
  }

  next() {
    this.innerNext();
    if (this.interval) {
      this.stop();
      this.play();
    }
  }

  innerPrev() {
    this.index -= 1;
    if (this.index < 0) this.index = this.size - 1;

    this.animationFunction(this.elements[this.index]);
  }

  prev() {
    this.innerPrev();
    if (this.interval) {
      this.stop();
      this.play();
    }
  }

  play() {
    this.interval = setInterval(this.innerNext, this.speed);
  }

  stop() {
    clearInterval(this.interval);
  }
}
