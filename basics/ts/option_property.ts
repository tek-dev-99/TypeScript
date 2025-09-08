type Fruits = {
    name: string;
    color: string;
    allSeason: boolean;
    price?: number;
}

let fruit1: Fruits = {
    name: "Mango",
    color: "Yellow",
    allSeason: false,
    price: 50,
};

let fruit2: Fruits = {
    name: "Apple",
    color: "Red",
    allSeason: true,
};


function getFruitInfo( price: number, discount?: number) {
    if (discount) 
        return price + discount; 
}

console.log(getFruitInfo(fruit1.price!));
console.log(getFruitInfo(fruit2.price!));