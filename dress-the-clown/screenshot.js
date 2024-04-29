//Given by facilitators
export function save(clown) {
  const canvas = document.createElement('canvas')
  canvas.width = 384
  canvas.height = 612

  const context = canvas.getContext('2d')
  context.drawImage(clown.shoes, 0, 0)
  context.drawImage(clown.body, 0, 0)
  context.drawImage(clown.head, 0, 0)

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    document.body.appendChild(link)
    link.href = url
    link.download = 'saved-clown'
    link.style.display = 'none'
    link.click()
  })
}
