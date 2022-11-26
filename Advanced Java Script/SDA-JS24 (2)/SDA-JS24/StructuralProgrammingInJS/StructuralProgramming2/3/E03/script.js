//Create a function that will calculate factorial of a number: **n!**
//Do it in two ways: using standard loops and using recursion.
function factorialIteration(n) {
    //calculating the result using for loops
    var result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// n! = 1 * 2 * ... * n
// n! = n * (n-1) * (n-2) * ... * 1
// n! = n * (n-1)!
// 3! = 1 * 2 * 3
// 3! = 3 * 2 * 1
// 3! = 3 * 2!
function factorialRecursiv(n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    return n * factorialRecursiv(n - 1);
}

console.log(factorialRecursiv(4));
// factorialRecursiv(4) -> 4 <= 0 - false; 4 == 1 - false -> 4 * factorialRecursiv(4-1) = 4 * factorialRecursiv(3)
// factorialRecursiv(3) -> 3 <= 0 - false; 3 == 1 - false -> 3 * factorialRecursiv(3-1) = 3 * factorialRecursiv(2)
// factorialRecursiv(2) -> 2 <= 0 - false; 2 == 1 - false -> 2 * factorialRecursiv(2-1) = 2 * factorialRecursiv(1)
// factorialRecursiv(1) -> 1 <= 0 - false; 1 == 1 - true -> 1
// resultat = 4 * factorialRecursiv(3) = 4 * 3 * factorialRecursiv(2) =
// = 4 * 3 * 2 * factorialRecursiv(1) = 4 * 3 * 2 * 1 = 24


function factorialRecursivWrong(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursivWrong(n - 1);
}

console.log(factorialRecursivWrong(0));
// factorialRecursivWrong(0) -> 0 == 1 - false -> 0 * factorialRecursivWrong(0-1) -> 0 * factorialRecursivWrong(-1)
// factorialRecursivWrong(-1) -> -1 == 1 -false -> -1 * factorialRecursivWrong(-1-1) -> -1 * factorialRecursivWrong(-2)
// factorialRecursivWrong(-2) ... to infinity (no break condition)