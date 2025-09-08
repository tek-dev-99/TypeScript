interface Fruit {
    name: string;
    readonly price: number;
    color? : string;
}
function getFruit(fruit: Fruit){
    return `The fruit name is ${fruit.name} and price is ${fruit.price}`;
}

let mango: Fruit ={name: 'Mango', price: 100}


console.log(getFruit(mango));


class MyFruit implements Fruit {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }   
}