const hamburgerButton = document.querySelector("#hamburgerButton"); //Estamos recuperando o Botão de Hamburguer (Fora da Div).

const closeButton = document.querySelector("#closeButton");
//Estamos recuperando o Botão de Fechamento.

const mobileMenu = document.querySelector("#mobileMenu");
//Estamos recuperando a Caixa preta (Quando aberta o menu Hamburguer).




//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});