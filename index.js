import { multiplica, suma } from './controller.js'
import chalk from 'chalk'

const Suma1 = suma(1, 2)

const Suma2 = suma(4, 5)

const green = chalk.bold.green
const magenta = chalk.bold.magenta

console.log(magenta('Suma1: '), green(Suma1))
console.log(green(`Suma1: ${Suma2}`))

// axios
//   .get('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(response => {
//     console.log('Success')
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
