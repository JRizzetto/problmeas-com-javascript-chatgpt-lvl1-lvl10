/*
Problema 29 - Level 3

Desafio: Números Perfeitos
Um número perfeito é um número inteiro positivo que é igual à soma de todos os seus divisores positivos, excluindo ele mesmo. Por exemplo:

6 é perfeito porque 6 = 1 + 2 + 3.

28 é perfeito porque 28 = 1 + 2 + 4 + 7 + 14.

Seu Objetivo
Crie uma função que receba um número inteiro positivo como entrada.

Determine se o número é perfeito.
Retorne uma mensagem como:
Exemplo 1: "6 is a perfect number. Divisors: 1, 2, 3."
Exemplo 2: "8 is not a perfect number. Divisors: 1, 2, 4."

Dicas:

Use um loop para encontrar os divisores.
Adicione os divisores em um array e também os some para verificar se o número é perfeito.
Valide se a entrada é positiva e um número inteiro (seguindo a lógica dos exercícios anteriores).
*/

function perfectNumber(input) {
    // input = parseFloat(prompt("Enter a number to verify is perfect number!"))

    input = 28;
    result = 0;
    resultArray = [];

    if(isNaN(input) || input < 1 || !Number.isInteger(input)){
        console.log(`${input} is not a valid number!.`);
        return 
    }

    for(let i = 1; i < input; i++) {
        if(input % i == 0){
            result += i
            resultArray.push(i)
        }
    }

    if(result === input) {
        return console.log(`${input} is a perfect number! Your divisors are ${resultArray.join(', ')}`);
    }else{
        return console.log(`${input} is not a perfect number! Your divisors are ${resultArray.join(', ')}`);
    }
}

perfectNumber()