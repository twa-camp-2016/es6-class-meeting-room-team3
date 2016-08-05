//继承

function Dogs(name) {
    this.name = name;
}

Dogs.prototype = {species: '犬科'};

let dog1 = new Dogs('大毛');
let dog2 = new Dogs('二毛');


class Polygon {
    constructor(name, lengths, width) {
        this.name = name;
        this.lengths = lengths;
        this.width = width;
    }

    sayName() {
        console.log('i am a ' + this.name + '. my lengths is ' + this.lengths + '. my width is '
           + this.width)
    }
}

class Square extends Polygon {
    constructor(name,lengths,width,color){
        super(name,lengths,width);
        this.color = color;
    }
    area(lengths) {
        let aa = lengths * lengths
    }

}

let square = new Square('aaa',1,2,'red');
let aa = square.sayName();
console.log(aa);