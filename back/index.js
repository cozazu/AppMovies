const app = require("./src/server");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`La app se está escuchando en el puerto ${PORT}`);
})