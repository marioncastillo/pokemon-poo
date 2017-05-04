function Pokemon(nombre,color,nivelDeAmistad,vida,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = nivelDeAmistad;

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: "+ this.nombre + " y soy de color: "+ this.color);
	};
	this.aumentarAmistad = function(Valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	};
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return pokemon.vida;
	};
};



function pelear(){

var uno = document.getElementById("opcion1").value;
var dos = document.getElementById("opcion2").value;
var pokemon1 = new Pokemon(uno,"amarillo",100,30,60);
var pokemon2 = new Pokemon(dos,"rojo",20,40,60);
pokemon1.atacar(pokemon2);

	var resultado = document.getElementById("mostrar");
   var muestra = (pokemon1.nombre + " atacó a " + pokemon2.nombre + ". Y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida);
		resultado.innerHTML = muestra;

	
}