function mostrar()
{
	var numero_uno;
	var numero_dos;
	var numero_tres;
	var numero_cuatro;
	var compra;
	var mensaje;

	
	numero_uno=prompt("Ingrese un numero");
	numero_dos=prompt("Ingrese un numero");
	numero_tres=prompt("Ingrese un numero");
	numero_cuatro=prompt("Ingrese un numero");

	numero_uno=parseInt(numero_uno);
	numero_dos=parseInt(numero_dos);
	numero_tres=parseInt(numero_tres);
	numero_cuatro=parseInt(numero_cuatro);

	compra=numero_uno+numero_dos+numero_tres+numero_cuatro;

	if(compra>99)
	{
		mensaje=compra*0.90
	}
	else
	{
		if(compra>50)
		{
			mensaje=compra*0.95
		}
		else
		{
			mensaje=compra*1.15
		}
	
	}

	alert("Tu compra es de " +mensaje);
}

