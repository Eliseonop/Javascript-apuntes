let s = 1
primero: while (true) {
  let f = 1

  let total = 1

  dos: while (true) {
    total *= f
    f++
    if (f > s) {
      break dos
    }
  }
  s++
  console.log(total)
  if (f > 10) {
    break primero
  }
}
