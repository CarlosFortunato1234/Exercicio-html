import express from "express";

const apitemp = express();



apitemp.get ("/api/temperatura", (req, res) => {
    const tempconvert = Number (req.query.tempcelcius)
    
  res.send ({resultado: (9  * tempconvert +160) / 5 })

})

apitemp.listen (3002, () => { 
    console.log ("API RODANDO NA PORTA LOCALHOST 3002 ")
})

//exercicio 4