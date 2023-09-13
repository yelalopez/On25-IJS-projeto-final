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
    
    it('recycledPlastic method returns the correct contribution percentage', () => {
        const recycledPlasticBin = new RecycledPlastic();
        const weight = 25;
        const contribution = recycledPlasticBin.recycledPlastic(weight);
        expect(contribution).toBe('Sua contribuição gerou 1 peça(s) de madeira plástica reciclada e ainda aporto 10% para a fabricação de outra');
    });
})