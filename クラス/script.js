//ES6のクラス
class Car{
  constructor({title}) {
    this.title =title;
  }
  drive() {
    return 'ウィーン';
  }
}

class Toyota extends Car{
  constructor(options) {
    super(options);//Car.constructor
    this.color = options.color;
  }
  honk() {
    return 'ブブー！！'
  }
}

const toyota = new Toyota({color:'red',title:'アクア'});
console.log('"Debug": toyota', toyota);
toyota.honk();
console.log(toyota.honk());
console.log(toyota.drive());
