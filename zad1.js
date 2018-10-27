const plotly = require('plotly')('miloszmoss', 'EE0dfj7Tn5h5KgqlebTw');
const fs = require('fs');

class Base {
  constructor() {
    this.f = 4;
    this.fs = 100;
    this.fi = (7 * Math.PI) / 9;
    this.imgOpts = {
      format: 'png',
      width: 1000,
      height: 500,
    };
  }
  x(n) {
    const { f, fi, fs } = this;
    return 0.7 * Math.sin(2 * Math.PI * f * (n / fs) + fi) * n;
  }
  printPNG(figure, imgOpts, path) {
    plotly.getImage(figure, imgOpts, (error, imageStream) => {
      if (error) return console.log(error);
      const fileStream = fs.createWriteStream(path);
      imageStream.pipe(fileStream);
    });
  }
  printData(path, data) {
    fs.writeFileSync(path, data);
  }
}

class Zad1 extends Base {
  constructor() {
    super();
    this.indexArray = [];
    this.dataArray = [];
    this.trace1 = {
      x: this.indexArray,
      y: this.dataArray,
      type: 'scatter',
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
    this.printPNG(figure, imgOpts, 'zad1.png');
    this.printData('zad1.txt', dataArray);
  }
}

const zad1 = new Zad1();
zad1.init();

class Zad2 extends Base {
  constructor() {
    super();
    this.zIndex = [];
    this.zData = [];
    this.trace1 = {
      x: this.zIndex,
      y: this.zData,
      type: 'scatter',
    };
    this.figure = { data: [this.trace1] };
  }
  y(n) {
    const { fs } = this;
    return Math.sin(8 * Math.PI * (n / fs) * Math.cos(10 * n));
  }
  z(n) {
    return this.y(n) - 3000 * Math.abs(this.x(n));
  }
  count() {
    const { zIndex, zData } = this;
    for (let i = 0; i < 100; i++) {
      zIndex.push(i);
      zData.push(this.z(i));
    }
  }
  init() {
    const { figure, imgOpts, zData } = this;
    this.count();
    this.printPNG(figure, imgOpts, 'zad2.png');
    this.printData('zad2.txt', zData);
  }
}

const zad2 = new Zad2();
zad2.init();
