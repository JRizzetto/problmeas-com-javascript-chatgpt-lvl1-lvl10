/*
Problema 27: Sequência de Fibonacci
Descrição: Crie uma função que receba um número inteiro positivo 
𝑛 n e retorne a sequência de Fibonacci com 𝑛 n elementos.

A sequência de Fibonacci começa com 0 e 1.
Cada número subsequente é a soma dos dois anteriores.
Exemplo:

Para 𝑛 = 5
n=5, o resultado deve ser: [0, 1, 1, 2, 3].

Para 𝑛 = 8
n=8, o resultado deve ser: [0, 1, 1, 2, 3, 5, 8, 13].

Regras:

Caso o usuário insira um número inválido (negativo ou não inteiro), exiba uma mensagem de erro e encerre a função.
A função deve validar que 𝑛 n seja maior que 0.
Dicas:

Use loops ou recursão, conforme sua preferência.
O método mais eficiente geralmente é usar um loop iterativo.
*/

function fiboSequence(input) {
    // input = parseFloat(prompt("Enter a number integer and positive"))

    input = 10
    let arrayFibo = [0, 1];

    if (isNaN(input) || input < 0 || !Number.isInteger(input)) {
        console.log(`Please, enter a valid number!`);
        return;
    }else{
        for(let i = 2; i <= input; i++) {
            arrayFibo.push((arrayFibo[i - 1]) + arrayFibo[i - 2])   
        }
    }

    return console.log(`The Finbonacci squence is ${arrayFibo.join(', ')}.`);
 
}

fiboSequence()