
class Building{
    name;
    #address;
    #cep;
    id;
    static idCount = 0;
    static recicledPlasticCount = 0;
    static buildingsList = [];

    constructor(name, address, cep){
        if(!name || !address || !cep){
            throw new Error('Dados incompletos!');
        }

        this.name = name;
        this.#address = address;
        this.#cep = cep;
        this.id = ++Building.idCount;
        Building.buildingsList.push(this);
    }

    get address(){
        return this.#address;
    }

    get cep(){
        return this.#cep;
    }

    removeBuilding(){
        let i = Building.buildingsList.indexOf(this);
        Building.buildingsList.splice(i, 1);
    }
}

module.exports =  Building;

