const Apartment = require('../classes/Apartment')
const Building = require('../classes/Building')

describe('Test Apartment class', () => {
    beforeAll(() =>{
        const predio1 = new Building('Reprograma Tower', 'Rua Todas em Tech, 52', 70710280);   
    })
    it('Should create an Instance of Apartment', () => {
        const apt1 = new Apartment(1, 'Yelitza', 1201)
        expect(apt1).toBeInstanceOf(Apartment);
        expect(apt1.idBuilding).toEqual({"id": 1, "name": "Reprograma Tower", "totalRecycledPlastic": 0,});
        expect(apt1.name).toBe('Yelitza');
        expect(apt1.aptNumber).toBe(1201);
        expect(apt1.recycledCountPerApt).toBe(0);
    });
    it('Should throw an error for invalid building ID', () => {
        expect(() => {
          new Apartment(10, 'Tiago', 101);
        }).toThrow('ID de predio inválido');
    });

    it('Should deposit plastic and update recycledCountPerApt', () => {
        const apt1 = new Apartment(1, 'Yelitza', 1201)
        apt1.depositPlastic(10);
        apt1.depositPlastic(5);
        expect(apt1.recycledCountPerApt).toBe(15);
    });

    it('Should throw an error for invalid value of weight', () => {
        const apt1 = new Apartment(1, 'Yelitza', 1201)
        expect(() => { apt1.depositPlastic('peso');}).toThrow('Valor inválido');
    });

    it('Should throw an error for negative value of weight', () => {
        const apt1 = new Apartment(1, 'Yelitza', 1201)
        expect(() => { apt1.depositPlastic(-10);}).toThrow('Valor inválido');
    });

      
      
})