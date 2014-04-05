// Matthew Bauer

// a+bi
function Complex(a, b) {
	if (typeof a == "string" && typeof b == "undefined") {
		if (a.indexOf('+') > -1) {
			this.a = parseInt(a.split('+')[0]);
			this.b = parseInt(a.split('+')[1].replace('i', ''));
		}
	} else if (typeof a == "number" && typeof b == "number") {
		this.a = a;
		this.b = b
	}
};

Complex.i = new Complex(0, 1);
Complex.one = new Complex(1, 0);
Complex.zero = new Complex(0, 0);

Complex.prototype.add = function(n) {
	return new Complex(this.a + n.a, this.b + n.b);
};

Complex.prototype.multiply = function(n) {
	return new Complex(this.a * n.a - this.b * n.b, this.a * n.b + this.a * n.b);
};

Complex.prototype.equals = function(n) {
	return this.a == n.a && this.b == n.b;
};

Complex.prototype.magnitude = function() {
	return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
};

Complex.prototype.toString = function() {
	s = "";
	if (this.a != 0) {
		s += this.a
		if (this.b != 0)
			s += '+';
	}
	if (this.b != 0)
		s += this.b + 'i';
	return s;
};
