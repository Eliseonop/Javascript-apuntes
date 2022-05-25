// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fecha = new Date()

const fechaNacimiento = new Date(2000, 11, 22)

const esMasTarde = fechaNacimiento.getDate() > fecha.getDate()

const diaNacimiento = fechaNacimiento.getDay()
const mesNaNacimiento = fechaNacimiento.getMonth()
const anioNacimiento = fechaNacimiento.getFullYear()
