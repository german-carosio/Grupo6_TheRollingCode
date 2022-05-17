const fs = require('fs');

const productos = JSON.parse(fs.readFileSync('./productos.json'))

//categorias
const categorias = ["Headset", "Mouse", "Teclado"];

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
    productCart: (req,res) => {
    res.render("productCart");
    }
}



//exportar el controlador
module.exports = ProductsController;