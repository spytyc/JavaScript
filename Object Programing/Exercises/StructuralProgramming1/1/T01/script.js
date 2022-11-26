// Creaza 3 functii care sa calculeze aria: 
// 1. triunghi => a*b/2
// 2. dreptunghi => a*b
// 3. trapez => (a+b)*c/2
var ariaTriunghi = (a, b) => {
    return (a * b / 2)
}
var ariaDreptunghi = (a, b) => {
    return (a * b)
}
var ariaTrapez = (a, b, c) => {
    return (a + b) * c / 2
}

// O functie cu callback (areaCalculation) care calculeaza aria diverselor forme geometrice.
// Aceasta functie primeste ca si param: o functie, laturile formei geometrice
var areaCalculation = (areaFunction, a, b, c) => {
    var rezultat = areaFunction(a, b, c);
    console.log(rezultat);
}

areaCalculation(ariaTriunghi, 12, 10)
areaCalculation(ariaDreptunghi, 15, 9)
areaCalculation(ariaTrapez, 11, 8, 7)