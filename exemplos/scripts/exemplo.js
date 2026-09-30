// console.log ("batata") - um apatece só no console
// alert ("frita") - aparece na tela para o usuário
// prompt ("123") - aparece na tela e pede algo pro usuário
// const //const nao deixa mudar -- de preferência usar const 
// let // let deixa mudar
// var // n usa
//document.getElementById("rodape")

const footer = document.getElementById("rodape")
footer.style.backgroundColor = "blue"

const  h2Ccriado = document.createElement("h2")
h2Ccriado.textContent = "criando um h2 no footer"

footer.appendChild (h2Ccriado)

h2Ccriado.addEventListener("click", () => {
    alert("funcionou")
})

const forms = document.getElementById("formulario")

forms.addEventListener("submit", (event) => {
     event.preventDefault()
     alert ("nao enviou nada")
})

footer.addEventListener ("mouseover", () => {
    alert ("oi 123456")
})
