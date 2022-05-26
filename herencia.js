class Persona {
  _nombre
  _edad
  constructor (nombre, edad, isDeveloper) {
    this._nombre = nombre
    this._edad = edad
  }
  saludo () {
    console.log('Hola, soy ' + this.nombre)
  }
}

class Desarrollador extends Persona {
  constructor (nombre, edad, lenguaje) {
    super(nombre, edad)
    this.lenguaje = lenguaje
  }
  saludo () {
    //Overrride
    super.saludo()
    console.log(' y soy desarrollador de ' + this.lenguaje)
  }
}

const nuevoDev = new Desarrollador('Gorka', 34, 'JavaScript')
console.log(nuevoDev)
nuevoDev.saludo()

//Plimorfismo =>  Varias formas de hacer lo mismo
