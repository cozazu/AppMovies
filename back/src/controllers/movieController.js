const moviesService = require("../services/moviesService.js");

function getMovies(req, res) {
    const movies = moviesService.getMovies();
    res.json(movies);
        /* .status(200)
        .send("próximamente estarán disponibles los datos de películas.") */
};

module.exports = { getMovies };