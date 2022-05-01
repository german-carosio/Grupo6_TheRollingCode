// llamar a path
const path = require("path");

//crear objeto MainController
let MainController = {
    //crear un metodo (req, res) para todos los "/..." 
    index: function (req,res) {
        //responder con un archivo que es una vista
        res.sendFile(path.join(__dirname,"../views/index.html"));
    },
    login:function (req,res) {
        res.sendFile(path.join(__dirname,"../views/login.html"));
    },
    register:function (req,res) {
        res.sendFile(path.join(__dirname,"../views/register.html"));
    },
    productDetail:function (req,res) {
        res.sendFile(path.join(__dirname,"../views/productDetail.html"));
    },
    productCart:function (req,res) {
        res.sendFile(path.join(__dirname,"../views/productCart.html"));
    }
}


//exportar el controlador
module.exports = MainController;