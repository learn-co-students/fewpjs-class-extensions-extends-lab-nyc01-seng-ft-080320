// Your code here

class Polygon {
  constructor(array) {
    this.array = array;
  }
  
  get countSides() {
    return this.array.length
  }
  
  get perimeter() {
    let sum = this.array.reduce(function(a, b) { return a + b }, 0);
    return sum
  }
}

class Triangle extends Polygon {
  
  get isValid() {
    let one = this.array[0]
    let two = this.array[1]
    let three = this.array[2]
    
    if (( one + two > three ) && ( one + three > two ) && ( two + three > one )) {
      return true
    } else {
      return false
    }
  }
}


class Square extends Polygon {
  get isValid() {
    let one = this.array[0]
    let two = this.array[1]
    let three = this.array[2]
    let four = this.array[3]
    
    if (( one === two ) && ( three === four ) && ( one === three )) {
      return true
    } else {
      return false
    }
  }
  
  get area() {
    let num = this.array[0]
    return (Math.pow(num, 2))
  }
}
