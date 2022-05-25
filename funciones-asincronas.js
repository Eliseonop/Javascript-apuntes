//Funciones asíncronas

function miAsync () {
  //haceuna llamada a una base de datos externa
  //puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
  //Si está todo correcto
  const i = Math.floor(Math.random() * 2)
  if (i !== 0) {
    resolve()
  } else {
    reject()
  }
})

miPromesa
  .then(() => console.log('Todo correcto'))
  .catch(() => console.log('Algo salió mal'))
  .finally(() => console.log('Finalmente'))
