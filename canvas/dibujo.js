var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xf, yi; 

// while (l < lineas)
//{
//	yi = 10 * l;
//	xf = 10 * (l +1);
//	dibujarLinea("blue", xf, 0, 300, yi);
//	dibujarLinea("blue", 0, xf, yi, 300);
//	l = l + 1;
//}

//for(l = 0; l < lineas; l++)
//{
//	yi = 10 * l;
//	xf = 10 * (l +1);
//	dibujarLinea("blue", xf, 0, 300, yi);
//	dibujarLinea("blue", 0, xf, yi, 300);
//}

do 
{
	yi = 10 * l;
	xf = 10 * (l +1);
	dibujarLinea("blue", xf, 0, 300, yi);
	dibujarLinea("blue", 0, xf, yi, 300);
	l = l + 1;
}
while(l < lineas);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
