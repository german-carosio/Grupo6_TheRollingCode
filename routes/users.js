//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const UsersController = require ("../controllers/UsersController")

//crear las rutas para "/..."  (app.get)

router.get("/login", UsersController.login);
router.get("/register", UsersController.register);


//exportar el router
module.exports = router;