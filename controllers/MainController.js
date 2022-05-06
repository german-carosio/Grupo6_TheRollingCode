const fs = require('fs');

// Traemos el archivo que contiene nuestra data a mostrar desde un json

const productos = JSON.parse(fs.readFileSync('./productos.json'))


let MainController = {
   
    index: (req,res) => {
         res.render("index",{productos: productos});
    },
    login: (req,res) => {
         res.render("login");
    },
    register: (req,res) => {
         res.render("register");
    },
    productList: (req,res) => {
     res.render("productList",{productos: productos});
},
    productDetail: (req,res) => {
         const producto = productos.find(element =>{
              return element.id === req.params.id
         })
         //console.log("resultado", producto);
         res.render("productDetail",{producto: producto});
    },
    productCart: (req,res) => {
         res.render("productCart");
    }
}



//exportar el controlador
module.exports = MainController;