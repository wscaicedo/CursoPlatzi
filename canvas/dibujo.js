var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("blue", 200, 300, 25, 98)
dibujarLinea("green", 56, 78, 250, 200)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
