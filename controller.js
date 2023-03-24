
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas, document) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.setLineWidth = function(newWidth) {
		this.currLineWidth = newWidth;
		console.log("Set new line width to : " + newWidth);
	}.bind(this);

	this.setColor = function(newColor) {
		this.currColour = newColor;
		console.log("Set new line color to : " + newColor);
	}.bind(this);

	this.setShape = function(newShape) {
		this.currEditingMode = newShape;
		switch (newShape) {
		case editingMode.line: {
			console.log("Shape switch : Line");
			break;
		}
		case editingMode.rect: {
			console.log("Shape switch : Rect");
		}
		}
	}.bind(this);

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd) {
		switch (this.currEditingMode) {
		case editingMode.line: {
			this.currentShape =
				new Line(dnd.startPos.x, dnd.startPos.y, dnd.startPos.x, dnd.startPos.y, this.currLineWidth, this.currColour);
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
			console.log("Selected Shape : Line");
			break;
		}
		case editingMode.rect: {
			this.currentShape =
				new Rectangle(dnd.startPos.x, dnd.startPos.y, 0, 0, this.currLineWidth, this.currColour);
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
			console.log("Selected Shape : Rectangle");
			break;
		}
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		switch (this.currEditingMode) {
		case editingMode.rect: {
			this.currentShape =
				new Rectangle(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x - dnd.startPos.x,
					dnd.currentPos.y - dnd.startPos.y, this.currLineWidth, this.currColour);
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
			break;
		}
		case editingMode.line: {
			this.currentShape =
				new Line(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x, dnd.currentPos.y, this.currLineWidth, this.currColour);
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
			break;
		}
		}
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		switch (this.currEditingMode) {
		case editingMode.rect: {
			var newShape = new Rectangle(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x - dnd.startPos.x,
					dnd.currentPos.y - dnd.startPos.y, this.currLineWidth, this.currColour);
			drawing.addShape(newShape);
			updateShapeList(ctx, document, editingMode.rect, drawing, canvas);
			break;
		}
		case editingMode.line: {
			var newShape = new Line(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x,
				dnd.currentPos.y, this.currLineWidth, this.currColour);
			drawing.addShape(newShape);
			updateShapeList(ctx, document, editingMode.line, drawing, canvas);
			break;
		}
		}
		drawing.paint(ctx, canvas);
	}.bind(this);

};


