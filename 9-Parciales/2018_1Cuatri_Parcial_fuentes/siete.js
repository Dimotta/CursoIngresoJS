function mostrar()
{
	var	velocidad;
	var combustible;
	var contador;
	var promedioVelocidad;
	var velocidadBaja;
	var velocidadAlta;
	var acumulador;
	var combustibleMin;
	var combustibleMax;
	var combustibleLiquido;
	var maximo;

	combustibleLiquido=0;
	acumulador=0;
	contador=0;
	promedioVelocidad=0;
	maximo=0;

	while(contador<5)
	{

		contador=contador+1

		velocidad=prompt("Ingrese su Velocidad");
		velocidad=parseInt(velocidad);
		promedioVelocidad=promedioVelocidad+velocidad;
		maximo=velocidad+1;

		while(velocidad<0 || velocidad>250)
		{
			velocidad=prompt("Error,Ingrese su velocidad");
		}

		combustible=prompt("Ingrese su Combustible");

		while(combustible!="s" && combustible!="l")
		{
			combustible=prompt("Error,Ingrese su combustible");
		}

		if (contador==1)
		{
			velocidadBaja=velocidad;
			combustibleMin=combustible;
		}
		else
		{
			if (velocidad<velocidadBaja)
			 {
			 	velocidadBaja=velocidad;
			 	combustibleMin=combustible;
			 }
		}

		if (contador==1)
		{
			velocidadAlta=velocidad;
			combustibleMax=combustible;
		}
		else
		{
			if (velocidad>velocidadAlta && combustible=="s") 
			{
				velocidadAlta=velocidad;
				combustibleMax=combustible;
			}
		}

		if (velocidad>99 && combustible=="l")
		{
			combustibleLiquido=combustibleLiquido+1;
		}


	}
		promedioVelocidad=promedioVelocidad/contador;

		alert("El promedio de velocidad es "+promedioVelocidad+" ,la velocidad mas baja es "+velocidadBaja+" y su combustible es "+combustibleMin+" , la cantidad de combustibles liquidos que superan los 100km es "+combustibleLiquido+" y la velocidad mas alta del combustible solido es "+velocidadAlta);
}
