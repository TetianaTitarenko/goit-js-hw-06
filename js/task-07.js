const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onTextSizeChange)
    
function onTextSizeChange(event) {
    const fontSize = event.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
}