// Closures RECAP
function outerFunction(outerVariable) {
    const outer = "HI!";
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
        console.log("outer: " + outer);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// console.log("outer: " + outer); // outer is not defined

// Passing Variables RECAP
// by reference - objects, arrays 
// (modifying the value of the passed variable reflects outside function)
// by value - string, number etc.. 
// (modifying the value of the passed variable doesn't reflect outside function, 
// because it is just a copy of it)
let nume = ['adi', 'ion', 'maria'];
let varsta = 25;
console.log("typeof nume: ", typeof nume); // object
console.log("typeof varsta: ", typeof varsta); // number

function passVariables(lista, numar) {
    lista.push('andreea');
    numar = 40;
    console.log("lista: ", lista);
    console.log("numar: ", numar);
}
passVariables(nume, varsta);
console.log("nume: ", nume);
console.log("varsta: ", varsta);

// workaround for passing number by reference
let nr = { nrProp: 2 };
console.log("typeof nr: ", typeof nr); // object

function passNrRef(number) {
    number.nrProp = 10;
    console.log("number.nrProp: ", number.nrProp);
}
passNrRef(nr);
console.log("nr.nrProp: ", nr.nrProp);

// HOISTING - declarations of variables and functions is hoisted, initialization is NOT
work();

// initializarea variabilei
works = "WorksVar";
console.log(works);

// declararea functiei
function work() {
    console.log("Works!!!");
}

// declararea variabilei
var works;

// declararea si initializarea variabilei
var works2 = 'Works2';

// Hoisting variables!
// var variablds allow hoisting
// let and const variables don't allow hoisting
num1 = 6;
console.log(num1); // outputs: 6
var num1;

console.log(num2); // outputs: undefined; 
//declaration is hoisted, initialization is not

var num2;
num2 = 6;

// num3 = 6; // cannot access 'num3' before initialization
// console.log(num3); // outputs: error - does not work for let
// let num3;

// Hoisting functions!
// JS doesn't allow hoisting for anonymous functions
// x(); //error - JS does not hoist ANONYMOUS functions

// var x = function(){
//     console.log("worksAnonymous");
// }

// RECURSIVITATE
// when a function calls itself
// conditions: 1. function must be named 2. function calls itself in body
// !!!the function must have some boundary conditions according to which it will stop calling itself. Otherwise, the program will stop running due to insufficient memory.

function a(x){
    console.log(x);
    //a condition to prevent an endless loop
    if(x > 0){
        a(x - 1); //the function calls itself
    }
}

a(5);
// a(5) -> console.log(5); -> 5 > 0 = true -> a(5-1) = apelam a(4)
// a(4) -> console.log(4); -> 4 > 0 = true -> a(4-1) = apelam a(3)
// a(3) -> console.log(3); -> 3 > 0 = true -> a(3-1) = apelam a(2)
// a(2) -> console.log(2); -> 2 > 0 = true -> a(2-1) = apelam a(1)
// a(1) -> console.log(1); -> 1 > 0 = true -> a(1-1) = apelam a(0)
// a(0) -> console.log(0); -> 0 > 0 = false

// OBJECTS
// an obj is a collection of arbitrary properties:
// - prop can store non-functional values (object, array, number, undefined) => fields
// - prop can be functions => methods
// - prop can be added and removed dynamically over the lifetime of the obj

// const - There are no access restrictions to the objects from outside.
const person = {
    firstName: 'John', // a field
    lastName: 'Doe', // a field
    hello: function() { // a method
        console.log("Hello from person!")
    },
}

console.log("typeof person ", typeof person); // 'object'
console.log("person.lastName ", person.lastName); // a field call - first way
console.log("person.firstName ", person['firstName']); // a field call - second way
person.hello(); // a method call

person.firstName = 'Ion'; // dynamic field value change
console.log("person.firstName ", person.firstName);

person.age = 34; // dynamic new field addition
delete person.firstName; // field removal
console.log("person", person);

// Object.freeze(obj) - makes object unchangeable https://stackoverflow.com/questions/44604212/when-to-use-const-with-objects-in-javascript

// why use object[property]?
// array = ['firstName', 'lastName', 'age']
// array.length = 3
// array[0] => firstName
// array[2] => age
const personProperties = Object.keys(person); // Object.keys(person) - returns an array of a given object's own enumerable property names

for(var i = 0; i < personProperties.length; i++) {
    const prop = personProperties[i]; // firstName, lastName ...
    console.log("person[prop]: ", person[prop]); // person['firstName'] ...
}

console.log("person[specificIndexProperty]: ", person[personProperties[1]]);

// array masini
const cars = [
    {
        make: 'ford',
        color: 'red'
    },
    {
        make: 'mercedes',
        color: 'blue'
    },
    {
        make: 'skoda',
        color: 'red'
    }
];

const redCars = [];
for(var i = 0; i < cars.length; i++) {
    const car = cars[i];
    if(car.color === 'red') {
        redCars.push(car);
    }
}
console.log("redCars", redCars);

const footballPlayer = {
    name: 'Messi',
    age: 20,
    clubs: [
        {
            clubName: 'Barcelona',
            dateJoined: 2002
        },
        {
            clubName: 'PSG',
            dateJoined: 2020
        },
    ],
    matches: [
        {
            league: 'primera',
            date: '22/10/2012',
            scored: true
        },
        {
            league: 'league1',
            date: '22/10/2022',
            scored: false
        },
        {
            league: 'div1',
            date: '2/10/2012',
            scored: false
        }
    ]
}
// 'Messi' => footballPlayer.name
// true => footballPlayer.matches[0].scored
// div1 => footballPlayer.matches[2].league
// 2002 => footballPlayer.clubs[0].dateJoined

// all clubnames as array:
// var clubs = footballPlayer.clubs;
// var clubNames = [];
// for(var i = 0; i < clubs.length; i++) {
//     clubNames.push(clubs[i].clubName);
// }

// Constructor function
// Functions can also be used to create objects:
// - they are called through operator 'new'
// - they enable for programmatic init of the object
// - they return a newly created object
// - they have access to this, which points to the current object
// - they provide uniform structure
function car(brand, model, year, mileage){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.launch = function(){
        console.log("works");
    }
}

var auto1 = new car("fiat","500",2018,10000);
var auto2 = new car("opel","corsa",2010,100000);
console.log("auto1 ", auto1);
auto2.brand = auto1.model;
console.log("auto2 ", auto2);
auto2.launch();
