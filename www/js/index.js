function pronto() {

  var titulo = localStorage.getItem('titulo');
  if(titulo){
    var $titulo = document.getElementById('titulo');
    $titulo.innerHTML = titulo;
  }

  var $botao = document.getElementById('salvar');

  $botao.addEventListener('touchend', function (evt) {
    evt.preventDefault();

    var $titulo = document.getElementById('titulo');
    var $campo = document.getElementById('campo');

    $titulo.innerHTML = $campo.value;

    localStorage.setItem('titulo', $campo.value);

  })
}
document.addEventListener('deviceready', pronto);