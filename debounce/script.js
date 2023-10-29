const toggleButton = document.getElementById('toggleButton')
const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')

let isOpen = false
let timeoutId

function toggleElements() {
  if (isOpen) {
    element1.style.display = 'none'
    element2.style.display = 'none'
    element3.style.display = 'none'
    isOpen = false
  } else {
    element1.style.display = 'block'
    element2.style.display = 'block'
    element3.style.display = 'block'
    isOpen = true
  }
}

function debounceToggleElements() {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    toggleElements()
    timeoutId = null
  }, 1000)
}

toggleButton.addEventListener('click', debounceToggleElements)
