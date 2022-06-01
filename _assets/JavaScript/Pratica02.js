function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade +  anos} anos de idade.`;
    
}

const pessoa1 = {
    nome: 'Marcos',
    idade: 18,
}

const pessoa2 = {
    nome: 'Maria',
    idade: 78,
}

console.log(calculaIdade.call(pessoa1, 15));
console.log(calculaIdade.apply(pessoa2, [2]));