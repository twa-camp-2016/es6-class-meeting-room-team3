{//假如有模块a.js代码如下：
    exports.str = 'a';
    exports.fn = function () {
    };
//对a模块的调用：
// var a = require('./a');
    console.log(a.str);
    console.log(a.fn());
}
{//如果改造a如下：
    exports.str = 'a';
    exports = function fn() {
    };
//在调用a模块时自然没用fn属性了。
}
{//再改造下a模块：
exports.str = 'a';
module.exports = function fn() {};
//这时a模块其实就是fn函数的引用，也就是说可以require('./a')()这样使用，而同时不再有str属性了。
}
//下面直接导出一个类：
module.exports = function A() {};
//调用：
var A = require('./a');
var a = new A();