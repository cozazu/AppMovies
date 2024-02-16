const express = require("express");
const movieRouter = require("./routes/movieRouter.js");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
/* const homeRouter = require("./routes/homeRouter"); */

/* Middlewares */
/* app.use("/", (req, res) => {
    console.log(`${req.method} a la ruta ${req.url}`);
    next();
}); */

// Middleware CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware de registro de solicitudes con Morgan
app.use(morgan('dev'));

// Middleware para analizar cuerpos de solicitud en formato JSON
app.use(express.json());

/* app.use("/", homeRouter); */
app.use("/movies", movieRouter);

/* app.get("/demo", (req, res) => res.send("DEMO")); */

module.exports = app;