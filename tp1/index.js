function pronto(pagina){
  var funcao = window['pagina' + pagina];
  document.addEventListener('deviceready', funcao, false);
}

function pagina1() {
  window.addEventListener('batterystatus', function (status) {
    document.getElementById('bateriaNivel').innerHTML = status.level;
    navigator.notification.alert(
      "Nivel da Bateria: " + status.level,
      nada, "Bateria");
  });
}

function pagina2() {
  document.getElementById('dispositivoModelo').innerHTML = device.model;
  document.getElementById('cordovaVersao').innerHTML = device.cordova;

  document.getElementById('doubleTouch').addEventListener('touchend', function (evt) {
    if(evt.touchesList.lenght == 2){
      navigator.vibrate(200);
    }
  });

}

function pagina3() {
  obter_celera();
  document.getElementById('atualizar').addEventListener(function () {
    obter_celera();
  });
}

function obter_celera() {
  navigator.accelerometer.getCurrentAcceleration(function (celera) {
    document.getElementById('celeraX').innerHTML = celera.x;
    document.getElementById('celeraY').innerHTML = celera.y;
    document.getElementById('celeraZ').innerHTML = celera.z;
    document.getElementById('celeraTS').innerHTML = celera.timestamp;
  });
}

function nada() { }
