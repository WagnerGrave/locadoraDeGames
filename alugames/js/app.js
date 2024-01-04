 // Realizando a lógica e interação com elementos HTML

 // Função criada para sabermos qual jogo foi Alugado ou Devolvido, está vinculada a tag (id).
 
 function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');  
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Funnção de status do jogo, se está alugado ou não.

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}


