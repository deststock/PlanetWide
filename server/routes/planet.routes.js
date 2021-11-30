const PlanetController = require("../controllers/planet.controllers")

module.exports = app => {
    app.get('/api', PlanetController.test);
    app.get('/api/planets', PlanetController.allPlanets);
    app.post('/api/planets/new', PlanetController.createPlanet);
    app.get('/api/planet/:id', PlanetController.getPlanet);
    app.delete('/api/planet/:id', PlanetController.deletePlanet);
    app.put('/api/planet/:id', PlanetController.updatePlanet);
} 