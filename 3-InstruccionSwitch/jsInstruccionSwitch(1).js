function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Enero":
		mensaje="Que Comiences bien el Año!!!";
		break;

	case "Marzo":
		mensaje="A clases!!!";
		break;

	case "Julio":
		mensaje="Se vienen las vacaciones!!!";
		break;

	case "Diciembre":
		mensaje="Felices Fiestas!!!";
		break;

}

alert(mensaje);

}//FIN DE LA FUNCIÓN