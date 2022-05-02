//importar express
const express = require ('express');
//importar el router
const mainRouter = require ('./routes/main');

const app = express();
const port = 3000;

//archivos estaticos
app.use(express.static("public"));

//template engine - motor de plantillas (en este caso ejs)
app.set("view engine", "ejs");



//usar los get del router
app.use("/", mainRouter);

//levantar servidor 
app.listen(process.env.PORT || port, () => {
  console.log("Levantando un servidor con Express")
});


