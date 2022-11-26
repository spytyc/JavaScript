//*IF Else
var nume = "SDA";
if (nume === "SDA") {
    console.log("HI")
} else {
    console.log("Bye")
}

// && ~ logical AND (folosit pentru a lega conditiile)
// & — bitwise AND (converteste valorile in biti si le comBara prin shifting)
// l| - logical 0R (folosit pentru a lega conditiile)

var email = "mihai@test.ro";
if(email.includes('@') && (email.includes('.com') || email.includes('.ro'))) {
 console.log("Email valid!")

} else {

 console.log("Email invalid!")

}

// FUNCTIONS
function myFunction(a, b) {
    var result = a + b;
    return result;
    }
    var rezultat = myFunction(12, 15);
    console.log("rezultat: " + rezultat)

    if (rezultat<50) {
        console.log("reggltgt mai mic ca si 50: " + rezultat);
        }
        console.log("rezultat: " + myFunction(21,45))
        function myFunctionVoid(a,b) {
        var result = a + b;
        console.log("myFunctionVoid result: " + result);
        }
        myFunctionVoid(43,2);
        var myFunctionVoidResult = myFunctionVoid(1,3); 

        //myFunctionVoidResult decat printeaza rezultatul
        var myFunctionResult = myFunction(1,3);
        console.log("myFunctionVoidResult " + myFunctionVoidResult);
        console.log("myFunctionResult " + myFunctionResult);

        //definire functie logger
        function logger(type, message) {

            if(type == 'error') {
            console.error(message);
            
            } else if(type == 'warning') {
            console.warn(message);
            
            } else {
            console.log(message);
            
            }
        }
        //apelare functie logger
        logger("er'mr", 'mesajEroare');
        logger("warning", 'mesajAtentionare');
        logger("hahahahahah", 'oriceAltceva')

// anonymous function
var variabilaFunctieAnonima = function(a) {
    return a * 5;
}

variabilaFunctieAnonima(5); // => return 25
logger('warning', variabilaFunctieAnonima(10)); // printeaza in consola 50

// IIFE - Immediately Invoked Function Expression (anonymous self-executing functions)
(function(a,b) {
    console.log("a + b: " + (a+b));
})(10,20);

// callback function
var sum = function(a, b) {
    return a + b;
}

var prod = function(e, f) {
    return e * f;
}

// fu22asfaanc este o functie callback care se va apela in momentul in care apelam calculate
function calculate(x1safsa, y, fu22asfaanc) {
    return fu22asfaanc(x1safsa,y);
}

console.log("calculate sum: " + calculate(2,5,sum)); // => 7
console.log("calculate prod: " + calculate(2,5,prod)); // => 10

// arrow function - ES6
var arrowFunctionProd = (e,f) => {
    return e * f;
};
console.log("arrow function prod 6 7: " + arrowFunctionProd(6,7)); // =>42

var arrowFunctionSum = (t,z) => t + z;
console.log("arrow function sum 6 7: " + arrowFunctionSum(6,7)); // =>13


        // create a function that computes the square of a number
function square(a) {
    return a * a;
}
var squareResult = square(2);
console.log("Sqaure result: " + squareResult);

// creat a function that returns the area of a rectangle
var rectangleArea = function (l, L) {
    return l * L;
}
var rectangleResult = rectangleArea(4, 6);
console.log("rectangle result: " + rectangleResult);

// create a function thet convert celsius to fahrenheit
var convertCelsius = (celsius) => {
    var fahrenheit = (celsius * 9) / 5 + 32;
    console.log("fahrenheit :" + fahrenheit);
  };
  convertCelsius(20);

// create a function that converts your age in to dog yaers based on dog size
var humanToDog = (humanYears, dogSize) => {
    var dogYears;
    if (dogSize == 'small') {
        dogYears = (humanYears * 8);
    }
    else if (dogSize == 'medium') {
        dogYears = (humanYears * 10);
    }
    else if (dogSize == 'large') {
        dogYears = (humanYears * 12);
    }
    else {
        dogYears = humanYears
    }
    return dogYears;
}
console.log("humanToDog:" + humanToDog(2.5))

