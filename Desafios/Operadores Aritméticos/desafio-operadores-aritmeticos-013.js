/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

function generateColor(){
  // Desenvolva seu código nessa função
  let autommaticColor = Math.floor(Math.random() * 256);
  return `rgb(${autommaticColor}, ${autommaticColor}, ${autommaticColor})`
}

module.exports = generateColor;
