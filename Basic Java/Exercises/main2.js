console.log (document);

function inmulteste() {
    let numarul1 = document.getElementById('numarul-1').value;
    let numarul2 = document.getElementById('numarul-2').value;
    let result = numarul1*numarul2;
    
    document.getElementById('result-value').innerHTML = result;
}
function imparte() {
    let numarul1 = document.getElementById('numarul-1').value;
    let numarul2 = document.getElementById('numarul-2').value;
    let result = numarul1 / numarul2;
    document.getElementById('result-value').innerHTML = result;
}