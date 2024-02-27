var array = [] //péssima prática, evitar ao máximo variáveis globais***
var result = false
 
function add(){  
    let number = Number(document.querySelector('input#num').value)

    let res = document.querySelector('select#sel')

    if(number > 100 || number < 1){
        window.alert('Informe um número entre 1 e 100!')
    } else if(result == true){
        clear()

        let nElement = document.createElement('option')
        nElement.text = `O valor ${number} foi cadastrado com sucesso!`
        res.appendChild(nElement)

        array.push(number)

        result = false
    
    } else {
        let nElement = document.createElement('option')
        nElement.text = `O valor ${number} foi cadastrado com sucesso!`
        res.appendChild(nElement)

        array.push(number)
    }
 }

function finish(){
    n_numbers()
    bigger()
    smaller()
    sum()
    average()

    result = true

}

function n_numbers(){
    let res = document.querySelector('div#resp')

    let nParagraph = document.createElement('p')
    nParagraph.textContent = `Existem ${array.length} elementos guardados.`
    res.appendChild(nParagraph)
}

function bigger(){
    let res = document.querySelector('div#resp')

    let bigger = 0

    for(let i = 0; i < array.length; i++){
        if(array[i] > bigger){
            bigger = array[i]
        }
    }

    let nParagraph = document.createElement('p')
    nParagraph.textContent = `O maior elemento é o ${bigger}.`
    res.appendChild(nParagraph)
}

function smaller(){
    let res = document.querySelector('div#resp')

    let smaller = array[0]

    for(let i = 1; i < array.length; i++){
        if(array[i] < smaller){
            smaller = array[i]
        }
    }

    let nParagraph = document.createElement('p')
    nParagraph.textContent = `O menor elemento é o ${smaller}.`
    res.appendChild(nParagraph)
}

function sum(){
    let res = document.querySelector('div#resp')

    let sum = 0

    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }

    let nParagraph = document.createElement('p')
    nParagraph.textContent = `A soma dos elementos é ${sum}.`
    res.appendChild(nParagraph)
}

function average(){
    let res = document.querySelector('div#resp')

    let sum = 0
    let aver = 0

    for(let i = 0; i < array.length; i++){
        sum += array[i]
        aver = sum / array.length
    }

    let nParagraph = document.createElement('p')
    nParagraph.textContent = `A média dos elementos é ${aver}.`
    res.appendChild(nParagraph)
}

function clear(){
    let res = document.querySelector('div#resp')
    res.innerHTML = ''
}