const dbConfig = require("./src/config/dbConfig");
const app = require("./src/server");
const PORT = 3000;

const startServer = async () => {
    try {
        await dbConfig();
        app.listen(PORT, () => {
            console.log(`La app se está escuchando en el puerto ${PORT}`);
        }); 
    } catch (error) {
        console.log(error);
    }    
};

startServer();

