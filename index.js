class Estudiante {
  #nombre
  #asignaturas = ['Javascript', 'HTML', 'CSS']
  constructor (nombre) {
    this.#nombre = nombre
  }
  obtenDatos () {
    return {
      nombre: this.#nombre,
      asignaturas: this.#asignaturas
    }
  }
}
const estudiante_1 = new Estudiante('Gorka')
console.log(estudiante_1.obtenDatos())
