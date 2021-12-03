const submit = document.querySelector('#submit')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const count = document.querySelector('#count')
const limit = document.querySelector('#limit')


submit.addEventListener("click", (e) => {
    const emailLength = email.value.length
    const max = limit.value
    const charCount = message.value.length
    if (charCount > max) {
        alert ("Exceeded " + max + " characters!")
        e.preventDefault()
    }
    if (emailLength < 5) {
        alert ("Email is too short!")
        e.preventDefault()
    }
    if (email.value.trim() === "") {
        alert ("Email is empty!")
        e.preventDefault()
    }
})

message.addEventListener("keyup", (e) => {
    const max = limit.value
    count.innerHTML = message.value.length + " characters of " + max + " allowed."
})


/*
message.addEventListener("keyup", (e) => {
    const charTyped = e.target.value
    const charCount = charTyped.length
    const max = limit.value
    if (charCount > max) {
        message.value = charTyped.substring(0, max)
    }
    count.innerHTML = message.value.length + " characters of " + max + " allowed."
})

*/