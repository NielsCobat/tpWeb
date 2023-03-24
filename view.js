
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.lineWidth;
  ctx.beginPath();
  ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.lineWidth;
  ctx.beginPath();
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

Shape.prototype.paint = function (ctx) {
  //NOTHING, just here so that the shape list does not change shape ids
}

updateShapeList = function(ctx, document, shape, drawing, canvas) {
  var liste = document.getElementById("shapeList");
  var newShapeInList = document.createElement("li");

  var editingMode = { rect: 0, line: 1 };

  switch (shape) {
  case editingMode.rect: {
    newShapeInList.textContent = "Rectangle";
    break;
  }
  case editingMode.line: {
    newShapeInList.textContent = "Line";
    break;
  }
  }

  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "btn btn default");
  var span = document.createElement("span");
  span.setAttribute("class", "glyphicon glyphicon-remove-sign");

  var shapeId = drawing.getShapeCount();
  button.onclick = () => {
    drawing.removeShape(shapeId);
    liste.removeChild(newShapeInList);
    drawing.paint(ctx, canvas);
  }
  button.addEventListener("mouseenter", () => {
    var shape = drawing.getShape(shapeId);
    shape.addWidth(2);
    drawing.paint(ctx, canvas);
  }, false);
  button.addEventListener("mouseleave", () => {
    var shape = drawing.getShape(shapeId);
    shape.addWidth(-2);
    drawing.paint(ctx, canvas);
  }, false);

  button.appendChild(span);
  newShapeInList.appendChild(button);
  liste.appendChild(newShapeInList);
}