const addMovie = require("./renderCards.js");
const principalContent = document.getElementById("moviesConten");       
const url = "http://localhost:3000/movies"
const axios = require("axios");

const getMovies = async () => {
  try {
    const { data } = await axios.get(url);
    const arrayMovies = data.map(movie => addMovie(movie));
    arrayMovies.forEach(element => {
      principalContent.appendChild(element);
    });      
  }
  catch (error) {
    alert(error.message);
  }
}
getMovies();
  

  /* console.log("version 1.0.4 - promesas con async/await"); */


  /* axios
    .getAdapter(url) 
    retorna => instancia de promesa
    .then(response => 
      responde.data.map(movie => cardGenerator(movie))
      ) responde = {..., data: [ {1}. {2}, {3} ] }
    .catch(error => alert(error.message)); 
    error = {..., message: Aquí el error} */

  /* $.get(url, (movies, status) => {
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
  }); */


/* renderMovies(); */



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













