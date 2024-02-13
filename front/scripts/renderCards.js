const principalContent = document.getElementById("moviesConten");

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

module.exports = addMovie();
