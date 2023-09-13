const RecycledPlastic = require('../classes/RecycledPlastic')

describe('Test Recycled Plastic class', () => {
    it('recycledPlastic method returns the correct contribution message', () => {
        const recycledPlasticBin = new RecycledPlastic();
        const weight = 10;
        const contribution = recycledPlasticBin.recycledPlastic(weight);
        expect(contribution).toBe("Sua contribuição para a fabricação de uma peça de madeira plástica reciclada é de 67%");
    });

    it('recycledPlastic method returns the correct contribution percentage', () => {
        const recycledPlasticBin = new RecycledPlastic();
        const weight = 15;
        const contribution = recycledPlasticBin.recycledPlastic(weight);
        expect(contribution).toBe('Sua contribuição gerou uma peça de madeira plástica reciclada');
    });

})