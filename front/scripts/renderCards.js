const cardContainer = document.getElementById("container-movies");

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
  mrate.textContent = `valoracion: ${rate}`;
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

module.exports = addMovie;

/* function addMovie({ title, year, director, duration, genre, rate, poster }) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("movie-container");
  cardDiv.innerHTML = `
  <h3><a href="#pordefinir">${title}</a></h3>
  <h4>Año: ${year}</h4>
  <h4>Director: ${director}</h4>
  <h4>Duración: ${duration}</h4>
  <h4>Duración: ${genre.join(" - ")}</h4>
  <h4>Rating: ${rate}</h4>
  <img src="${poster} alt="${title}/>"
  `;
  cardContainer?.appendChild(cardDiv);
}

module.exports = addMovie; */