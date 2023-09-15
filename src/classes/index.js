const Building = require('./Building')
const Apartment = require('./Apartment')

const predio1 = new Building('Reprograma Tower', 'Rua Todas em Tech, 52', 70710280);   

const predio1_apto1201 = new Apartment(1, 'Yelitza', 1201);
const predio1_apto101 = new Apartment(1, 'Eva', 101);

predio1_apto1201.depositPlastic(5);
predio1_apto1201.depositPlastic(15);
predio1_apto101.depositPlastic(30);

console.log(predio1_apto1201.recycledCountPerApt) //20
console.log(predio1.totalRecycledPlastic) //50
console.table(predio1.registeredApartments) //[1201, 101]

/* ------------------------------------------------------ */

const predio2 = new Building('On25 Tower', 'Rua JavaScript, 25', 70710281);   

const predio2_apto1503 = new Apartment(2, 'Tiago', 1503);
const predio2_apto1501 = new Apartment(2, 'Eva', 1501);

predio2_apto1503.depositPlastic(10)
predio2_apto1501.depositPlastic(3)
predio2_apto1501.depositPlastic(8)

console.log(predio2.totalRecycledPlastic) //21
console.table(predio2.registeredApartments) //[1503, 1501]

