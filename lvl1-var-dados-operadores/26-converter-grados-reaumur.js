/*
Problema 26: Conversão de Temperatura em Grados Reaumur

Descrição: 
Crie uma função que converta uma temperatura dada em graus Celsius para Reaumur e vice-versa.

O programa deve pedir ao usuário para inserir um valor e escolher a unidade de origem (Celsius ou Reaumur). 
Em seguida, o programa deve exibir o valor convertido para a outra unidade.

Exemplo de Conversões:

Celsius para Reaumur: Reaumur = Celsius × 4/5
Reaumur para Celsius: Celsius = Reaumur × 5/4
*/

function conversionNumber(input){
    input = parseFloat(prompt("Enter a number to conversion."));

    if(isNaN(input)){
        console.log("Error! Please, enter a valid number.");
        return;
    }

    let typeConversion = prompt(`Enter "A" to Celsius or "B" to Reaumur`).toLocaleLowerCase();

    // if(typeConversion === "a"){
    //     console.log(`The conversion from Celcius to Reaumur is: ${input * (4/5)}°Reaumur`)
    // }else if(typeConversion === "b"){
    //     console.log(`The conversion from Reaumur to Celcius is: ${input * (5/4)}°C`)
    // }else{
    //     console.log("Invalid choice, try again!")
    //     return
    // }

    // switch(typeConversion){
    //     case "a":
    //         console.log(`The conversion from Celcius to Reaumur is: ${input * (4/5)}°Reaumur`);
    //         break;
    //     case "b":
    //         console.log(`The conversion from Reaumur to Celcius is: ${input * (5/4)}°C`);
    //         break;
    //     default:
    //         console.log("Invalid choice, try again!")
    // }

    typeConversion === "a" ? 
    console.log(`The conversion from Celsius to Reaumur is: ${input * (4/5)}°Reaumur`):
    (typeConversion === "b" ? console.log(`The conversion from Reaumur to Celsius is: ${input * (5/4)}°C`): 
    console.log("Invalid choice, try again!"));
}

conversionNumber();