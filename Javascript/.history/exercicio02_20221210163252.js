/* 
imc = peso / (altura * altura)
abaixo de 18.5 abaixo do peso;
entre 18.5 e 25 peso normal;
entre 30 e 40 Obeso;
acima de 40 obesidade grave;

*/



const peso = 75;
const altura = 1.70;
const imc = peso / Math.pow(altura,2);

console.log(imc);