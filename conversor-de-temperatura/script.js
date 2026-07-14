const celsius = document.querySelector("#celsius");
const resultado = document.querySelector("#resultado");


celsius.addEventListener("input", function(){

    let temperatura = Number(celsius.value);


    let fahrenheit = (temperatura * 9/5) + 32;


    resultado.innerHTML = 
    "Resultado: " + fahrenheit.toFixed(1) + "°F";


    if(temperatura > 30){

        document.body.style.background = "#ffcccc";

    } 
    else if(temperatura < 15){

        document.body.style.background = "#cce5ff";

    }
    else {

        document.body.style.background = "white";

    }

});
