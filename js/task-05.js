const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")

input.addEventListener("input", onName);

function onName(event) {
    nameOutput.textContent = event.currentTarget.value
}