/*

Problema 33 - Level 4
Crie uma função que ordene os elementos de um array de números em ordem crescente e decrescente.
A função deve ser genérica o suficiente para ser reutilizada, aceitando uma string como parâmetro indicando o tipo de ordenação:
('asc' para crescente ou 'desc' para decrescente).

Requisitos
A entrada será um array de números e uma string indicando o tipo de ordenação.
Ex.: [5, 1, 4, 2, 8] e 'asc'.

Valide se o array contém apenas números.

Retorne o array ordenado de acordo com a especificação.

Retorne uma mensagem de erro caso:

O array esteja vazio.
Não contenha apenas números.
O parâmetro de ordenação seja inválido.


*/

// function orderElements(array, order = '') {

//     if(array.length < 1 || array.some(e => isNaN(e))){
//         console.log("Empty array or invalid number. Please, enter a valid numbers!");
//     } 

//     if(order === 'asc') {
//         array.sort((a, b) => a - b); 
//     }else if(order === 'desc') {
//         array.sort((a, b) => b - a);
//     }else {
//         console.log(`Invalid order. Please use 'asc or 'desc.`)
//     }

//     return array
// }

// console.log(orderElements([5, 1, 4, 2, 8, 'a', 'b'], 'asc'));
// console.log(orderElements([5, 1, 4, 2, 8], 'desc'));

function orderElements(array, order = '') {

    let arrayMap = array.map(e => parseInt(e));
    let arrayFilter = arrayMap.filter(e => !isNaN(e));

    if(arrayFilter.length < 1) {
        console.log("Empty array. Please, enter a valid numbers!");
    }

    if(order === 'asc') {
        arrayFilter.sort((a, b) => a - b); 
    }else if(order === 'desc') {
        arrayFilter.sort((a, b) => b - a);
    }else {
        console.log(`Invalid order. Please use 'asc or 'desc.`)
    }

    return arrayFilter
}

console.log(orderElements([5, 1, '4', 2, 8, 'a', 'b'], 'asc'));
console.log(orderElements([5, 1, 4, '2', 8, 'a', 'b'], 'desc'));