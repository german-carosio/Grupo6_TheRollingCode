// llamar a path
const path = require("path");

//crear objeto MainController
let MainController = {
    //crear un metodo (req, res) para todos los "/..." 
    index: (req,res) => {
        //responder con un archivo que es una vista
        //usando ejs en vez de html
         res.render("index");
    },
    login: (req,res) => {
         res.render("login");
    },
    register: (req,res) => {
         res.render("register");
    },
    productDetail: (req,res) => {
         res.render("productDetail");
    },
    productCart: (req,res) => {
         res.render("productCart");
    }
}


//exportar el controlador
module.exports = MainController;