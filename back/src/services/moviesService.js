class Movie {
    constructor(id, title, year, director, duration, genre, rate, poster, description) {
        if(!title || !poster || !director) {
            throw new Error("Title, poster y director son requeridos!!!");
        }
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
        this.description = description;
    }
}

const DATA_BASE = {
    movies: [
        new Movie(
        1,
        "Guardians of",
        2017,
        "James Lucas",
        "2h",
        ["Action"],
        7.7,
        "La mejor película",
        ""
        )
    ],
};

  
module.exports = { 
    getMovies: async() => {
        return await DATA_BASE.movies;
    }
};