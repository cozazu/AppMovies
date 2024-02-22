const axios = require("axios");

/*title year director duration genre rate poster*/

function validateForm({
    title, year, director, duration, genre, rate, poster
}) {
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster) 
        return "Todos los cambios son obligatorios";
    if(director.length < 5 || director.length > 50)
        return "Director debe contener entre 5 y 50 caracteres";
    if(isNaN(rate) || rate < 1 || rate > 10)
        return "El rating debe ser un número entre 1 y 10";
    if(!poster.includes("https://"))
        return "El poster debe ser una URL válida"
    return null;
}


function createMovie() {
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(" ");
    /* action comedy => [action, comedy] */
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const newMovie = { title, year, director, duration, genre, rate, poster };

    /* validar datos */
    const error = validateForm(newMovie);
    /* "Mensaje" || null */
    if(error) return alert(error);

    /* Petición al Back */
    axios
        .post("http://localhost:3000/movies", newMovie)
        .then(() => alert("Película creada!!"))
        .catch((error) => alert("Error al crear la película..."));
};

function clearMovie() {
    document.getElementById("title").value="";
    document.getElementById("year").value="";
    document.getElementById("director").value="";
    document.getElementById("duration").value="";
    document.getElementById("genre").value="";
    /* action comedy => [action, comedy] */
    document.getElementById("rate").value="";
    document.getElementById("poster").value="";
}
module.exports = { createMovie, clearMovie };

/* const submit = document.getElementById("movieForm");
submit.addEventListener("submit", createMovie); */
















/* function limpiarFormulario() {
    document.getElementById("formulario-pelicula").reset();
}

document.getElementById("formulario-pelicula").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    // Obtener los valores de los inputs
    const titulo = document.getElementById("titulo").value;
    const año = document.getElementById("año").value;
    const director = document.getElementById("director").value;
    const duracion = document.getElementById("duracion").value;
    const genero = document.getElementById("genero").value;
    const valoracion = document.getElementById("valoracion").value;

    // Validar que todos los campos estén completos
    if (titulo && año && director && duracion && genero && valoracion) {
        // Aquí iría la lógica para enviar los datos al servidor o realizar alguna acción adicional
        alert("Formulario enviado correctamente");
    } else {
        alert("Por favor completa todos los campos");
    }
}); */


