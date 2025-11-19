"use strict";

const STORAGE_KEY = "form_generador";

const leer = () =>{
    try{
        return JSON.parse(localStorage.getItem(STORAGE_KEY))||[];
    }
    catch{
        return [];
    }
}

const guardar = (lista) => localStorage.setItem(STORAGE_KEY,JSON.stringify(lista));

function limpiarErrores(){
    const divErrores = document.getElementById("divErrores");
    divErrores.innerHTML="";
}

function validar(id, tipo, valor) {
    const divErrores = document.getElementById("divErrores");
    const divAdicional = document.getElementById("informacionAdicional");
    const lista = leer();
    let ok = true;

    // --- Comprobación de id único ---
    if (tipo !== "label") {
        // Para elementos que NO son label, el id debe ser único y no vacío
        const idDuplicado = lista.some(elemento => elemento.tipo !== "label" && elemento.id === id);
        if (!id || idDuplicado) {
            divErrores.innerHTML += `<p>El nombre no puede estar vacío y debe ser único del elemento</p>`;
            ok = false;
            if (divAdicional.children[0]) divAdicional.children[0].classList.add("campoErroneo");
        }
    } else {
        // Para labels: verificar que exista el elemento al que apunta
        const elementoExiste = lista.some(elemento => elemento.id === id);
        if (!id || !elementoExiste) {
            divErrores.innerHTML += `<p>No existe ningún input con el nombre '${id}' al que asignar la etiqueta</p>`;
            ok = false;
            if (divAdicional.children[0]) divAdicional.children[0].classList.add("campoErroneo");
        }
    }

    // --- Tipo no está vacío ---
    if (!tipo) {
        divErrores.innerHTML += `<p>Debes seleccionar un tipo para el elemento</p>`;
        ok = false;
    }

    // --- Valor obligatorio para ciertos tipos ---
    if (tipo !== "check" && tipo !== "button" && !valor) {
        divErrores.innerHTML += `<p>El elemento debe tener un valor</p>`;
        ok = false;
        if (divAdicional.children[1]) divAdicional.children[1].classList.add("campoErroneo");
    }

    return ok;
}



function renderResults(){
    const divResultados = document.getElementById("divResultados");
    divResultados.innerHTML="";
    
    const lista = leer();

    lista.forEach((elem)=>{
        switch(elem.tipo){
            case("text"):
                const p = document.createElement("input");
                p.id=elem.id;
                p.type="text";
                p.textContent=elem.id;
                divResultados.append(p);
            break;
            case("password"):
                const pass = document.createElement("input");
                pass.id=elem.id;
                pass.type="password";
                pass.textContent=elem.id;
                divResultados.append(pass);
            break;
            case("textarea"):
                const textarea = document.createElement("textarea");
                textarea.id=elem.id;
                textarea.cols=40;
                textarea.rows=5;
                textarea.textContent=elem.id;
                divResultados.append(textarea);
            break;
            case("label"):
                const label = document.createElement("label");
                const padre = document.getElementById(elem.id);
                label.htmlFor = elem.id;
                label.textContent = elem.valor;
                if (padre && padre.parentNode) {
                    padre.parentNode.insertBefore(label, padre);
                } else {
                    //Si por alguna razón no existe el input, lo agregamos al final como fallback
                    divResultados.appendChild(label);
                }
            break;

            case("image"):
                const img = document.createElement("img");
                img.id=elem.id;
                img.src=elem.valor;
                divResultados.append(img);
            break;
            case("check"):
                const check = document.createElement("input");
                check.type = "checkbox";
                check.id = elem.id;
                check.checked = !!elem.valor;
                const labelC = document.createElement("label");
                labelC.htmlFor = elem.id;
                labelC.textContent = elem.id;
                divResultados.append(check, labelC);
            break;
            case("radio"):
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = elem.id;
                radio.name = "grupoRadios";
                radio.value = elem.valor;
                const labelR = document.createElement("label");
                labelR.htmlFor = elem.id;
                labelR.textContent = elem.valor;
                divResultados.append(radio, labelR);
            break;
            case("button"):
                const boton = document.createElement("button");
                boton.id = elem.id;
                boton.textContent = elem.valor;
                boton.value = elem.valor;       
                boton.textContent=elem.valor;
                divResultados.append(boton);
            break;
            default:
        }
    })
}   


