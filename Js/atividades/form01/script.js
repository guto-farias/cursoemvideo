 function cont(){  
    var start = Number(document.querySelector('input#start').value)
    var end = Number(document.querySelector('input#end').value)
    var pass = Number(document.querySelector('input#pass').value)

    var res = document.querySelector('div#res')


    if(start > 0 && start < end && pass> 0){
        for(var cont = start; cont <= end; cont += pass){
            res.innerHTML += `<p>${cont}</p>`
        }
    } else {
        res.innerHTML = "<p>Valor informado é inválido! Forneça um início e/ou passo maior que 0 e um início maior que o fim.</p>"
    }
 }
