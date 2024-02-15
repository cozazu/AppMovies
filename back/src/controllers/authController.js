/* const authService = require("../services/authService.js");

const authController = (req, res) => {
    console.log(req.query);
    /* { usuario: "Homero", contraseña: 1234" } */
   /*  const { usuario, contraseña } = req.query;

    if(authService.verificarCredenciales(usuario, contraseña)) {
        const token = authService.generarToken(usuario);
        res.status(200).json({ message: "Login exitoso", token });
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }
};

module.exports = authController; */