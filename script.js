const container = document.querySelector("container");

for(let i=0 ; i<16*16;i++){
    const elem=document.createElement("div");
    elem.classList.add("child");
    container.appendChild(elem);
}



