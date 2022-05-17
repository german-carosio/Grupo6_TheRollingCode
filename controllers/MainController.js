const fs = require('fs');

const productos = JSON.parse(fs.readFileSync('./productos.json'))

//categorias
const categorias = ["Headset", "Mouse", "Teclado"];

let MainController = {
   
    index: (req,res) => {
         res.render("index",{productos: productos});
    }

    
}



//exportar el controlador
module.exports = MainController;