// create a function that converts your age in to dog yaers (made without turning the function in to a variable).
function humantodogyears(humanYears) {
    let dogYears = (humanYears * 7);
    return dogYears;
}

console.log ("My dog years are: " + humantodogyears(31))

function humantodogyears(humanYears, dogSize) {
    if (dogSize == 'small') {
        dogYears = (humanYears * 8);
    }
    else if (dogSize == 'medium') {
        dogYears = (humanYears * 10);
    }
    else if (dogSize == 'large') {
        dogYears = (humanYears * 12);
    }
    else {
        dogYears = (humanYears * 7);
    }
    return dogYears;
}

console.log ("If I would be a samll dog, my age would be: " + humantodogyears(31, 'small'));
console.log ("If I would be a medium sized dog, my age would be: " + humantodogyears(31, 'medium'));
console.log ("If I would be a large dog, my age would be: " + humantodogyears(31, 'large'));
console.log ("My dog years are: " + humantodogyears(31))

// avrage function

var average = (a, b, c) => {
    let result = (a + b + c) / 3;
    return result;
}
console.log ("average is: " + average(1, 5, 8))

// VARIABLES
// Scope
var a = 1;

function x() {
    var b = 2;
    console.log(a); //this works = 1
    console.log(b); //this works = 2
}

x();
console.log(b); //this does not work = Uncaught ReferenceError: b is not defined

var a = 2; // global scope
var b = 5; // global scope
var c = 10; // global scope
console.log(a, b, c); //2, 5, 10

function f() {
    var a = 99; // local scope
    var b = 999; // local scope - local variables override the global ones in the function (variabilele locale le suprascriu pe cele globale doar in functie)
    c = 9999; //no "var" keyword, so we operate on a global c variable
    console.log(a, b, c); //99, 999, 9999
}

f();
console.log(a, b, c); //2, 5, 9999

// CLOSURE
var count = (function () {
    var counter = 0;
    return function () {
        console.log(counter+1);
        return counter += 1;
    }
})();
//calling the closure function
count(); //1
count(); //2
count(); //3

//variable is not accessible outside the closure
console.log(counter); //undefined

// Passing variables
// array and objects are passed by reference (valoarea lor va fi schimbata in apelarea functiei)
// strings and numbers are passed by value (valoarea lor NU va fi schimbata in apelarea functiei, deoarece in interiorul functiei, argumentele iau doar valoarea, nu si referinta)
var obj = { name: "pencil", price: 10};
var x = 15;

function change(product, newPrice){
    //changes the object's property
    product.price = newPrice;

    //changes the variable's value
    newPrice = 0;
}
change(obj, x); //a function call
console.log(obj); //the object has changed
console.log(x); //the variable has NOT changed

var list = [1,2,3]
console.log("typeof list: " + typeof list); // object
var z = "Ceva"
console.log("typeof z: " + typeof z); // string

function schimba(arr, str) {
    arr.push(4);
    console.log(arr); // [1,2,3,4]
    str = 'Altceva';
    console.log(str); // Altceva
}

schimba(list, z);
console.log(list); // [1,2,3,4]
console.log(z); // Ceva

// Types of variables
// var - stores any type and allows for overwriting stored values at any time, has GLOBAL and LOCAL(function) scope
// let - stores any type and allows for overwriting stored values at any time, has BLOCK(inside {...}) scope
// const - stores any type and does not allow for ovewriting stored values, has BLOCK(inside {...}) scope

// LET
var x = 1; // global scope
let y = 2 // block scope => global scope (All variables/constants created inside a file but outside of functions. They have a global scope - that means they are available anywhere in the code.)

//some block of code = {...}
if (1 === 1) {
    var x = 2; // block scope => global scope
    let y = 3; // block scope
    console.log(x); //2
    console.log(y); //3
}

function funcScope() {
    var x = 4; // local scope
    let y = 7; // block scope
    console.log(x); //4
    console.log(y); //7
}
funcScope();

//the same name, a different variable
console.log(x); //2
console.log(y); //2

console.log("'2' == 2 => " + ('2' == 2)); // true
console.log("'2' === 2 => " + ('2' === 2)); // false (=== - compara valoarea dar si tipul variabilelor)

