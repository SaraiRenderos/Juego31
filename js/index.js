

function enviar(){
    var porId=document.getElementById("valor").value;
    document.getElementById("Name").innerHTML = 'Bienvenido/a '+porId;
    document.getElementById("nombre").innerHTML = porId;
    document.getElementById("iniciar").innerHTML = "Ya puedes empesar a jugar haz click aqui";
console.log(porId)

  }

  var sodido = new Audio();
  sodido.src ='./audios/boton.mp3';
  var start = new Audio();
  start.src ='./audios/start.mp3';