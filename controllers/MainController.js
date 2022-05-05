const fs = require('fs')

// Traemos el archivo que contiene nuestra data a mostrar desde un json

const productos = JSON.parse(fs.readFileSync('./productos.json'))


let MainController = {
   
    index: (req,res) => {
         res.render("index",{producto: productos});
    },
    login: (req,res) => {
         res.render("login");
    },
    register: (req,res) => {
         res.render("register");
    },
    productDetail: (req,res) => {
         //let productoId = res.params.id
         
         res.render("productDetail");
    },
    productCart: (req,res) => {
         res.render("productCart");
    }
}



//exportar el controlador
module.exports = MainController;