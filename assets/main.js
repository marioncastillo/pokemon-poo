function Pokemon(nombre,color,nivelDeAmistad,vida,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + 'y soy de color: ' + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function (pokemon) {
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}

}
var pikachu = new Pokemon("Pikachu","rojo",0,8,2);
var charmander = new Pokemon("Charmander","rojo",0,7,9);
pikachu.atacar(charmander)
console.log("El nivel de vida de Charmander es "+ charmander.vida)


