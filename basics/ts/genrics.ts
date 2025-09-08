// let arrNum = [1, 2, 3, 4, 5];

// function getRandomNumber(arr:number[]) {
//     const index =  Math.floor(Math.random() * arr.length);
//    return arr[index];
// }   

// console.log(getRandomNumber(arrNum));

// let arrStr = ['a', 'b', 'c', 'd', 'e'];

// function getRandomString(arr:string[]) {
//     const index =  Math.floor(Math.random() * arr.length);
//    return arr[index];
// }
// console.log(getRandomString(arrStr));


// function getRandomElement<T>(arr: T[]): T | undefined{
//     if(arr.length === 0) return undefined;
//     const index =  Math.floor(Math.random() * arr.length);
//    return arr[index];

// }

// let result:string | undefined;
// result = getRandomElement(arrStr);
// console.log(typeof result);
// result = getRandomElement(arrNum); 
// console.log(typeof result);
// console.log(getRandomElement(arrNum));
// console.log(getRandomElement(arrStr));



// Genrics constraints

type Person = {
    fname: string;
}

function getPerson <T extends Person>(data: T){
    return data;
}

function getElement<O extends Object, K extends keyof O>(obj:O, key:K){
    return  obj[key]
}


const details = {fname:"Tek",lname: "chand"};
// console.log(getPerson(details))
console.log(getElement(details, 'fname'))