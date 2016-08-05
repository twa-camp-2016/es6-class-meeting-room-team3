class ClassName{
    constructor(name,age){
        this.myname =name;
        this.myage = age;
    }
    get myname(){
        return 'm';
    }
    set myname(n){
        this.name = n;
    }
    hello(){
        console.log(this.myname);
    }
}

let b = new ClassName('a',11);
let c =new ClassName('s',12);


c.hello();
console.log(c.myname);


