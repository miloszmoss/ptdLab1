const plotly = require('plotly')('miloszmoss', 'EE0dfj7Tn5h5KgqlebTw');
const fs = require('fs');

module.exports = class Base {
  constructor() {
    this.f = 4;
    this.fs = 100;
    this.fi = (7 * Math.PI) / 9;
    this.imgOpts = {
      format: 'png',
      width: 1000,
      height: 500
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
};
