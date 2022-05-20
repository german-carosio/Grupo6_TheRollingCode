const fs = require('fs');
const path = require('path');

//leer json y crear un array en js
const productosJsonRead = fs.readFileSync('./productos.json',{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}

//categorias
const categorias = ["Headset", "Mouse", "Teclado"];

//array de carrito
let carrito = [];

let ProductsController = {
   
//listar productos 
    productList: (req,res) => {
     res.render("productList",{productos: productos, categorias: categorias});
     },

//detalle de producto
    productDetail: (req,res) => {
         const producto = productos.find(element =>{
               return element.id === parseInt(req.params.id)
          })
         res.render("productDetail",{producto: producto});
     },

//dividir en categorias
    categorias: (req,res) => {  

     const categoria = productos.filter(element =>{
          return element.categoria === req.params.categoria
     })
         res.render("categorias",{categoria:categoria,categorias: categorias});
    },

//administrador
     administrador:(req,res) => {
     res.render("administrador", {productos: productos});
},

//crear producto
     productCreate:(req,res) => {+
          
     res.render("productCreate", {productos:productos});
},
     productSave:(req,res) => {

     productoNuevo = {
          id: req.body.id,
          marca: req.body.marca,
          modelo:req.body.modelo,
          precio: req.body.precio,
          detalle: req.body.detalle,
          categoria:req.body.categoria,
          img: req.body.img
     };

     productos.push(productoNuevo);

     console.log(productos);

     const productosJsonRead = JSON.stringify(productos);
     fs.writeFileSync('./productos.json', productosJsonRead);

     res.redirect("administrador");
},

//Editar producto 
     productEdit:(req,res) => {
     const producto = productos.find(element =>{
     return element.id === parseInt(req.params.id)
     })
     res.render("productEdit",{productoEdit: producto});
},

//Eliminar producto 
     productDelete:(req,res) => {
          
          res.send("eliminar");
},

//carrito de compras
    productCart: (req,res) => {

     res.render("productCart",{carrito: carrito});
}

}



//exportar el controlador
module.exports = ProductsController;