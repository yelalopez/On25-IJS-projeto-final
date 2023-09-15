
class RecycledPlastic{
    constructor(){}

    validateWeight(value) {
        if (typeof value === 'string' || typeof value === 'boolean' || value < 0) {
          throw new Error('Valor inválido!');
        }
    }

    recycledPlastic(weight){
        const PLASTIC_NEEDED_RPL = 15;
        if(weight === PLASTIC_NEEDED_RPL){
            return 'Sua contribuição gerou uma peça de madeira plástica reciclada'
        }else if(weight < 15){
            const contribution = Math.round((weight / PLASTIC_NEEDED_RPL) * 100)
            return `Sua contribuição para a fabricação de uma peça de madeira plástica reciclada é de ${contribution}%`
        }else {
            const extraUND = Math.floor(weight / PLASTIC_NEEDED_RPL)
            const extraContribution = Math.round(weight % PLASTIC_NEEDED_RPL);
            return `Sua contribuição gerou ${extraUND} peça(s) de madeira plástica reciclada e ainda aportou ${extraContribution}% para a fabricação de outra`;
          }
    }
}


module.exports = RecycledPlastic;

