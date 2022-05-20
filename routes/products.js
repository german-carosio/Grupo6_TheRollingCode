//llamar al router de express
const express = require("express");
const router = express.Router();
//llamar a multer (procesar archivos)
const multer = require("multer");

//llamar al controlador
const ProductsController = require ("../controllers/ProductsController")

//crear las rutas 

//productos
router.get("/productList", ProductsController.productList);
router.get("/productDetail/:id", ProductsController.productDetail);
router.get("/categorias/:categoria", ProductsController.categorias);

//carrito
router.get("/productCart", ProductsController.productCart);

//administrador
router.get("/administrador", ProductsController.administrador);

router.get("/productCreate", ProductsController.productCreate);
router.post("/productCreate", ProductsController.productSave);

router.get("/productEdit/:id", ProductsController.productEdit);

router.delete("/delete/:id", ProductsController.productDelete);



//exportar el router
module.exports = router;