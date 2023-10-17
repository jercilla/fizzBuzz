/*
  By josu.oyanguren@gmail.com
    +joseba.ercilla@gailen.es
*/
function check(given, fizzBuzz, expected) {
  let actual = fizzBuzz(given)
console.log(actual)
  let message = `Dado ${given}, cuando calculamos su fizzBuzz, obtendremos ${expected}`
  let outputNode = document.querySelector('#output')
  let className = 'test-ok'
  let testMessage = ''
  if (actual !== expected) {
    className = 'test-fail'
    testMessage = `\n              Se esperaba ${expected}, pero el resultado es ${actual}`
  }
  outputNode.innerHTML += `<div class="${className}">${message}</div>`
  outputNode.innerHTML += `<div class="test-message">${testMessage}</div>`
}

function clearOutput() {
  document.querySelector('#output').innerHTML = ''
}

function main() {
  let outputNode = document.querySelector('#output')
  let output = ''

  output += `<ol>`
  for (let i = 1; i <= 100; i++) {
    output += `<li>${fizzBuzz(i)}</li>`
  }

  output += `</ol>`
  outputNode.innerHTML = output
}
