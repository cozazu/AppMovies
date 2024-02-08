function addMovie({
  title,
  year,
  director,
  duration,
  genre = [],
  rate,
  poster,
}) {
  const moviecard = document.createElement("div");
  moviecard.className = "card"; // Agregar la clase 'card' de Bootstrap

  const img = document.createElement("img");
  img.src = poster;
  img.className = "card-img-top"; // Agregar la clase 'card-img-top' de Bootstrap

  const body = document.createElement("div");
  body.className = "card-body"; // Agregar la clase 'card-body' de Bootstrap

  const mtitle = document.createElement("h5");
  mtitle.textContent = title;
  mtitle.className = "card-title"; // Agregar la clase 'card-title' de Bootstrap

  const myear = document.createElement("p");
  myear.textContent = `Año: ${year}`;
  myear.className = "card-text"; // Agregar la clase 'card-text' de Bootstrap

  const mdirector = document.createElement("p");
  mdirector.innerHTML = `Director: ${director}`;
  mdirector.className = "card-text"; // Agregar la clase 'card-text' de Bootstrap

  const mduration = document.createElement("p");
  mduration.textContent = `Duración: ${duration}`;
  mduration.className = "card-text"; // Agregar la clase 'card-text' de Bootstrap

  const mgenre = document.createElement("p");
  mgenre.textContent = `Género: ${genre.join(", ")}`;
  mgenre.className = "card-text"; // Agregar la clase 'card-text' de Bootstrap

  const mrate = document.createElement("p");
  mrate.textContent = `Valoración: ${rate} ⭐`;
  mrate.className = "card-text"; // Agregar la clase 'card-text' de Bootstrap

  body.appendChild(mtitle);
  body.appendChild(myear);
  body.appendChild(mdirector);
  body.appendChild(mduration);
  body.appendChild(mgenre);
  body.appendChild(mrate);

  moviecard.appendChild(img);
  moviecard.appendChild(body);

  return moviecard;
}


/*function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
}*/

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


/* console.log(tempData);

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
}

/*const arraymovies = tempData.map((pelicula) => addMovie(pelicula));*/

/* function renderMovies() {
  $.get(url, (movies, status) => {
    if (status === "succes") {
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

renderMovies(); */ 













