/*

06 - Taxa Metabólica Basal

Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.

Escreva um algoritmo que recebe os dados a seguir:
* age: número maior que 0
* sex: M ou F
* weight: Em (kg) com número maior que 0
* height: Em (cm) com número maior que 0

Fórmula para homens:
* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

Fórmula para mulheres:
* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

O retorno deve ser no seguinte formato:
---------------------------------------
"A taxa metabólica basal é: x Kcal"
---------------------------------------

*/

function basalMetabolicRate(age, sex, weight, height){
  // Desenvolva seu código nessa função
  const ageInfo = age > 0 ? age : '';
  const sexInfo = sex === 'M' || sex === 'F' ? sex : '';
  const weightInfo = weight > 0 ? weight : null;
  const heightInfo = height > 0 ? height: null;
  let metabolicRate = 0;

  if (sexInfo === 'M') {
    metabolicRate = (heightInfo * 6.25) + (weightInfo * 9.99) - (ageInfo * 4.92) + 5;
    return `A taxa metabólica basal é: ${metabolicRate.toFixed(2)} Kcal.`;
  } else if (sexInfo === 'F') {
    metabolicRate = (heightInfo * 6.25) + (weightInfo * 9.99) - (ageInfo * 4.92) - 161;
    return `A taxa metabólica basal é: ${metabolicRate.toFixed(2)} Kcal.`;
  }
}

module.exports = basalMetabolicRate;
