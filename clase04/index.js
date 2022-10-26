// crear funcion

function sumarSinParams() {
  // bloque de codigo que se va a ejecutar
  let numero1 = parseInt(prompt('Ingresa un primer numero'))
  let numero2 = parseInt(prompt('Ingresa un segundo numero'))
  let resultado = numero1 + numero2
  alert(`El resultado de tu suma es ${resultado}`)
}

function sumarConParams(n1, n2) {
  let resultado = n1 + n2
  alert(`El resultado de tu suma es ${resultado}`)
}

// llamar una funcion

//sumarNumeros();
//sumarNumeros();

/// funcion con parametros

// let numero1 = parseInt(prompt('Ingresa un primer numero'));
// let numero2 = parseInt(prompt('Ingresa un segundo numero'));

// //sumarConParams(8,12); => numero en particular
// sumarConParams(numero1,numero2) // => parametros variables

// ejemplo 2

// function saludarUsuario(x){
//     alert(`Hola ${x} bienvenido al curso de JS`)
// }

// let usuario = prompt('Ingresa tu nombre')
// saludarUsuario(usuario)

// funcion con retorno

// function sumaConRetorno(p1,p2){
//     let resultado = p1+p2
//     return resultado
// }

// let numero1 = parseInt(prompt('Ingresa un primer numero'));
// let numero2 = parseInt(prompt('Ingresa un segundo numero'));
// let oper = prompt('Que operacion deseas realizar? suma - resta -mult - div')
// let resultadoSuma = sumaConRetorno(numero1,numero2)
// console.log(resultadoSuma)
// alert(`El resultado de tu suma es ${resultadoSuma}`)

// calculadora

// function suma(p1,p2){
//     let resultado = p1+p2
//     return resultado
// }

// function resta(p1,p2){
//     let resultado = p1-p2
//     return resultado
// }

// function mult(p1,p2){
//     let resultado = p1*p2
//     return resultado
// }

// function div(p1,p2){
//     let resultado = p1/p2
//     return resultado
// }

// function calculadora(p1,p2,operacion){
//     let resultado
//     if(operacion === 'suma'){
//         resultado = suma(p1,p2)
//     } else if(operacion === 'resta'){
//         resultado = resta(p1,p2)
//     } else if(operacion === 'mult'){
//         resultado = mult(p1,p2)
//     } else if(operacion === 'div'){
//         resultado = div(p1,p2)
//     }
//     return resultado
// }

// let numero1 = parseInt(prompt('Ingresa un primer numero'));
// let numero2 = parseInt(prompt('Ingresa un segundo numero'));
// let oper = prompt('Que operacion deseas realizar? suma - resta -mult - div')

// const resultCalculadora = calculadora(numero1,numero2,oper)
// alert(`El resultado de tu operacion es ${resultCalculadora}`)

const variableGlobal = 10

{
  console.log('variableGlobal', variableGlobal)
  let variable2 = 15
  console.log('variable2', variable2)
}
//console.log('fuera variable2',variable2)
console.log('fuera variableGlobal', variableGlobal)

// opcion 1

// function suma(p1,p2){
//     let resultado = p1+p2
//     return resultado
// }

// funcion anonima
//opcion 2
// const suma = function (p1, p2) {
//   let resultado = p1 + p2
//   return resultado
// }

// opcion 3
const suma = () => {
  let resultado = p1 + p2
  return resultado
}

let resultadoSuma = suma(1, 2)
alert(`El resultado es ${resultadoSuma}`)
