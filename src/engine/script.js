/* Biblioteca de palavras que serão usadas no jogo */
let biblioteca_palavras = ["SOL", "ESCOLA", "ORELHA", "ACOMPANHAR", "ESTUDO", "FACIAL", "REDES", "AMERICANO"];

/* Sortea uma palavra da biblioteca de palavras para começar o jogo */
var palavra = biblioteca_palavras[Math.floor(Math.random() *  7)];

/* Recebe o tamanho da palavra para começar a colocar a quantidade certa de underlines */
var tamanho_palavra = palavra.length;

/* nesta array ficará as letras acertadas */
letras_advinhadas = [];

/* Define a quantidade de vidas e a exibe na tela */
var vidas = 5;
const textoVidas = "Tentativas restantes: ";
var vidasHtml = document.querySelector("h2");
vidasHtml.textContent = textoVidas + vidas;

function perderJogo(){
    let teclado = document.getElementById("teclado");
    let divPerdeu = document.getElementById("perdeu_jogo");

    if(vidas == 0){
        teclado.className = "esconder";
        divPerdeu.className = "";
    }
}

function descontarVida(){
    vidas--;
    vidasHtml.textContent = textoVidas + vidas;
}

function substituirUnderline(letra, indice){
    const li = Array.from(document.querySelectorAll("li"))

    li.forEach((li) => {
        if(li.id == indice){
            li.textContent = letra;
        }
    })
}

function compararLetraEscolhida(letra){
    let incorreto = 0;

    /* Se a letra estiver correta, substitui o underline na posição correspondente */
    for(let j = 0; j <= tamanho_palavra - 1; j++){
            console.log("passou aqui");
            if(letra == palavra[j]){
                letras_advinhadas[j] = letra;
                substituirUnderline(letras_advinhadas[j], j);
            }else{
                incorreto++;
            }
        }


        if(incorreto == tamanho_palavra){
            descontarVida();
            perderJogo();
        }
}

function receberLetras(){
    const botoes = Array.from(document.querySelectorAll("button"));
    var letra_escolhida;
    botoes.forEach((botao) =>{
        botao.addEventListener("click", () => {
            letra_escolhida = botao.textContent;
            compararLetraEscolhida(letra_escolhida);
        })
    })
}

function atribuirUnderLine(tamanho_palavra){
    let id = 0;

    for(let j = 0; j<= tamanho_palavra; j++){

        /* Atribui '_' a quantidade de vezes correspondente ao tamanho da palavra */
        letras_advinhadas[j] ='_';
    }

    letras_advinhadas.forEach(letra => {
        /* Cria uma lista não ordenada e atribui itens de lista nela */
        let ul = document.querySelector('ul');
        let li = document.createElement('li');

        /* Atribui a letra correspondende ao indice da array há uma li e pendura ela em uma ul, além de atribuir um ID*/
        li.textContent = letra;
        li.id = id;
        ul.appendChild(li);

        id++;

    })

}

function main(){


    /* Chama a função que desenha a forca */
    atribuirUnderLine(tamanho_palavra - 1);
    /* Adiciona event listenner em todos os botões e os adiciona em uma array quando clicados */
    receberLetras();

    console.log(palavra);
}

main();


