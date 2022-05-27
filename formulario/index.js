const f = document.getElementById('formulario')

console.log(f)

f.addEventListener('submit', e => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(f))
  console.log(data)
})
