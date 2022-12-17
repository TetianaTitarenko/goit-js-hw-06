const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length

input.addEventListener("blur", onInputBlur)

function onInputBlur() {
    console.log(input.value.length)
if (input.value.length === Number(inputLength)) {
    input.classList.remove("invalid")
    input.classList.add("valid")
} else {
    input.classList.remove("valid")
    input.classList.add("invalid")
}
}

    

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні 
// файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

