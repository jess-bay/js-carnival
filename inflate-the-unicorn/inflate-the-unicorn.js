import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'
console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

const imagePath = './images/unicorn-'

const fileType = '.png'

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = function () {
    let src = this.getAttribute('src')

    if (src === `${imagePath}0${fileType}`) {
      this.setAttribute('src', `${imagePath}1${fileType}`)
    } else if (src === `${imagePath}1${fileType}`) {
      this.setAttribute('src', `${imagePath}2${fileType}`)
    } else if (src === `${imagePath}2${fileType}`) {
      this.setAttribute('src', `${imagePath}3${fileType}`)
      return canvasConfetti()
    } else if (src === `${imagePath}3${fileType}`) {
      this.setAttribute('src', `${imagePath}0${fileType}`)
    }
  }
}
