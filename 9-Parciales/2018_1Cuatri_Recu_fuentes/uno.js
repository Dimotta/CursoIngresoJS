
function mostrar()
{
	var mascota_uno;
	var mascota_dos;
	var peso_uno;
	var peso_dos;
	
	mascota_uno=prompt("mascota 1");
	mascota_dos=prompt("mascota 2");
	peso_uno=prompt("peso mascota 1");
	peso_dos=prompt("peso mascota 2");
	
	peso_uno=parseInt(peso_uno);
	peso_dos=parseInt(peso_dos);

	var suma;

	suma=peso_uno+peso_dos;

	
	alert("tenes dos mascotas "+mascota_uno+" y "+mascota_dos+" , que pesan "+peso_uno+" y "+peso_dos+" kilos , y la suma de los pesos es "+suma);

}
