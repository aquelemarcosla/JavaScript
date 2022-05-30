/* Coletando numeros */

    /* Coleta */
let numberOne = prompt("1 -Digite um numero: ");
let numberTwo = prompt("2 - Digite outro numero: ");
let numberThree = prompt("3 - Digite outro numero: ");
let numberFour = prompt("4 - Digite outro numero: ");
let numberFive = prompt("5 - Digite outro numero: ");
let numberSix = prompt("6 - Digite outro numero: ");

    /* Modificação para number */
var numberOneMod = parseInt(numberOne);
var numberTwoMod = parseInt(numberTwo);
var numberThreeMod = parseInt(numberThree);
var numberFourMod = parseInt(numberFour);
var numberFiveMod = parseInt(numberFive);
var numberSixMod = parseInt(numberSix);

    /* Transformando em array */
var listNumber = [numberOneMod, numberTwoMod, numberThreeMod, numberFourMod, numberFiveMod, numberSixMod];

    /* Função para trocade pares*/
function substituiPares(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            alert("Você ja é zero.");
        } else if(numbers[i] % 2 == 0) {
            alert(`Substituido ${numbers[i]} por 0..`)
            numbers[i] = 0;
        }
    }
    return numbers;
}

substituiPares(listNumber);

