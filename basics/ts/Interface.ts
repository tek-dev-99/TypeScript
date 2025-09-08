type Fruits = {
    name: string;
    color: string;
    allSeason: boolean;
};

type Mango = Fruits & {
    price: number;
}


let fruit1: Mango = {
    name: "Mango",
    color: "Yellow",
    allSeason: false,
    price: 100
};  


let fruit2: Fruits = {
    name: "Apple",
    color: "Red",
    allSeason: true
};