import { save } from './screenshot.js'

let bodyParts = [
  { element: document.getElementById('head'), index: 0 },
  { element: document.getElementById('body'), index: 0 },
  { element: document.getElementById('shoes'), index: 0 },
]

function saveButton() {
  const clown = {
    shoes: document.getElementById('shoes'),
    body: document.getElementById('body'),
    head: document.getElementById('head'),
  }
  save(clown)
}

document.getElementById('saveButton').addEventListener('click', saveButton)

let h3 = document.getElementById('displaybodypart')

let clothingIndex = 0

function changeClown(element, index) {
  let src = `./images/${element.id}${index}.png`

  element.src = src
}

function handleArrowPress(key) {
  if (key === 'ArrowUp') {
    clothingIndex = (clothingIndex - 1 + 3) % 3

    displayBodyPart()
    console.log(`Now selecting ${bodyParts[clothingIndex].element.id}`)
  } else if (key === 'ArrowDown') {
    clothingIndex = (clothingIndex + 1) % 3
    displayBodyPart()
    console.log(`Now selecting ${bodyParts[clothingIndex].element.id}`)
  } else {
    const selectedPart = bodyParts[clothingIndex]
    if (selectedPart) {
      if (key === 'ArrowLeft') {
        selectedPart.index = (selectedPart.index - 1 + 6) % 6
      } else if (key === 'ArrowRight') {
        selectedPart.index = (selectedPart.index + 1) % 6
      }
      changeClown(selectedPart.element, selectedPart.index)
    }
  }
}

function displayBodyPart() {
  let selectedBodyPart = bodyParts[clothingIndex].element.id
  h3.innerHTML = `You have selected ${selectedBodyPart}`
}
displayBodyPart()

document.addEventListener('keydown', function (event) {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    handleArrowPress(event.key)
  }
})