// CONST
// --------------------------------------
const X = 7; // block scope => global scope (All variables/constants created inside a file but outside of functions. They have a global scope - that means they are available anywhere in the code.)
if (X == 7) {
    const Y = 8;
    console.log(X, Y); //7 8
}
// console.log(X,Y); //error: Y is not defined
// --------------------------------------
const Z = 7;
if (Z == 7) {
    const Z = 8;
    console.log(Z); //8
}
//same name, different scope
console.log(Z); //7
// --------------------------------------
const S = 7;
if (S == 7) {
    // S = 8; //error: invalid assignment to a constant
    console.log(S);
}
console.log(S);
// --------------------------------------
// var sdaVar; -> automated by JS
function exampleF() {
    sdaVar = 5; // additional characteristic of the variable var - If we forget the keyword(var) while declaring and defining the variable, it goes to the global scope and becomes a global variable
}
exampleF()
console.log("🚀 ~ file: script.js ~ line 283 ~ exampleF ~ sdaVar", sdaVar)

function testLetAndConst() {
    let x11 = 5;
    const y11 = 15;

    if (x11 === 5) {
        let x11 = 8;
        console.log(x11); // 8
    }

    if (y11 === 15) {
        let y11 = 18;
        console.log(y11); // 18
    }

    console.log(x11); // 5
    console.log(y11); // 15
}
testLetAndConst();
// console.log(x11); // x11 is not defined
// console.log(y11); // y11 is not defined

function hello() {
    if (true) {
        var a = "JS";
        let g = "C++";
        const h = "Java";
        console.log(a); // JS
        console.log(g); // C++
        console.log(h); // Java
    }
    console.log("Outside if");
    console.log(a); // JS
    // console.log(g); // g is not defined
    // console.log(h); // h is not defined
}
hello();

let simpleVar = 'global scope';
function testingVarShadowing() {
    simpleVar = 'local scope';
    console.log(simpleVar); // local scope
}
testingVarShadowing();
console.log(simpleVar); // local scope

let simpleVar2 = 'global scope';
function testingVarShadowing() {
    let simpleVar2 = 'local scope';
    console.log(simpleVar2); // local scope
}
testingVarShadowing();
console.log(simpleVar2); // global scope

// Duplicate declaration of variables, which is possible with var, will throw an error with let and const.
var m1 = 1;
var m1 = 2;
console.log(m1); // 2

// let m2 = 1;
// let m2 = 2; // error => Identifier 'm2' has already been declared

let gr = 'Hello';
function greet() {
    let br = "World";
    console.log(gr+br); // HelloWorld
    if(br === "World") {
        let cr = "!";
        console.log(gr+br+cr); // HelloWorld!
    }
    // console.log(gr+br+cr); // cr is undefined
}
greet();

var aq = 1;
let bq = 2;

function qExample() {
    // console.log(bq); Cannot access 'bq' before initialization
    const cq = 3;
    var aq = 4;
    let bq = 19;
    console.log(aq); // 4
    console.log(bq); // 19
    if(true) {
        bq = 6;
        console.log(bq); // 6
    }
    if(true) {
        let aq = 5;
        console.log(aq); // 5
    }
}
qExample();
console.log(aq); // 1
console.log(bq); // 2
// console.log(cq); // cq is undefined

function z1() {
    var z2 = 1;
    console.log(z2); // 1
}
z1();
// console.log(z2); // z2 is not defined

var myF2 = () => {
    var name = 'Todd';
    var myF3 = () => {
        console.log("From myF3" + name);
    } // doar declaram myF3
    console.log(name);
    myF3();
}

console.log(myF2())
// Todd
// From myF3Todd
// undefined

// Passing Variables RECAP
// by reference - objects, arrays (modifying the value of the passed variable reflects outside function)
// by value - string, number etc.. (modifying the value of the passed variable doesn't reflect outside function, because it is just a copy of it)
let nume = ['adi', 'ion', 'maria'];
let varsta = 25;

function passVariables(lista, numar) {
    lista.push('andreea');
    numar = 40;
    console.log("lista: ", lista);
    console.log("numar: ", numar);
}
passVariables(nume, varsta);
console.log("nume: ", nume);
console.log("varsta: ", varsta);

