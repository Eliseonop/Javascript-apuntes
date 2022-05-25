// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = {
    nombre: 'Edu',
    apellido:'Falcon',
    edad: '21',
    altura: '1.70',
    eresDesarrollador: true
}
const edad = datosPersonales.edad

objetoDatosAmigos = [
    {nombre : 'Luis', apellido: 'Garcia', edad:'22': altura: '1.70', eresDesarrollador: false},
    {nombre : 'Carmen', apellido: 'Lopez', edad:'22': altura: '1.70', eresDesarrollador: false}
]

const nuevaLista = [...objetoDatosAmigos, datosPersonales].sort((a, b) => a.edad - b.edad)
