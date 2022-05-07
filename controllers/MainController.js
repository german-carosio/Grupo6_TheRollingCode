const fs = require('fs');

const productos = JSON.parse(fs.readFileSync('./productos.json'))

//categorias
const headset = "headset"
const mouse = "mouse"
const teclado = "teclado"

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
     res.render("productList",{productos: productos, headset : headset, mouse : mouse, teclado : teclado});
     },

    productDetail: (req,res) => {
         const producto = productos.find(element =>{
               return element.id === parseInt(req.params.id)
          })
         res.render("productDetail",{producto: producto});
     },

    productCart: (req,res) => {
     res.render("productCart");
     },

    categorias: (req,res) => {  

     const categoria = productos.filter(element =>{
          return element.categoria === req.params.categoria
     })
         res.render("categorias",{categoria:categoria, headset:headset, mouse:mouse, teclado:teclado});
    },

    administrador:(req,res) => {
     res.render("administrador");
}
}



//exportar el controlador
module.exports = MainController;