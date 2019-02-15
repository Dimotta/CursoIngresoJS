function mostrar()
{
	var compra;
	var condescuento;
	var descuento;
	var iva;
	var coniva;

	compra=prompt("Ingresa el valor de tu compra");
	compra=parseInt(compra);

	descuento=compra*0.10/100
	condescuento=compra+descuento;
  
	iva=condescuento*0.21/100;
 
	coniva=condescuento+iva;
	
	alert("tu compra es de "+compra+", tenes un descuento del 10% queda en "+descuento", mas el iva es "+coniva);
}
