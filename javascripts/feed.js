const nome = sessionStorage.getItem("nomeUsuario");
document.querySelector('.textoheader').innerHTML = `Olá, seja bem vindo ${nome}, poste uma foto!`

async function exibirPosts() {
    const response = await fetch("https://foodgram-back.herokuapp.com/posts");
    const arrayDeFotos = await response.json();  
    let sessaoFotos = document.querySelector("section");  
    for (let i = 0; i < arrayDeFotos.length; i++) {
      let post = `
          <div class="post">
          <div class="textopost">Por: ${arrayDeFotos[i].user}</div>
          <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" alt="" />
          </div>`;  
      sessaoFotos.insertAdjacentHTML("afterbegin", post);
    }
  }

  exibirPosts();
  