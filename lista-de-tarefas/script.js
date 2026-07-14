const tarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");


botaoAdicionar.addEventListener("click", function(){

    let texto = tarefa.value;


    if(texto === ""){

        aviso.innerHTML = "Digite uma tarefa!";

    } 
    else {

        let item = document.createElement("li");


        item.innerHTML = texto;


        if(texto === "Estudar"){

            item.classList.add("estudar");

        }


        lista.appendChild(item);


        tarefa.value = "";

        aviso.innerHTML = "";

    }

});
