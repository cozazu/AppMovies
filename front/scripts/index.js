console.log(tempData);


document.addEventListener('DOMContentLoaded', function () {
    const contenedorPeliculas = document.getElementById("peliculasBox");

    tempData.forEach((pelicula) => {
        const elementosPelicula = document.createElement("div");
        elementosPelicula.className = "elementoPelicula"
        elementosPelicula.style.backgroundRepeat = `no-repeat`
        elementosPelicula.style.backgroundImage = `url(${pelicula.poster})`;
        elementosPelicula.innerHTML = `
            <h2>${pelicula.title}</h2>
            <p>Year: ${pelicula.year}</p>
            <p>Director: ${pelicula.director}</p>
            <p>Duration: ${pelicula.duration}</p>
            <p>Genre: ${pelicula.genre}</p>
            <p>Rate: ${pelicula.rate}</p>
            
        `;
        contenedorPeliculas.appendChild(elementosPelicula);
    });
});


/* <img src="${pelicula.poster}" alt="${pelicula.title}"></img> */


/* document.addEventListener('DOMContentLoaded', function () {
    const boxPeliculas = document.getElementById("peliculasBox");

    // Importa los datos desde tempData.js
    

    // Mostrar películas al cargar la página
    mostrarPeliculas(peliculas);

    // Función para mostrar las películas en el DOM
    function mostrarPeliculas(peliculas) {
        boxPeliculas.innerHTML = "";

        peliculas.forEach((pelicula) => {
            // El código sigue siendo el mismo
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");

            const imgElement = document.createElement("img");
            imgElement.src = pelicula.imgUrl;
            divPelicula.appendChild(imgElement);

            const titleElement = document.createElement("h3");
            titleElement.textContent = pelicula.title;
            divPelicula.appendChild(titleElement);

            const detailsElement = document.createElement("div");
            detailsElement.classList.add("detalles");
            
            detailsElement.innerHTML = `
                <p><strong>Año:</strong> ${pelicula.year}</p>
                <p><strong>Director:</strong> ${pelicula.director}</p>
                <p><strong>Duración:</strong> ${pelicula.duration}</p>
                <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
                <p><strong>Puntuación:</strong> ${pelicula.rate}</p>
            `;

            divPelicula.appendChild(detailsElement);

            boxPeliculas.appendChild(divPelicula);
        });
    }
}); */

