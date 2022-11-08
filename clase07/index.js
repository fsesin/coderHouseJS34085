function elevar(n) {
  return function (m) {
    return m ** n
  }
}

const cuadrado = elevar(2) //=> n =2
const cubo = elevar(3) // n = 3
const aLaCuatro = elevar(4) // n = 4

// elevar el 7
//console.log(cuadrado(7)) // m = 7
//console.log(cubo(7)) // m =7
//console.log(aLaCuatro(7)) // m = 7

// funciones que reciben funciones

const sumar = (n1, n2) => n1 + n2
const restar = (n1, n2) => n1 - n2

function calculadora(n1, n2, fn) {
  const resultado = fn(n1, n2)
  return resultado
}

// console.log(calculadora(5,2,sumar))
// console.log(calculadora(5,2,restar))

const arrayNuevo = [1, 2, 4, 5, 7]

let suma = 0
 for(let i=0;i<arrayNuevo.length;i++){
   suma = arrayNuevo[i] + suma
}

// let suma = 0
// arrayNuevo.forEach((num) => (suma = suma + num))
console.log(suma)

// find()

// const numeroDeseado = arrayNuevo.find(e=>e===4)
// console.log(numeroDeseado)

// some()
const numeroDeseado = arrayNuevo.some(e=>e===8)
console.log(numeroDeseado)

// filter()
const arrayFiltrado = arrayNuevo.filter(e=> e>3 && e!==4)
console.log(arrayFiltrado)

// map()
const arrayMap = arrayNuevo.map(e=>e+1)
console.log(arrayMap)

// sort()
arrayNuevo.sort((e1,e2)=>e1-e2)
console.log(arrayNuevo)

// const arrayNuevo = [4, 5, 2, 1, 7]
//                        e1 e2

// Math
console.log(Math.E)
let numero1 = 4
console.log(Math.sqrt(numero1))
console.log(Math.pow(2,8))


// Date
const fechaActual = new Date()
console.log(fechaActual.getFullYear())