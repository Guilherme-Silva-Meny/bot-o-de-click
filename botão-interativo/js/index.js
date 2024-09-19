// pega os elementos do botão "Sim" e "Não"
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("Erro");
//função que move o botão "Não" para um nova posição
botaoNao.addEventListener("mouseover", function(){
    //move o botão "Não" aletatoriamente na tela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";
    // exibe a margem de erro
    mensagemErro.style.display = "block";
});
// manter o botão sim fixo
botaoSim.addEventListener("click", function(){
    alert("Otima escolha! Minha Chave PIX é o N° do celular!")
});