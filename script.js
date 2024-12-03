const container = document.querySelector(".container");
let numberOfPixels= 16*16;

// Create grid pixels
for(let i=0 ; i<numberOfPixels;i++){
    const elem=document.createElement("div");
    elem.classList.add("child");
    elem.style.width= 960/16 + "px";
    elem.style.height=960/16 + "px";
    container.appendChild(elem);
}