class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.evade = false;
        this.shield = false;
    }
    attacked(damage) {//cfeate function with parameter damage
        if (this.evade) {//create condition based on evade parameter which is boolean
            let chance = Math.random();// math.random already exists in java - will generate random number
            if (chance > 0.5) {
                console.log(this.name + " evaded.");
                damage = 0;//value of damage when evade = true
            }
        }
        if (this.shield) {
            damage *= 0.8; // damage = damage*08 => 20% damage reduction due to shield boolean = true
            console.log(this.name + " blocked");
        }

        this.hp -= damage; // this.hp = this.hp - damage;

        console.log(this.name + " took " + damage);
    }
}

class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp); //call contructor from main class (you do this in order to override certain atributes)
        this.shield = true; // this will override the same boolean from the main class 
    }
    attack(target) {// name the function differntly than the one in the main class
        let damage = 10;
        console.log(this.name + " took " + damage + " damage.");
        target.attacked(damage);
    }
}

class Assassin extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.evade = true;
    }
    attack(target) {
        let damage = 15;
        console.log(this.name + " took " + damage + " damage.");
        target.attacked(damage);
    }
}

class Dragoon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.evade = true;
        this.shield = true;
    }
    attack(target) {
        let damage = 25;
        console.log(this.name + " took " + damage + " damage.");
        target.attacked(damage);
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }
    performAttack() {
        if (this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }
    changeTurn() {
        this.turn = 1 - this.turn;
    }
    findWinner() {
        if (this.hero1.hp > 0) {
            console.log(this.hero1.name + " has won with " + this.hero1.hp + " HP left.");
        } else if (this.hero2.hp > 0) {
            console.log(this.hero2.name + " has won with " + this.hero2.hp + " HP left.");
        } else {
            console.log("It's a draw!");
        }
    }
    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while (this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}

let dwarf1 = new Dwarf("Grog", 100);
let assassin1 = new Assassin("Shadow", 100);
let dragoon1 = new Dragoon("Kain", 100);

let fight = new Fight(dragoon1, assassin1);
fight.go();