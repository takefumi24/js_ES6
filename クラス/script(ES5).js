//ES5
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'ウィーン';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'ブブー!!';
}
const toyota = new Toyota({ color: 'red', title: 'アクア' });

var car = new Car({ title: 'プリウス' });
