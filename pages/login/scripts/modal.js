let botao      = document.querySelector(".esqueciSenha")
let modal      = document.querySelector(".telaPorCima")
let fecharComX = document.querySelector(".xSair")
let enviar     = document.querySelector(".enviar")

botao.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()

//remover class

modal.classList.add("aparecerTelaPorCima")
})



fecharComX.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()

//remover class

modal.classList.remove("aparecerTelaPorCima")
})



enviar.addEventListener("click",function(event){

    //parar Eventos
event.preventDefault()

//remover class

modal.classList.remove("aparecerTelaPorCima")
})