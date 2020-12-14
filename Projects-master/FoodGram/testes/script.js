let tagH1 = document.querySelector("h1");
// var campo = document.getElementById("campo");
// tagH1.style.color = "red";
// tagH1.textContent = "Olá pessoal";
// tagH1.setAttribute("class", "texto");
// console.log(campo);
let btnAdd = document.querySelector("#addTarefa"); //classe poe #

function adicionarTarefa() {
  //pesquisar session storage / localStorage https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/
  var inputTarefa = document.querySelector("input");
  var ul = document.querySelector("ul");
  ul.insertAdjacentHTML("beforeend", `<li>${inputTarefa.value}</li>`); //adiciona antes, pode usar after tbm
  //alert(inputTarefa.value); //mostra o conteudo da variavel
  // tagH1.style.display = "none"; //elimina o texto desse campo
  alert("Tarefa cadastrada"); //box com infos
  inputTarefa.value = "";
}
//btnAdd.addEventListener("mouseover", adicionarTarefa);
btnAdd.addEventListener("click", adicionarTarefa); //recebe dois parametros ao clicar
