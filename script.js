let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = document.querySelector('input#fnum')
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let num = document.querySelector('input#fnum')
    let res = document.querySelector('div#res')
    if (valores.length == 0) {
        alert('Adicione um valor antes de realizar.')
    } else {
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0 

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot 

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores adicionados é ${media}.</p>`
    }
    num.value = ''
    num.focus()
}