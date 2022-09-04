let numeros = document.getElementsByClassName("numeros")
let operacoes = document.getElementsByClassName("operacoes")
let conta = document.getElementById("conta")
let valorX = document.getElementById("limite")
let apagar = document.getElementById("apagar")
let X = document.getElementById("botaoX")
let igual = document.getElementById("igual")
let resultado = document.getElementById("resultado")

for(e of numeros){
    e.addEventListener("click",(e) =>{
        if(conta.value.substr(-1)!=="X"){
            conta.value = conta.value + e.path[0].value
        }
    })
}

for(e of operacoes){
    e.addEventListener("click",(e) =>{
        let u = conta.value.substr(-1)
        if(u!=="*" && u!=="/" && u!=="+" && u!=="-"){
            conta.value = conta.value + e.path[0].value
        }
    })
}

apagar.addEventListener("click", () => {
    conta.value = conta.value.slice(0, -1)
})

X.addEventListener("click", () => {
    if(conta.value.substr(-1)!=="X"){
        conta.value = conta.value + "X"
    }
})

igual.addEventListener("click", () => {
    if(valorX.value === ""){
        alert("Escreva um limite")
    }else if(conta.value === ""){
        alert("Escreva uma função")
    }else if(conta.value.indexOf("X") === -1){
        alert("A função deve conter X")
    } else {
        let calculo = ""
        for(let i = 0; i < conta.value.length; i++){
            if(conta.value[i] == "X"){
                if(!isNaN(conta.value[i-1])){
                    calculo = calculo + "*" + valorX.value
                } else {
                    calculo = calculo + valorX.value
                }
            } else {
                calculo = calculo + conta.value[i]
            }
        }
        let resposta = eval(calculo)
        if(!isNaN(resposta) && resposta !== 0 && resposta !== Infinity && resposta !== -Infinity) {
            resultado.innerHTML = resposta
        } else {
            alert("Ops!, algo deu errado, tente algo mais simples")
        }
    }
})