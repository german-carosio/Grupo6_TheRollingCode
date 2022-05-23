const fs = require('fs');
const path = require('path');

let usuarios;

//Funcion para leer JSON
function leerJson() {
     const usersJsonRead = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),{encoding:'utf-8'})
     
     if (usersJsonRead === "") {
     usuarios = [];
     }else {
     usuarios = JSON.parse(usersJsonRead);
     }
     return usuarios
}

//Función para escribir JSON 
function escribirJson() {
const usersJsonWrite = JSON.stringify(usuarios, null, "\t");
fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), usersJsonWrite);
}



let UsersController = {
   
     usersList: (req,res) => {
          
         leerJson()

         res.render("usersList", {usuarios : usuarios});
    },



    login: (req,res) => {
         res.render("login");
    },

//Registro - Creacion de usuario
    register: (req,res) => {
         res.render("register");
    },

    userSave: (req,res) => {
     //if que valida si hay archivo de imagen
     if (req.file) {
          
          leerJson();
         
          let ultimoUser = usuarios.length -1;
          let nuevoId = usuarios[ultimoUser].id + 1;
     

     let usuarioNuevo = {
          id: nuevoId,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		documento: req.body.documento,
		telefono: req.body.telefono,
		email: req.body.email,
		password: req.body.password,
          img: req.file.filename         
     };

     usuarios.push(usuarioNuevo);

     console.log(usuarios);

     escribirJson();

     res.redirect("/");

     }else {
          res.render("register");
     }

},
//Editar usuario 
     userEdit:(req,res) => {

          leerJson();

          const usuario = usuarios.find(element =>{
          return element.id === parseInt(req.params.id)
          })

          res.render("userEdit",{userEdit: usuario});
},

//Editar producto 
     userUpdate:(req,res) => {

          leerJson();
           
          usuarios.forEach(element => {
          
               
               
               if (element.id === parseInt(req.params.id)) {
                    
                    let imgEdit = req.file ?  req.file.filename : element.img;

                    element.nombre = req.body.nombre;
                    element.apellido = req.body.apellido;
                    element.documento = req.body.documento;
                    element.telefono = req.body.telefono;
                    element.email = req.body.email ;
                    element.password = req.body.password;
                    element.img = imgEdit;
               }
               
          });
          

          escribirJson();

          res.redirect("/users");
     },

//Eliminar usuario 
     userDelete:(req,res) => {

     leerJson();

     const eliminar = usuarios.filter(element =>{
         return element.id !== parseInt(req.params.id)
     });

     usuarios = eliminar;


     escribirJson();

     res.redirect("/users");
}
    
}



//exportar el controlador
module.exports = UsersController;