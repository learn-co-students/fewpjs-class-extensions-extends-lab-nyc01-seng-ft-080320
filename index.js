// Your code here
class Polygon {
  constructor(intArr){
    this.intArr = intArr
  }
  get countSides(){
    return this.intArr.length
  }
  get perimeter(){
    let finalNum = 0
    for (const num of this.intArr) {
      finalNum += num
    }
    return finalNum
  }
}

class Triangle extends Polygon {
  get isValid(){
    const sideA = this.intArr[0]
    const sideB = this.intArr[1]
    const sideC = this.intArr[2]
    if(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA){
      return true
    }else{
      return false
    }
  }
}

class Square extends Polygon {
  get isValid(){
    const sideA = this.intArr[0]
    const sideB = this.intArr[1]
    const sideC = this.intArr[2]
    const sideD = this.intArr[3]
    if(sideA == sideB && sideB == sideC && sideC == sideD){
      return true
    }else{
      return false
    }
  }
  get area(){
    return this.intArr[0] * this.intArr[1]
  }
}