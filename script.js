let error = document.querySelector('.password p')
let submitButton = document.querySelector('button')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#c-password')

function addError() {
    let passwordText = password.value
    let confirmText = confirmPassword.value
    if (passwordText != confirmText) {
        error.textContent = '* Passwords do not match.'
        password.style.borderColor = 'red'
        confirmPassword.style.borderColor = 'red'
        return
    }
    error.textContent = ''
    password.style.borderColor = '#efe7eb'
    confirmPassword.style.borderColor = '#efe7eb'
}

password.addEventListener('input', addError)
confirmPassword.addEventListener('input', addError)

