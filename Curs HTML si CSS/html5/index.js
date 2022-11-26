
function handleClick(obj) {
    console.log(obj.innerText);
    const display = document.getElementById('key-display');
    display.innerText = obj.innerText
}