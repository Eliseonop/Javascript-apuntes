// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

const listaCompra = ['Leche', 'Huevos', 'Pan', 'Carne', 'Aceite', 'Crema']

listaCompra.push('Aceite de Girasol')

listaCompra.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
  { titulo: 'Volver al futuro', director: 'Robert Zemeckis', fecha: '1985' },
  { titulo: 'Destino Final', director: 'Ridley Scott', fecha: '2000' },
  { titulo: 'Avencer', director: 'Christopher Nolan', fecha: '2012' }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const listaPeliculas2 = listaPeliculas.filter(pl => pl.fecha > 2010)
console.log(listaPeliculas2)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPeliculas.map(pl => pl.director)
console.log(listaDirectores)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = listaPeliculas.map(pl => pl.titulo)
console.log(listaTitulos)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresTitulos = listaDirectores.concat(listaTitulos)
console.log(listaDirectoresTitulos)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const nuevaLista = [...listaDirectores, ...listaTitulos]
console.log(nuevaLista)
