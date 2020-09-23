class Polygon {
    constructor (array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let total = 0
        for(let side of this.array){
            total += parseInt(side)
        }
        return total
    }
}

class Triangle extends Polygon {

    get isValid() {
        let sides = this.array
        let side1 = sides[0]
        let side2 = sides[1]
        let side3 = sides[2]

        if(side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2){
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]    
        if(side1 === side2 && side3 === side4 && side1 === side3){
            return true
        }else { return false }
        
    }

    get area() {
        return this.array[0] * this.array[0]
    }
}