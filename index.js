class Polygon {
    constructor (arrayOfInt){
        this.sides = arrayOfInt
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce( (sum, num ) => {
            return sum + num
        })
    }

}