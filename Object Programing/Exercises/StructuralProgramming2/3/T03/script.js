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

//iteration (HOMEWORK!!!)

//recursion
// || - logical OR (sau)
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