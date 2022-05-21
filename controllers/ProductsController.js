const fs = require('fs');
const path = require('path');

let productos;

//Funcion para leer JSON
function leerJson() {
     const productosJsonRead = fs.readFileSync(path.join(__dirname, '../database/productos.json'),{encoding:'utf-8'})
     
     if (productosJsonRead === "") {
     productos = [];
     }else {
     productos = JSON.parse(productosJsonRead);
     }
     return productos
}

//Función para escribir JSON 
function escribirJson() {
const productosJsonWrite = JSON.stringify(productos, null, "\t");
fs.writeFileSync(path.join(__dirname, '../database/productos.json'), productosJsonWrite);
}

//categorias
const categorias = ["Headset", "Mouse", "Teclado"];



let ProductsController = {
   
//listar productos 
    productList: (req,res) => {
     
     leerJson();

     res.render("productList",{productos: productos, categorias: categorias});
     },

//detalle de producto
    productDetail: (req,res) => {

          leerJson();

          const producto = productos.find(element =>{
               return element.id === parseInt(req.params.id)
          })
         res.render("productDetail",{producto: producto});
     },

//dividir en categorias
    categorias: (req,res) => {  
     
     leerJson();

     const categoria = productos.filter(element =>{
          return element.categoria === req.params.categoria
     })
         res.render("categorias",{categoria:categoria,categorias: categorias});
    },

//administrador
     administrador:(req,res) => {

          leerJson();

     res.render("administrador", {productos: productos});
},

//crear producto
     productCreate:(req,res) => {
     
     leerJson();
          
     res.render("productCreate", {productos:productos});
},
     productSave:(req,res) => {

          leerJson();
          
          let ultimoProd = productos.length -1;
          let nuevoId = productos[ultimoProd].id + 1
          

     let productoNuevo = {
          id: nuevoId,
          marca: req.body.marca,
          modelo:req.body.modelo,
          precio: req.body.precio,
          detalle: req.body.detalle,
          categoria:req.body.categoria,
          img: req.file.filename
          
     };
     

     productos.push(productoNuevo);

     escribirJson();

     res.redirect("administrador");
},

//Editar producto 
     productEdit:(req,res) => {

          leerJson();

          const producto = productos.find(element =>{
          return element.id === parseInt(req.params.id)
          })

          res.render("productEdit",{productoEdit: producto});
},

     //Editar producto 
     productUpdate:(req,res) => {

          leerJson();
           
          productos.forEach(element => {
          
               let oldImage = req.file ?  req.file.filename : element.img;
               
               if (element.id === parseInt(req.params.id)) {
                    element.marca = req.body.marca;
                    element.modelo = req.body.modelo;
                    element.precio = req.body.precio;
                    element.detalle = req.body.detalle;
                    element.categoria = req.body.categoria;
                    element.img = oldImage ;
               }
               
          });
          

          escribirJson();

          res.redirect("/products/administrador");
     },

//Eliminar producto 
     productDelete:(req,res) => {

          leerJson();

          const eliminar = productos.filter(element =>{
              return element.id !== parseInt(req.params.id)
          });

          productos = eliminar;


          escribirJson();

          res.redirect("/products/administrador");
},

//carrito de compras
    productCart: (req,res) => {
          //No implementado
     res.render("productCart",{carrito: carrito});
}

}



//exportar el controlador
module.exports = ProductsController;