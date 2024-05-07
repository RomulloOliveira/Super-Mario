
const orçamento= document.querySelector(".div-orçamento")
const mascara= document.querySelector(".mascara-background")

function CliqueiNoBotao(){

    orçamento.style.left= "40%"
    orçamento.style.transfom= "translateX(-50%)"
    mascara.style.visibility= "visible"


}

function Cliquefora(){
    
    orçamento.style.left= "-300px"
    orçamento.style.transfom= "translateX(0)"
    mascara.style.visibility= "hidden"
}