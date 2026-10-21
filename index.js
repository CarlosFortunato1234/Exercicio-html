import express from "express";
 
const app = express();
 
 
//  request, response
 
//app.get("/api", (req, res) => {
//res.send( {message:"Hello World"} );
//});
 
//app.get("/api", (req, res) => {
  //const num1 = Number (req.query.num1)
  //const num2 = Number (req.query.num2)
  //res.send({ soma: num1 + num2 })
//});


//app.get ("/api/pessoa/:id", (req, res) => {
  //  const id = req.params.id;
   // res.json ({ message : id})
//});


app.get("/api/soma", (req, res) => {
  const num1 = Number (req.query.num1)
   const num2 = Number (req.query.num2)

   res.send({ soma: num1 + num2})

})
 
app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});


//exercicio1 