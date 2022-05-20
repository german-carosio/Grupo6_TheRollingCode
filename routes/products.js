//llamar al router de express
const express = require("express");
const router = express.Router();
const path = require("path");

//llamar a multer (procesar archivos)
const multer = require("multer");

const storage = multer.diskStorage({
    destination:function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"))
    },
    filename: function(req, file, cb) {
        let imagenProducto = Date.now() + path.extname(file.originalname);
        cb(null, imagenProducto);
    }
})
const upload = multer ({ storage : storage })

//llamar al controlador
const ProductsController = require ("../controllers/ProductsController")

//crear las rutas 

//productos
router.get("/productList", ProductsController.productList);
router.get("/productDetail/:id", ProductsController.productDetail);
router.get("/categorias/:categoria", ProductsController.categorias);

//carrito
router.get("/productCart", ProductsController.productCart);

//ADMINISTRADOR
router.get("/administrador", ProductsController.administrador);
//Crear productos
router.get("/productCreate", ProductsController.productCreate);
router.post("/productCreate", upload.single("img"), ProductsController.productSave);
//Editar productos
router.get("/productEdit/:id", ProductsController.productEdit);
//Borrar productos
router.delete("/delete/:id", ProductsController.productDelete);



//exportar el router
module.exports = router;