/* Biblioteca de palavras que serão usadas no jogo */
let biblioteca_palavras = ["SOL", "ESCOLA", "ORELHA", "ACOMPANHAR", "ESTUDO", "FACIAL", "REDES", "AMERICANO"];

/* Sortea uma palavra da biblioteca de palavras para começar o jogo */
var palavra = biblioteca_palavras[Math.floor(Math.random() *  7)];

/* Recebe o tamanho da palavra para começar a colocar a quantidade certa de underlines */
var tamanho_palavra = palavra.length;

/* nesta array ficará as letras acertadas */
letras_advinhadas = [];

function substituirUnderline(letra, indice){
    const li = Array.from(document.querySelectorAll("li"))

    li.forEach((li) => {
        if(li.id == indice){
            li.textContent = '';
            li.textContent = letra;
        }
    })
}

function compararLetraEscolhida(letra){

    for(let j = 0; j <= tamanho_palavra - 1; j++){
            console.log("passou aqui");
            if(letra == palavra[j]){
                letras_advinhadas[j] = letra;
                substituirUnderline(letras_advinhadas[j], j);
            }
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
    receberLetras();
    console.log(palavra);
}

main();


