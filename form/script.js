const registrationForm = document.getElementById('registrationForm')
const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const errorMessage = document.getElementById('error-message')

registrationForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const nameValue = nameInput.value.trim()
  const phoneValue = phoneInput.value.trim()
  const passwordValue = passwordInput.value
  const confirmPasswordValue = confirmPasswordInput.value

  const namePattern = /^[A-Za-zА-Яа-я]{3,30}$/
  const phonePattern = /^[+]?[0-9]{10,15}$/
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,40}$/

  switch (true) {
    case !namePattern.test(nameValue):
      displayError('Имя должно содержать только кириллицу/латиницу и быть от 3 до 30 символов.')
      break
    case !phonePattern.test(phoneValue):
      displayError('Телефон должен состоять из цифр, может начинаться с плюса и быть от 10 до 15 символов.')
      break
    case !passwordPattern.test(passwordValue):
      displayError('Пароль должен быть от 8 до 40 символов и содержать хотя бы одну заглавную букву и цифру.')
      break
    case passwordValue !== confirmPasswordValue:
      displayError('Пароли не совпадают.')
      break
    default:
      clearError()
      alert('Регистрация успешна!')
      registrationForm.reset()
  }
})

function displayError(message) {
  errorMessage.textContent = message
  errorMessage.style.display = 'block'
}

function clearError() {
  errorMessage.style.display = 'none'
}

registrationForm.addEventListener('input', () => {
  clearError()
})
