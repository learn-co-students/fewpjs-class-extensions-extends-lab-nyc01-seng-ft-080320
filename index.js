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
      if (!Array.isArray(this.arrOfIntegers)){
        return;
      } 
      if (this.length !== 3) {
          return;
        }

      let side1 = this.arrOfIntegers[0]
      let side2 = this.arrOfIntegers[1]
      let side3 = this.arrOfIntegers[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
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

