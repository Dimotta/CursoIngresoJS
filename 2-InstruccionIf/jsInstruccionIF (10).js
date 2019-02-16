function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var random;
		random=Math.floor((Math.random() * 10) + 1);

	if (random>8) 
	{
		mensaje="EXCELENTE , su nota es"


	}	
	else
	{	
			if(random<4) 
		{
			mensaje="Vamos, la proxima se puede su nota es"
		}
			else 
		{
			mensaje="APROBO, su nota es"
		}	
	}

		alert(mensaje+" "+random);

}
//FIN DE LA FUNCIÓN