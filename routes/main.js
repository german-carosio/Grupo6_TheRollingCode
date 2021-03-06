//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const MainController = require ("../controllers/MainController")

//crear las rutas para "/..."  (app.get)
router.get("/", MainController.index);
router.get("/administrador", MainController.administrador);


//exportar el router
module.exports = router;