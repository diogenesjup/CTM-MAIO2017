// VERIFICAR LOGIN
$('#login').click(function(){
    
    var login = $("#loginInput").val();
    var senha = $("#senhaInput").val();
    var grupo = $("#grupoUser").val();
    
    if(login=="ctmcadastro"&&senha=="ctm99380410"){
      $("#mensagem").html('<span class="label label-success">Login e Senha corretos, redirecionando...</span>');
      localStorage.setItem("grupo", grupo);
      location.href="dashboard.html";    	
    }else{
    	$("#mensagem").html('<span class="label label-danger">Login ou Senha incorretos</span>');
    }


});





// INICIAR PROCESSOS
function iniciarProcessos(){
  
  console.log("Iniciando processos da aplicação.");
  console.log("VERSAO 106, dados:");
  console.log( JSON.stringify( allStorageName() ));
  console.log("VALORES:");
  console.log( JSON.stringify( allStorageValue() ));
  
  // PEGAR NUMERO SEQUENCIAL
  var sequencial = localStorage.getItem("sequencial");	
  var sequencial_mercant = localStorage.getItem("sequencial_mercant");
  var sequencial_bens = localStorage.getItem("sequencial_bens");

  if(!sequencial){
  	 localStorage.setItem("sequencial", 1);
     localStorage.setItem("chave", 1);
  }

  if(!sequencial_mercant){     
     localStorage.setItem("sequencial_mercant",1);
     localStorage.setItem("chave_mercant", 1);
  }

  if(!sequencial_bens){     
     localStorage.setItem("sequencial_bens",1);
     localStorage.setItem("chave_bens", 1);
  }
  
  console.log("Alimentando valores sequênciais no HTML");

  $("#sequencial").html("0000"+sequencial);
  $("#sequencial_mercant").html("0000"+sequencial_mercant);
  $("#sequencial_bens").html("0000"+sequencial_mercant);   

}

// CALCULO DE ÁREA DO TERRENO DO IMOVEL
function calcArea(){

   var frente = $("#frente").val();
   var lateralDireita = $("#lateralDireita").val();
   var lateralEsquerda = $("#lateralEsquerda").val();
   var fundos = $("#fundos").val();

   if(frente==0||lateralDireita==0||lateralEsquerda==0||fundos==0){
    console.log("Nem todos os dados foram preenchidos para o cálculo da área do terreno");
    document.getElementById('areaTotal').disabled = true;
   }else{

        var area = 0;
        
        if(lateralDireita==lateralEsquerda && frente == fundos){

           area = lateralDireita * frente;

        }else{

          var laterais = lateralDireita+lateralEsquerda;
          laterais = laterais / 2;

          var pontas = frente + fundos;
          pontas = pontas / 2;

          area = laterais * pontas;

        } 

        document.getElementById('areaTotal').disabled = false;
        $("#areaTotal").val(area);
        

   }

}


// CALCULO DE ÁREA DO TERRENO DA EDIFICAÇÃO
function calcAreaEdificacao(){

   var frente = $("#med_frente").val();
   var lateralDireita = $("#med_lat_direita").val();
   var lateralEsquerda = $("#med_lat_esque").val();
   var fundos = $("#med_fundos").val();

   if(frente==0||lateralDireita==0||lateralEsquerda==0||fundos==0){
    console.log("Nem todos os dados foram preenchidos para o cálculo da área da edificação");
    document.getElementById('med_area').disabled = true;
   }else{

        var area = 0;
        
        if(lateralDireita==lateralEsquerda && frente == fundos){

           area = lateralDireita * frente;

        }else{

          var laterais = lateralDireita+lateralEsquerda;
          laterais = laterais / 2;

          var pontas = frente + fundos;
          pontas = pontas / 2;

          area = laterais * pontas;

        } 

        document.getElementById('med_area').disabled = false;
        $("#med_area").val(area);
        

   }

}


// PEGAR LATITUDE DA FRENTE DO TERRENO
function localFrente(){

   if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success, fail );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#frente").val(cordenadas);
     }

function fail()
     {
        alert("Esse dispositivo não tem GPS");
     }


