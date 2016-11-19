function pronto() {
  var $btn = document.getElementById('salvar_btn');

  $btn.addEventListener('click', function (evt) {
    evt.preventDefault();

    var $input = document.getElementById('info_id');
    var texto = $input.value;

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
      fs.root.getFile('meu.txt', {create: true, exclusive:false}, function (fe) {
        escrever_arquivo(fe, texto);
      })
    }, deu_erro);

  });

  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
    fs.root.getFile('meu.txt', {create: false, exclusive:false}, function (fe) {
      ler_arquivo(fe);
    })
  });
}

function ler_arquivo(fe) {
  fe.file(function (arquivo) {
    var reader = new FileReader();

    reader.onloadend = function() {
      console.log("Successful file read: " + this.result);
    };
    console.log(arquivo);
    reader.readAsText(arquivo);
  })
}

function escrever_arquivo(fileEntry, conteudo) {
  fileEntry.createWriter(function (writer) {
    writer.onwriteend = function() {
      console.log("Successful file write...");
    };
    writer.onerror = function (e) {
      console.log("Failed file write: " + e.toString());
    };
    writer.write(conteudo);
  })
}

document.addEventListener('deviceready', pronto);

function deu_erro(v) {
  console.log('deu erro', v);
}

//leo x3
//lucio x2
//romario
//diogo
//yuri