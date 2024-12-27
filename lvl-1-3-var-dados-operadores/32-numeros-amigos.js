/*
Problema 32 - Level 3
Descrição:
Crie uma função que determine se dois números fornecidos como entrada são números "amigos". 
Dois números são considerados amigos quando a soma dos divisores próprios de um deles é igual ao outro e vice-versa.

Requisitos:

A função deve receber dois números inteiros positivos.
Retorne true se os números forem amigos, ou false caso contrário.
Se os números não forem válidos, exiba a mensagem: 
"Invalid input: Both numbers must be positive integers."

Exemplo:

Entrada: 220, 284

Saída: true (Os divisores próprios de 220 somam 284, e os de 284 somam 220)

Entrada: 1184, 1210

Saída: true

Entrada: 10, 20

Saída: false
*/

function firstNumber(num1){

    if(typeof num1 !== "number" || Number.isInteger(num1) || num1 < 0) {
        console.log("Invalid input: Both numbers must be positive integers")
        return
    }

    let arrayResult = [];
    
    for(let i = 0; i <= (num1 / 2); i++) {
        if(num1 % i === 0) {
            arrayResult.push(i)
        }
    }

    let arraySum = arrayResult.reduce((sum, current) => {
        sum += current;
        return sum;
    })
    
    return [arraySum, arrayResult, num1];
}


function mainFunction() {
    let first = firstNumber(220);
    let second = firstNumber(284);

    if(first[0] === second[2] && second[0] === first[2]) {
        console.log("True, the own divisors of the 220 are 284, and the own divisors of the 284 are 220.");
    }else{
        console.log("false, the divisors are diferents.");
    }
}

mainFunction()