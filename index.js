class Polygon {
    constructor(intArray) {
        this.sides = intArray;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a,b) => a + b, 0)
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides !== 3) {
            return false
        } else {
            let sideOne = this.sides[0];
            let sideTwo = this.sides[1];
            let sideThree = this.sides[2];

            return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && sideTwo + sideThree > sideOne)
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides !== 4) {
            return false
        } else {
            return (!this.sides.find(side => side !== this.sides[0]))
        }
    }

    get area() {
        return this.sides[0]**2
    }
    

}   