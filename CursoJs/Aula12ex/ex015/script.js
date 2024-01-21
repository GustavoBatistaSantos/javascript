function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //usado para testar res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genêro = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe homem.jpeg')
            } else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'jovem homem.webp')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem idoso.webp')
            }
        } else if (fsex[1].checked){
            genêro = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe mulher.jpeg')
            } else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'mulher adulta.webp')
            } else {
                //idoso
                img.setAttribute('src', 'mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genêro} com ${idade} anos.`
        res.appendChild(img)
        //fsex 0 é masculino é o fsex 1 é o feminino pela questão da ordem
    }
}
