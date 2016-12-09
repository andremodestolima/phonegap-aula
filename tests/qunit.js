function soma(valor1, valor2) {
  return valor1 + valor2;
}

function adicionar(lista, item) {
  lista.push(item);
}

function somatorio(lista) {
  var soma = 0;
  for (var i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

function maior_idade(idade) {
  if(idade >= 16){
    return true
  }
  return false;
}

// teste com true

QUnit.test("Verificar se maior_idade é true", function (assert) {
  var resultado = maior_idade(30);
  assert.ok(resultado == true, 'passou!')
});

// teste com false

QUnit.test("Verificar se maior idade é false", function (assert) {
  var resultado = maior_idade(15);
  assert.ok(resultado == false, 'passou!');
});


QUnit.test("Verificar soma", function( assert ) {
    var total = soma(10, 20);
    assert.ok(total == 30, "passou");
});

QUnit.test('Verificar adicionar', function (assert) {
  var lista = [10, 30, 50];
  adicionar(lista, 40);
  assert.ok(lista.length == 4, "passou!")
});

QUnit.test('Verificar somatorio', function (assert) {
  var lista = [1, 2, 3, 4];
  var soma = somatorio(lista);
  assert.ok(soma == 10, 'passou!');
});

