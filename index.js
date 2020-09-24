// Your code here
class Polygon {
    constructor(arrOfIntegers){
        this.arrOfIntegers = arrOfIntegers;
    }

    get countSides(){
        return this.arrOfIntegers.length
    }
    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.arrOfIntegers.reduce(reducer)
    }
    
}

class Triangle extends Polygon {

    get isValid() {
        if(this.arrOfIntegers.count !== 3){
            return false
        }
        if (this.arrOfIntegers[0] + this.arrOfIntegers[1] <= this.arrOfIntegers[2] || this.arrOfIntegers[1] + this.arrOfIntegers[2] <= this.arrOfIntegers[0] || this.arrOfIntegers[0] + this.arrOfIntegers[2] <= this.arrOfIntegers[1]) {
          return false;
        } else {
          return true;
        }
      }
  }

  class Square extends Polygon {
    get area(){
        if(this.arrOfIntegers.length !== 4){
            return
        } else {
            let side = this.arrOfIntegers[0];
            return side * side
        }
    }

    get isValid(){
        if(this.arrOfIntegers.length !== 4){
            return;
        }
       return (this.arrOfIntegers[0] === this.arrOfIntegers[1]) && (this.arrOfIntegers[0] === this.arrOfIntegers[2]) && (this.arrOfIntegers[0] === this.arrOfIntegers[3]) 
       
    }

  }

