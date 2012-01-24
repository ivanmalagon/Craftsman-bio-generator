function Figura(x, y)
{
	this.x = x;
	this.y = y;
}

new Figura(0, 0);

Figura.prototype.ObtenerPosicion = function() {
	return "Posicion [" + this.x + ", " + this.y + "]";	
};

Figura.prototype.ObtenerArea = function() {
	return 5;
};

var Inherit = function(Subclass, Superclass) {
	Subclass.prototype = new Superclass();
	Subclass.prototype.constructor = Subclass;
	Subclass.prototype.parent = Superclass.prototype;
};

// Cuadrado
Inherit(Cuadrado, Figura);

function Cuadrado(x, y, longitud)
{
	Figura.call(this, x, y);
	this.longitud = longitud;
}

Cuadrado.prototype.ObtenerArea = function() {
	var area = this.parent.ObtenerArea.call();
	return this.longitud * this.longitud + area;	
};

// Circulo
Circulo.prototype = new Figura(0, 0);
Circulo.prototype.constructor = Circulo;
Circulo.prototype.parent = Figura.prototype;

function Circulo(x, y, radio)
{
	this.parent.constructor.call(x, y);
	this.radio = radio;
}


