const express = require("express");
const movieRouter = require("./routes/movieRouter.js");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

/* Middlewares */
/* app.use("/", (req, res) => {
    console.log(`${req.method} a la ruta ${req.url}`);
    next();
}); */
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Retorna una respuesta vacía (status code 204)
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/movies", movieRouter);

/* app.get("/demo", (req, res) => res.send("DEMO")); */

module.exports = app;