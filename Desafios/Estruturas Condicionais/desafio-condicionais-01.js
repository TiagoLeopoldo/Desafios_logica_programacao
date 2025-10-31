/*

01 - Lanchonete do Devs

O Devs abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:

"1 - Devs Lanche Feliz"
"2 - McDevs"
"3 - DevsWooper"
"4 - X-Devs"
"5 - Triplo Devs com JS"

Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
-------------------------------
"Não temos esta opção ainda :("
-------------------------------

Utilize Switch/Case para resolver este problema.

*/

function optionsMenu(number) {
  // Desenvolva seu código nessa função
  switch (number) {
    case 1:
      return `${number} - Devs Lanche Feliz`;
    case 2:
      return `${number} - McDevs`;
    case 3:
      return `${number} - DevsWooper`;
    case 4:
      return `${number} - X-Devs`;
    case 5:
      return `${number} - Triplo Devs com JS`;
    default:
      return "Não temos esta opção ainda :("
  }
}

module.exports = optionsMenu;
