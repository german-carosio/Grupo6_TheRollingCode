let UsersController = {
   
    index: (req,res) => {
         res.render("users");
    },

    login: (req,res) => {
         res.render("login");
    },

    register: (req,res) => {
         res.render("register");
    },

    
}



//exportar el controlador
module.exports = UsersController;