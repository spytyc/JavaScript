//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50 else return sum.
//"==" - compara valoarea , "===" - compara valoarea si tipul variabilelor.
function sum() {
    let numar1 = document.getElementById('numarul-1').value;
    let numar2 = document.getElementById('numarul-2').value;
    let sum = parseInt(numar1) + parseInt(numar2)
    if (numar1 == 50 || numar2 == 50 || sum == 50)
        document.getElementById('result-value').innerHTML = true;
    else {
      document.getElementById('result-value').innerHTML = sum;
    }
    }