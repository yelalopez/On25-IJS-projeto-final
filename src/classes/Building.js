
class Building{
    id;
    name;
    #address;
    #cep;
    totalRecycledPlastic = 0;
    #registeredApartments = [];
    static idCount = 0;
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

    get registeredApartments(){
        return this.#registeredApartments;
    }

    registerApartment(aptNumber) {
        if (Array.isArray(this.registeredApartments) && !this.registeredApartments.includes(aptNumber)) {
            this.registeredApartments.push(aptNumber);
        }
    }

    removeBuilding(){
        let i = Building.buildingsList.indexOf(this);
        Building.buildingsList.splice(i, 1);
        return 'Removed Building'
    }

}

module.exports =  Building;

