const express = require('express');
const server = express();
server.use(express.json());
const dice = [];

//Buscar alguma informação no back-end
server.get('/', (req, res) => {
    return res.json(dice);
})
    
server.get('/:index', (req, res) => {
    return res.json(req.user);
})

//Criar alguma informação no back-end
server.post('/', (req, res) => {
    const { id } = id++;
    const { name } = req.body;
    const { birthdate } = req.body;
    const { document } = req.body;
    const { acceptedTerms } = req.body;
    const { zipCode } = req.body;
    const { street } = req.body;
    const { neighborhood } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { createdAt } = Date();
    const { updatedAt } = null;
    
    dice.push(name);
    dice.push(birthdate);
    dice.push(document);
    dice.push(acceptedTerms);
    dice.push(zipCode);
    dice.push(street);
    dice.push(neighborhood);
    dice.push(city);
    dice.push(state);
    dice.push(createdAt);
    dice.push(updatedAt);

    return res.json(dice);
})

//Editar alguma informação no back-end
server.put('/:index', (req, res) => {
    const { index } = req.post;
    const { name } = req.body;

    dice[index] = name;

    return res.json(dice);
})

//Deletar alguma informação no back-end
server.delete('/:index', (req, res) => {
    const { index } = req.params;

    dice.splice(index, 1);

    return res.send();
});

server.listen(3000);