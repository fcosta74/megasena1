function sorteia() {
    return Math.trunc(Math.random() * 100)
}
function sorteiaNumeros() {
    let megaSena = []
    let numero = 1
    while(numero <= 6) {
        let numeroAleatorio = sorteia()
        let achou = false
        if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
            for(posicao = 0; posicao < megaSena.length; posicao ++ ) {
                if(megaSena[posicao] == numeroAleatorio) {
                    achou = true
                            break                  
                }
            }
            if(achou == false) {
                megaSena.push(numeroAleatorio)
                numero++
            }
        }
    }
    megaSena.sort((a,b)=>a- b)
    res.innerHTML = '<h2>🍀🍀🍀🍀🍀🍀🍀🍀</h2>'
    res.innerHTML += `<h2>Os números da sorte são: <br><strong>${megaSena.join(' - ')}</strong>.</h2>`
    res.innerHTML += '<h2>🍀🍀🍀🍀🍀🍀🍀🍀</h2>'
    res.innerHTML += '<h2>Tenha uma boa sorte!</h2>' 
    res.innerHTML += '<h2>🍀🍀🍀🍀🍀🍀🍀🍀</h2>'

   
    
}
function limpar(){
    res.innerHTML = null
}