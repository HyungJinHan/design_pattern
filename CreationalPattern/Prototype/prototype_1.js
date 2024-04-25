let vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },
  getModel: function () {
    console.log(`The model of this vehicle is ${this.model}`);
  },
};

const vehicle = (model) => {
  function F() {}
  F.prototype = vehiclePrototype;

  let f = new F();
  f.init(model);

  return f;
};

let car = vehicle("Tesla Model X");

car.getModel();
