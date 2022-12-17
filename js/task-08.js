const form = document.querySelector(".login-form")
console.dir(form)

form.addEventListener("submit", onFormSubmission)

function onFormSubmission(event) {
    event.preventDefault()
    // const { email, password } = event.currentTarget.elements
    // console.log(email.value)
    // console.log(password.value)

    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value

    const result = {
        email,
        password,
    }
    console.log(result)

    if (email === "" || password === "") {
        alert("Всі поля повинні бути заповнені")
    }
    event.currentTarget.reset()
}