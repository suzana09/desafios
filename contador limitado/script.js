const numero = document.querySelector("#numero");
const botaoIncrementar = document.querySelector("#incrementar");
const botaoDecrementar = document.querySelector("#decrementar");
const mensagem = document.querySelector("#mensagem");


let contador = 0;


// Aumentar o número

botaoIncrementar.addEventListener("click", function(){

    if(contador < 10){

        contador++;

        numero.innerHTML = contador;

        mensagem.innerHTML = "";

    } else {

        mensagem.innerHTML = "Limite atingido!";

    }

});


// Diminuir o número

botaoDecrementar.addEventListener("click", function(){

    if(contador > 0){

        contador--;

        numero.innerHTML = contador;

        mensagem.innerHTML = "";

    } else {

        mensagem.innerHTML = "Limite atingido!";

    }

});
