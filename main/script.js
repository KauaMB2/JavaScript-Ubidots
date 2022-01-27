var botao;
var umidade;
function EnviarUbidots(estado) {
const Http = new XMLHttpRequest();
//Exemplo de envio de dados para o Ubidots
// url = "https://industrial.api.ubidots.com/api/v1.6/devices/my-new-device"
// Para o exemplo do grupo20 da T24: my-new-device = simulador-t24-11a20
//Device = dispositivo criado (ou a ser criado) no Ubidots
const token = "*******************************";    //Token do usuário no Ubidots
var url = "https://industrial.api.ubidots.com/api/v1.6/devices/teste";
botao = estado;
//Monta o JS a ser enviado
//Formato: {"chave":valor}. IMPORTANTE: usar ' ' para declarar a string
umidade = document.getElementById("umidade").value; //valor digitado na página
document.getElementById("umidade").value="";
//Monta o JS a ser enviado
//Formato: {"chave":valor}. IMPORTANTE: usar ' ' para declarar a string
var dado = '{'+ '"botao":' + botao + ',' +  '"umidade":' + umidade + '}'; //grupo20 é a variável criada no device do Ubidots
document.getElementById("resposta").innerHTML = "";   //Limpa o status que está na página
if(umidade!="")                                   //Só envia caso tiver valor digitado na temperatura
{
  Http.open("POST", url);                             //Para enviar usa-se o POST do HTTP
  Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
  Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
  Http.send(dado)                                     //Envia a requisição POST

  Http.onreadystatechange = function() {              //Vverifica o status do envio
  	if(Http.readyState == XMLHttpRequest.DONE)       //Pronto?
  	{
    		console.log(Http.responseText);               //Mostra no console a resposta
    		var resposta = Http.responseText;
        if(resposta.includes("201"))                  //Resposta tem o texto 201? Sim: Ubidots aceitou dado
        {
          document.getElementById("resposta").innerHTML = "Enviado com sucesso!";
        }
        else
        {
          document.getElementById("resposta").innerHTML = "Erro ao enviar!";
        }
    }
  }
}
else
{
  alert("Preencha o valor dos valores a ser enviado!")   //mostrao alerta caso não tenha sido digitado valor na página
}
}
//Exemplo de recepção de dados para o Ubidots
//Device = dispositivo criado (ou a ser criado) no Ubidots
function ReceberLed() {
const Http = new XMLHttpRequest();
const token = "BBFF-FQQzQf0fWbcMdXVAOjygLmWugJoBpf";    //Token do usuário no Ubidots
//grupo01 -> variavel
//simulador-t21-01a10 -> dispositivo
var url = "https://industrial.api.ubidots.com/api/v1.6/devices/teste/led/lv" ;
document.getElementById("resposta").innerHTML = "";   //Limpa o status que está na página
dado="";
  Http.open("GET", url);                             //Para enviar usa-se o POST do HTTP
  Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
  Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
  Http.send(dado)                                     //Envia a requisição POST

  Http.onreadystatechange = function() {              //Vverifica o status do envio
  	if(Http.readyState == XMLHttpRequest.DONE)       //Pronto?
  	{
    		console.log(Http.responseText);               //Mostra no console a resposta
    		var resposta = Http.responseText;
        document.getElementById("resposta_led").innerHTML = Http.responseText;
    }
  }
}
function ReceberAquecedor() {
const Http = new XMLHttpRequest();
const token = "BBFF-FQQzQf0fWbcMdXVAOjygLmWugJoBpf";    //Token do usuário no Ubidots
//grupo01 -> variavel
//simulador-t21-01a10 -> dispositivo
var url = "https://industrial.api.ubidots.com/api/v1.6/devices/teste/aquecedor/lv" ;
document.getElementById("resposta_led").innerHTML = "";   //Limpa o status que está na página
dado="";
  Http.open("GET", url);                             //Para enviar usa-se o POST do HTTP
  Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
  Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
  Http.send(dado)                                     //Envia a requisição POST

  Http.onreadystatechange = function() {              //Vverifica o status do envio
  	if(Http.readyState == XMLHttpRequest.DONE)       //Pronto?
  	{
    		console.log(Http.responseText);               //Mostra no console a resposta
    		var resposta = Http.responseText;
        document.getElementById("resposta_aquecedor").innerHTML = Http.responseText;
    }
  }
}
