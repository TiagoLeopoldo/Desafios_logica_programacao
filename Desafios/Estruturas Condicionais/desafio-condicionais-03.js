/*

03 - Mostre a classe do aventureiro

O Devs tem um grupo de aventureiros. 

Quando o nome de algum é invocado, a classe a qual essa pessoa faz parte é apresentada.

Escreva um algoritmo que recebe o nome de um aventureiro e, de acordo com este nome, retorna o nome da sua classe conforme tabela baixo:

|  Aventureiro  |       Classe        |

|   Tunico      |  Mestre dos Magos   |
|   Cremoso     |  Cavaleiro Negro    |
|   Gordinho    |  Pirata             |
|   Lobo        |  Solitário Samurai  |
|   Ousado      |  Mago               |
|   Anjo        |  Loiro Clérigo      |

Caso o nome informado não faça parte do esquadrão, retorne:
----------------------------
"Aventureiro não encontrado"
----------------------------

 */

function findAdventurous(adventurous) {
  // Desenvolva seu código nessa função
  switch (adventurous) {
    case 'Tunico':
      return 'Mestre dos Magos';
    case 'Cremoso':
      return 'Cavaleiro Negro';
    case 'Gordinho':
      return 'Pirata';
    case 'Lobo Solitário':
      return 'Samurai';
    case 'Ousado':
      return 'Mago';
    case 'Anjo Loiro':
      return 'Clérigo';
    default:
      return 'Aventureiro não encontrado'
  }
}

module.exports = findAdventurous;
