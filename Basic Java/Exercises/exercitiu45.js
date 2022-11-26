//45. Write a JavaScript program to check two given
//integer values and return true if one of the number is 15 or if their sum or difference is 15.
function suma(x,y){
    return parseInt(x)+parseInt(y);
} // alte metoda de a scrie codu , creezi o functie separata pt sume.
function Calculeaza() {
    let numar1 = document.getElementById('1').value;
    let numar2 = document.getElementById('2').value;
    let sum = suma(numar1,numar2);
    let diff = parseInt(numar1) - parseInt(numar2); // sau o declari ca variabile direct intro singura functie
    if(numar1 == 15 || numar2 == 15 || sum == 15 || diff == 15) {
        document.getElementById('result').innerHTML = true;
    } else {
        document.getElementById('result').innerHTML = false;
    }
}