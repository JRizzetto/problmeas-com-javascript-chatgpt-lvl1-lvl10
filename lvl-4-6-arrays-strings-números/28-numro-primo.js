/*
Próximo Problema
Problema 28 - Level 4: Números Primos
Crie um programa que peça um número inteiro ao usuário e verifique se ele é um número primo:

Caso seja primo, exiba uma mensagem informando isso.
Caso não seja primo, informe que não é primo e liste os divisores dele.
Valide a entrada para aceitar apenas números inteiros e positivos.
*/


function primeNumber(input) {
    // input = parseFloat(prompt(input))

    input = 17
    arrayPrime = []

    if(isNaN(input) || !Number.isInteger(input) || input < 1) {
        console.log("This number isn't a valid number, enter a valid number!")
        return
    }

    if(input === 2){
        console.log(`${input} is a prime number!`)
        return
    }

    for(let i = 2; i < input; i++) {
        if(input % i === 0){
            arrayPrime.push(i);
        }
    }

    if(arrayPrime.length > 0){
        return console.log(`${input} isn't a Prime Number and is divisible to ${arrayPrime.join(', ')}, ${input}.`);
    }else {
        return console.log(`${input} is a prime number.`);
    }
    
}

primeNumber()