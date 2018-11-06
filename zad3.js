const Base = require('./Base');
class Zad3 extends Base {
  constructor() {
    super();
    this.index = [];
    this.data = [];
    this.fs = 4000;
    this.trace = {
      x: this.index,
      y: this.data,
      type: 'scatter',
    };
    this.figure = { data: [this.trace] };
    this.second = this.second.bind(this);
    this.fourth = this.fourth.bind(this);
  }
  first(n) {
    return Math.pow(0.8, n) - 1;
  }
  second(n) {
    const { fs } = this;
    return -1.8 * n * Math.cos((16 * Math.PI * n) / fs + Math.PI);
  }
  third(n) {
    return 0.72 * n;
  }
  fourth(n) {
    const { fs } = this;
    return 0.29 * Math.pow(n, 8) * Math.sin(31 * Math.PI * (n / fs)) + 0.55;
  }
  count() {
    const { data, index, first, second, third, fourth } = this;
    const [step1, step2, step3] = [0.4, 0.6, 0.8];
    for (let i = 0; i < 4000; i++) {
      let t = i / 4000;
      index.push(i / 4000);
      if (t < step1) {
        data.push(first(t));
      } else if (t >= step1 && t < step2) {
        data.push(second(t));
      } else if (t >= step2 && t < step3) {
        data.push(third(t));
      } else {
        data.push(fourth(t));
      }
    }
  }
  init() {
    const { figure, imgOpts, data } = this;
    this.count();
    console.log(this.fourth(0.8));
    console.log(this.fourth(0.9));
    console.log(this.data[0.8 * 4000]);
    console.log(this.data[0.9 * 4000]);
    this.printPNG(figure, imgOpts, 'charts/zad3.png');
    this.printData('data/zad3.txt', data);
  }
}

const zad3 = new Zad3();
zad3.init();
