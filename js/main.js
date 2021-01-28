function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#logradouro").html(response.logradouro);
            $("#titulo_cep").html("CEP "+response.cep);
            $(".cep").show(); //revela a div com a classe "cep"
            $(".barra-progresso").hide();

            // document.getElementById("localidade").innerHTML = response.localidade;
            // document.getElementById("bairro").innerHTML = response.bairro;
            // document.getElementById("ddd").innerHTML = response.ddd;
            // document.getElementById("uf").innerHTML = response.uf;
        }
    })
}

//esconde a div com a classe cep
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})