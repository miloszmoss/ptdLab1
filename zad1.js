const Base = require('./Base');
class Zad1 extends Base {
  constructor() {
    super();
    this.indexArray = [];
    this.dataArray = [];
    this.trace1 = {
      x: this.indexArray,
      y: this.dataArray,
      type: 'scatter'
    };
    this.figure = { data: [this.trace1] };
  }
  count() {
    const { indexArray, dataArray } = this;
    for (let i = 0; i < 100; i++) {
      indexArray.push(i);
      dataArray.push(this.x(i));
    }
  }
  init() {
    const { figure, imgOpts, dataArray } = this;
    this.count();
    this.printPNG(figure, imgOpts, 'charts/zad1.png');
    this.printData('data/zad1.txt', dataArray);
  }
}

const zad1 = new Zad1();
zad1.init();
