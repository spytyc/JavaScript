// 15. Write a JavaScript program to get the difference between a given number and 13,
// if the number(numarul input) is greater than 13 return double the difference
function diferenta() {
    let numar = document.getElementById('numarul').value;
    if(numar > 13) {
        document.getElementById('result-value').innerHTML = (numar - 13)*2;
    }
    else {
        document.getElementById('result-value').innerHTML = numar - 13;
    }
}