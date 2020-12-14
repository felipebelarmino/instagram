function parImpar(l, r) {  //Essa função recebe dois parâmetros (l:primeiro número inteiro,r:segundo número inteiro)   
    let array = [] //Array vazio, servirá para armazenar nosso número Ímpares.
    for (let i = l; i< r+1; i++){ // Estrutura de repetição For (r+1 é para considerar a última posição do array como o próximo numero)
      if ([i]%2 === 1){ //Caso a posição "i" seja impar (dividir qualquer numero inteiro por 2 a sobra deve ser 1 para Ímpar e 0 Par)
        array.push(i)//Insere dentro do array o número ímpar
      }
    }
    return (array)//Retorna o array com todos os números impares encontrados no intervalo de (l,r)
}
//Altere abaixo os números, a função retornará todos os números impares entre o primeiro e o segundo número.
console.log(parImpar(5,19))