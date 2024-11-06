function atribuirUnderLine(tamanho_palavra){

    for(let i = 0; i <= tamanho_palavra; i++){
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = "_";
        ul.appendChild(li);
    }

}

function main(){
    let biblioteca_palavras = ["SOL", "ESCOLA", "ORELHA", "ACOMPANHAR", "ESTUDO", "FACIAL", "REDES", "AMERICANO"];
    let palavra = biblioteca_palavras[Math.floor(Math.random() *  7)];
    let tamanho_palavra = palavra.length;
    
    atribuirUnderLine(tamanho_palavra - 1);
    console.log(palavra);
}

main();


