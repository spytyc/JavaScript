class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

var product1 = new Product("Produs1", 100);
var product2 = new Product("Produs2", 120);
var product3 = new Product("Produs3", 190);

class Cart {
    constructor() {
        this.products = []; //totalitatea produselor din cos
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(product) {
        let deleted = false;
        for (let i in this.products) {
            if (this.products[i].name === product.name) {
                this.products.splice(i, 1);
                deleted = true;
                break;
            }
        }
        if (deleted = true) {
            console.log(product.name + "This product was deleted.")
        } else {
            console.log(product.name + "This product has not been found.")
        }
    }
}

let cart = new Cart();
console.log(cart);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);