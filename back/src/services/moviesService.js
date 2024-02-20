const axios = require("axios");
const urlMovies = "https://henry-movies-dev-sgtm.3.us-1.fl0.io/";

class estructuraMovie {
    constructor(id, title, year, director, duration, genre, rate, poster, description) {
        if (!title && !poster && !director) {
            throw new Error("Title, poster y director son requeridos!!!");
        }
        this.id = id,
        this.title = title,
        this.year = year,
        this.director = director,
        this.duration = duration,
        this.genre = genre,
        this.rate = rate,
        this.poster = poster,
        this.description = description
    };
};

const getMovies = async () => {
    try {
        const movies = await axios.get(urlMovies);
        console.log("Estado de la respuesta de la API:", movies.status);
        const dataMovies = movies.data.map(dataMovie => {
            return new estructuraMovie (
                dataMovie.id,
                dataMovie.title,
                dataMovie.year,
                dataMovie.director,
                dataMovie.duration,
                dataMovie.genre,
                dataMovie.rate,
                dataMovie.poster,
                dataMovie.description
            );
        });
        return dataMovies; 
    } catch (error) {
        console.error("Error al obtener peliculas:", error);
        throw error;
    }
};

module.exports = { getMovies };