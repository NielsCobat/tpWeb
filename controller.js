
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd) {
		switch (this.currEditingMode) {
		case editingMode.rect: {
			this.currentShape =
				new Rectangle(dnd.startPos.x, dnd.startPos.y, 0, 0, this.currLineWidth, this.currColour);
			break;
		}
		case editingMode.line: {
			this.currentShape =
				new Line(dnd.startPos.x, dnd.startPos.y, dnd.startPos.x, dnd.startPos.y, this.currLineWidth, this.currColour);
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
			break;
		}
		case editingMode.line: {
			this.currentShape =
				new Line(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x, dnd.currentPos.y, this.currLineWidth, this.currColour);
			break;
		}
		}
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		switch (this.currEditingMode) {
		case editingMode.rect: {
			drawing.addShape(new Rectangle(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x - dnd.startPos.x,
					dnd.currentPos.y - dnd.startPos.y, this.currLineWidth, this.currColour));
			break;
		}
		case editingMode.line: {
			drawing.addShape(new Line(dnd.startPos.x, dnd.startPos.y, dnd.currentPos.x,
				dnd.currentPos.y, this.currLineWidth, this.currColour));
			break;
		}
		}
	}.bind(this);

};


