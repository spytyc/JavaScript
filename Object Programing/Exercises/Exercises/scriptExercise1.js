/*OBIECTE
PRIMITIVE
1. NUMBER => let age = 23;
2. STRING => let name = 'Andreea';
3. BOOLEAN => True / False
4. UNDEFINED => let age;
5. NULL
6. SYMBOL
7. BIGINT
THIS
const user = {
    userName: 'Jonas',
    age: 30,
    userDetails() {
        console.log(this);
        return this.userName + ' has ' + this.age + '.';
    }
};
OOP
{
    name: 'Sandra',
    getAge() {}
}
Obiectele contin PROPRIETATI SI METODE.
API - Application Programming Interface
clase:
class ClassName { => template-uri / schite
    constructor(name, address, ..., paramX) {
        this.name = name; => PROPRIETATI
        this.address = address;
    }
    methodName() { => METODE
    }
}
let objName = new ClassName('B1', 'Str. X');
objName.name; //B1
let objName2 = new ClassName('B2', 'Str. X');
let objName3 = new ClassName('B3', 'Str. X');
let objName4 = new ClassName('B4', 'Str. X');
class Movie { => CLASA
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isRunning = false;
        this.director = 'Sam';
    }
    getInfo() {
        console.log(this.title + this.year);
    }
}
let movie = new Movie('Scary Movie', 2003); => OBIECTUL
console.log(movie);
CLASELE
INSTANTELE: let newObj = new Class()
PROPRIETATILE: nume, adresa, culoare..
METODELE: functii
EVENIMENTELE: click */

class Book {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.isReserved = false; //'isReser‘ nu se tninite ca si parametru pentru ca ne dorin ca toate obiectele instantiate din aceasta clasa sa aiba proprietatea isReserved setata ca si false la inceput
    }
}

/*
class ClassName {
   constructor(prop1, prop2) {
     this.prop1 = pro1;
     this.prop2 = prop2;
}

     method1() {

   }
}
*/

let book1 = new Book("Book1", "Author1", 2077, 102);
let book2 = new Book("Book2", "Author2", 2107, 142);
let book3 = new Book("Book3", "Author3", 2370, 195);
let book4 = new Book("Book4", "Author4", 2050, 178);
let book5 = new Book("Book5", "Author5", 2339, 112);

console.log(book1, book2, book3, book4, book5);

class Library {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.shelves = []; // this array will be used to store the books
    }
    addBook(book) { //by calling this function you will add more books to the previously added array named shelves.
        this.shelves.push(book);
    }
    searchBook(title) {
        for (let book of this.shelves) {//temp variable book will store the object from the shelves array that that will have all of the stored Book objects (all 5 of them)
            if (book.title === title) { // check if the title typed in matches exactly the tile attribute in the object
                console.log("The book " + title + " was found.")
                return book; // the function will return the variable book that include the searched title name
            }
        }
        console.log('The book ' + title + ' was not found');
        return false;
    }
    reserveBook(title) {
        let foundBook = this.searchBook(title);
        if (foundBook) {
            if (foundBook.isReserved) {
                console.log("The book " + title + " is allready reserved.")
            } else {
                console.log("The book " + title + " is free, I want to reserve it.")
                foundBook.isReserved = true;
            }
        }
    }
    unreservedBook(title) {
        let foundBook = this.searchBook(title);
        if (foundBook.isReserved === false) {
            console.log("The book " + title + " is free to reserve.")
        } else {
            console.log("The book " + title + " is not free to reserve.");
            foundBook.isReserved = true;
        }
    }
}

let library = new Library("book6", "Somewhere");
console.log(library);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.searchBook("Book3");
library.reserveBook("Book5");
library.reserveBook("Book5");
library.unreservedBook("Book5");
console.log(library.shelves.length);


