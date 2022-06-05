const pessoas = [
    {
        nome: 'Marcos',
        idade: 18,
    },
    {
        nome: 'Maria',
        idade: 12,
    },
]

const filmes = [
    {
        nome: 'Cavaleiro de Metal',
        indicacao: 16,
    },
    {
        nome: 'As nuvens falam',
        indicacao: 10,
    },
    {
        nome: 'Horror no pantano',
        indicacao: 18,
    },
]

function verificacaoIdade(filmes, pessoa) {
    
    const {idade} = pessoa;
    const {indicacao} = filmes;

    if(idade < indicacao) {
        return `Você tem ${idade} anos e não tem idade para ver esse filme. Poderá ver daqui ${indicacao - idade} anos`;
    } else {
        return `Você tem ${idade} anos e pode ver este filme.`;
    }
}

console.log(verificacaoIdade(filmes, pessoas));