function relogio(){
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  if(hora < 10){
    hora = "0"+hora;
  }
  if(minutos < 10){
    minutos = "0"+minutos;
  }

  var tempo = hora + ":" + minutos;

  document.getElementById("rel").innerText = tempo;
}

var timer = setInterval(relogio,1000);

function retornarData(){
  var dataF = new Date();
  var dia = dataF.getDate().toString().padStart(2, '0');
  var mes = (dataF.getMonth()+1).toString().padStart(2, '0');
  var ano = dataF.getFullYear();
  var dataCompleta = `${dia}/${mes}/${ano}`;
  
  document.getElementById('data').innerText = dataCompleta;
}

console.log(retornarData());