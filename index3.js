import express from "express";

const minhaapi3 = express();


minhaapi3.get ("/api/peso", (req, res) => {

    const peso1 = Number (req.query.peso1)
    const peso2 = Number (req.query.peso2)
    const peso3 = Number (req.query.peso3)
    const peso4 = Number (req.query.peso4)
    const peso5 = Number (req.query.peso5)
 
   
    

    res.send ({ media: (peso1 + peso2 + peso3 + peso4 + peso5) / 5})



})

minhaapi3.listen(3001, () => {
    console.log("esse exercício está rodando na porta 3001 localhost")
})

//exercicio3