# Práctica-Frase
Repositorio del ejercicio de ejemplo de clase del módulo DWC de 2nDAW

# Bloque 1: Javascript. UT 2: Sintaxis
## Preparar el entorno
Para realizar esta práctica clona el repositorio <https://github.com/Jorge-Zafrilla/DWC-Practica-JavaScript-Frase.git>

Cuando quieras pasar los test escribe en la terminal:
```bash
npm run test
```

## Práctica - Frase
Vamos a pedir al usuario que introduzca una frase y a continuación mostraremos en la consola:
- el número de letras y de palabras que tiene
- la frase en mayúsculas
- la frase con la primera letra de cada palabra en mayúsculas
- la frase escrita con las letras al revés
- la frase escrita con las palabras al revés
- si es o no un palíndromo (si se lee igual al revés) pero omitiendo espacios en blanco y sin diferenciar mayúsculas y minúsculas.

Para poder pasar los tests a nuestro programa para comprobar si funciona crearemos (e incluiremos en el fichero HTML) 2 ficheros JS distintos:
- _functions.js_: este fichero sólo incluye las funciones indicadas más abajo
- _index.js_: es el programa principal que contiene el código que pide la frase al usuario y, si ha introducido algo, la muestra y llama a las distintas funciones mostrando por consola la información devuelta por las mismas

En el _index.html_ deberás incluir cada fichero en una etiqueta _script_ (en primer lugar el de las funciones).

Las funciones que contendrá el fichero _functions.js_ (deben llamarse **EXACTAMENTE** como os digo) son:
- **letters(_string_): _number_**: devuelve el número de letras de la cadena pasada como parámetro ("Hola qué tal" => 12)
- **words(_string_): _number_**: devuelve el número de palabras de la cadena pasada como parámetro ("Hola qué tal" => 3)
- **upperString(_string_): _string_**: devuelve la cadena pasada como parámetro convertida a mayúsculas ("Hola qué tal" => "HOLA QUÉ TAL")
- **titleString(_string_): _string_**: devuelve la cadena pasada como parámetro con la primera letra de cada palabra convertida a mayúsculas ("Hola qué tal" => "Hola Qué Tal")
- **backwardsLetters(_string_): _string_**: devuelve la cadena pasada como parámetro al revés ("Hola que tal" => "lat euq aloH")
- **backwardsWords(_string_): _string_**: devuelve la cadena pasada como parámetro con sus palabras al revés ("Hola que tal" => "tal que Hola")
- **palindrome(_string_): _boolean_**: devuelve si la cadena pasada como parámetro es un palíndromo sin tener el cuenta espacios y capitalización ("Hola que tal" => false, "La ruta nos aporto otro paso natural" => true)

Por ejemplo, si el usuario introduce la frase 
> La ruta nos aporto otro paso natural

el programa de _index.js_ mostraría en la consola lo siguiente:
```
Frase: "La ruta nos aporto otro paso natural"
36 letras y 7 palabras
LA RUTA NOS APORTO OTRO PASO NATURAL 
La Ruta Nos Aporto Otro Paso Natural 
larutan osap orto otropa son atur aL 
natural paso otro aporto nos ruta La 
Sí es un palíndromo
```

Intenta usar en cada caso el bucle más adecuado. Las funciones `split` y `join` (lo opuesto) nos pueden ayudar a algunas cosas.

**RECUERDA**:
- el código deberá estar en un fichero externo y se incluirá al final del body
- tanto el código JS como el HTML deben estar correctamente indentados
- ten en cuenta los datos que pueden “estropearnos” el programa: que el usuario introduzca un dato de un tipo que no te esperas, que omita algún parámetro, …
- usa las recomendaciones indicadas: ‘use strict’, …
- el código debe ser lo más limpio y claro posible, sin variables o código innecesario
- siempre es bueno refactorizar el código: cuando nuestro programa ya funciona bien le damos un “repaso” para mejorar su claridad (y lo volvemos a probar)

### Pasar los test
Por último debes comprobar tu código antes de entregarlo para asegurarte que apruebas esta práctica. Para hacer accesibles las funciones al test se ha añadido al final de tu fichero _functions.js_ la instrucción:
```javascript
module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
```

> Esto hace que el navegador muestre en la consola el error de Javascript `ReferenceError: module is not defined` pero continúa funcionando correctamente
=======
