class Coordinate{
   protected x: number;
   protected y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public get X(){
        return this.x;
    }
}

class MyCoordinate  extends Coordinate{
    public get X(){
        return this.x;
    }

    public set X(value: number){ 
        this.x = value;
    }
}


const point =  new MyCoordinate(4,5)
point.X = 44
console.log(point.X)
