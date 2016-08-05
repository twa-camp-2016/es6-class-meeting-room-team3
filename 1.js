class className{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
     hello(){
        console.log(this.name,this._age);
    }

    get age(){
        return 18
    }
    set age(n){
        this._age = n +12 ;
    }
}

let user1 = new className('a',12);
// user1.hello();
console.log(user1.age);
module.exports = {
    className
}