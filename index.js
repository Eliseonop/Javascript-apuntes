// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let alturaCentimetros = 171
let alturaMetros = alturaCentimetros / 100
let pesoKilogramos = 65.3

const alturaMetrosRedondeado = Math.ceil(alturaMetros)
const pesoKilogramosRedondeado = Math.floor(pesoKilogramos)
const maximoValor = Number.MAX_VALUE
const maximoValorMasUno = maximoValor + 1
const iguales = maximoValor === maximoValorMasUno
console.log(iguales) // true
