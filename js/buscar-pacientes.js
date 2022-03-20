var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes1");

  xhr.addEventListener("load", function(){
    //quando o conteúdo é carregado, a função é executada

    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
      console.log("encontrou o link");
    } else {
      erroAjax.classList.remove("invisivel");
      console.log("não encontrou o link");
    }
  });

  xhr.send();
});
