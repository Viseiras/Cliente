"use strict";

export function renderCountryList(countries, container){
    container.innerHTML="";

    if(!countries || countries.length===0){
        container.innerHTML="<p>No se han encontrado países</p>"
        return;
    }

    const ul = document.createElement("ul");
    ul.classList.add("country-list");

    countries.forEach((country) => {
        const li = document.createElement("li");
        li.classList.add("country-item");
        li.dataset.code=country.cca3;

        const img = document.createElement("img");
        img.src=country.flags.png;
        img.alt=`Bandera de ${country.name.common}`;

        const name = document.createElement("span");
        name.textContent=country.name.common;

        li.append(img,name);
        ul.append(li);
    });
    container.append(ul);
}

export function renderCountryDetail(country, container){
    container.innerHTML="";

    if(!country){
        container.innerHTML="<p>Selecciona una país para ver su información</p>";
        return;
    }

    const article = document.createElement("article");
    article.classList.add("country-detail-card");

    const img = document.createElement("img");
    img.src=country.flags.png;
    img.alt=`Bandera de ${country.name.common}`;

    const title = document.createElement("h2");
    title.textContent=country.name.common;

    const infoList = document.createElement("ul");

    const addInfo = (label,value) =>{
        const li = document.createElement("li");
        li.innerHTML=`<strong>${label}:</strong>${value}`;
        infoList.append(li);
    }

    addInfo("Región",country.region || "-");
    addInfo("Subregión",country.subregion || "-");
    addInfo("Capital",country.capital? country.capital.join(", "):"-");
    addInfo("Población",country.population?.toLocaleString("es-ES") ?? "-");
    addInfo("Área (km^2)",country.area?.toLocaleString("es-ES") ?? "-");
    addInfo("Idiomas",country.languages?Object.values(country.languages).join(", ") : "-");
    addInfo("Husos horarios",country.timezones? country.timezones.join(", "):"-");

    article.append(img,title,infoList);
    container.append(article);
}

export function renderMessage(message, container){
    container.innerHTML=`<p class="message">${message}</p>`;
}

export function showLoading(container){
    container.innerHTML=`<p class="loading">Cargando datos...</p>`;
}