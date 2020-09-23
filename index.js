class Polygon{
    constructor(lengths){
        this.lengths = lengths
    }

    get countSides(){
        return this.lengths.length
    }

    get perimeter(){
        return this.lengths.reduce(function(a,b){
            return a+b
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        return (this.lengths[0] + this.lengths[1] > this.lengths[2] && 
                this.lengths[2] + this.lengths[1] > this.lengths[0] &&
                this.lengths[0] + this.lengths[2] > this.lengths[1])   
    }
}

class Square extends Polygon{
    get area(){
        return this.lengths[0] ** 2
    }

    get isValid(){
        for (let i = 1; i < this.lengths.length - 1; i++){
            if (this.lengths[i] !== this.lengths[i-1] ){
                return false;
            }
            return true}
        }
    }
