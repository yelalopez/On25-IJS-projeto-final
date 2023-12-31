
![Ecoplast](./src/img/ecoPlastBrand.png)

**EcoPlast** é um programa de gestão de plástico reciclável destinado a pessoas que vivem em apartamentos. O objetivo principal deste programa é incentivar a reciclagem de plástico, reduzir o impacto ambiental negativo do plástico descartado e recompensar os participantes por suas ações sustentáveis. 

Esta iniciativa está inspirada no trabalho da [*Fundación Botellas de Amor*](https://botellasdeamor.org/co/), que atua na Colombia e em outros paises da América Latina.


### Funcionalidades

- **Gestão de edificios:** Para participar da iniciativa, é preciso cadastrar os predios, antes dos apartamentos. Para isso usamos a classe Building.

```javascript
const Building = require('./Building')

const predio1 = new Building('Reprograma Tower', 'Rua Todas em Tech, 52', 70710280);
```

- **Gestão de Apartamentos:** A partir da confirmação do registro do predio. São criados os apartamentos participantes, na classe Apartment. Em seguida, é possível inserir as informações sobre a quantidade de plástico descartado.

```javascript
const Apartment = require('./Apartment')

const predio1_apto1201 = new Apartment(1, 'Yelitza', 1201);
const predio1_apto101 = new Apartment(1, 'Eva', 101);

```

- **Plástico Reciclado:** Funções que validam e convertem o valor do peso na contribuição para a fabricação do RPL.

```javascript

validateWeight(value)
recycledPlastic(weight)

```

## Funcionalidades a serem implementadas

- Desenvolvimento de uma funcionalidade que recompensa o edifício com base na quantidade de plástico reciclado.

- Desenvolvimento do Front-end

## Rodando os testes

Para rodar os testes, execute o seguinte comando

```bash
  npm run test
```

### Tecnologias

  ![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117)&nbsp;
  ![Jest](https://img.shields.io/badge/-Jest-0D1117?style=for-the-badge&logo=jest&labelColor=0D1117)&nbsp;

### Agradecimentos
Meus mais sinceros agradecimentos a toda equipe Reprograma. Nossa guerreira Raquel Andrade, pelo acompanhamento incansável. À Luciana Primante, pela força no desenvolvimento do curso. Nada seria possível sem o engajamento das professoras: Mariana Lima, Layla Canto, Lua Kerlen, Renata Andrade, Camila Monteiro e das monitoras Nathalia Micheloni e Cintia Fumi. Além disso, agradeço à psicóloga Ju Farias e na área de empregabilidade social, à Bárbara Gomes. Finalmente a todas as mulheres dessa turma que tornou cada encontro muito especial.
### Autora

[Yelitza López](https://www.github.com/yelalopez)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yelitza-lopez/)

