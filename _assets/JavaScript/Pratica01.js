const alunos = [
    {
        nome: 'Marcos',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Eduardo',
        nota: 4,
        turma: '2B',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '3B',
    },
    {
        nome: 'Jorge',
        nota: 3,
        turma: '1B',
    },
];

function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++){

        const {nota, nome} = alunos[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
};

console.log(alunosAprovados(alunos, 5))