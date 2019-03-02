function mostrar()
{
	var pais;
	var superficie;
	var respuesta;
	var contador;
	var superficieImpar;
	var superficieMenor;
	var superficieIgual;

	respuesta="si";
	contador=0;
	superficieImpar=0;
	superficieMenor=0;
	superficieIgual=0;

	while(respuesta=="si")
	{
		pais=prompt("Ingrese un pais");
		superficie=prompt("Ingrese una superficie");
		superficie=parseInt(superficie);

		while(superficie<0 || superficie>1000)
		{
			superficie=prompt("Error,Ingresar otra superficie");
		}

		respuesta=prompt("Ingrese si para continuar");

		if (superficie%2==1)
		{
			superficieImpar++;
		}
		if (superficie<100)
		{
			superficieMenor++;
		}
		if (superficie==100)
		{
			superficieIgual++;
		}











	}

	alert (superficieMenor);
}
