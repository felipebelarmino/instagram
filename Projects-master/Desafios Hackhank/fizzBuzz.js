function inteiros (n){ //Função que recebe um número inteiro
    for (let i = 1; i <n; i ++){
        if (i % 3 === 0 && i % 5 === 0){//Caso o número seja inteiro e multiplo de 3 e 5 imprime "FizzBuzz"
            console.log("FizzBuzz") 
        } else if (i % 3 === 0 && i % 5 !== 0){//Caso o número seja inteiro e multiplo apenas de 3 imprime "Fizz"
            console.log("Fizz")
        } else if (i % 3 !== 0 && i % 5 === 0){//Caso o número seja inteiro e multiplo apenas de 5 imprime "Buzz"
            console.log("Buzz")
        } else {
            console.log(i) //Imprime os demais número que não sejam múltiplos de 3 ou 5
        }
    }
 }
 console.log(inteiros(15))//Chama a função inteiros(número desejado)