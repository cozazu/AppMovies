/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { principalContent, addMovie } = __webpack_require__(/*! ./renderCards.js */ \"./scripts/renderCards.js\");\n\nconst url = \"https://students-api.2.us-1.fl0.io/movies\"\n\nfunction renderMovies() {\n  $.get(url, (movies, status) => {\n    if (status === \"success\") {\n      const arraymovies = movies.map((pelicula) => addMovie(pelicula));\n      arraymovies.forEach((element) => {\n        principalContent.appendChild(element);\n      });\n      console.log(state);\n      console.log(state);\n    } else {\n      const errorElement = document.createElement(\"h3\");\n      errorElement.innerText = `Error en la petición AJAX a ${url}`\n      principalContent.appendChild(errorElement);\n    }\n  });\n}\n\nrenderMovies();\n\n\n\n/* window.addEventListener(\"DOMContentLoaded\", renderMovies); */\n\n/* document.addEventListener('DOMContentLoaded', function () {\n    const contenedorPeliculas = document.getElementById(\"peliculasBox\");\n\n    tempData.forEach((pelicula) => {\n        const elementosPelicula = document.createElement(\"div\");\n        elementosPelicula.innerHTML = `\n            <h2>${pelicula.title}</h2>\n            <p>Year: ${pelicula.year}</p>\n            <p>Director: ${pelicula.director}</p>\n            <p>Duration: ${pelicula.duration}</p>\n            <p>Genre: ${pelicula.genre}</p>\n            <p>Rate: ${pelicula.rate}</p>\n            <img src=\"${pelicula.poster}\" alt=\"${pelicula.title}\"></img>            \n        `;\n        contenedorPeliculas.appendChild(elementosPelicula);\n    });\n}); */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const principalContent = document.getElementById(\"moviesConten\");\n\nfunction addMovie({\n    title,\n    year,\n    director,\n    duration,\n    genre = [],\n    rate,\n    poster,\n  }) {\n    const moviecart = document.createElement(\"div\");\n    const infomovie = document.createElement(\"div\");\n    const imgcart = document.createElement(\"div\");\n    const mtitle = document.createElement(\"h1\");\n    const myear = document.createElement(\"p\");\n    const mimagenpeli = document.createElement(\"img\");\n    const mdirector = document.createElement(\"p\");\n    const mduration = document.createElement(\"p\");\n    const mgenre = document.createElement(\"p\");\n    const mrate = document.createElement(\"p\");\n  \n    mtitle.textContent = title;\n    myear.textContent = `Año: ${year}`;\n    mdirector.innerHTML = `Director ${director}`;\n    mimagenpeli.src = poster;\n    mduration.textContent = `Duracion: ${duration}`;\n    mgenre.textContent = `Genero: ${genre.join(\", \")}`;\n    mrate.textContent = `valoracion: ${rate} :star:`;\n    moviecart.className = \"moviescarts\";\n    imgcart.className = \"imgcontent\";\n    infomovie.className = \"infocontent\";\n  \n    infomovie.appendChild(myear);\n    infomovie.appendChild(mdirector);\n    infomovie.appendChild(mduration);\n    infomovie.appendChild(mgenre);\n    infomovie.appendChild(mrate);\n  \n    imgcart.appendChild(mimagenpeli);\n  \n    moviecart.appendChild(mtitle);\n    moviecart.appendChild(imgcart);\n    moviecart.appendChild(infomovie);\n  \n    return moviecart;\n};\n\nmodule.exports = {\n  principalContent: principalContent,\n  addMovie: addMovie\n};\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;