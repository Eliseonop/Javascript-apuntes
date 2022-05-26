class Persona {
  //Private -> #
  #nombre
  #edad
  #obtenEdad

  //Protected -> _
  _isDeveloper
  constructor (nombre, edad) {
    this.#nombre = nombre
    this.#edad = edad
    this._isDeveloper = true
  }

  saludo () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
  }
  obtenNombre () {
    return this.#nombre
  }
  #obtenerEdad () {
    return this.#edad
  }
}

const nuevaPersona = new Persona('Gorka', 34)
console.log(nuevaPersona)
console.log(nuevaPersona)

//Geter --> métodos para acceder a los atributos/m+etodos privados o protegidos

//Setter --> métodos para modificar los atributos/métodos privados o protegidos
