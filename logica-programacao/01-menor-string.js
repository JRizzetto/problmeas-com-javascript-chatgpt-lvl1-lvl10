/*

Escreva uma função que receba uma string e retorne a menor palavra.

*/

// function smallerWord(){

//     smallerWord = "Eu vc queria ser Desenvolvedor Senior";
//     let resultWord = smallerWord.split(" ");

//     let smaller = resultWord.reduce((menor, atual) => 
//         atual.length < menor.length ? atual : menor
//     );

//     return console.log(smaller)
// }

// smallerWord()

function getSmallerWord(str) {
    if(!str || typeof str != "string") return null
    
    const smallerArray = str.trim().split(" ");

//     let smallerWord = smallerArray[0]
//     for(let i = 1; i < smallerArray.length; i++){
//         if(smallerArray[i].length < smallerWord.length) {
//             smallerWord = smallerArray[i]
//         }
//     }
//     return smallerWord
// 
    let smallerWord = smallerArray.reduce((menor, atual) => {
        if(atual.length < menor.length) {
            return atual
        }
        return menor
    })


    return smallerWord
}

console.log(getSmallerWord("Qual seria menor palavra?"))
console.log(getSmallerWord("digamos quando chega mulher"))