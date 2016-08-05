
class point {
     constructor(x,y){
         this.x = x;
         this.y = y;
     }
     tostring(){
         return '(' + this.x + ',' + this.y + ')';
     }
}

class colorPoint extends point {
    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }
    tostring(){
        return this.color +''+super.tostring();
    }
}

let a = new point(1,2);
let b = new colorPoint(1, 2, 'green');
console.log(a.tostring());
console.log(b.tostring());

