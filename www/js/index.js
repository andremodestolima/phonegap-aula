function pronto() {

    var $logar = document.getElementById('logar');
    var $dados = document.getElementById('dados');

    $logar.addEventListener('click', function (evt) {
        evt.preventDefault();

        $dados.innerHTML = 'clicou';
        facebookConnectPlugin.login(['public_profile','email'], function(sucesso){

            $dados.innerHTML = 'fez login';
            var facebook_id = sucesso.authResponse.userID;

            localStorage.setItem('facebook_id', facebook_id);
            $dados.innerHTML = facebook_id;

            facebookConnectPlugin.api('me', ['public_profile'], function(dados){
                localStorage.setItem('nome', dados.name);
                $dados.innerHTML = JSON.stringify(dados);
            }, function (error){
                console.log('deu errado na api' + erro);
            })
        }, function(erro) {
            console.log('deu errado no login' + erro);
        });
    })
}

document.addEventListener('deviceready', pronto);