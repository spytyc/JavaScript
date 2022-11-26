// Create an object: a car. It has some properties: the brand, the model, the start price, the end price, the age. 
// Write some functions which operate on this object:

// 1. A constructor function which creates a Car object and fills it with some initial data.
function Car(brand, model, startPrice, age, km){
    this.brand = brand;
    this.model = model;
    this.startPrice = startPrice;
    this.age = age;
    this.km = km;
    // set as property
    // this.endPrice = this.startPrice - (1000 * this.age);

    // use method
    // 2. A function, which counts the end price, by decreasing the start price by 1000 for every year of the car's age.
    this.countPrice = function() {
        return this.startPrice - (1000 * this.age);
    }

    // 3. A function, increasing the start price by a given value.
    this.increasePrice = function(value) {
        this.startPrice = this.startPrice + value;
    }

    // 4. A function, checking whether the end price is in the given range.
    this.isInRange = function(start, end) {
        const endPrice = this.countPrice();
        if(endPrice >= start && endPrice <= end) {
            return true;
        } else {
            return false;
        }
    }

    // 5. A function, copying the object (so that we have two similar cars, not just one).
    this.copy = function() {
        var newCar = new Car(this.brand, this.model, this.startPrice, this.age, this.km);
        return newCar;
    }
}

// 1
var auto = new Car("mercedes", "c klass", 30000, 14, 190000);
console.log("auto: ", JSON.stringify(auto));

// 2
var endPrice = auto.countPrice();
console.log("endPrice: ", endPrice);

// 3
auto.increasePrice(5000);
console.log("auto: ", JSON.stringify(auto));

// 4
var isInRange1 = auto.isInRange(1000, 5000);
var isInRange2 = auto.isInRange(3000, 50000);
console.log("isInRange1: 1000, 5000 ", isInRange1);
console.log("isInRange2: 3000, 50000", isInRange2);

// 5
var copyCar = auto.copy();
console.log("copyCar: ", JSON.stringify(copyCar));



