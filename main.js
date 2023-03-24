
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=770
canvas.height=600

// Code temporaire pour tester le DnD
//var dnd = new DnD(canvas);
//console.log(dnd);
//ctx.fillStyle = '#F0F0F0'; // set canvas' background color
//ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Line(10, 20, 100, 200, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas, document);

var editingMode = { rect: 0, line: 1 };
document.getElementById("butRect").onclick = () => { pencil.setShape(editingMode.rect) }
document.getElementById("butLine").onclick = () => { pencil.setShape(editingMode.line) }

var width = document.getElementById("spinnerWidth");
width.onclick = () => { pencil.setLineWidth(width.value) }

var color = document.getElementById("colour");
color.addEventListener("change", () => {
	pencil.setColor(color.value);
}, false);


drawing.paint(ctx, canvas);