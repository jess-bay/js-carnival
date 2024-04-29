import { getRandomNumber } from './random-number.js'

let cellsArray = Array.from(document.getElementsByTagName('TD'))

let imageSrc = '/mole.PNG'

let randomIndex = getRandomNumber(0, cellsArray.length - 1)

let randomCell = cellsArray[randomIndex]

function placeImage(imageSrc, randomCell, cellsArray) {
  let image = document.createElement('img')
  image.src = imageSrc

  image.style.maxWidth = '100%'
  image.style.height = 'auto'
  randomCell.innerHTML = ''
  randomCell.appendChild(image)

  image.addEventListener('click', function () {
    whackMole(image, randomCell, cellsArray)
  })
}

function whackMole(image, randomCell, cellsArray) {
  randomCell.removeChild(image)

  let newRandomIndex
  do {
    newRandomIndex = getRandomNumber(0, cellsArray.length - 1)
  } while (cellsArray[newRandomIndex] === randomCell)

  let newRandomCell = cellsArray[newRandomIndex]
  placeImage(imageSrc, newRandomCell, cellsArray)
}

placeImage(imageSrc, randomCell, cellsArray)
