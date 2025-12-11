"use strict";

const BASE_URL = "https://restcountries.com/v3.1/";

export async function fetchAllCountries(){
    const response = await fetch(`${BASE_URL}all?fields=name,cca3,flags,region,capital,population,languages`);

    if(!response.ok){
        throw new Error("No se han podido cargar los países");
    }

    const data = await response.json();

    return data.sort((a,b)=> a.name.common.localeCompare(b.name.common));
}

export async function fetchCountryByCode(cca3){
    const response = await fetch(`${BASE_URL}alpha/${cca3}?fields=name,cca3,flags,region,subregion,capital,population,languages,area,timezones`);

    if(!response.ok){
        throw new Error(`No se ha podido cargar la información del país con el código ${cca3}`);
    }

    const data = await response.json();

    return Array.isArray(data)? data(0) : data;
}

