//sobre carga de funciones

function saludar () {
  hola()
}
function hola () {
  console.log('hola')
}
saludar()
//forma ilustrativa de como funciona la caga de funciones

//1.- global()
//2.- saludar() global()
//3.- hola() saludar() global()
//4.- saludar() global()
//5.- global()

function rescursiva () {
  rescursiva()
}
