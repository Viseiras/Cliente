let cadena="";
let filler="";
for(let altura=0;altura<50;altura++){
    for(let ancho=0;ancho<50;ancho++)
    {
        if(altura==0 || ancho ==0 || ancho==49){
            cadena+="#";
            if(ancho%2==0){
                filler="·";
            }else{
                filler="€";
            }
        }else{
            if(altura==49){
                cadena+="#";
            }else{
                cadena+=filler;
            }
        }
    }
    cadena+="\n";
}

console.log(cadena);
console.log(cadena.length);