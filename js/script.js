"use strict";

// Selectors
const panels = document.querySelectorAll(".panel");


//EventListeners

panels.forEach((panel)=>{
    panel.addEventListener("click", ()=>{
        removeActive();
        panel.classList.add("active")
    })
})

function removeActive(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}