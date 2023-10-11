const PetController = require('../controllers/pet.controller');

module.exports = function (app) {
    app.get('/api', PetController.index);
    app.get('/api/pets', PetController.readAll);
    app.post('/api/pets', PetController.createOne);
    app.get('/api/pets/:id', PetController.readOne);
    app.patch('/api/pets/:id', PetController.updateOne);
    app.delete('/api/pets/:id', PetController.deleteOne);
}