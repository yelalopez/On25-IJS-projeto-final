const Building = require("./Building");
const RecycledPlastic = require("./RecycledPlastic");


class Apartment extends RecycledPlastic{
    name;
    aptNumber;
    recycledCountPerApt = 0;

    constructor(idBuilding, name, aptNumber){
        super()
        const validateID = Building.buildingsList.find((building) => building.id === idBuilding);
        if(!validateID){
            throw new Error('ID de predio inválido')
        }        

        this.idBuilding = validateID;
        this.name = name;
        this.aptNumber = aptNumber;
        validateID.registerApartment(this.aptNumber);
 
    }

    depositPlastic(weight){
        super.validateWeight(weight);
        super.recycledPlastic(weight);
        this.recycledCountPerApt += weight;
        this.idBuilding.totalRecycledPlastic += weight
    }

    

}

module.exports = Apartment;




