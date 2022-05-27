const nombre = "Juan"
const apellido = "Perez"

const estudiante = nombre + " " + apellido

const estudianteMayus = estudiante.toUpperCase()

const estudianteMinus = estudiante.toLowerCase()

const primeraLetraNombre = nombre.charAt(0)
const ultimaLetraApellido = apellido.charAt(apellido.length - 1)

const estudianteSinEspacios = estudiante.replace(/\s/g, "")
const estudianteContieneNombre = estudiante.includes(nombre)

console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(primeraLetraNombre)
console.log(ultimaLetraApellido)
console.log(estudianteSinEspacios)
console.log(estudianteContieneNombre)