// PEGAR LATITUDE DA LATERAL DIREITA DO TERRENO
function localLatDir(){

   if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success2, fail2 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success2(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#lateralDireita").val(cordenadas);
     }

function fail2()
     {
        alert("Esse dispositivo não tem GPS");
     }     




// PEGAR LATITUDE DA LATERAL ESQUERDA DO TERRENO
function localLatEsq(){

if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success3, fail3 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success3(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#lateralEsquerda").val(cordenadas);
     }

function fail3()
     {
        alert("Esse dispositivo não tem GPS");
     }   









// PEGAR LATITUDE DOS FUNDOS DO TERRENO
function localFundos(){

if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success4, fail4 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success4(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#fundos").val(cordenadas);
     }

function fail4()
     {
        alert("Esse dispositivo não tem GPS");
     }   



// PEGAR MEDIDAS DA FRENTE DA EDIFICAÇÃO
function medElocalFrente(){

if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success5, fail5 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success5(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#med_frente").val(cordenadas);
     }

function fail5()
     {
        alert("Esse dispositivo não tem GPS");
     } 




// PEGAR COORDENADAS LATERAL DIREITA DA EDIFICAÇÃO
function medElocalLatDir(){
  if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success6, fail6 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success6(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#med_lat_direita").val(cordenadas);
     }

function fail6()
     {
        alert("Esse dispositivo não tem GPS");
     } 



// PEGAR COORDENADAS LATERAL ESQUERDA DA EDIFICAÇÃO
function medElocalLatEsq(){
    if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success7, fail7 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success7(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#med_lat_esque").val(cordenadas);
     }

function fail7()
     {
        alert("Esse dispositivo não tem GPS");
     } 


// PEGAR MEDIDAS DOS FUNDOS DA EDIFICAÇÃO
function medElocalfundos(){
  if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success8, fail8 );
        }
        else
        {
           alert("Esse dispositivo não tem GPS");
        }

}
function success8(position)
     {
         var cordenadas = "";  
         cordenadas = position.coords.longitude;
         cordenadas = cordenadas+", ";
         cordenadas = cordenadas + position.coords.latitude;
         $("#med_fundos").val(cordenadas);
     }

function fail8()
     {
        alert("Esse dispositivo não tem GPS");
     } 





// SALVAR IMOVEL
function salvarImovel(){

   // CARREGAR VALORES

         // DESATIVADOS
          var distrito = $("#distrito").val();
           var setor = $("#setor").val();
           var quadra = $("#quadra").val();
           var face = $("#face").val();
           var lote = $("#lote").val();
           var unidade = $("#unidade").val();
   
   var logradouro = $("#logradouro").val();
   var numero = $("#numero").val();
   var bairro = $("#bairro").val();
   var cep = $("#cep").val();
   var complemento = $("#complemento").val();
   var loteamento = $("#loteamento").val();
   var quadro = $("#quadro").val();
   var lote = $("#lote").val();

       // DESATIVADOS
       var frente = $("#frente").val();
   var lateralDireita = $("#lateralDireita").val();
   var lateralEsquerda = $("#lateralEsquerda").val();
   var fundos = $("#fundos").val();
   var areaTotal = $("#areaTotal").val();

       var situacao_terreno = $("#situacao_terreno").val();
   var topografia = $("#topografia").val();
   var tipo_terreno = $("#tipo_terreno").val();
   var pedologia = $("#pedologia").val();
   var limitacao = $("#limitacao").val();
   var calcada = $("#calcada").val();
   var med_frente = $("#med_frente").val();
   var med_lat_direita = $("#med_lat_direita").val();
   var med_lat_esque = $("#med_lat_esque").val();
   var med_fundos = $("#med_fundos").val();
   var med_area_unidade = $("#med_area_unidade").val();
   var med_area = $("#med_area").val();
   var tipo_edificacao = $("#tipo_edificacao").val();
   var estado_conservacao = $("#estado_conservacao").val();
   var utilizacao_edificacao = $("#utilizacao_edificacao").val();

   // NOVOS CAMPOS
   var newsituacaoTerreno = $("#newsituacaoTerreno").val();
   var newtopografia = $("#newtopografia").val();
   var newTipoTerreno = $("#newTipoTerreno").val();
   var newLimitação = $("#newLimitação").val();
   var newCalçada = $("#newCalçada").val();
   var newColetaLixo = $("#newColetaLixo").val();
   var newLimpezapublica = $("#newLimpezapublica").val();
   var newCalçamento = $("#newCalçamento").val();
   var newRedeesgoto = $("#newRedeesgoto").val();
   var newClassificaçãoconstrução = $("#newClassificaçãoconstrução").val();

   var nome_proprietario = $("#nome_proprietario").val();
   var cpf_cnpj = $("#cpf_cnpj").val();
   
   if(frente != 0 && lateralDireita != 0 && lateralEsquerda != 0 && fundos != 0){

       var chave = parseInt(localStorage.getItem("chave"));

       var chaveIncremento = 0;
       chaveIncremento = parseInt(chave) + 1;

       console.log("Chave incremento do imóvel: "+chaveIncremento);

       // VERIFICAR SE ESTAMOS ONLINE
       var online = navigator.onLine; 

       if(online) {
          console.log("Estamos online");
       }else{
        console.log("Estamos sem internet");
       }

       localStorage.setItem("chave", chaveIncremento);
        
       var sequencial = parseInt(localStorage.getItem("sequencial"));
       sequencial = parseInt(sequencial) + 1;

       localStorage.setItem("sequencial",sequencial);

       console.log("Número sequencial: "+sequencial);       

       // SALVAR DADOS NA PERSISTENCIA

       localStorage.setItem("imovel_distrito["+chave+"]", distrito);
       localStorage.setItem("imovel_setor["+chave+"]", setor);
       localStorage.setItem("imovel_quadra["+chave+"]", quadra);
       localStorage.setItem("imovel_face["+chave+"]", face);
       localStorage.setItem("imovel_lote["+chave+"]", lote);
       localStorage.setItem("imovel_unidade["+chave+"]", unidade);
       localStorage.setItem("imovel_logradouro["+chave+"]", logradouro);
       localStorage.setItem("imovel_numero["+chave+"]", numero);
       localStorage.setItem("imovel_bairro["+chave+"]", bairro);
       localStorage.setItem("imovel_cep["+chave+"]", cep);
       localStorage.setItem("imovel_complemento["+chave+"]", complemento);
       localStorage.setItem("imovel_loteamento["+chave+"]", loteamento);
       localStorage.setItem("imovel_quadro["+chave+"]", quadro);
       localStorage.setItem("imovel_lote["+chave+"]", lote);
       localStorage.setItem("imovel_frente["+chave+"]", frente);
       localStorage.setItem("imovel_lateralDireita["+chave+"]", lateralDireita);
       localStorage.setItem("imovel_lateralEsquerda["+chave+"]", lateralEsquerda);
       localStorage.setItem("imovel_fundos["+chave+"]", fundos);
       localStorage.setItem("imovel_areaTotal["+chave+"]", areaTotal);
       localStorage.setItem("imovel_situacao_terreno["+chave+"]", situacao_terreno);
       localStorage.setItem("imovel_topografia["+chave+"]", topografia);
       localStorage.setItem("imovel_tipo_terreno["+chave+"]", tipo_terreno);
       localStorage.setItem("imovel_pedologia["+chave+"]", pedologia);
       localStorage.setItem("imovel_limitacao["+chave+"]", limitacao);
       localStorage.setItem("imovel_calcada["+chave+"]", calcada);
       localStorage.setItem("imovel_med_frente["+chave+"]", med_frente);
       localStorage.setItem("imovel_med_lat_direita["+chave+"]", med_lat_direita);
       localStorage.setItem("imovel_med_lat_esque["+chave+"]", med_lat_esque);
       localStorage.setItem("imovel_med_fundos["+chave+"]", med_fundos);
       localStorage.setItem("imovel_med_area_unidade["+chave+"]", med_area_unidade);
       localStorage.setItem("imovel_med_area["+chave+"]", med_area);
       localStorage.setItem("imovel_tipo_edificacao["+chave+"]", tipo_edificacao);
       localStorage.setItem("imovel_estado_conservacao["+chave+"]", estado_conservacao);
       localStorage.setItem("imovel_utilizacao_edificacao["+chave+"]", utilizacao_edificacao);
       localStorage.setItem("imovel_nome_proprietario["+chave+"]", nome_proprietario);

       // NVOS CAMPOS
       localStorage.setItem("newsituacaoTerreno["+chave+"]", newsituacaoTerreno);
       localStorage.setItem("newtopografia["+chave+"]", newtopografia);
       localStorage.setItem("newTipoTerreno["+chave+"]", newTipoTerreno);
       localStorage.setItem("newLimitação["+chave+"]", newLimitação);
       localStorage.setItem("newCalçada["+chave+"]", newCalçada);
       localStorage.setItem("newColetaLixo["+chave+"]", newColetaLixo);
       localStorage.setItem("newLimpezapublica["+chave+"]", newLimpezapublica);
       localStorage.setItem("newCalçamento["+chave+"]", newCalçamento);
       localStorage.setItem("newRedeesgoto["+chave+"]", newRedeesgoto);
       localStorage.setItem("newClassificaçãoconstrução["+chave+"]", newClassificaçãoconstrução);


       localStorage.setItem("imovel_cpf_cnpj["+chave+"]", cpf_cnpj);
       localStorage.setItem("sinc["+chave+"]", "não");

       var acao = $("#acao").val();

       if(acao=="I"){
          localStorage.setItem("acao["+chave+"]", "I");
       }

       if(acao=="E"){
          localStorage.setItem("acao["+chave+"]", "E");
       }
       
       
       console.log("Dados salvos");
       alert("Dados salvos na memória do aplicativo com sucesso");
       location.href="dashboard.html";

   }else{

    alert("Coordenadas não foram informadas");
   
   }

}



// SALVAR MERCANTIL
function salvarMercantil(){

  // CARREGAR VALORES
  var inscricao_municipal = $("#inscricao_municipal").val();
  var cim = $("#cim").val();
  var data_cadastro = $("#data_cadastro").val();
  var tipo_contribuinte = $("#tipo_contribuinte").val();
  var razao_social = $("#razao_social").val();
  var nome_fantasia = $("#nome_fantasia").val();
  var cpf_cnpj = $("#cpf_cnpj").val();
  var inscricao_estadual = $("#inscricao_estadual").val();
  var inscricao_imobiliaria = $("#inscricao_imobiliaria").val();
  var tipo_imposto = $("#tipo_imposto").val();
  var logradouro = $("#logradouro").val();
  var numero = $("#numero").val();
  var bairro = $("#bairro").val();
  var cep = $("#cep").val();
  var complemento = $("#complemento").val();
  var observacao = $("#observacao").val();
  var codigo_atividade = $("#codigo_atividade").val();
  var descricao_atividade = $("#descricao_atividade").val();

  var chave = parseInt(localStorage.getItem("chave_mercant"));

  var chaveIncremento = 0;
      chaveIncremento = parseInt(chave) + 1;

  console.log("Chave incremento Mercantil: "+chaveIncremento);

  localStorage.setItem("chave_mercant", chaveIncremento);
        
  var sequencial = parseInt(localStorage.getItem("sequencial_mercant"));
      sequencial = parseInt(sequencial) + 1;

  localStorage.setItem("sequencial_mercant",sequencial);

  console.log("Número sequencial Mercantil: "+sequencial);

  // SALVAR DADOS NA PERSISTENCIA

  localStorage.setItem("inscricao_municipal["+chave+"]", inscricao_municipal);
  localStorage.setItem("cim["+chave+"]", cim);
  localStorage.setItem("data_cadastro["+chave+"]", data_cadastro);
  localStorage.setItem("tipo_contribuinte["+chave+"]", tipo_contribuinte);
  localStorage.setItem("razao_social["+chave+"]", razao_social);
  localStorage.setItem("nome_fantasia["+chave+"]", nome_fantasia);
  localStorage.setItem("cpf_cnpj["+chave+"]", cpf_cnpj);
  localStorage.setItem("inscricao_estadual["+chave+"]", inscricao_estadual);
  localStorage.setItem("inscricao_imobiliaria["+chave+"]", inscricao_imobiliaria);
  localStorage.setItem("tipo_imposto["+chave+"]", tipo_imposto);
  localStorage.setItem("logradouro["+chave+"]", logradouro);
  localStorage.setItem("numero["+chave+"]", numero);
  localStorage.setItem("bairro["+chave+"]", bairro);
  localStorage.setItem("cep["+chave+"]", cep);
  localStorage.setItem("complemento["+chave+"]", complemento);
  localStorage.setItem("observacao["+chave+"]", observacao);
  localStorage.setItem("codigo_atividade["+chave+"]", codigo_atividade);
  localStorage.setItem("descricao_atividade["+chave+"]", descricao_atividade);  
  localStorage.setItem("sinc_mercantil["+chave+"]", "não");

  var acao = $("#acao").val();

  if(acao=="I"){
          localStorage.setItem("acao_mercantil["+chave+"]", "I");
       }

       if(acao=="E"){
          localStorage.setItem("acao_mercantil["+chave+"]", "E");
       }

  console.log("Dados salvos Mercantil");
  alert("Dados salvos na memória do aplicativo com sucesso");
  location.href="dashboard.html";

}



// SALVAR DADOS BENS
function salvarBens(){

var n_patrimonio = $("#n_patrimonio").val();
var data_entrada = $("#data_entrada").val();
var tombamento = $("#tombamento").val();
var situacao = $("#situacao").val();
var orgao = $("#orgao").val();
var setor = $("#setor").val();
var unidade = $("#unidade").val();
var natureza = $("#natureza").val();
var origem_do_bem = $("#origem_do_bem").val();
var estado_de_conservacao = $("#estado_de_conservacao").val();
var descriminacao = $("#descriminacao").val();
var especificacao = $("#especificacao").val();
var licitacao = $("#licitacao").val();
var empenho = $("#empenho").val();
var data_compra = $("#data_compra").val();
var data_nota = $("#data_nota").val();
var n_nota = $("#n_nota").val();
var valor_aquisicao = $("#valor_aquisicao").val();
var dotacao = $("#dotacao").val();
var aliquota = $("#aliquota").val();
var qtde_meses = $("#qtde_meses").val();
var valor_anual = $("#valor_anual").val();
var data_ocorrencia = $("#data_ocorrencia").val();
var tipo_ocorrencia = $("#tipo_ocorrencia").val();
var especificacao = $("#especificacao").val();
var laudo_final = $("#laudo_final").val();
var data_transferencia = $("#data_transferencia").val();
var orgao_transferencia = $("#orgao_transferencia").val();
var setor_transferencia = $("#setor_transferencia").val();
var unidade_transferencia = $("#unidade_transferencia").val();

var chave = parseInt(localStorage.getItem("chave_bens"));

  var chaveIncremento = 0;
      chaveIncremento = parseInt(chave) + 1;

  console.log("Chave incremento Bens: "+chaveIncremento);

  localStorage.setItem("chave_bens", chaveIncremento);
        
  var sequencial = parseInt(localStorage.getItem("sequencial_bens"));
      sequencial = parseInt(sequencial) + 1;

  localStorage.setItem("sequencial_bens",sequencial);
  console.log("Número sequencial Bens: "+sequencial); 

  localStorage.setItem("n_patrimonio["+chave+"]", n_patrimonio);
  localStorage.setItem("data_entrada["+chave+"]", data_entrada);
  localStorage.setItem("tombamento["+chave+"]", tombamento);
  localStorage.setItem("situacao["+chave+"]", situacao);
  localStorage.setItem("orgao["+chave+"]", orgao);
  localStorage.setItem("setor["+chave+"]", setor);
  localStorage.setItem("unidade["+chave+"]", unidade);
  localStorage.setItem("natureza["+chave+"]", natureza);
  localStorage.setItem("origem_do_bem["+chave+"]", origem_do_bem);
  localStorage.setItem("estado_de_conservacao["+chave+"]", estado_de_conservacao);
  localStorage.setItem("descriminacao["+chave+"]", descriminacao);
  localStorage.setItem("especificacao["+chave+"]", especificacao);
  localStorage.setItem("licitacao["+chave+"]", licitacao);
  localStorage.setItem("empenho["+chave+"]", empenho);
  localStorage.setItem("data_compra["+chave+"]", data_compra);
  localStorage.setItem("data_nota["+chave+"]", data_nota);
  localStorage.setItem("n_nota["+chave+"]", n_nota);
  localStorage.setItem("valor_aquisicao["+chave+"]", valor_aquisicao);
  localStorage.setItem("dotacao["+chave+"]", dotacao);
  localStorage.setItem("aliquota["+chave+"]", aliquota);
  localStorage.setItem("qtde_meses["+chave+"]", qtde_meses);
  localStorage.setItem("valor_anual["+chave+"]", valor_anual);
  localStorage.setItem("data_ocorrencia["+chave+"]", data_ocorrencia);
  localStorage.setItem("tipo_ocorrencia["+chave+"]", tipo_ocorrencia);
  localStorage.setItem("especificacao["+chave+"]", especificacao);
  localStorage.setItem("laudo_final["+chave+"]", laudo_final);
  localStorage.setItem("data_transferencia["+chave+"]", data_transferencia);
  localStorage.setItem("orgao_transferencia["+chave+"]", orgao_transferencia);
  localStorage.setItem("setor_transferencia["+chave+"]", setor_transferencia);
  localStorage.setItem("unidade_transferencia["+chave+"]", unidade_transferencia);

  localStorage.setItem("sinc_bens["+chave+"]", "não");  
  

  var acao = $("#acao").val();

  if(acao=="I"){
          localStorage.setItem("acao_bens["+chave+"]", "I");
       }

       if(acao=="E"){
          localStorage.setItem("acao_bens["+chave+"]", "E");
       }

  console.log("Dados salvos Bens");
  alert("Dados salvos na memória do aplicativo com sucesso");
  location.href="dashboard.html";

}


// FUNÇÃO DE PESQUISA DE ITENS SALVOS
function pesquisar(){
  
  console.log("Iniciando as pesquisas...");

  $("#ResultadoPesquisa").html(""); 
  var busca = $("#busca").val();

  var totalImoveis = localStorage.getItem("chave");
  var totalMercant = localStorage.getItem("chave_mercant");
  var totalBens = localStorage.getItem("chave_bens");  

  var cepImovel = 999;
  var cepMercantil = 999;
  var n_patrimonioBens = 999;
  var cpf_cnpjImovel = 999;
  var cpf_cnpjMercantil = 999;  
  
  var rua = 999;
  var numero = 999; 

  // BUSCAR NOS IMÓVEIS
  var flag = 1;

  $("#ResultadoPesquisa").append("<h3>Imóveis:</h3>");
  
  console.log("Procurando nos imóveis...");

  while(flag < totalImoveis){

    cepImovel = localStorage.getItem("imovel_cep["+flag+"]");
    cpf_cnpjImovel = localStorage.getItem("imovel_cpf_cnpj["+flag+"]");


    rua = localStorage.getItem("imovel_logradouro["+flag+"]");
    numero = localStorage.getItem("imovel_numero["+flag+"]");  

         if(busca==cepImovel || busca==cpf_cnpjImovel && localStorage.getItem("acao["+flag+"]") != "X"){
           
           $("#ResultadoPesquisa").append("<b>seq:"+flag+"</b>- "+busca+" / "+rua+", "+numero+" <br>");
           $("#ResultadoPesquisa").append("<button onclick='editarImovel("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Editar</button>");
           $("#ResultadoPesquisa").append(" <button onclick='excluirImovel("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Excluir</button><br><br>");
 
         }

    flag = flag + 1;  

   }

   // BUSCAR NO MERCANTIL
  var flag = 1;

  $("#ResultadoPesquisa").append("<br><hr><h3>Mercantil:</h3>");

  console.log("Procurando no mercantil...");

  while(flag < totalMercant){
    
    cepMercantil = localStorage.getItem("cep["+flag+"]");
    cpf_cnpjMercantil = localStorage.getItem("cpf_cnpj["+flag+"]");

         if(busca==cepMercantil || busca==cpf_cnpjMercantil && localStorage.getItem("acao_mercantil["+flag+"]") != "X"){
           
           $("#ResultadoPesquisa").append("<b>seq:"+flag+"</b>- "+busca+"<br>");
           $("#ResultadoPesquisa").append("<button onclick='editarMercantil("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Editar</button>");
           $("#ResultadoPesquisa").append(" <button onclick='excluirMercantil("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Excluir</button><br><br>");

         }

    flag = flag + 1;  

   }

  // BUSCAR NOS BENS
  var flag = 1;

  $("#ResultadoPesquisa").append("<br><hr><h3>Bens:</h3>");

  console.log("Procurando nos bens...");

  while(flag < totalBens){

    n_patrimonioBens = localStorage.getItem("n_patrimonio["+flag+"]");    

         if(busca==n_patrimonioBens && localStorage.getItem("acao_bens["+flag+"]") != "X" ){
           
           $("#ResultadoPesquisa").append("<b>seq:"+flag+"</b>- "+busca+"<br>");
           $("#ResultadoPesquisa").append("<button onclick='editarBens("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Editar</button>");
           $("#ResultadoPesquisa").append(" <button onclick='excluirBens("+flag+");' style='background:#efefef;border:1px solid #666;padding:5px;padding-left:10px;padding-right:10px;'>Excluir</button><br><br>");

         }

    flag = flag + 1;  

   }

}


// EDITAR O IMOVEL
function editarImovel(chaveE){        

       // ALIMENTANDO OS CAMPOS
       console.log("Alimentando os dados Imóvel");
       
       view2.router.loadPage('add-imovel.html?v=2');

       console.log("Esperando cinco segundos para começar a popular os dados");
           
           // DELAY PARA DAR TEMPO DE CARREGAR A VIEW DE EDIÇÃO
           setTimeout(function(){               

              $("#distrito").val(localStorage.getItem("imovel_distrito["+chaveE+"]"));
              $("#setor").val(localStorage.getItem("imovel_setor["+chaveE+"]"));
              $("#quadra").val(localStorage.getItem("imovel_quadra["+chaveE+"]"));
              $("#face").val(localStorage.getItem("imovel_face["+chaveE+"]"));
              $("#lote").val(localStorage.getItem("imovel_lote["+chaveE+"]"));
              $("#unidade").val(localStorage.getItem("imovel_unidade["+chaveE+"]"));
              $("#logradouro").val(localStorage.getItem("imovel_logradouro["+chaveE+"]"));
              $("#numero").val(localStorage.getItem("imovel_numero["+chaveE+"]"));
              $("#bairro").val(localStorage.getItem("imovel_bairro["+chaveE+"]"));
              $("#cep").val(localStorage.getItem("imovel_cep["+chaveE+"]"));
              $("#complemento").val(localStorage.getItem("imovel_complemento["+chaveE+"]"));
              $("#loteamento").val(localStorage.getItem("imovel_loteamento["+chaveE+"]"));
              $("#quadro").val(localStorage.getItem("imovel_quadro["+chaveE+"]"));
              $("#lote").val(localStorage.getItem("imovel_lote["+chaveE+"]"));
              $("#frente").val(localStorage.getItem("imovel_frente["+chaveE+"]"));
              $("#lateralDireita").val(localStorage.getItem("imovel_lateralDireita["+chaveE+"]"));
              $("#lateralEsquerda").val(localStorage.getItem("imovel_lateralEsquerda["+chaveE+"]"));
              $("#fundos").val(localStorage.getItem("imovel_fundos["+chaveE+"]"));
              $("#areaTotal").val(localStorage.getItem("imovel_areaTotal["+chaveE+"]"));
              $("#situacao_terreno").val(localStorage.getItem("imovel_situacao_terreno["+chaveE+"]"));
              $("#topografia").val(localStorage.getItem("imovel_topografia["+chaveE+"]"));
              $("#tipo_terreno").val(localStorage.getItem("imovel_tipo_terreno["+chaveE+"]"));
              $("#pedologia").val(localStorage.getItem("imovel_pedologia["+chaveE+"]"));
              $("#limitacao").val(localStorage.getItem("imovel_limitacao["+chaveE+"]"));
              $("#calcada").val(localStorage.getItem("imovel_calcada["+chaveE+"]"));
              $("#med_frente").val(localStorage.getItem("imovel_med_frente["+chaveE+"]"));
              $("#med_lat_direita").val(localStorage.getItem("imovel_med_lat_direita["+chaveE+"]"));
              $("#med_lat_esque").val(localStorage.getItem("imovel_med_lat_esque["+chaveE+"]"));
              $("#med_fundos").val(localStorage.getItem("imovel_med_fundos["+chaveE+"]"));
              $("#med_area_unidade").val(localStorage.getItem("imovel_med_area_unidade["+chaveE+"]"));
              $("#med_area").val(localStorage.getItem("imovel_med_area["+chaveE+"]"));
              $("#tipo_edificacao").val(localStorage.getItem("imovel_tipo_edificacao["+chaveE+"]"));
              $("#estado_conservacao").val(localStorage.getItem("imovel_estado_conservacao["+chaveE+"]"));
              $("#utilizacao_edificacao").val(localStorage.getItem("imovel_utilizacao_edificacao["+chaveE+"]"));
              $("#nome_proprietario").val(localStorage.getItem("imovel_nome_proprietario["+chaveE+"]"));
              $("#cpf_cnpj").val(localStorage.getItem("imovel_cpf_cnpj["+chaveE+"]"));

              $("#acao").val("E");

              console.log("Dados alimentados com sucesso");  
           
           }, 5000);

}



// EXCLUIR O IMOVEL
function excluirImovel(chaveE){
       
       console.log("Iniciando a exclusão do imóvel");
       localStorage.setItem("acao["+chaveE+"]", "X");

       console.log("Exclusão realizada com sucesso");
       alert("Imóvel excluído com sucesso");

       location.reload();

}

// EDITAR MERCANTIL
function editarMercantil(chaveE){

  // ALIMENTANDO OS CAMPOS
  console.log("Editando os dados Mercantil");
  
  view2.router.loadPage("add-mercant.html?v=2");

  console.log("Esperando cinco segundos para começar a popular os dados");
           
           // DELAY PARA DAR TEMPO DE CARREGAR A VIEW DE EDIÇÃO
           setTimeout(function(){ 

                  $("#inscricao_municipal").val(localStorage.getItem("inscricao_municipal["+chaveE+"]"));
                  $("#cim").val(localStorage.getItem("cim["+chaveE+"]"));
                  $("#data_cadastro").val(localStorage.getItem("data_cadastro["+chaveE+"]"));
                  $("#tipo_contribuinte").val(localStorage.getItem("tipo_contribuinte["+chaveE+"]"));
                  $("#razao_social").val(localStorage.getItem("razao_social["+chaveE+"]"));
                  $("#nome_fantasia").val(localStorage.getItem("nome_fantasia["+chaveE+"]"));
                  $("#cpf_cnpj").val(localStorage.getItem("cpf_cnpj["+chaveE+"]"));
                  $("#inscricao_estadual").val(localStorage.getItem("inscricao_estadual["+chaveE+"]"));
                  $("#inscricao_imobiliaria").val(localStorage.getItem("inscricao_imobiliaria["+chaveE+"]"));
                  $("#tipo_imposto").val(localStorage.getItem("tipo_imposto["+chaveE+"]"));
                  $("#logradouro").val(localStorage.getItem("logradouro["+chaveE+"]"));
                  $("#numero").val(localStorage.getItem("numero["+chaveE+"]"));
                  $("#bairro").val(localStorage.getItem("bairro["+chaveE+"]"));
                  $("#cep").val(localStorage.getItem("cep["+chaveE+"]"));
                  $("#complemento").val(localStorage.getItem("complemento["+chaveE+"]"));
                  $("#observacao").val(localStorage.getItem("observacao["+chaveE+"]"));
                  $("#codigo_atividade").val(localStorage.getItem("codigo_atividade["+chaveE+"]"));
                  $("#descricao_atividade").val(localStorage.getItem("descricao_atividade["+chaveE+"]"));

                  $("#acao_mercantil").val("E");

                  console.log("Dados alimentados com sucesso");

           }, 5000);

}

// EXCLUIR MERCANTIL
function excluirMercantil(chaveE){

       console.log("Iniciando a exclusão do mercantil");
       localStorage.setItem("acao_mercantil["+chaveE+"]", "X");

       console.log("Exclusão realizada com sucesso");
       alert("Mercantil excluído com sucesso");

       location.reload();

}

// EDITAR BENS
function editarBens(chaveE){

  // ALIMENTANDO OS CAMPOS
  console.log("Editando dados do bem");
  
  view2.router.loadPage("add-bens.html?v=3");

  console.log("Esperando cinco segundos para começar a popular os dados");
           
           // DELAY PARA DAR TEMPO DE CARREGAR A VIEW DE EDIÇÃO
           setTimeout(function(){ 

                  $("#n_patrimonio").val(localStorage.getItem("n_patrimonio["+chaveE+"]"));
                  $("#data_entrada").val(localStorage.getItem("data_entrada["+chaveE+"]"));
                  $("#tombamento").val(localStorage.getItem("tombamento["+chaveE+"]"));
                  $("#situacao").val(localStorage.getItem("situacao["+chaveE+"]"));
                  $("#orgao").val(localStorage.getItem("orgao["+chaveE+"]"));
                  $("#setor").val(localStorage.getItem("setor["+chaveE+"]"));
                  $("#unidade").val(localStorage.getItem("unidade["+chaveE+"]"));
                  $("#natureza").val(localStorage.getItem("natureza["+chaveE+"]"));
                  $("#origem_do_bem").val(localStorage.getItem("origem_do_bem["+chaveE+"]"));
                  $("#estado_de_conservacao").val(localStorage.getItem("estado_de_conservacao["+chaveE+"]"));
                  $("#descriminacao").val(localStorage.getItem("descriminacao["+chaveE+"]"));
                  $("#especificacao").val(localStorage.getItem("especificacao["+chaveE+"]"));
                  $("#licitacao").val(localStorage.getItem("licitacao["+chaveE+"]"));
                  $("#empenho").val(localStorage.getItem("empenho["+chaveE+"]"));
                  $("#data_compra").val(localStorage.getItem("data_compra["+chaveE+"]"));
                  $("#data_nota").val(localStorage.getItem("data_nota["+chaveE+"]"));
                  $("#n_nota").val(localStorage.getItem("n_nota["+chaveE+"]"));
                  $("#valor_aquisicao").val(localStorage.getItem("valor_aquisicao["+chaveE+"]"));
                  $("#dotacao").val(localStorage.getItem("dotacao["+chaveE+"]"));
                  $("#aliquota").val(localStorage.getItem("aliquota["+chaveE+"]"));
                  $("#qtde_meses").val(localStorage.getItem("qtde_meses["+chaveE+"]"));
                  $("#valor_anual").val(localStorage.getItem("valor_anual["+chaveE+"]"));
                  $("#data_ocorrencia").val(localStorage.getItem("data_ocorrencia["+chaveE+"]"));
                  $("#tipo_ocorrencia").val(localStorage.getItem("tipo_ocorrencia["+chaveE+"]"));
                  $("#especificacao").val(localStorage.getItem("especificacao["+chaveE+"]"));
                  $("#laudo_final").val(localStorage.getItem("laudo_final["+chaveE+"]"));
                  $("#data_transferencia").val(localStorage.getItem("data_transferencia["+chaveE+"]"));
                  $("#orgao_transferencia").val(localStorage.getItem("orgao_transferencia["+chaveE+"]"));
                  $("#setor_transferencia").val(localStorage.getItem("setor_transferencia["+chaveE+"]"));
                  $("#unidade_transferencia").val(localStorage.getItem("unidade_transferencia["+chaveE+"]"));

                  $("#acao_bens").val("E");

                  console.log("Dados alimentados com sucesso");

              }, 5000);

}

// EXCLUIR BENS
function excluirBens(chaveE){

      console.log("Iniciando a exclusão do bens");
       localStorage.setItem("acao_bens["+chaveE+"]", "X");

       console.log("Exclusão realizada com sucesso");
       alert("Bens excluído com sucesso");

       location.reload();

}

//###############################################################
//###############################################################
//                                                           ####
//                                                           ####
//                                                           ####
//                                                           ####
//       FUNÇÃO PARA SINCRONIA DOS DADOS COM O SERVIDOR      ####
//                                                           ####
//                                                           ####
//                                                           ####
//                                                           ####
//###############################################################
//###############################################################

function sincronia(){

   console.log("Iniciando a sincronia");   

   var todosDadosNome = allStorageName();
   var todosDadosValor = allStorageValue();   

   todosDadosNome = JSON.stringify(todosDadosNome);
   todosDadosValor = JSON.stringify(todosDadosValor);

   var chave = localStorage.getItem("chave"); 
   var chave_mercant = localStorage.getItem("chave_mercant");
   var chave_bens = localStorage.getItem("chave_bens");
   var grupoUser = localStorage.getItem("grupo");

   var flag = 1;
   var flagMercantil = 1;
   var flagBens = 1;

   // SINCRONIZANDO OS DADOS DOS IMÓVEIS
   console.log("Iniciando a sincronização dos dados do imóvel...");
   
       var distrito = 999;
       var setor = 999;
       var quadra = 999;
       var face = 999;
       var lote = 999;
       var unidade = 999;
       var logradouro = 999;
       var numero = 999;
       var bairro = 999;
       var cep = 999;
       var complemento = 999;
       var loteamento = 999;
       var quadro = 999;
       var lote = 999;
       var frente = 999;
       var lateralDireita = 999;
       var lateralEsquerda = 999;
       var fundos = 999;
       var areaTotal = 999;
       var situacao_terreno = 999;
       var topografia = 999;
       var tipo_terreno = 999;
       var pedologia = 999;
       var limitacao = 999;
       var calcada = 999;
       var med_frente = 999;
       var med_lat_direita = 999;
       var med_lat_esque = 999;
       var med_fundos = 999;
       var med_area_unidade = 999;
       var med_area = 999;
       var tipo_edificacao = 999;
       var estado_conservacao = 999;
       var utilizacao_edificacao = 999;

       var newsituacaoTerreno = 999;
       var newtopografia = 999;
       var newTipoTerreno = 999;
       var newLimitação = 999;
       var newCalçada = 999;
       var newColetaLixo = 999;
       var newLimpezapublica = 999;
       var newCalçamento = 999;
       var newRedeesgoto = 999;
       var newClassificaçãoconstrução = 999;

       var nome_proprietario = 999;
       var cpf_cnpj = 999;
       var acao = 999;

   while(flag <= chave){

         if(localStorage.getItem("sinc["+flag+"]")!="sim"){

           distrito = localStorage.getItem("imovel_distrito["+flag+"]");
           setor = localStorage.getItem("imovel_setor["+flag+"]");
           quadra = localStorage.getItem("imovel_quadra["+flag+"]");
           face = localStorage.getItem("imovel_face["+flag+"]");
           lote = localStorage.getItem("imovel_lote["+flag+"]");
           unidade = localStorage.getItem("imovel_unidade["+flag+"]");
           logradouro = localStorage.getItem("imovel_logradouro["+flag+"]");
           numero = localStorage.getItem("imovel_numero["+flag+"]");
           bairro = localStorage.getItem("imovel_bairro["+flag+"]");
           cep = localStorage.getItem("imovel_cep["+flag+"]");
           complemento = localStorage.getItem("imovel_complemento["+flag+"]");
           loteamento = localStorage.getItem("imovel_loteamento["+flag+"]");
           quadro = localStorage.getItem("imovel_quadro["+flag+"]");
           lote = localStorage.getItem("imovel_lote["+flag+"]");
           frente = localStorage.getItem("imovel_frente["+flag+"]");
           lateralDireita = localStorage.getItem("imovel_lateralDireita["+flag+"]");
           lateralEsquerda = localStorage.getItem("imovel_lateralEsquerda["+flag+"]");
           fundos = localStorage.getItem("imovel_fundos["+flag+"]");
           areaTotal = localStorage.getItem("imovel_areaTotal["+flag+"]");
           situacao_terreno = localStorage.getItem("imovel_situacao_terreno["+flag+"]");
           topografia = localStorage.getItem("imovel_topografia["+flag+"]");
           tipo_terreno = localStorage.getItem("imovel_tipo_terreno["+flag+"]");
           pedologia = localStorage.getItem("imovel_pedologia["+flag+"]");
           limitacao = localStorage.getItem("imovel_limitacao["+flag+"]");
           calcada = localStorage.getItem("imovel_calcada["+flag+"]");
           med_frente = localStorage.getItem("imovel_med_frente["+flag+"]");
           med_lat_direita = localStorage.getItem("imovel_med_lat_direita["+flag+"]");
           med_lat_esque = localStorage.getItem("imovel_med_lat_esque["+flag+"]");
           med_fundos = localStorage.getItem("imovel_med_fundos["+flag+"]");
           med_area_unidade = localStorage.getItem("imovel_med_area_unidade["+flag+"]");
           med_area = localStorage.getItem("imovel_med_area["+flag+"]");
           tipo_edificacao = localStorage.getItem("imovel_tipo_edificacao["+flag+"]");
           estado_conservacao = localStorage.getItem("imovel_estado_conservacao["+flag+"]");
           utilizacao_edificacao = localStorage.getItem("imovel_utilizacao_edificacao["+flag+"]");
         
           // NOVOS DADOS
           newsituacaoTerreno = localStorage.getItem("newsituacaoTerreno["+flag+"]");
           newtopografia = localStorage.getItem("newtopografia["+flag+"]");
           newTipoTerreno = localStorage.getItem("newTipoTerreno["+flag+"]");
           newLimitação = localStorage.getItem("newLimitação["+flag+"]");
           newCalçada = localStorage.getItem("newCalçada["+flag+"]");
           newColetaLixo = localStorage.getItem("newColetaLixo["+flag+"]");
           newLimpezapublica = localStorage.getItem("newLimpezapublica["+flag+"]");
           newCalçamento = localStorage.getItem("newCalçamento["+flag+"]");
           newRedeesgoto = localStorage.getItem("newRedeesgoto["+flag+"]");
           newClassificaçãoconstrução = localStorage.getItem("newClassificaçãoconstrução["+flag+"]");

           nome_proprietario = localStorage.getItem("imovel_nome_proprietario["+flag+"]");
           cpf_cnpj = localStorage.getItem("imovel_cpf_cnpj["+flag+"]");
           acao = localStorage.getItem("acao["+flag+"]");

           // CHAMADA AJAX
           var request = $.ajax({
                method: "POST",
                url: "http://ctmconsultoria.com/api/",
                data: {
                    distrito: distrito,
                    setor: setor,
                    quadra: quadra,
                    face: face,
                    lote: lote,
                    unidade: unidade,
                    logradouro: logradouro,
                    numero: numero,
                    bairro: bairro,
                    cep: cep,
                    complemento: complemento,
                    loteamento: loteamento,
                    quadro: quadro,
                    frente: frente,
                    lateralDireita: lateralDireita,
                    lateralEsquerda: lateralEsquerda,
                    fundos: fundos,
                    areaTotal: areaTotal,
                    situacao_terreno: situacao_terreno,
                    topografia: topografia,
                    tipo_terreno: tipo_terreno,
                    pedologia: pedologia,
                    limitacao: limitacao,
                    calcada: calcada,
                    med_frente: med_frente,
                    med_lat_direita: med_lat_direita,
                    med_lat_esque: med_lat_esque,
                    med_fundos: med_fundos,
                    med_area_unidade: med_area_unidade,
                    med_area: med_area,
                    tipo_edificacao: tipo_edificacao,
                    estado_conservacao: estado_conservacao,
                    utilizacao_edificacao: utilizacao_edificacao,
                    newsituacaoTerreno: newsituacaoTerreno,
                    newtopografia: newtopografia,
                    newTipoTerreno: newTipoTerreno,
                    newLimitação: newLimitação,
                    newCalçada: newCalçada,
                    newColetaLixo: newColetaLixo,
                    newLimpezapublica: newLimpezapublica,
                    newCalçamento: newCalçamento,
                    newRedeesgoto: newRedeesgoto,
                    newClassificaçãoconstrução: newClassificaçãoconstrução,
                    nome_proprietario: nome_proprietario,
                    cpf_cnpj: cpf_cnpj,
                    acao: acao,
                    grupo:grupoUser,
                    todosDadosNome:todosDadosNome,
                    todosDadosValor:todosDadosValor,
                }
            })

            request.done(function (msg) {

                console.log(msg);
                console.log("Dados Sincronizados com sucesso!");


            });

            request.fail(function () {

                alert('Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?');
                console.log("Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?");

            });
            // FINAL DA CHAMADA AJAX
      
      localStorage.setItem("sinc["+flag+"]", "sim");

     }
      
      flag = flag + 1;

   }
   // FINAL SINCRONIZAÇÃO DOS IMÓVEIS


   // SINCRONIZANDO OS DADOS MERCANTIL
   console.log("Iniciando a sincronização dos dados mercantil...");
   
       var mercant_inscricao_municipal = 999;
       var mercant_cim = 999;
       var mercant_data_cadastro = 999;
       var mercant_tipo_contribuinte = 999;
       var mercant_razao_social = 999;
       var mercant_nome_fantasia = 999;
       var mercant_cpf_cnpj = 999;
       var mercant_inscricao_estadual = 999;
       var mercant_inscricao_imobiliaria = 999;
       var mercant_tipo_imposto = 999;
       var mercant_logradouro = 999;
       var mercant_numero = 999;
       var mercant_bairro = 999;
       var mercant_cep = 999;
       var mercant_complemento = 999;
       var mercant_observacao = 999;
       var mercant_codigo_atividade = 999;
       var mercant_descricao_atividade = 999;
       var acao_mercantil = 999;


   while(flagMercantil <= chave_mercant){

          if(localStorage.getItem("sinc_mercantil["+flagMercantil+"]")!="sim"){

           mercant_inscricao_municipal = localStorage.getItem("inscricao_municipal["+flagMercantil+"]");
           mercant_cim = localStorage.getItem("cim["+flagMercantil+"]");
           mercant_data_cadastro = localStorage.getItem("data_cadastro["+flagMercantil+"]");
           mercant_tipo_contribuinte = localStorage.getItem("tipo_contribuinte["+flagMercantil+"]");
           mercant_razao_social = localStorage.getItem("razao_social["+flagMercantil+"]");
           mercant_nome_fantasia = localStorage.getItem("nome_fantasia["+flagMercantil+"]");
           mercant_cpf_cnpj = localStorage.getItem("cpf_cnpj["+flagMercantil+"]");
           mercant_inscricao_estadual = localStorage.getItem("inscricao_estadual["+flagMercantil+"]");
           mercant_inscricao_imobiliaria = localStorage.getItem("inscricao_imobiliaria["+flagMercantil+"]");
           mercant_tipo_imposto = localStorage.getItem("tipo_imposto["+flagMercantil+"]");
           mercant_logradouro = localStorage.getItem("logradouro["+flagMercantil+"]");
           mercant_numero = localStorage.getItem("numero["+flagMercantil+"]");
           mercant_bairro = localStorage.getItem("bairro["+flagMercantil+"]");
           mercant_cep = localStorage.getItem("cep["+flagMercantil+"]");
           mercant_complemento = localStorage.getItem("complemento["+flagMercantil+"]");
           mercant_observacao = localStorage.getItem("observacao["+flagMercantil+"]");
           mercant_codigo_atividade = localStorage.getItem("codigo_atividade["+flagMercantil+"]");
           mercant_descricao_atividade = localStorage.getItem("descricao_atividade["+flagMercantil+"]");
           acao_mercantil = localStorage.getItem("acao_mercantil["+flagMercantil+"]");

           // CHAMADA AJAX
           var request = $.ajax({
                method: "POST",
                url: "http://ctmconsultoria.com/api/mercantil.php",
                data: {
                    mercant_inscricao_municipal:mercant_inscricao_municipal,
                    mercant_cim:mercant_cim,
                    mercant_data_cadastro:mercant_data_cadastro,
                    mercant_tipo_contribuinte:mercant_tipo_contribuinte,
                    mercant_razao_social:mercant_razao_social,
                    mercant_nome_fantasia:mercant_nome_fantasia,
                    mercant_cpf_cnpj:mercant_cpf_cnpj,
                    mercant_inscricao_estadual:mercant_inscricao_estadual,
                    mercant_inscricao_imobiliaria:mercant_inscricao_imobiliaria,
                    mercant_tipo_imposto:mercant_tipo_imposto,
                    mercant_logradouro:mercant_logradouro,
                    mercant_numero:mercant_numero,
                    mercant_bairro:mercant_bairro,
                    mercant_cep:mercant_cep,
                    mercant_complemento:mercant_complemento,
                    mercant_observacao:mercant_observacao,
                    mercant_codigo_atividade:mercant_codigo_atividade,
                    mercant_descricao_atividade:mercant_descricao_atividade,
                    acao_mercantil:acao_mercantil,
                    grupo:grupoUser
                }
            })

            request.done(function (msg) {

                console.log(msg);
                console.log("Dados Mercantis Sincronizados com sucesso!");

            });

            request.fail(function () {

                //alert('Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?');
                console.log("Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?");

            });
            // FINAL DA CHAMADA AJAX

      localStorage.setItem("sinc_mercantil["+flagMercantil+"]", "sim");

    }

      flagMercantil = flagMercantil + 1;

   }
   // FINAL SINCRONIZAÇÃO MERCANTIL









   // SINCRONIZANDO OS DADOS BENS
   console.log("Iniciando a sincronização dos dados bens...");
   
       var bens_n_patrimonio = 999;
       var bens_data_entrada = 999;
       var bens_tombamento = 999;
       var bens_situacao = 999;
       var bens_orgao = 999;
       var bens_setor = 999;
       var bens_unidade = 999;
       var bens_natureza = 999;
       var bens_origem_do_bem = 999;
       var bens_estado_de_conservacao = 999;
       var bens_descriminacao = 999;
       var bens_especificacao = 999;
       var bens_licitacao = 999;
       var bens_empenho = 999;
       var bens_data_compra = 999;
       var bens_data_nota = 999;
       var bens_n_nota = 999;
       var bens_valor_aquisicao = 999;
       var bens_dotacao = 999;
       var bens_aliquota = 999;
       var bens_qtde_meses = 999;
       var bens_valor_anual = 999;
       var bens_data_ocorrencia = 999;
       var bens_tipo_ocorrencia = 999;
       var bens_especificacao = 999;
       var bens_laudo_final = 999;
       var bens_data_transferencia = 999;
       var bens_orgao_transferencia = 999;
       var bens_setor_transferencia = 999;
       var bens_unidade_transferencia = 999;
       var acao_bens = 999;


   while(flagBens <= chave_bens){

           if(localStorage.getItem("sinc_bens["+flagBens+"]")!="sim"){
          
           bens_n_patrimonio = localStorage.getItem("n_patrimonio["+flagBens+"]");
           bens_data_entrada = localStorage.getItem("data_entrada["+flagBens+"]");
           bens_tombamento = localStorage.getItem("tombamento["+flagBens+"]");
           bens_situacao = localStorage.getItem("situacao["+flagBens+"]");
           bens_orgao = localStorage.getItem("orgao["+flagBens+"]");
           bens_setor = localStorage.getItem("setor["+flagBens+"]");
           bens_unidade = localStorage.getItem("unidade["+flagBens+"]");
           bens_natureza = localStorage.getItem("natureza["+flagBens+"]");
           bens_origem_do_bem = localStorage.getItem("origem_do_bem["+flagBens+"]");
           bens_estado_de_conservacao = localStorage.getItem("estado_de_conservacao["+flagBens+"]");
           bens_descriminacao = localStorage.getItem("descriminacao["+flagBens+"]");
           bens_especificacao = localStorage.getItem("especificacao["+flagBens+"]");
           bens_licitacao = localStorage.getItem("licitacao["+flagBens+"]");
           bens_empenho = localStorage.getItem("empenho["+flagBens+"]");
           bens_data_compra = localStorage.getItem("data_compra["+flagBens+"]");
           bens_data_nota = localStorage.getItem("data_nota["+flagBens+"]");
           bens_n_nota = localStorage.getItem("n_nota["+flagBens+"]");
           bens_valor_aquisicao = localStorage.getItem("valor_aquisicao["+flagBens+"]");
           bens_dotacao = localStorage.getItem("dotacao["+flagBens+"]");
           bens_aliquota = localStorage.getItem("aliquota["+flagBens+"]");
           bens_qtde_meses = localStorage.getItem("qtde_meses["+flagBens+"]");
           bens_valor_anual = localStorage.getItem("valor_anual["+flagBens+"]");
           bens_data_ocorrencia = localStorage.getItem("data_ocorrencia["+flagBens+"]");
           bens_tipo_ocorrencia = localStorage.getItem("tipo_ocorrencia["+flagBens+"]");
           bens_especificacao = localStorage.getItem("especificacao["+flagBens+"]");
           bens_laudo_final = localStorage.getItem("laudo_final["+flagBens+"]");
           bens_data_transferencia = localStorage.getItem("data_transferencia["+flagBens+"]");
           bens_orgao_transferencia = localStorage.getItem("orgao_transferencia["+flagBens+"]");
           bens_setor_transferencia = localStorage.getItem("setor_transferencia["+flagBens+"]");
           bens_unidade_transferencia = localStorage.getItem("unidade_transferencia["+flagBens+"]");
           acao_bens = localStorage.getItem("acao_bens["+flagBens+"]");
           

           // CHAMADA AJAX
           var request = $.ajax({
                method: "POST",
                url: "http://ctmconsultoria.com/api/bens.php",
                data: {
                    bens_n_patrimonio:bens_n_patrimonio,
                    bens_data_entrada:bens_data_entrada,
                    bens_tombamento:bens_tombamento,
                    bens_situacao:bens_situacao,
                    bens_orgao:bens_orgao,
                    bens_setor:bens_setor,
                    bens_unidade:bens_unidade,
                    bens_natureza:bens_natureza,
                    bens_origem_do_bem:bens_origem_do_bem,
                    bens_estado_de_conservacao:bens_estado_de_conservacao,
                    bens_descriminacao:bens_descriminacao,
                    bens_especificacao:bens_especificacao,
                    bens_licitacao:bens_licitacao,
                    bens_empenho:bens_empenho,
                    bens_data_compra:bens_data_compra,
                    bens_data_nota:bens_data_nota,
                    bens_n_nota:bens_n_nota,
                    bens_valor_aquisicao:bens_valor_aquisicao,
                    bens_dotacao:bens_dotacao,
                    bens_aliquota:bens_aliquota,
                    bens_qtde_meses:bens_qtde_meses,
                    bens_valor_anual:bens_valor_anual,
                    bens_data_ocorrencia:bens_data_ocorrencia,
                    bens_tipo_ocorrencia:bens_tipo_ocorrencia,
                    bens_especificacao:bens_especificacao,
                    bens_laudo_final:bens_laudo_final,
                    bens_data_transferencia:bens_data_transferencia,
                    bens_orgao_transferencia:bens_orgao_transferencia,
                    bens_setor_transferencia:bens_setor_transferencia,
                    bens_unidade_transferencia:bens_unidade_transferencia,
                    acao_bens:acao_bens,
                    grupo:grupoUser
                }
            })

            request.done(function (msg) {

                console.log(msg);
                console.log("Dados Bens Sincronizados com sucesso!");

            });

            request.fail(function () {

                alert('Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?');
                console.log("Não foi possível acessar o servidor para cadastrar os dados. Está conectado na internet?");

            });
            // FINAL DA CHAMADA AJAX
      
      localStorage.setItem("sinc_bens["+flagBens+"]", "sim"); 

    }

      flagBens = flagBens + 1;

   }
   // FINAL SINCRONIZAÇÃO BENS
   
   alert("Dados sincronizados com sucesso");     
   // LIMPAR A MEMÓRIA DO APLICATIVO
   
   //localStorage.clear();

   //localStorage.setItem("sequencial", 0);
   //localStorage.setItem("chave", 0);
   //localStorage.setItem("sequencial_mercant",0);
   //localStorage.setItem("chave_mercant", 0);
   //localStorage.setItem("sequencial_bens",0);
   //localStorage.setItem("chave_bens", 0);

   //iniciarProcessos();

   alert("Memória do aplicativo apagada");

   location.href="dashboard.html";

}


// OBTER TODAS AS LOCAIS STORAGES
function allStorageName() {

    var values = [];
    var valuesN = [];
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        valuesN.push(  localStorage.key(i) );
    }

    return valuesN;
}
function allStorageValue() {

    var values = [];
    var valuesN = [];
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        valuesN.push(  localStorage.key(i) );
    }

    return values;
}