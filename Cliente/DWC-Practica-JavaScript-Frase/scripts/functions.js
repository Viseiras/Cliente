'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	let palabras = cadena.split(" ");
	return palabras.length;
}

function upperString(cadena) {
	return cadena.toUpperCase();
}

function titleString(cadena) {
	let cadenaTitulo = "";
	let palabras = cadena.split(" ");
	for(let i=0;i<palabras.length;i++){
		let palabra=palabras[i].split("");
		for(let j=0;j<palabras[i].length;j++){
			if(j===0){
				cadenaTitulo+=palabra[j].toUpperCase();
			}
			else{
				cadenaTitulo+=palabra[j].toLowerCase();
			}
		}
		cadenaTitulo+=" ";
	}
	return cadenaTitulo;
}

function backwardsLetters(cadena) {
	let cadenaInversa = "";
	let palabras = cadena.split(" ");
	for(let i=0;i<palabras.length;i++){
		let palabra=palabras[i].split("");
		for(let j=palabras[i].length;j>0;j--){
			if(j===0){
				cadenaInversa+=palabra[j-1];
			}
			else{
				cadenaInversa+=palabra[j-1];
			}
		}
		cadenaInversa+=" ";
	}
	return cadenaInversa;
}

function backwardsWords(cadena) {
	return cadena.split(" ").reverse().join(" ");
}

function palindrome(cadena) {
	let arrayPalindromo = cadena.split(" ").join("").split("");
	let esPalindromo = true;

	for(let i=0;i<arrayPalindromo.length;i++){
		if((arrayPalindromo[i].toLowerCase())!==(arrayPalindromo[(arrayPalindromo.length-1-i)].toLowerCase()) && i!==(arrayPalindromo.length-1-i)){
			esPalindromo=false;
		}
	}
	if(esPalindromo){
		return "Es palindromo";
	}else{
		return "No es palindromo";
	}

}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
