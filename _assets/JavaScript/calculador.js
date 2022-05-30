/* Coleta de numeros */
let numberOne = prompt("Digite um numero: ");
let numberTwo = prompt("Digite outro numero: ");

/* Transformando em number */
let numberOneMod = parseFloat(numberOne);
let numberTwoMod = parseFloat(numberTwo);

/* Função de calculo */
function calc(num1, num2) {
    /* Igualdade */
    if (num1 == num2) {
        alert(`Os numeros ${num1} e ${num2} são iguais!`);
    } else {
        alert(`Os numeros ${num1} e ${num2} não são iguais!`);
    };

    /* Soma */
    let sum = num1 + num2;
    alert(`A soma entre ${num1} e ${num2} é igual a ${sum} `);

    /* Subtração */
    let subtraction = num1 - num2;
    alert(`A subtração entre ${num1} e ${num2} é igual a ${subtraction} `);

    /* Divisão */
    let division = num1 / num2;
    alert(`A divisão entre ${num1} e ${num2} é igual a ${division} `);

}

calc(numberOneMod, numberTwoMod);