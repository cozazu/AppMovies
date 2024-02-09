console.log(tempData);

console.log(tempData);

const principalContent = document.getElementById("moviesConten");
const url = "https://students-api.2.us-1.fl0.io/movies"

function addMovie({
  title,
  year,
  director,
  duration,
  genre = [],
  rate,
  poster,
}) {
  const moviecart = document.createElement("div");
  const infomovie = document.createElement("div");
  const imgcart = document.createElement("div");
  const mtitle = document.createElement("h1");
  const myear = document.createElement("p");
  const mimagenpeli = document.createElement("img");
  const mdirector = document.createElement("p");
  const mduration = document.createElement("p");
  const mgenre = document.createElement("p");
  const mrate = document.createElement("p");

  mtitle.textContent = title;
  myear.textContent = `Año: ${year}`;
  mdirector.innerHTML = `Director ${director}`;
  mimagenpeli.src = poster;
  mduration.textContent = `Duracion: ${duration}`;
  mgenre.textContent = `Genero: ${genre.join(", ")}`;
  mrate.textContent = `valoracion: ${rate} :star:`;
  moviecart.className = "moviescarts";
  imgcart.className = "imgcontent";
  infomovie.className = "infocontent";

  infomovie.appendChild(myear);
  infomovie.appendChild(mdirector);
  infomovie.appendChild(mduration);
  infomovie.appendChild(mgenre);
  infomovie.appendChild(mrate);

  imgcart.appendChild(mimagenpeli);

  moviecart.appendChild(mtitle);
  moviecart.appendChild(imgcart);
  moviecart.appendChild(infomovie);

  return moviecart;
};

renderMovies();

/* function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
} */

/*const arraymovies = tempData.map((pelicula) => addMovie(pelicula));*/

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













