/*

08 - Conta do restaurante

Escreva um algoritmo que recebe o valor de um prato, calcule e retorne o valor final dele acrescendo 10% de taxa por ser uma área turística e mais 5% de gorjeta para o garçon.

Obs: Retornar um valor do tipo number com duas casa decimais.
Obs2: Dependendo do método usado para arredondar o tipo da sua variável, o valor retornado pode mudar, e aqui o retorno DEVE ser do tipo NUMBER. Talvez seja preciso converter para number ao final.

*/

function restaurantExpenses(account){
  // Desenvolva seu código nessa função
  const touristTax = 0.1;
  const tipTax = 0.05;
  const accountWithTax = account + (account * touristTax);
  const accountFinalValue = accountWithTax + (accountWithTax * tipTax);

  return Number(accountFinalValue.toFixed(1));
}

module.exports = restaurantExpenses;
