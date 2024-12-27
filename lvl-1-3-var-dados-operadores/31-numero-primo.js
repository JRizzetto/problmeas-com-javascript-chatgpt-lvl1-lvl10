/*
Problema 31 - Level 3
Descrição:
Crie uma função que recebe um array de números inteiros e retorna um novo array contendo apenas os números primos.

Requisitos:

A entrada será um array com números inteiros (positivos, negativos e zero).
Valide a entrada para verificar se o array contém apenas números.
Ignore valores não numéricos ou números fora do array ao validar.
A saída deve ser um novo array com os números primos da entrada.

*/


function isPrime(num) {
    if (num <= 1) return false;
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}

function primeNumber(input = []) {
    input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "a", "b", "c"];

    let resultArray = input.filter(e => {
        const number = Number(e);
        return !isNaN(number) && isPrime(number);
    });

    console.log(resultArray);
}


primeNumber()