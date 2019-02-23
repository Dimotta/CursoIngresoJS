function mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero;
	var sumapositivos;
	var sumanegativos;
	var cantidadnegativos;
	var cantidadpositivos;
	var ceros;
	var contadordepositivos;
	var contadordenegativos;
	var contadordepares;
	var contador=0;
	
	ceros=0;
	contadordepares=0;
	contadordepositivos=0;
	contadordenegativos=1;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador+"# : " );
		numero=parseInt(numero);
		//acumulador=acumulador+ numero;

		respuesta=prompt(" Si, para continuar");	

		if (numero<0)
		{
			sumanegativos=negativo+numero;
			contadordenegativos=contadordenegativos+1;
		}
		else
		{
			if (numero>0)
			{	
			sumapositivos=positivo+numero;
			contadordepositivos=contadordepositivos;

			}
			else
			{
				ceros=ceros+1;
			}
		if (numero) 
		{
			contadordepares=contadordepares
		}

		}



	}





}//FIN DE LA FUNCIÓN