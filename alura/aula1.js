const meuNumero = 3;
// meuNumero é o identificador na memoria que ta guardando o valor de 3

const primeiroNumero = 1;
const segundoNumero = 2;

// as variaveis do tipo número permitem fazer operações matemáticas

const operacaoMatematica = primeiroNumero * segundoNumero;

// para mostrar o resultado no terminal usa o comando console.log

console.log(operacaoMatematica);

const numeroDecimal = 3.3;
const pontoFlutuanteSemZero = .7;
//java aceita sem zero

const novaOperacao = primeiroNumero/numeroDecimal

console.log(Math.round(novaOperacao))

const colegio = "Mario Braga";
console.log(colegio*primeiroNumero)



//java aceita sem zero

const arredonda = numeroDecimal/pontoFlutuanteSemZero

console.log(Math.round(arredonda).toFixed(2))

const salario =3500;
const horasTrabalhadasNoMes =160
const salarioHora = (salario / horasTrabalhadasNoMes); 
  const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log(formatado)
