class Computer {
    constructor(name, RAM, CPU, HD_type, screen) {
        this.name = name;
        this.RAM = RAM;
        this.CPU = CPU;
        this.HD_type = HD_type;
        this.screen = screen;
    }
}

class Compare {
    compare(computer1, computer2) {
        var msg1 = "";
        if (computer1.CPU > computer2.CPU) {
            msg1 = computer1.name + "computer";
        } else if (computer2.CPU > computer1.CPU) {
            msg1 = computer2.name + "computer";
        } else {
            msg1 = "none";
        }
        console.log(msg1 + ' has better cpu');

        var msg2 = "";
        if (computer1.RAM > computer2.RAM) {
            msg2 = computer1.name + "computer";
        } else if (computer2.RAM > computer1.RAM) {
            msg2 = computer2.name + "computer";
        } else {
            msg2 = "none";
        }
        console.log(msg2 + ' has better RAM');
    }
}

//creati 2 sau mai multe obiecte Calculator
//let computer 1, let comp2

//creati un obiect nou instantiand clasa Comparer
//o variabila (let result = ...) care sa apeleze metoda compare din clasa Comparer

let computer1 = new Computer("PC1", 16, 8812.85, "SSD", "LED");
let computer2 = new Computer("PC2", 8, 8722.78, "SSD", "LED");
let computer3 = new Computer("PC3", 12, 8716, "SSD", "LED");

console.log(computer1, computer2, computer3);

let comparer = new Compare();
let result = comparer.compare(computer1, computer2);
let result2 = comparer.compare(computer1, computer3);
let result3 = comparer.compare(computer3, computer2);