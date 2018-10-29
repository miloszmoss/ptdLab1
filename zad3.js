const Base = require('./Base');
class Zad3 extends Base {
  constructor() {
    super();
    this.index = [];
    this.data = [];
    this.trace = {
      x: this.index,
      y: this.data,
      type: 'scatter'
    };
    this.figure = { data: [this.trace] };
  }
  first(n) {
    return Math.pow(0.8, n) - 1;
  }
  second(n) {
    const fs = 4;
    return -1.8 * n * Math.cos(16 * Math.PI * (n / fs) + Math.PI);
  }
  third(n) {
    return 0.72 * n;
  }
  fourth(n) {
    const fs = 4;
    return 0.29 * Math.pow(n, 8) * Math.sin(31 * Math.PI * (n / fs)) + 0.55;
  }
  count() {
    const { data, index, first, second, third, fourth } = this;
    const [step1, step2, step3] = [0.4 * 4000, 0.6 * 4000, 0.8 * 4000];
    for (let i = 0; i < 4000; i++) {
      index.push(i);
      if (i < step1) {
        data.push(first(i));
      } else if (i >= step1 && i < step2) {
        data.push(second(i));
      } else if (i >= step2 && i < step3) {
        data.push(third(i));
      } else {
        data.push(fourth(i));
      }
    }
  }
  init() {
    const { figure, imgOpts, data } = this;
    this.count();
    this.printPNG(figure, imgOpts, 'charts/zad3.png');
    this.printData('data/zad3.txt', data);
  }
}

const zad3 = new Zad3();
zad3.init();
