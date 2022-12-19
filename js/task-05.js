const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")
console.log(nameOutput)


input.addEventListener("input", onName);

function onName(event) {
      nameOutput.textContent = event.currentTarget.value  
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    }
}