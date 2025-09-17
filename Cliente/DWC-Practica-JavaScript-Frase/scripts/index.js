'use strict'

let frase = prompt("Introduce una frase:");

console.log(frase);
console.log(`Tu frase tiene ${letters(frase)} caracteres`);
console.log(`Tu frase tiene ${words(frase)} palabras`);
console.log(upperString(frase));
console.log(titleString(frase));
console.log(backwardsLetters(frase));
console.log(backwardsWords(frase));
console.log(palindrome(frase));