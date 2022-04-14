function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var guilia = new Car("Alfa Romeo Guilia", 2017, "Gray", 29.5);
var altima = new Car("Nissan Altima", 2014, "Red", 32.7);
var wrangler = new Car("Jeep Wrangler", 2022, "Black", 26.3);

console.log(guilia.mpg);
console.log(altima.mpg);
console.log(wrangler.mpg);

function Vehicle(car) {
    this.car = car;
}

var guiliaVehicle = new Vehicle(guilia);
var altimaVehicle = new Vehicle(altima);
var wranglerVehicle = new Vehicle(wrangler);

console.log(guiliaVehicle.car.mpg);
console.log(altimaVehicle.car.mpg);
console.log(wranglerVehicle.car.mpg);