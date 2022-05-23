const express = require("express");
const router = express.Router();
const path = require("path");

//llamar a multer (procesar archivos)
const multer = require("multer");

const storage = multer.diskStorage({
    destination:function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/imgUsers"))
    },
    filename: function(req, file, cb) {
        let imagenUsuario = Date.now() + path.extname(file.originalname);
        cb(null, imagenUsuario);
    }
})
const upload = multer ({ storage : storage })

//llamar al controlador
const UsersController = require ("../controllers/UsersController")

//crear las rutas para "/..."  (app.get)
router.get("/usersList", UsersController.usersList);
router.get("/login", UsersController.login);

//creacion de usuarios
router.get("/register", UsersController.register);
router.post("/register", upload.single("img"), UsersController.userSave);

//edicion de usuarios
router.get("/userEdit/:id", UsersController.userEdit);
router.put("/userEdit/:id", upload.single("img"), UsersController.userUpdate);

//eliminacion de usuarios
router.delete("/delete/:id", UsersController.userDelete);


//exportar el router
module.exports = router;