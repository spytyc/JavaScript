// Create 3 anonymous functions, each of them only writing a message in the console
// ("more than zero" / "equal to zero" / "less than zero").
function more() {
    console.log("more than 0")
}

function equal() {
    console.log("equal than 0")
}

function less() {
    console.log("less than 0")
}
// Write a program, calling one of those 3 functions, when a condition is met
// (value of some variable is more than zero / equal to zero / less than zero).
function compareto0(numar) {
    if (numar>0) {
        more();
    } else if (numar==0 ) {
        equal();
    } else if (numar<0) {
        less();
    }
}

compareto0(100);
compareto0(-50);
compareto0(0);

// Cream 3 functll care 5:: (alculcze aria:

// '1. triunghi :> (a‘b/z)

// 2. dr‘eptunghi (a‘b)

// 3. trapez -> (a+h)*c/2

// e functie cu callback llama Calucaltion) (are calculeaza aria diverselor fume geometrice
// Aceasta functie primeste ca 51 paran: o functie, Iaturile formei geometrice

var ariaTriunghi = (a, b) => {
    return (a * b / 2)
}
var ariaDreptunghi = (a, b) => {
    return (a * b)
}
var ariaTrapez = (a, b, c) => {
    return (a + b) * c / 2
}
var areaCalculation = (areaFunction, a, b, c) => {
    var rezultat = areaFunction(a, b, c);
    console.log(rezultat);
}
areaCalculation(ariaTriunghi, 12, 10)
areaCalculation(ariaDreptunghi, 15, 9)
areaCalculation(ariaTrapez, 11, 8, 7)

//create a function that calculates factorial of a number: **n!*
// Do it in 2 ways: using standard loops and using recursion

var functionLoop = (n) => {
    var result = 1 ;
    var i;
    for (i = 1; i <= n; i++) {
        result = result*i;
    }
    return result;
}

console.log (functionLoop(10))

// just math : n! = n*(n-1)*(n-2)*...*1

//Create a function that will calculate factorial of a number: **n!**
//Do it in two ways: using standard loops and using recursion.
// n! = 1 * 2 * ... * n
// n! = n * (n-1) * (n-2) * ... * 1
// n! = n * (n-1)!
// 3! = 1 * 2 * 3
// 3! = 3 * 2 * 1
// 3! = 3 * 2!
function factorialRecursiv(n) {
    if(n <= 0) {
        return 0;
    } else if(n == 1) {
        return 1;
    }
    return n * factorialRecursiv(n-1);
}
console.log(factorialRecursiv(4));
// factorialRecursiv(4) -> 4 <= 0 - false; 4 == 1 - false -> 4 * factorialRecursiv(4-1) = 4 * factorialRecursiv(3)
// factorialRecursiv(3) -> 3 <= 0 - false; 3 == 1 - false -> 3 * factorialRecursiv(3-1) = 3 * factorialRecursiv(2)
// factorialRecursiv(2) -> 2 <= 0 - false; 2 == 1 - false -> 2 * factorialRecursiv(2-1) = 2 * factorialRecursiv(1)
// factorialRecursiv(1) -> 1 <= 0 - false; 1 == 1 - true -> 1
// resultat = 4 * factorialRecursiv(3) = 4 * 3 * factorialRecursiv(2) =
// = 4 * 3 * 2 * factorialRecursiv(1) = 4 * 3 * 2 * 1 = 24
//function factorialRecursivWrong(n) {
   // if(n == 1) {
   //     return 1;
   // }
   // return n * factorialRecursivWrong(n-1);
//}
//console.log(factorialRecursivWrong(0));
// factorialRecursivWrong(0) -> 0 == 1 - false -> 0 * factorialRecursivWrong(0-1) -> 0 * factorialRecursivWrong(-1)
// factorialRecursivWrong(-1) -> -1 == 1 -false -> -1 * factorialRecursivWrong(-1-1) -> -1 * factorialRecursivWrong(-2)
// factorialRecursivWrong(-2) ... to infinity (no break condition)

//Fibonacci sequence
// 0,1,1,2,3,5,8,13,21,34,55,...
// f(0) = 0; f(1) = 1; f(i) = f(i-1) + f(i-2) pentru i>=2;
// f(n) = f(n-1) + f(n-2)

// f(5) = f(4) + f(3) = 3 + 2 = 5
// f(4) = f(3) + f(2) = 2 + 1 = 3
// f(3) = f(2) + f(1) = 1 + 1 = 2
// f(2) = f(1) + f(0) = 1 + 0 = 1
// f(1) = 1
// f(0) = 0

//iteration (HOMEWORK)

//recursion
function fibonacciRecursiv(n) {
    if(n <= 0) {
        return 0;
    } else if(n == 1 || n == 2) {
        return 1;
    }
    return fibonacciRecursiv(n-1) + fibonacciRecursiv(n-2);
}
console.log("fibonacciRecursiv(10): " + fibonacciRecursiv(10))
console.log("fibonacciRecursiv(5): " + fibonacciRecursiv(5))
// fibonacciRecursiv(5) -> 5 <= 0 - fals; 5 == 1 || 5 == 2 - fals -> fibonacciRecursiv(5-1) + fibonacciRecursiv(5-2) = fibonacciRecursiv(4) + fibonacciRecursiv(3) = 3 + 2 = 5
// fibonacciRecursiv(4) -> 4 <= 0 - fals; 4 == 1 || 4 == 2 - fals -> fibonacciRecursiv(4-1) + fibonacciRecursiv(4-2) = fibonacciRecursiv(3) + fibonacciRecursiv(2) = 2 + 1 = 3
// fibonacciRecursiv(3) -> 3 <= 0 - fals; 3 == 1 || 3 == 2 - fals -> fibonacciRecursiv(3-1) + fibonacciRecursiv(3-2) = fibonacciRecursiv(2) + fibonacciRecursiv(1) = 1 + 1 = 2
// fibonacciRecursiv(2) -> 2 <= 0 - fals; 2 == 1 || 2 == 2 - adev -> 1
// fibonacciRecursiv(1) -> 1 <= 0 - fals; 1 == 1 || 1 == 2 - adev -> 1

// fibonacciRecursiv(4) = return fibonacciRecursiv(3) + fibonacciRecursiv(2)
// return fibonacciRecursiv(2) + fibonacciRecursiv(1) + 1
// return 1 + 1 + 1
// return 3