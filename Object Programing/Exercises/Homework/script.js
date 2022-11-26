class House {
    constructor(houseName, houseAddress, yearofconstruction) {
        this.houseName = houseName;
        this.houseAddress = houseAddress;
        this.yearofconstruction = yearofconstruction;
        this.reservedForBuying = false;
    }
}

let house1 = new House("Casa1", "Adresa1", 1990);
let house2 = new House("Casa2", "Adresa2", 1991);


console.log(house1, house2);

class Neighbourhood {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.houses = [];
    }
    buildHouse(house) {
        this.houses.push(house);
    }
    searchHouse(houseName) {
        for (let house of this.houses) {
            if (house.houseName === houseName) {
                console.log("The house " + houseName + " was found.")
                return house;
            }
        }
        console.log('The house ' + houseName + ' was not found');
        return false;
    }
    reserveForBuying(houseName) {
        let foundHouse = this.searchHouse(houseName);
        if (foundHouse) {
            if (foundHouse.reservedForBuying) {
                console.log("The house " + houseName + " is allready reserved for purchase.")
            } else {
                console.log("The house " + houseName + " can be reserved for purchase.")
                foundHouse.reservedForBuying = true;
            }
        }
    }
    destroyhouse(house) {
        let distroyed = false;
        for (let i in this.houses) {
            if (this.houses[i].house === house) {
                this.houses.splice(i, 1);
                distroyed = true;
                break;
            }
        }
        if (distroyed = true) {
            console.log(house.houseName + " was destroyed.")
        } else {
            console.log(house.houseName + " was not destroyed.")
        }

    }
}

let neighbourhood = new Neighbourhood("Cartier1", "Undeva");
neighbourhood.buildHouse(house1);
neighbourhood.buildHouse(house2);
console.log(neighbourhood);
neighbourhood.searchHouse("Casa1");
neighbourhood.reserveForBuying("Casa1");
neighbourhood.destroyhouse(house1);




// 4. Cartierul trebuie sa aiba urmatoarele metode:

// * destroyHouse(house)

/*destroyhouse(house) {
    let distroyed = false;
    for (let i in this.houses) {
        if (this.houses[i].name === product.name) {
            this.houses.splice(i, 1);
            distroyed = true;
            break;
        }
    }
    if (distroyed) {
        console.log(house.name + "This house was destroyed.")
    } else {
        console.log(house.name + "This house was not destroyed.")
    }
}*/
//Puteti adapta si va puteti juca cu clasele si cu obiectele pronind de la exemplul asta de mai sus.