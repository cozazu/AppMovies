const { createMovie, clearMovie } = require("./createMovie.js");
const addMovie = require("./renderCards.js");
const principalContent = document.getElementById("container-movies");       
const url = "http://localhost:3000/movies"
const axios = require("axios");

const getMovies = async () => {
  try {
    const { data } = await axios.get(url);
    const arrayMovies = data.map(movie => addMovie(movie));
    arrayMovies.forEach(element => {
      principalContent?.appendChild(element);
    });      
  }
  catch (error) {
    alert(error.message);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getMovies();
  const submit = document.getElementById("crear");
  submit?.addEventListener("click", createMovie);
  console.log("Version 1.2.0 - Formulario para crear nueva película");
  const limpiar = document.getElementById("limpiar");
  limpiar?.addEventListener("click", clearMovie);
});


  

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
















