function mostrar()
{
	//cuando cargemos un celular pedir la marca-tamaño-precio.
	//1)Mayor Precio y Marca.
	//2)Promedio de Precios.
	//3)Cantidad de Celulares que valen >2000.
	//4)Celular,Marca y Tamaño del mas Caro.
	//5)Celular,Marca y Tamaño del mas Barato.
	//6)El Primer Celular que sale $1000.
	//7)Precio del Ultimo Celular "LG".

	var cantidadCelulares;
	var marca;
	var tamaño;
	var precio;
	var mayorprecio;
	var mayorprecioMarca;
	var mayorprecioTamaño;
	var respuesta;
	var promedioPrecios;

	contador=0;
	promedioPrecios=0;
	respuesta="si";

	while(respuesta="si")
	{

	marca=prompt("Ingrese su marca de celular");
	tamaño=prompt("Ingrese el tamaño de su celular");
	precio=prompt("Ingrese el precio de us celular");
	
	tamaño=parseInt(tamaño);
	precio=parseInt(precio);


	if(contador)
	{
		mayorprecio=precio;
		mayorprecioMarca=marca;
	}
	else
	{
		if(precio>mayorprecio)
		{	
			mayorprecio=precio;
			mayorprecioMarca=marca;
		}
		else
		{
			if(precio>mayorprecio)
			{
				mayorprecio=precio;
				mayorprecioMarca=marca;
			}				
		}

		contador=contador+1;	
		respuesta=prompt("Ingrese Si para continar")
	}

	promedioPrecios=promedioPrecios+precio;
	promedioPrecios=promedioPrecios/contador;

	if(precio>2000)
	{
		
	}



alert("El Celular con Mayor Precio es marca "+mayorprecioMarca+" y su precio es de "+mayorprecio+" ,el Promedio de Precios entre los Celulares es de "+promedioPrecios);





}
