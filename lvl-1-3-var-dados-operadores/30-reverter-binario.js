/*
Problema 30 - Level 3
Crie uma função que converta uma string binária (composta apenas de 0 e 1) para um número decimal. 
A função deve validar a entrada e retornar uma mensagem de erro caso a string contenha caracteres inválidos.

Requisitos
A entrada será uma string representando um número binário (ex.: "1101").
Valide se a string contém apenas 0 e 1.
Retorne o número decimal correspondente ao binário.
Em caso de entrada inválida, exiba a mensagem "Invalid binary input".
Exemplo
Entrada: "1101"
Saída: 13

Entrada: "10201"
Saída: "Invalid binary input"
*/

function binaryNumber(input) {
    input = prompt("Enter a binary number!");

    let arrayInput = input.split("").map(Number).reverse();
    
    let result = 0


    for(let i = 0; i < arrayInput.length; i++) {
        if(arrayInput[i] !=  0 && arrayInput[i] !=  1){
            console.log("Invalid binary input")
            return
        }else {
            let interacao = (2 ** i) * arrayInput[i]
            result += interacao;
        }
    }

    return console.log(result)
}

binaryNumber()