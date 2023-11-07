//sempre por break embaixo dos cases e usar em dados específicos 
var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 0 testar o dia manualmente
/*
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
*/
//console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log ('[ERRO] Dia inválido')
        break
}