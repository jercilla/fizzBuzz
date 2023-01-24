/*
  By josu.oyanguren@gmail.com
*/
function check(result, expected, message) {
  let outputNode = document.querySelector('#output')
  let className = 'test-ok'
  let testMessage = ''
  if (result !== expected) {
    className = 'test-fail'
    testMessage = `\n              expected ${expected} but was ${result}`
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
