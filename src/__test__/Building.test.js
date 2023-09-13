const Building = require("../classes/Building");

describe('Test Building class', () => {
    it('Should not create an Instance of Building', () => {
        expect(() => new Building()).toThrow('Dados incompletos!');
    })

    it('Should create an instance of Building', () => {
        const predio1 = new Building('Reprograma Tower', 'Rua Todas em Tech, 52', 70710280);   
        expect(predio1).toBeInstanceOf(Building);
        expect(predio1.name).toBe('Reprograma Tower');
        expect(predio1.address).toBe('Rua Todas em Tech, 52');
        expect(predio1.cep).toBe(70710280);        
    })

    it('Verify the ID of the Buildings', () => {
        const predio1 = new Building('Reprograma Tower', 'Rua Todas em Tech, 52', 70710280);   
        const predio2 = new Building('ON25', 'Rua JavaScript, 25', 70710281);
        expect(predio1.id).toBe(2);      
        expect(predio2.id).toBe(3);      
    });

    it('Should remove a building', () => {
        const predio2 = new Building('ON25', 'Rua JavaScript, 25', 70710281);   
        expect(predio2.removeBuilding()).toBe('Removed Building');      
    });

    
})
