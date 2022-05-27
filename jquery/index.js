//$(selector).hide(speed,callback);

// $('li').hide()

//$(document).ready(callback);
// Ambos ejemplos son iguales pero el segundo es una forma mas sinplificada
$(() => {
  //selectores:
  // id="el-1" => "#el-1 "
  // class="el-2" => ".el-2"
  //   $('h1').hide(1000)
  $('.hide-btn').click(() => {
    $('h1').hide(500)
    // $('h1').fadeIn()
  })
  $('.show-btn').click(() => {
    $('h1').show(500)
  })
  $('li').dblclick(() => {
    $('h1').css({ color: 'red' })
  })
  $('.new-element').click(() => {
    $('ul').prepend('<li>Nuevo elemento</li>')
  })
  $('li').mouseenter(elem => {
    elem.target.style.color = 'blue'
  })
  $('li').mouseleave(elem => {
    elem.target.style.color = 'black'
  })
})
