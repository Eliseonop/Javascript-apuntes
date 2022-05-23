const array = ['hola', 2, 3, 4, 5, false, 7, 8, 9, 10]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]) // hola, 2, 3, 4, 5, false, 7, 8, 9, 10
}

// forma Es6 mas eficiente .foreach

let suma = 0
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayNums.forEach(function (numero) {
  console.log((suma += numero)) // 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
})

//buscar de un valor en un array

const variable = array.find(function (numero) {
  if (numero === 2) {
    return true
  }
})

console.log(variable) // 2

const listaObjetos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Pedro', edad: 30 },
  { nombre: 'Maria', edad: 40 },
  { nombre: 'Luis', edad: 50 },
  { nombre: 'Jorge', edad: 60 }
]

const objetoEncontrado = listaObjetos.find(objeto => objeto.edad < 10)

console.log(objetoEncontrado) // undefined

objetoEncontrado === undefined
  ? console.log('No encontrado') // No encontrado
  : console.log(objetoEncontrado)

const { edad } = listaObjetos.find(objeto => objeto.nombre === 'Juan')
console.log(edad) // 20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Trabajar con métodos más acanzados
// .map() .filter() .reduce()

const nuevoarr = [
  'San José',
  'Alajuela',
  'Heredia',
  'Cartago',
  'Puntarenas',
  'Limón'
]

nuevoarr.forEach(function (elemento) {
  console.log(elemento) // San José, Alajuela, Heredia, Cartago, Puntarenas, Limón
})
console.log(nuevoarr.map(a => a + ' es una ciudad'))

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumarvalores = valores.reduce((acumulador, valor, i, array) => {
  // esto es el acumulador en cada iteración
  console.log(acumulador) // 1, 3, 6, 10, 15, 21, 28, 36, 45, 55

  //esto es cada valor del array
  console.log(valor) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

  //esto es el indice de cada valor del array
  console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  //esto es el array
  console.log(array)

  //esto afecta el acumulador sumando cada uno
  return acumulador + valor
})

const str = 'Hola mundo'

console.log(str.split('').reduce((a, b) => a + b))

const newStr = new String('Hola mundo')

console.log(newStr)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//sort()

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(array.sort())
console.log(array.sort((a, b) => a - b)) // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array.sort((a, b) => b - a))

array.sort((a, b) => {
  console.log(a, b) //2 1 , 3 2 , 4 3, 5 4, 6 5, 7 6, 8 7, 9 8, 10 9
  console.log(b + b) //2,4,6,8,10,12,14,16,18
})

console.log(array) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const compare = (a, b) => {
  if (a.length !== b.length) return false

  const res = a.every((item, index) => item === b[index])
  return res
}
console.log(compare(ar1, ar2)) // true

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const res = array.some(item => item > 5)
console.log(res) // true

const existe = array.some(v => v === 9)

console.log(existe) // true

const listaObjetos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Pedro', edad: 30 },
  { nombre: 'Maria', edad: 40 },
  { nombre: 'Luis', edad: 50 },
  { nombre: 'Miguel', edad: 60 }
]
const existeMiguel = listaObjetos.some(objeto => objeto.nombre === 'Miguel')
console.log(existeMiguel) // true

// Cómo obtener una lista de un objeto iterable

const str = 'Hola soy eliseo'
console.log(str[9]) //e
console.log([...str]) // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'e', 'l', 'i', 's', 'e', 'o']

const ar_str = Array.from(str)
console.log(ar_str) // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'e', 'l', 'i', 's', 'e', 'o']
console.log(str.split('')) // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'e', 'l', 'i', 's', 'e', 'o']

const set = new Set([1, 2, 3, 'hola', true])
console.log(set) // Set { 1, 2, 3, "hola", true }
const ar_set = Array.from(set)
console.log(ar_set) // [ 1, 2, 3, "hola", true ]

const arrrnew = [1, 2, 3, 4, 5, 6, 0, 12, 2, 'hola']
console.log([...new Set(arrrnew)]) // [ 1, 2, 3, 4, 5, 6, 0, 12, "hola" ]

const keys = array.keys(array)
console.log(keys) // ArrayIterator { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10 }
