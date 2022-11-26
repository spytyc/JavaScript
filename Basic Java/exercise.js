//sort an array
var array=[6, 9, 3, 1]

function sortArray(array){ //cand deschizi functia creezi o var numita array folosita numai in functie
    //primul for wa trece prin toate elem mai putin ultimul - array[i]
    for (let i = 0; i < array.length - 1; i++) {
        // al doile for was trece prin acelasi array pana la ultimul element - array[j]
        for(let j = i+1; j < array.length; j++){
            //compare i with j
               if(array[i] > array[j]){
                //create the aux as a temp avariable in the function
                let aux = array[i]
                //verify if i and j are the same
                array[i] = array[j]
                //match j with the aux variable
                array[j] = aux
               }
        }
    }
    //use return in functions
    return array
}
//create a avriable that represents the sorted array that equals the result from running array sort
let sortedArray = sortArray(array)
//finally ask the program to return the output in console
console.log(sortedArray)