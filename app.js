const express = require ('express');
//importar el router
const mainRouter = require ('./routes/main');

const app = express();
const port = 3000;

//archivos estaticos
app.use(express.static("public"));

//usar los get del router
app.use("/", mainRouter);

//levantar servidor 
app.listen(process.env.PORT || port, () => {
  console.log("Levantando un servidor con Express")
});


