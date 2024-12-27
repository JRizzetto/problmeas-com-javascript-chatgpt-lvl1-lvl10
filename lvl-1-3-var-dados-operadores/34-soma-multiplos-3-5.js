/*
Problema 34: Soma dos múltiplos de 3 ou 5
Enunciado: Crie uma função que retorne a soma de todos os múltiplos de 3 ou 5 abaixo de um determinado número n. 
Você deve verificar todos os números menores que n e somar aqueles que são divisíveis por 3 ou 5.

Requisitos:
A entrada será um número inteiro n.
Retorne a soma de todos os múltiplos de 3 ou 5 menores que n.
Caso o número seja negativo ou menor que 3, o retorno deve ser 0.
Exemplo:
Entrada: 10
Saída: 23
Justificativa: Os múltiplos de 3 ou 5 abaixo de 10 são: 3, 5, 6, 9. A soma é 3 + 5 + 6 + 9 = 23.

Entrada: 20
Saída: 78
Justificativa: Os múltiplos de 3 ou 5 abaixo de 20 são: 3, 5, 6, 9, 10, 12, 15, 18. A soma é 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78.
*/

function multipleSum(num) {

    let acumulator = [];
    let sum = 0

    if(!Number.isInteger(num)) {
        console.log("Invalid number! Please, enter a integer number!");
        return 
    }else if(num < 3) {
        console.log("Small number! Please, enter a bigger number!")
        return 0
    }else{
        for(let i = 3; i < num; i++) {
            if(i % 3 === 0 || i % 5 === 0){
                acumulator.push(i);
                sum += i;
            }
        }
    }

    return `The accumulation numbers diviseble for three and five smaller than ${num} are: ${acumulator.join(", ")}. The sum is ${sum}.`
}

console.log(multipleSum(20))