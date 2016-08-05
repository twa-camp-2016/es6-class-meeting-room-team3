class Widget {

	//public
	foo(baz){
		this._bar(baz);
	}

	//private
	_bar(baz){
		return this.snaf = baz;
	}
}//first method


class Widget {
	//public
	foo(baz){
		bar.call(this,baz);
	}


}

//private
function bar(baz) {
	return this.snaf = baz;
}//second method



const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default subclassFactory({

	//public
	foo(baz){
		this[bar](baz);
	}

	//private
	[bar](baz){
		return this[snaf] = baz;
	}
})