const fs = require('fs');

const productos = JSON.parse(fs.readFileSync('./productos.json'))

//categorias

const categorias = ["Headset", "Mouse", "Teclado"];

let carrito = [];

let ProductsController = {
   
    productList: (req,res) => {
     res.render("productList",{productos: productos, categorias: categorias});
     },

    productDetail: (req,res) => {
         const producto = productos.find(element =>{
               return element.id === parseInt(req.params.id)
          })
         res.render("productDetail",{producto: producto});
     },

    categorias: (req,res) => {  

     const categoria = productos.filter(element =>{
          return element.categoria === req.params.categoria
     })
         res.render("categorias",{categoria:categoria,categorias: categorias});
    },

     administrador:(req,res) => {
     res.render("administrador", {productos: productos});
},

     crear:(req,res) => {
     res.render("crear");
},
    productCart: (req,res) => {
     res.render("productCart",{carrito: carrito});
     }
}



//exportar el controlador
module.exports = ProductsController;