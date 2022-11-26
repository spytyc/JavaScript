
const homeSelect = document.getElementById("blue-circle");

setInterval(() => {
    const color = homeSelect.style.backgroundColor;
    color === 'red' ? homeSelect.style.backgroundColor = 'blue' : homeSelect.style.backgroundColor = 'red';
}, 1000)
