saludar('eliseo falcon')

function saludar (name = '') {
  console.log(`Hola ${name}`)
}
let nombre_2 = 'Juan'
console.log(nombre_2)
despedir(nombre_2)
console.log(nombre_2)

function despedir (nombre) {
  nombre = 'Elias'
  console.log(`Adios ${nombre}`)
}

///
let persona = { nombre: 'Juan', apellido: 'Gomez' }
saludarPersona(persona)
console.log(persona)

function saludarPersona (objeto) {
  objeto.nombre = 'Elias'
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

////

function imprimeNumero (numero = 0) {
  //Parámetros por defecto
  console.log(numero)
}
imprimeNumero(10)

///
function imprimir (...parametros) {
  //Parámetros por defecto
  console.log(parametros)
}

imprimir(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function suma (...nums) {
  let resultado = 0
  for (let num of nums) {
    resultado += num
  }
  return resultado
}
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
