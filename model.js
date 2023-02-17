
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
	this.shapes = new Array();

	this.addShape = function(shape) {
		this.shapes.push(shape);
	}.bind(this);

};

function Shape(width, color) {
	this.lineWidth = width;
	this.color = color;
};

function Rectangle(topLeftCornerX, topLeftCornerY, width, height, lineWidth, color) {
	Shape.call(this, lineWidth, color);
	this.topLeftCornerX = topLeftCornerX;
	this.topLeftCornerY = topLeftCornerY;
	this.width = width;
	this.height = height;

	this.getInitX = function() {
		return this.topLeftCornerX;
	}.bind(this);

	this.getInitY = function() {
		return this.topLeftCornerY;
	}.bind(this);

	this.getFinalX = function() {
		return this.topLeftCornerX + this.width;
	}.bind(this);

	this.getFinalY = function() {
		return this.topLeftCornerY + this.height;
	}.bind(this);

};
Rectangle.prototype = new Shape();

function Line(cornerOneX, cornerOneY, cornerTwoX, cornerTwoY, lineWidth, color) {
	Shape.call(this, lineWidth, color);
	this.cornerOneX = cornerOneX;
	this.cornerOneY = cornerOneY;
	this.cornerTwoX = cornerTwoX;
	this.cornerTwoY = cornerTwoY;

	this.getInitX = function() {
		return this.cornerOneX;
	}.bind(this);

	this.getInitY = function() {
		return this.cornerOneY;
	}.bind(this);

	this.getFinalX = function() {
		return this.cornerTwoX;
	}.bind(this);

	this.getFinalY = function() {
		return this.cornerTwoY;
	}.bind(this);

};
Line.prototype = new Shape();