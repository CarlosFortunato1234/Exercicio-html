import express from "express";

const milhasemkm = express ();


milhasemkm.get ("/api/milhasemkm", (req, res) => {
    const convertmilhas = Number (req.query.convertmilhas)

    res.send ({conversão: convertmilhas * 1.60934})
})



milhasemkm.listen (3005, () => {
    console.log ("Esse aqui ta rodnando no localhost 3005")
})