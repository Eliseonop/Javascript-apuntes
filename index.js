const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const papelera = document.querySelectorAll('.papelera')

parrafos.forEach(parrafo => {
  // cuando comienza a arrastrar
  parrafo.addEventListener('dragstart', e => {
    console.log('Estoy arrastrando el párrafo' + parrafo.innerText)
    parrafo.classList.add('dragging')
    e.dataTransfer.setData('id', parrafo.id)
    const imagen = document.querySelector('.imagen-fantasma')
    e.dataTransfer.setDragImage(imagen, 0, 0)
  })
  // cuando deja de arrastrar
  parrafo.addEventListener('dragend', () => {
    parrafo.classList.remove('dragging')
  })
})

secciones.forEach(seccion => {
  //mientras arrastra algo al parecer un hijo de esta seccion
  seccion.addEventListener('dragover', e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  })
  //cuando suelta el elemento
  seccion.addEventListener('drop', e => {
    e.preventDefault()
    const id_parrafo = e.dataTransfer.getData('id')
    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
    console.log(id_parrafo)
  })
})

papelera.forEach(papelera => {
  papelera.addEventListener('dragover', e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  })
  papelera.addEventListener('drop', e => {
    e.preventDefault()
    const id_parrafo = e.dataTransfer.getData('id')
    const parrafo = document.getElementById(id_parrafo)
    parrafo.remove()
    console.log(id_parrafo)
  })
})
