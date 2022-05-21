// calcular el factorial de 10 utilizando un solo bucle for

for (let i = 1; i <= 10; i++) {
  let total = 1
  for (let j = 1; j <= i; j++) {
    total *= j
  }
  console.log(total)
}