export function initGenerador(){
    const form = document.getElementById("formGenerador");
    const divAdicional = document.getElementById("informacionAdicional");

    form.addEventListener("submit",(e)=>{
        limpiarErrores();
        e.preventDefault();
        let tipo = select.value;
        let id = "";
        if(divAdicional.children[0].value){
            id = divAdicional.children[0].value;
        }
        let valor;

        switch(select.value) {
            case "check":
                const checkInput = document.getElementById("checkValue");
                valor = checkInput.checked; //true o false para el checkbox
                break;
            case "radio":
                const valueRadio = document.getElementById("radioValue");
                valor = valueRadio.value; //texto del radio
                break;
            case "label":
                valor = divAdicional.children[1].value; //el texto del label
                break;
            case "image":
                valor = divAdicional.children[1].value; //la ruta de la imagen
                break;
            case "button":
                valor = divAdicional.children[1].value; //el texto del botón
                break;
            default:
                //text, password, textarea
                valor = id;
                break;
        }



        if(!validar(id,tipo,valor)){
            return;
        }

        const lista = leer();
        lista.push({id,tipo,valor});
        guardar(lista);
        form.reset();
        divAdicional.innerHTML="";
        renderResults();
    });
    
    
    const select = document.getElementById("selectInput");

    select.addEventListener("change",()=>{
        divAdicional.innerHTML="";
        const inputId = document.createElement("input");
        inputId.type="text";

        switch(select.value){
        case("text"):
            inputId.placeholder="Introduce el nombre del parrafo";
            divAdicional.append(inputId);
        break;
        case("password"):
            inputId.placeholder="Introduce el nombre de la contraseña";
            divAdicional.append(inputId);
        break;
        case("textarea"):
            inputId.placeholder="Introduce el nombre del textarea";
            divAdicional.append(inputId);
        break;
        case("label"):
            inputId.placeholder="Introduce el elemento al que se añade la etiqueta ('nombre')";
            const valueLabel = document.createElement("input");
            valueLabel.type="text";
            valueLabel.placeholder="Texto de la etiqueta";
            divAdicional.append(inputId,valueLabel);
        break;
        case("image"):
            inputId.placeholder="Introduce el nombre de la imagen";
            const srcImg = document.createElement("input");
            srcImg.type="text";
            srcImg.placeholder="Añade la ruta de la imagen";
            divAdicional.append(inputId,srcImg);
        break;
        case("check"):
            inputId.placeholder = "Introduce el nombre del checkbox";

            const valueCheck = document.createElement("input");
            valueCheck.type = "checkbox";
            valueCheck.id = "checkValue";

            const labelCheck = document.createElement("label");
            labelCheck.htmlFor = "checkValue";
            labelCheck.textContent = "Valor del checkbox";

            divAdicional.append(inputId, valueCheck, labelCheck);
        break;
        case("radio"):
            inputId.placeholder="Introduce un nombre para el radio";
            const labelRadio = document.createElement("label");
            const valueRadio = document.createElement("input");
            valueRadio.type="text";
            valueRadio.id="radioValue";
            labelRadio.htmlFor="radioValue";
            labelRadio.textContent="Valor del radio";
            divAdicional.append(inputId,valueRadio,labelRadio);
        break;
        case("button"):
            inputId.placeholder = "Introduce un nombre para el botón";

            const valueBtn = document.createElement("input");
            valueBtn.type = "text";                        
            valueBtn.id = "btnValue";

            const labelBtn = document.createElement("label");
            labelBtn.htmlFor = "btnValue";
            labelBtn.textContent = "Valor del botón";

            divAdicional.append(inputId, valueBtn, labelBtn);
        break;

        default:
        }
    })

    document.getElementById("btnEnviar").addEventListener("click",renderResults);

}