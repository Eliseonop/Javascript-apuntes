const nombre = 'Eliseo'
const apellido = 'Falcon'

const objectName = {
  nombre,
  apellido
}

sessionStorage.setItem('objectName', JSON.stringify(objectName))

localStorage.setItem('objectName', JSON.stringify(objectName))

document.cookie = `objectName=${JSON.stringify(objectName)}; max-age=120`

// localStorage.setItem(
//   'persona',
//   JSON.stringify({ nombre: 'Eliseo', edad: '21' })
// )
// // console.log(JSON.parse(localStorage.getItem('persona')))

// localStorage.removeItem('nombre')

// sessionStorage.setItem('nombre', 'Copo')

// document.cookie = 'nombre=Copo'

// document.cookie = 'nombre=Copo; expires=' + new Date(2030, 1, 1).toUTCString()

// console.log(document.cookie)
