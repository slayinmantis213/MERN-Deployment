const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    
    petName: {
        type: String,
        required: [true, "Please provide a name for this pet."],
        minLength: [3, "Name must be at least 3 characters"]
    },
    petType: {
        type: String,
        required: [true, "Please provide a type for this pet."],
        minLength: [3, "Type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description for this pet."],
        minLength: [3, "Description must be at least 3 characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },

}, { timestamps: true });


module.exports = mongoose.model('Pet', PetSchema);