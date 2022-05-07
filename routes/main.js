//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const MainController = require ("../controllers/MainController")

//crear las rutas para "/..."  (app.get)
router.get("/", MainController.index);
router.get("/login", MainController.login);
router.get("/register", MainController.register);
router.get("/productList", MainController.productList);
router.get("/productDetail/:id", MainController.productDetail);
router.get("/categorias/:categoria", MainController.categorias);
router.get("/productCart", MainController.productCart);
router.get("/administrador", MainController.administrador);


//exportar el router
module.exports = router;