const express = require("express");
const router = express.Router();
const path = require("path");

//llamar al controlador
const UsersController = require ("../controllers/UsersController")

//crear las rutas para "/..."  (app.get)
router.get("/", UsersController.index);
router.get("/login", UsersController.login);

//creacion de usuarios
router.get("/register", UsersController.register);
router.post("/register", UsersController.userSave);

//edicion de usuarios
router.get("/userEdit/:id", UsersController.userEdit);
router.put("/userEdit/:id", UsersController.userUpdate);

//eliminacion de usuarios
router.delete("/delete/:id", UsersController.userDelete);


//exportar el router
module.exports = router;