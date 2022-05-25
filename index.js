// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// - Una función generadora de índices pares automáticos

function sinParametros () {
  return true
}

function asincrona () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

asincrona()
  .then(() => console.log('Se cumplio la promesa'))
  .catch(() => console.log('Algo salió mal'))

function * generarIndicesPares () {
  let i = 0
  while (true) {
    i = i + 2
    yield i
  }
}
const generar = generarIndicesPares()
console.log(generar.next().value)
console.log(generar.next().value)
