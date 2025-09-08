const botaoMostrarPalavras = document.querySelector("#botao-palavrachave")
botaoMostrarPalavras.addEventListener("click" , MostraPalavrasChave);
function MostraPalavrasChave(){
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
campoResultado.textContent = texto;
const palavras = texto.split(" ");
campoResultado.textContent = palavras.join(" , ");
}