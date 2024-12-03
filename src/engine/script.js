function atribuirUnderLine(tamanho_palavra){
    let id = 0;

    for(let j = 0; j<= tamanho_palavra; j++){
        letras_advinhadas[j] ='_';
        console.log(letras_advinhadas[j]); 
    }

    letras_advinhadas.forEach(letra => {
        let ul = document.querySelector('ul');
        let li = document.createElement('li');

        li.textContent = letra;
        li.id = id;
        ul.appendChild(li);

        id++;

    })

}

function main(){

    /* Biblioteca de palavras que serão usadas no jogo */
    let biblioteca_palavras = ["SOL", "ESCOLA", "ORELHA", "ACOMPANHAR", "ESTUDO", "FACIAL", "REDES", "AMERICANO"];

    /* Sortea uma palavra da biblioteca de palavras para começar o jogo */
    let palavra = biblioteca_palavras[Math.floor(Math.random() *  7)];

    /* Recebe o tamanho da palavra para começar a colocar a quantidade certa de underlines */
    let tamanho_palavra = palavra.length;

    /* nesta array ficará as letras acertadas */
    letras_advinhadas = [];

    /* Chama a função que desenha a forca */
    atribuirUnderLine(tamanho_palavra - 1);
    console.log(palavra);
}

main();


