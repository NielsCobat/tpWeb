
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
	this.shapes = new Array();
	this.shapeCount = 0;

	this.addShape = function(shape) {
		this.shapes.push(shape);
		this.shapeCount++;
	}.bind(this);

	this.removeShape = function(countId) {
		this.shapes[countId - 1] = new Shape(0, 0);
	}.bind(this);

	this.getShape = function(countId) {
		return this.shapes[countId - 1];
	}.bind(this);

	this.getShapeCount = function() {
		return this.shapeCount;
	}.bind(this);

	this.getForms = function () {
		return this.shapes;
	}.bind(this);

};

function Shape(width, color) {
	this.lineWidth = width;
	this.color = color;

	this.addWidth = function(value) {
		this.lineWidth += value;
	}.bind(this);
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