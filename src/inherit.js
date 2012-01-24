var Inherit = function(Subclass, Superclass) {
	Subclass.prototype = new Superclass();
	Subclass.prototype.constructor = Subclass;
	Subclass.prototype.parent = Superclass.prototype;
};
