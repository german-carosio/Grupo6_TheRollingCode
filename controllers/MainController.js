const fs = require('fs');



let MainController = {
   
    index: (req,res) => {
        const productos = JSON.parse(fs.readFileSync('./database/productos.json'))
         res.render("index",{productos: productos});
    },

    administrador: (req,res) => {

        res.render("administrador");
   }
    
}



//exportar el controlador
module.exports = MainController;