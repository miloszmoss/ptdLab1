const Base = require('./Base');
class Zad4 extends Base {
  constructor() {
    super();
    this.fs = 10000;
    this.T = 4;
    this.index = [];
    this.dataA = [];
    this.dataB = [];
    this.dataC = [];
    this.traceA = { x: this.index, y: this.dataA, type: 'scatter' };
    this.traceB = { x: this.index, y: this.dataB, type: 'scatter' };
    this.traceC = { x: this.index, y: this.dataC, type: 'scatter' };
    this.figureA = { data: [this.traceA] };
    this.figureB = { data: [this.traceB] };
    this.figureC = { data: [this.traceC] };
    this.g = this.g.bind(this);
    this.indexArray = this.indexArray.bind(this);
  }
  indexArray(size) {
    for (let i = 0; i < size; i++) {
      this.index.push(i);
    }
  }
  g(size, H, data) {
    for (let t = 0; t < size; t++) {
      let value = 0;
      for (let n = 0; n < H; n++) {
        value += Math.sin(0.5 * Math.PI * t * n) / (2 * n + 1);
      }
      value *= 4 * Math.PI;
      if (t % 10 === 0) {
        data.push(value);
      }
    }
  }
  init() {
    const {
      fs,
      dataA,
      dataB,
      dataC,
      figureA,
      figureB,
      figureC,
      imgOpts,
      T,
      g,
      indexArray,
      printData,
      printPNG
    } = this;

    const size = fs * T;
    indexArray(size);
    g(size, 2, dataA);
    g(size, 25, dataB);
    g(size, 100, dataC);
    printPNG(figureA, imgOpts, 'charts/zad4_a.png');
    printPNG(figureB, imgOpts, 'charts/zad4_b.png');
    printPNG(figureC, imgOpts, 'charts/zad4_c.png');
    printData('data/zad4_a.txt', dataA);
    printData('data/zad4_b.txt', dataB);
    printData('data/zad4_c.txt', dataC);
  }
}

const zad4 = new Zad4();
zad4.init();
