const container = document.querySelector(".container");



const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

let gridSize = parseInt(prompt(`Enter grid size (1-100):`, 16));

// Create grid pixels
for (let i = 0; i < gridSize*gridSize; i++) {
    const elem = document.createElement("div");
    elem.classList.add("child");
    elem.style.width=container.offsetWidth/gridSize + 'px';
    elem.style.height=container.offsetWidth/gridSize + 'px';
    elem.addEventListener("mouseenter", () => {
        elem.style.backgroundColor = getRandomColor();
      });
    container.appendChild(elem);
}

