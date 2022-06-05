function retornaArr(arr, num) {   
    try{
    if (!arr && !num) throw new ReferenceError("Parâmetros não enviados corretamente!");

    if (typeof arr !== 'object') throw new TypeError("Array não definida corretamente!");

    if (typeof num !== 'number') throw new TypeError("Numero não definido corretamente!");

    if (arr.length !== num) throw new RangeError("Numero não definido corretamente em comparação a array!");

    return arr;
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log(e.stack)
        } else {
            console.log(e)
        }
    }

}

const arr = [29, 89, 90];
const num = 2;


console.log(retornaArr(arr, num))
