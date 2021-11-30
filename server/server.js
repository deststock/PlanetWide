const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000

require("./config/mongoose.config"); // initialize db connection 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

const PlanetRoutes = require("./routes/planet.routes");
PlanetRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port " + port));
