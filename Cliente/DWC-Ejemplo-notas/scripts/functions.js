'use strict'

function addGrades(grades, newGrades) {

	var result = [];

	if(Array.isArray(grades)){
		for(let i=0;i<grades.length;i++){
			result.push(grades[i]);
		}
	}

	let arrayNotas = newGrades.split(",");
	arrayNotas.forEach(nota => {
		console.log(nota);
		console.log(arrayNotas);
		if(isNaN(parseFloat(nota))){
			console.error("Dato inválido");
		}else{
			result.push(nota);
		}
	});
	
	for(let i=0;i<arrayNotas.length;i++){
		var valores = arrayNotas[i];
		if(typeof(valores)==='string'){
			valores = valores.trim();
		}

		if(valores!== '' && valores!==null && valores !==undefined){
			result.push(valores);
		}
	}

	return result;
}

function clearGrades(grades) {
}

function firstFailed(grades) {
}

function passedGrades(grades) {
}

function avgGrade(grades) {
}

function finalGrades(grades, increment) {
}

module.exports = {
	addGrades,
	clearGrades,
	firstFailed,
	passedGrades,
	avgGrade,
	finalGrades
}