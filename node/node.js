const fs = require('fs')
const os = require('os');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла: ', err)
    return
  }

  const reversedString = data.split('').reverse().join('')

  fs.writeFile('output.txt', reversedString, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка записи файла: ', err)
      return
    }
    console.log('Строка перевернута и записана в файл output.txt.')
  })
})

const homeDirectory = os.homedir();

const platform = os.platform();

console.log("")
console.log('Домашняя директория:', homeDirectory);
console.log('Тип операционной системы:', platform);
