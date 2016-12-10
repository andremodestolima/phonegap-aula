var assert = require('chai').assert;

var soma = function (a, b) {
  return a + b;
};

var divisao = function (c, d) {
  return c / d;
};

var parcela_minima = function (valor) {
  if (valor <= 200){
    return 1;
  }
  if (valor >= 1000){
    return 10
  }
  return parseInt(valor / 200)
};

function valor_parcela(total) {
  var qtd = parcela_minima(total);
  return total / qtd;
};

describe('Meu primeiro teste', function() {
  describe('#soma()', function() {
    it('deve retornar a soma de dois valores', function() {
      var total = soma(10, 20);
      assert.equal(total, 30);
    });
  });

  describe('#divisao()', function () {
    it('deve dividir os valores', function () {
      var total = divisao(6, 2);
      assert.equal(total, 3);
    })
  });
});

describe('calculo de parcelamento', function () {

  describe('#valor_parcela()', function () {
    it('para 1200 deve ser 10', function () {
      var parcela = valor_parcela(1200);
      assert.equal(parcela, 120);
    });

    it('para 100 deve ser 10', function () {
      var parcela = valor_parcela(100);
      assert.equal(parcela, 100);
    });

    it('para 500 deve ser 50', function () {
      var parcela = valor_parcela(500);
      assert.equal(parcela, 250);
    });

    it('para 90 deve ser 30', function () {
      var parcela = valor_parcela(90);
      assert.equal(parcela, 90);
    });
  });

  describe('#parcela_minima()', function () {
    it('para 1200 deve ser 10', function () {
      var qtd = parcela_minima(1200);
      assert.equal(qtd, 10);
    });

    it('para 800 deve ser 4', function () {
      var qtd = parcela_minima(800);
      assert.equal(qtd, 4);
    });

    it('para 100 deve ser 10', function () {
      var qtd = parcela_minima(100);
      assert.equal(qtd, 1);
    });

    it('para 50 deve ser 2', function () {
      var qtd = parcela_minima(50);
      assert.equal(qtd, 1);
    });

    it('para 55 deve ser 2', function () {
      var qtd = parcela_minima(55);
      assert.equal(qtd, 1);
    });

    it('para 75 deve ser 2', function () {
      var qtd = parcela_minima(75);
      assert.equal(qtd, 1);
    });

    it('para 80 deve ser 2', function () {
      var qtd = parcela_minima(80);
      assert.equal(qtd, 1);
    });

    it('para 20 deve ser 1', function () {
      var qtd = parcela_minima(20);
      assert.equal(qtd, 1);
    })

  })
});