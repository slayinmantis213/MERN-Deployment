const Pet = require('../models/pet.model');

//Message for index route
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome"
    });
}

//CREATE
module.exports.createOne = (req, res) => {
    const {petName, petType, description, skill1, skill2, skill3} = req.body
    Pet.create({
        petName,
        petType,
        description,
        skill1,
        skill2,
        skill3
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

//GET ALL
module.exports.readAll = (req, res) => {
    Pet.find().sort( { petType: 1 } )
        .then(all => {
            res.json( all )
        })
        .catch((err) => res.status(400).json(err));
}

//GET ONE
module.exports.readOne = (req, res) => {
    Pet.findOne({ _id: req.params.id }) //db call
        .then(pet => {
            res.json(pet) //server response
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}


//UPDATE ONE
module.exports.updateOne = (req, res) => {
    Pet.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
        .then(updatedPet => {
            res.json(updatedPet)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}


//DELETE
module.exports.deleteOne = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}