class Fruit{
   readonly price: number;
   protected static count: number = 0;


    constructor(price: number){
        this.price = price;
        Fruit.count++;
    }


    // setPrice(value: number){
    //     this.price = value;
    // }

    static getCount(){
        return Fruit.count;
    }
}

const mango = new Fruit(100);
// mango.setPrice(30)

console.log(Fruit.getCount());

const apple = new Fruit(50);
console.log(Fruit.getCount());