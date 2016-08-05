class Person {         //类的声明
    constructor(name, age) {       //构造方法
        this.mname = name;
        this.mage = age;
    }

    say() {            //类方法
        console.log('i m a good guy!' + this.mname);

    }

    get name() {
        return '18'
    }

    set name(n) {
        this.mname = n;
    }
}
let a = new Person('p',5);
a.say()
console.log(a.mname)
