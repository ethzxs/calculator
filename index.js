const num = document.getElementById('input')
const valores = []

function clean(){
    num.innerHTML= ''
}

function add(n){
    num.innerHTML += n
}

function back(){
    let num = document.getElementById('input').innerHTML
    document.getElementById('input').innerHTML = num.substring(0, num.length -1)
}

function calcular(){
    var resultado = document.getElementById('input').innerHTML
    if(resultado){
        document.getElementById('input').innerHTML = eval(resultado)
    }
}