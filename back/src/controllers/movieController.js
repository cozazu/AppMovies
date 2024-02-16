const { getMovies } = require("../services/moviesService.js")

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await getMovies();
            res
                .status(200)
                .json(movies)                
        } catch (error) {
            res
                .status(500)
                .json({
                    message: "Error al obtener los datos",
                    error: error.message
                })
        }        
    }
};
