//funciones generadoras

function * generaId () {
  let id = 0
  while (true) {
    id++
    yield id //se va a quedar esperando hasta que se vuelva a llamar
    if (id > 10) {
      return
    }
  }
}
const gen = generaId()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
