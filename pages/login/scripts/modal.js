let botao      = document.querySelector(".esqueciSenha")
let fundo      = document.querySelector(".fundo")
let fecharComX = document.querySelector(".xSair")
let enviar     = document.querySelector(".enviar")

botao.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()


//remover class
fundo.classList.add("aparecerTelaPorCima")
})



fecharComX.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()

//remover class

fundo.classList.remove("aparecerTelaPorCima")
})



enviar.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()

//remover class

fundo.classList.remove("aparecerTelaPorCima")
})

