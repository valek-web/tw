function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function createRandomSquares() {
  const container = document.querySelector('#container')
  const squareCount = Math.floor(Math.random() * 91) + 10

  for (let i = 0; i < squareCount; i++) {
    const square = document.createElement('div')
    square.className = 'square'
    square.style.backgroundColor = getRandomColor()
    container.appendChild(square)
  }
}

createRandomSquares() // Создаем квадраты при загрузке страницы
