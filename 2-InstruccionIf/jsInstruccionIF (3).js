function mostrar()
{
//tomo la edad  
	var años;

	años=edad.value;
	años=parseInt(años);

	if (años >=18) 
	{
		alert("es mayor de edad");
	}
	
	if (años <=17) 
	{
		alert("es menor de edad");
	}
}//FIN DE LA FUNCIÓN