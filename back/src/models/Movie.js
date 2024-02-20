const mongoose = require("mongoose");

/* 1 conexion */
/* 2 BBDD => movies */
/* 3 Esquema => Modelo */

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true,
    min: [1895, `No hay películas previo a {VALUE}`]
    },
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: {
        type: String,
        /* CUSTOM VALIDATOR */
        validate: {
            validator: function(input) {
                return input.includes("https://")
            },
            message: props => `${props.value} no es una url válida`
        }
    },
    description: String    
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
