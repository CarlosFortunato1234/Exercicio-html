import express from "express";
 
const app = express();

app.get("/api/calculadorsalario", (req, res) => { 
  const qtdhora = Number (req.query.qtdhora)
  const vlrhora = Number (req.query.vlrhora) 

  res.send ({ salario: vlrhora * qtdhora})
   



})

app.listen(3000, () => {
    console.log ('esse aqui está rodando no http://localhost:3000')
})


//exercicio2 