//Funciones tipo flecha - funciones anónimas

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = array.map(a => a * 2)

console.log(array2)

//diferencia de funciones tipo flecha y funciones normales

const doble = valor => valor * 2 //tenemos que declarar la funcion antes de usarla
console.log(doble(6))
console.log(dobleDelValor(6))

function dobleDelValor (valor) {
  //las funciones normales no tienen que declarar la funcion antes de usarla
  return valor * 2
}
