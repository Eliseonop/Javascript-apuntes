const imagenes = document.querySelectorAll('.img')

const secciones = document.querySelectorAll('.seccion')

imagenes.forEach(imagen => {
  imagen.addEventListener('dragstart', e => {
    console.log(imagen.id)
    e.dataTransfer.setData('id', imagen.id)
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener('dragover', e => {
    e.preventDefault()
    e.target.classList.add('over')
  })
  seccion.addEventListener('dragleave', e => {
    e.target.classList.remove('over')
  })
  seccion.addEventListener('drop', e => {
    e.target.classList.remove('over')
    const id = e.dataTransfer.getData('id')
    const idSeccion = e.target.id
    console.log(e.target.id)

    const index_img = id.split('-')[1]
    const index_seccion = idSeccion.split('-')[1]
    if (index_img === index_seccion) {
      const img = document.getElementById(idSeccion)
      img.style.backgroundImage = `url(assets/img-${index_img}.png)`
      console.log(seccion.style.backgroundImage)
      const imagenRemove = document.getElementById(id)
      imagenRemove.style.background = 'none'
    }
    console.log(index_img)
    console.log(idSeccion)
  })
})
