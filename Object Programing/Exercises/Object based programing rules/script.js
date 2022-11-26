class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`); // use $ instead of +.
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
    //constructor(name) {
    // super(name);} // cu extends se mosteneste metodele si atributele din calsa animal dar chemare atributelor se face cu super(atribet1, atribute2) in loc de this.
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

function f(phrase) {
    return class {
        sayHi() { alert(phrase); }
    };
}

class User extends f("Hello") { }

new User().sayHi(); // Hello

class Rabbit extends Animal {
    stop() {
        // ...now this will be used for rabbit.stop()
        // instead of stop() from class Animal
    }
}

//Method: class inheritance - creeaza 2 clase de parinte si copil
class Clothes { //Clasa Parinte
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    present() {
        console.log('These clothes are ' + this.brand + ' and have the color ' + this.color);
    }
}
let myClothes = new Clothes('HM', 'black');
class Dress extends Clothes { //Clasa Copil care mosteneste TOT din clasa Parinte prin keywordul EXTENDS
    constructor(brand, color, length) {
        super(brand, color); //SUPER apeleaza constructorul din clasa Parinte
        this.length = length; //adaugam o particularitate pentru clasa Copil
    }
    present() {
        super.present(); //SUPER apeleaza metoda din clasa Parinte
        console.log('test'); //adaugam o particularitate pentru clasa Copil
    }
}
let myDresses = new Dress('Nike', 'red', 'short');
myClothes.present(); //apelam metoda present() atat pentru clasa Parinte cat si pentru clasa Copil
myDresses.present();