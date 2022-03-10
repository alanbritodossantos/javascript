var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


// titulo.addEventListener("click", mostraMensagem)
// function mostraMensagem(){
//     console.log("Olá eu fui clicado");
// }


titulo.addEventListener("click", function(){
    console.log("sou uma função anonima!");
})
function mostraMensagem(){
    console.log("Olá eu fui clicado");
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}

