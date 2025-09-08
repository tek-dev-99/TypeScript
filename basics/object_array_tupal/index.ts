// Object  type

type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
};

let user: Person = {
    name: "Tek",
    age: 22,
    isEmployed: true
};

let user2: Person = {
    name: "Singh",
    age: 23,    
    isEmployed: false
};
console.log(typeof user.name);

//Array  and Tuple type

let fruits: string[] = ["Apple", "Banana", "Orange"];

let numbers: number[] = [1, 2, 3, 4, 5];

let colors: [string, number, number] = ["Red", 255, 0];

fruits.push("Mango");
numbers.push(6);
colors.push("Green");
console.log(fruits);
console.log(numbers);
console.log(colors);