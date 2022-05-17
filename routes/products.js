//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const ProductsController = require ("../controllers/ProductsController")

//crear las rutas para "/..."  (app.get)

router.get("/productList", ProductsController.productList);
router.get("/productDetail/:id", ProductsController.productDetail);
router.get("/categorias/:categoria", ProductsController.categorias);
router.get("/productCart", ProductsController.productCart);
router.get("/administrador", ProductsController.administrador);


//exportar el router
module.exports = router;