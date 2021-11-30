const mongoose = require("mongoose")

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Planets name is required."]
    },
    namedFor:{
        type: String, 
        required: [true, "Named for required"]
    },
    image: {
        type: String, 
        required: [true, "Planet image is required."] 
    },
    orbit: {
        type: String, 
        required: [true, "Orbit is required."]
    },
    discovery: {
        type: String, 
        required: [true, "Discovery information is required."]
    },
    diameter: {
        type: String, 
        required: [true, "Diameter is required."]
    }, 
    day: {
        type: String, 
        required: [true, "Earth days is required."]
    },
    fact: {
        type: String, 
        required: [true, "Planet fact is required."]
    },

}, {timestamps: true})

const Planet = mongoose.model("Planet", PlanetSchema);

module.exports = Planet 