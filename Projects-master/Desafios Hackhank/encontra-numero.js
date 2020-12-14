function encontraNumero(arr, k) { //Essa função recebe um array de inteiros e o segundo parâmetro é o número que deseja verificar
    if (arr.indexOf(k)>-1){ //Compara se há o número no array, desde que este seja maior que -1
        return "YES" //Retorna sim caso a condição seja verdadeira
    }else{//Senão
        return "NO"//Retorna negativo caso não haja nenhum número no array igual
    }
}
console.log(encontraNumero([1,2,3,4,5,6,7,8,9,10], 11))//Neste caso vai retornar NO pois 11 não tem no array
console.log(encontraNumero([1,2,3,4,5,6,7,8,9,10], 10))//Neste caso vai retornar YES pois 10 tem no array