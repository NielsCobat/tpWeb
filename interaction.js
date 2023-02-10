
function Position(x, y) {
  this.x = x;
  this.y = y;
}

// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startPos = new Position(0, 0);
  this.endPos = new Position(0, 0);
  this.isMouseDown = false;

	// Developper les 3 fonctions gérant les événements
  this.mouseDown = function(evt) {
    if (!this.isMouseDown) {
      let pos = getMousePosition(canvas, evt);
      this.startPos.x = pos.x;
      this.startPos.y = pos.y;
      this.isMouseDown = true;
      console.log("Mouse pressed at : [" + this.startPos.x + ";" + this.startPos.y + "]");
    }
  }.bind(this);

  this.mouseMove = function(evt) {
    if (this.isMouseDown) {

    }

  }.bind(this);

  this.mouseUp = function(evt) {
    if (this.isMouseDown) {
      let pos = getMousePosition(canvas, evt);
      this.endPos.x = pos.x;
      this.endPos.y = pos.y;
      this.isMouseDown = false;
      console.log("Mouse released at : [" + this.endPos.x + ";" + this.endPos.y + "]");
    }
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



