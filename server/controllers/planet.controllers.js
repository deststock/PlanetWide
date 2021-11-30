const Planet = require("../models/planet.models")

module.exports.test = (req, res) => {
    res.json("WORKINGGGGG good job")
}

module.exports.allPlanets = (req, res) => {
    Planet.find({})
        .then(planets => res.json(planets))
        .catch(err => res.json(err))
}

module.exports.createPlanet = (req, res) => {
    Planet.create(req.body) 
        .then(newPlanet => res.json(newPlanet))
        .catch(err => res.status(400).json(err))
}

module.exports.getPlanet = (req, res) => {
    Planet.findById({_id:req.params.id})
        .then(planet => res.json(planet))
        .catch( err => res.json(err))
}

module.exports.deletePlanet = (req, res) => {
    Planet.deleteOne({_id:req.params.id})
        .then(deletedPlanet => res.json(deletedPlanet))
        .catch( err => res.json(err))
}

module.exports.updatePlanet = (req, res) => {
    Planet.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then(updatedPlanet => res.json(updatedPlanet))
        .catch(err => res.status(400).json(err))
} 
