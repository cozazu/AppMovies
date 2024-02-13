const { principalContent, addMovie } = require("./renderCards.js");

const url = "https://students-api.2.us-1.fl0.io/movies"

function renderMovies() {
  $.get(url, (movies, status) => {
    if (status === "success") {
      const arraymovies = movies.map((pelicula) => addMovie(pelicula));
      arraymovies.forEach((element) => {
        principalContent.appendChild(element);
      });
      console.log(state);
      console.log(state);
    } else {
      const errorElement = document.createElement("h3");
      errorElement.innerText = `Error en la petición AJAX a ${url}`
      principalContent.appendChild(errorElement);
    }
  });
}

renderMovies();



/* window.addEventListener("DOMContentLoaded", renderMovies); */

/* document.addEventListener('DOMContentLoaded', function () {
    const contenedorPeliculas = document.getElementById("peliculasBox");

    tempData.forEach((pelicula) => {
        const elementosPelicula = document.createElement("div");
        elementosPelicula.innerHTML = `
            <h2>${pelicula.title}</h2>
            <p>Year: ${pelicula.year}</p>
            <p>Director: ${pelicula.director}</p>
            <p>Duration: ${pelicula.duration}</p>
            <p>Genre: ${pelicula.genre}</p>
            <p>Rate: ${pelicula.rate}</p>
            <img src="${pelicula.poster}" alt="${pelicula.title}"></img>            
        `;
        contenedorPeliculas.appendChild(elementosPelicula);
    });
}); */













