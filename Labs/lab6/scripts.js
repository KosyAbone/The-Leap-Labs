let shoppingCart = {
    items: [],
    addItem(item) {   //ES6 Refactoring
        this.items.push(item); 
    }
}

function Item(name, price) {
    this.name = name;
    this.price = price;
}   

let item1 = new Item('Shirt', 20);
let item2 = new Item('Pants', 30);
let item3 = new Item('Shoes', 50);
let item4 = new Item('Hat', 10);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem(item3);
shoppingCart.addItem(item4);

console.log(shoppingCart.items);

shoppingCart.removeItem = index => { //ES6 Refactoring
    shoppingCart.items = shoppingCart.items.filter((item, i) => i !== index); //ES6 Refactoring
    // this.items.splice(index, 1);
}

shoppingCart.calculateTotal = () => { //ES6 Refactoring
    return shoppingCart.items.reduce((acc, item) => acc + item.price, 0); //ES6 Refactoring
    /**
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
    }
    return total;**/
}

shoppingCart.applyDiscountCode = code => { //ES6 Refactoring
    switch(code) {
        case 'SAVE10':
            return shoppingCart.calculateTotal() * 0.9; //10% discount
        case 'SAVE20':
            return shoppingCart.calculateTotal() * 0.8; //20% discount
        default:
            return shoppingCart.calculateTotal();
    }
}

shoppingCart.getCurrentItems = () => { //ES6 Refactoring
    return shoppingCart.items.map(item => item.name);
}

console.log(shoppingCart.getCurrentItems());

shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems());

console.log(shoppingCart.calculateTotal());

console.log(shoppingCart.applyDiscountCode('SAVE10'));