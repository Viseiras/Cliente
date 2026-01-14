"use strict";

import { getLocalData, seedLocalData } from "./localRepo.js";
import { getCloudData, clearCloud, uploadItem } from "./cloudRepo.js";

document.addEventListener("DOMContentLoaded", () => {
  const seedBtn = document.getElementById("seedBtn");
  const showLocalBtn = document.getElementById("showLocalBtn");
  const migrateBtn = document.getElementById("migrateBtn");
  const showCloudBtn = document.getElementById("showCloudBtn");
  const localOut = document.getElementById("localOut");
  const cloudOut = document.getElementById("cloudOut");
  const status = document.getElementById("status");

  seedBtn.addEventListener("click", ()=>{
    seedLocalData();
    status.textContent="Datos de ejemplo creados en LocalStorage";
  });  

  showLocalBtn.addEventListener("click", ()=>{
    localOut.textContent=JSON.stringify(getLocalData());
  })

  migrateBtn.addEventListener("click", async ()=>{
    const data = getLocalData();
    if(data.length===0){
      status.textContent="No hay datos locales que migrar";
      return;
    }
    clearCloud();
    status.textContent="Migrando...";

    for(let i=0;i<data.length;i++){
      status.textContent=`Subiendo ${i+1}/${data.length}...`;
      await uploadItem(data[i]);
    }

    status.textContent="Migración terminada";
  });

  showCloudBtn.addEventListener("click", ()=>{
    cloudOut.textContent = JSON.stringify(getCloudData());
  });
});
