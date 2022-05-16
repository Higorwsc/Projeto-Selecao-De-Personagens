const personagens = document.querySelectorAll('.personagem');      //selecionado todos os personagens da lista

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () =>{                  // Ao passar o mouse em cima o personagem fica como selecionado
    
        const personagemSelecionado = document.querySelector('.selecionado');
         personagemSelecionado.classList.remove('selecionado');      // Remover o selecionado do personagem para definir outro


        personagem.classList.add('selecionado');




    const idSelecionado = personagem.attributes.id.value;

    const imagemJogador1 = document.getElementById('personagem-jogador-1');

    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`            // Mudança de foto ao passar o mouse

    const nomejogador1 = document.getElementById('nome-jogador-1');

    const nomeSelecionado = personagem.getAttribute('data-name') ;      // mudança de nome ao passar o mouse

    nomejogador1.innerHTML = nomeSelecionado;
        });
});

// @higorwsc


