/*
Se da un array cu N elemente. Array e format doar din numere.
Problema: Sa se ordoneaza array in ordine crescatoare

*/

/*
1. Creez functie
2. Dau nume functiei
3. Definesc parametrii functiei
4. Parcurg array-ul 1 data
5. Mai creez un for in interiorul primului for -> am 2 elemente din array pentru comparatie
*/


// Creem array-ul pentru sortat definit cu elementele
const arrayNesortat = [2, 33, 4, 1, 2];


arrayNesortat.sort()

// Facem header-ul functiei -> definim functia -> ii dam nume, ii stabilim parametrii de intrare
function sortArray (x /* Paramentru de intrate -> input */) {
    // sortArray(arrayNesortat) => x = arrayNesortat

    // Definim for pentru parcurgere array primul element -> array[i]
    for(let i = 0; i < x.length - 1; i++){

        // Definim for pentru parcurgere array al doilea element -> array[j]
        for(let j = i+1; j < x.length; j++) {

            // Comparam elementele array[i] si array[j] care reprezinta elemtul din prima iteratie cu elementul din a doua iteratie -> Daca elementul din prima iteratie e mai mare
            //decat elementul din a doua iteratie, se executa blockul de cod din IF
            if(x[i] > x[j]) {

                // Creem o variabila auxiliara pentru a ne stoca array[i] -> Ca sa il retinem in momentul in care il suprascriem cu array[j]
                let aux = x[i]

                // Suprascriem array[i] cu array[j]
                x[i] = x[j]

                // In array[j] ne stocam auxiliaru -> array[i]
                x[j] = aux



            }
            // Aici se sfarseste blockul de cod de la if



        }
        // Aici se sfarseste for-ul pentru parcurgerea array al doilea element -> array[j]

    }
    // Aici se sfarseste for-ul pentru parcurgerea array primul element -> array[i]


    // Ne returnam array-ul sortat
    return x
}
// Aici e sfarsitul functiei de sortare




// Folosim functia sortArray, functia de sortare pe care am creato, si stocam rezultatul in sortedArray
let sortedArray = sortArray(arrayNesortat /* array = arrayNesortat */);


// Ne afisam array-ul sortat
console.log(sortedArray);