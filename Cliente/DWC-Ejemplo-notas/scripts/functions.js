'use strict'

function addGrades(grades, newGrades) {

	var result = [];

	if(Array.isArray(grades)){
		for(let i=0;i<grades.length;i++){
			result.push(grades[i]);
		}
	}

	var partes =[];
	if(typeof(newGrades)==="string"){
		partes = newGrades.split(",");
	}else if(Array.isArray(newGrades)){
		partes=newGrades;
	}else if(newGrades !== null && newGrades!== undefined && newGrades!==''){
		partes=[newGrades];
	}

/*	let arrayNotas = newGrades.split(",");
	arrayNotas.forEach(nota => {
		console.log(nota);
		console.log(arrayNotas);
		if(isNaN(parseFloat(nota))){
			console.error("Dato inválido");
		}else{
			result.push(nota);
		}
	});
*/

	for(let i=0;i<partes.length;i++){
		var valores = partes[i];
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
	var clean = [];
	if(Array.isArray(grades)){
		for(let i=0;i<grades.length;i++){
			if((!isNaN(parseFloat(grades[i]))) && grades[i]>=0 && grades[i]<=10){
				clean.push(grades[i].trim());	
			}/*else if(typeof(grades[i])==='string'){
				if(grades[i].indexOf(',')===-1){
					var trimmed = grades[i].trim();
					if(trimmed !== ''){
						let num = parseFloat(trimmed);
						if(num>=0 && num<=10){
							clean.push(num);
						}
					}
				}
			}*/
		}
	}
	return clean;
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