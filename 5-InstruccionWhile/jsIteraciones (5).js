function mostrar()
{
	var sexo

	sexo = prompt("ingrese f ó m .");

	document.getElementById('Sexo').value=sexo;

	while(sexo != "f" && sexo !="m")
	{
		sexo=prompt("Error,ingrese f o m .");
	}		

}//FIN DE LA FUNCIÓN