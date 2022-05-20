const fs = require('fs');
const path = require('path');

//leer json y crear un array en js




//categorias
const categorias = ["Headset", "Mouse", "Teclado"];

//array de carrito
let carrito = [];

let ProductsController = {
   
//listar productos 
    productList: (req,res) => {
     const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
     let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}


     res.render("productList",{productos: productos, categorias: categorias});
     },

//detalle de producto
    productDetail: (req,res) => {
     const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
     let productos;
     
     if (productosJsonRead == "") {
          productos = [];
     }else {
          productos = JSON.parse(productosJsonRead);
     }

         const producto = productos.find(element =>{
               return element.id === parseInt(req.params.id)
          })
         res.render("productDetail",{producto: producto});
     },

//dividir en categorias
    categorias: (req,res) => {  
     const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}

     const categoria = productos.filter(element =>{
          return element.categoria === req.params.categoria
     })
         res.render("categorias",{categoria:categoria,categorias: categorias});
    },

//administrador
     administrador:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
          let productos;
          
          if (productosJsonRead == "") {
               productos = [];
          }else {
               productos = JSON.parse(productosJsonRead);
          }

     res.render("administrador", {productos: productos});
},

//crear producto
     productCreate:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}
          
     res.render("productCreate", {productos:productos});
},
     productSave:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}

          let ultimoProd = productos.length - 1;
          let nuevoId = productos[ultimoProd].id + 1;
     
     let productoNuevo = {
          id: nuevoId,
          marca: req.body.marca,
          modelo:req.body.modelo,
          precio: req.body.precio,
          detalle: req.body.detalle,
          categoria:req.body.categoria,
          img: req.file.filename
          
     };
     console.log(productoNuevo);

     productos.push(productoNuevo);

     

     const productosJsonWrite = JSON.stringify(productos, null, "\t");
     fs.writeFileSync('./productos.json', productosJsonWrite);

     res.redirect("administrador");
},

//Editar producto 
     productEdit:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}

     const producto = productos.find(element =>{
     return element.id === parseInt(req.params.id)
     })
     res.render("productEdit",{productoEdit: producto});
},

     //Editar producto 
     productUpdate:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
let productos;

if (productosJsonRead == "") {
     productos = [];
}else {
     productos = JSON.parse(productosJsonRead);
}
           

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
          
          console.log(productos);
          const productosJsonWrite = JSON.stringify(productos, null, "\t");
          fs.writeFileSync('./productos.json', productosJsonWrite);

          res.redirect("/products/administrador");
     },

//Eliminar producto 
     productDelete:(req,res) => {
          const productosJsonRead = fs.readFileSync(path.join(__dirname, '../productos.json'),{encoding:'utf-8'});
          let productos;
          
          if (productosJsonRead == "") {
               productos = [];
          }else {
               productos = JSON.parse(productosJsonRead);
               //console.log(productosJsonRead);
          }

          console.log(req.params);

          const eliminar = productos.filter(element =>{
              return element.id !== parseInt(req.params.id)
          });

          productos = eliminar;

          const productosJsonWrite = JSON.stringify(productos, null, "\t");
          fs.writeFileSync(path.join(__dirname, '../productos.json'), productosJsonWrite);

          res.redirect("/products/administrador");
},

//carrito de compras
    productCart: (req,res) => {

     res.render("productCart",{carrito: carrito});
}

}



//exportar el controlador
module.exports = ProductsController;