var pacientes = document.querySelectorAll(".paciente");//pega os paciente que estão na pagina

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){//ao ouvir o duplo clique execute a função anonima
        console.log("fui clicado com dublo click!");
        alert("Paciente excluído");
        this.remove();
    });
});

















