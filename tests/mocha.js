describe('Meu primeiro teste', function() {
    describe('#soma()', function() {
        it('deve retornar a soma de dois valores', function() {
            var total = soma(10, 20);
            assert.equal(total, 30);
        });
    });
});