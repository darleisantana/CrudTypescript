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
    const { id }: Number = id++;
    const { name }: String = req.body;
    const { birthdate }: Date = req.body;
    const { document }: String = req.body;
    const { acceptedTerms }: Boolean = req.body;
    const { zipCode }: String = req.body;
    const { street }: String = req.body;
    const { neighborhood }: String = req.body;
    const { city }: String = req.body;
    const { state }: String = req.body;
    const { createdAt }: Date = Date();
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
    const { id } = req.post;
    const { name } = req.body;

    dice[id] = name;

    return res.json(dice);
})

//Deletar alguma informação no back-end
server.delete('/:index', (req, res) => {
    const { id } = req.params;

    dice.splice(id, 1);

    return res.send();
});

server.listen(3000);