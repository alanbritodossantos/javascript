var pacientes = document.querySelectorAll(".paciente");//pega os paciente que estão na paginag

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){//ao ouvir o duplo clique execute a função anonima
//         console.log("fui clicado com dublo click!");
//         alert("Paciente excluído");
//         this.remove();
//     });
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //remova o pai desse event
    paiDoAlvo.remove();
});
















