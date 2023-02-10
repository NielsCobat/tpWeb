
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
  function mouseDown(evt) {
    if (!this.isMouseDown) {
      this.startPos.x = evt.x;
      this.startPos.y = evt.y;
      this.isMouseDown = true; 
    }
  }
  function mouseMove(evt) {
    if (this.isMouseDown) {

    }

  }
  function mouseUp(evt) {
    if (this.isMouseDown) {
      this.endPos.x = evt.x;
      this.endPos.y = evt.y;
      this.isMouseDown = false;
    }
  }

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



