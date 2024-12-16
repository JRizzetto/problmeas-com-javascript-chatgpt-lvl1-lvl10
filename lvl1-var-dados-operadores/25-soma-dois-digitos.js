/*
Problema 25: Soma dos Dígitos de um Número
Descrição: Crie uma função que receba um número inteiro positivo e retorne a soma dos dígitos desse número. Caso o usuário insira um valor inválido (não seja um número ou não seja inteiro), deve ser exibida uma mensagem de erro.

Requisitos:

Solicitar ao usuário que insira um número inteiro.
Garantir que a entrada seja um número positivo e inteiro.
Calcular a soma de seus dígitos.
Exibir o resultado ao usuário.
Mostrar uma mensagem de erro para valores inválidos.
Exemplo:

Entrada: 123
Saída: A soma dos dígitos é 6.
*/

function integeNumber(number) {
    number = parseFloat(prompt("Enter a integer number."));

    if(isNaN(number) || number < 0 || !Number.isInteger(number)){
        console.log("Please, enter a valid number.");
        return 
    }

    let sum = number.toString().split('').reduce((acumulador, atual) => acumulador + parseInt(atual), 0)

    alert(`The sum is ${sum}.`);
    
}

integeNumber()