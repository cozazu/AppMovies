const express = require("express");
const app = express();

// Definir ruta GET para '/movies' y su controlador
app.get('/movies', (req, res) => {
    // Controlador para la ruta '/movies'
    res.send('Próximamente estarán disponibles los datos de películas');
});
  
module.exports = app;