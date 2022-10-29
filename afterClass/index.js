// objetos bancos
/*
const banco1 = {
    id:1,
    tasa12: 10,
    tasa24: 15,
    tasa36: 8
}

*/

class Banco {
  constructor(id, nombre, tasa12, tasa24, tasa36) {
    this.id = id
    this.nombre = nombre
    this.tasa12 = tasa12
    this.tasa24 = tasa24
    this.tasa36 = tasa36
  }
}

const bancolombia = new Banco(1, 'bancolombia', 10, 11, 12)
const itau = new Banco(2, 'itau', 12, 14, 15)
const nubank = new Banco(3, 'nubank', 8, 11, 14)

//console.log(bancolombia, itau, nubank)

let bancoSeleccionado = parseInt(
  prompt(
    'Ingresa el banco que deseas cotizar 1.bancolombia - 2.itau - 3.nubank'
  )
)

//console.log(bancoSeleccionado)

// variable para condicion en el while
let escogioBanco = false

// variable con la informacion del banco seleccionado
let infoBancoSeleccionado

while (escogioBanco === false) {
  if (bancoSeleccionado === bancolombia.id) {
    escogioBanco = true
    infoBancoSeleccionado = bancolombia
  } else if (bancoSeleccionado === itau.id) {
    escogioBanco = true
    infoBancoSeleccionado = itau
  } else if (bancoSeleccionado === nubank.id) {
    escogioBanco = true
    infoBancoSeleccionado = nubank
  } else {
    alert('Estas ingresando un dato incorrecto')
    bancoSeleccionado = parseInt(
      prompt(
        'Ingresa el banco que deseas cotizar 1.bancolombia - 2.itau - 3.nubank'
      )
    )
  }
}
// en esta variable infoBancoSeleccionado esta la info del banco seleccionado por el usuario
//console.log(infoBancoSeleccionado)
const montoAPrestar = parseInt(prompt('Ingresa el monto que deseas prestar'))

// funcion cuota mensual
const calcularCuotaMensual = (valor, interes, meses) => {
  const cuota = (valor + (valor * interes) / 100) / meses
  return cuota
}

const cuota12 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa12,
  12
)
const cuota24 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa24,
  24
)
const cuota36 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa36,
  36
)

//console.log(cuota12, cuota24, cuota36)
alert(
  `Las opciones que te ofrece ${
    infoBancoSeleccionado.nombre
  } son: ${cuota12.toFixed(2)} usd a 12 meses - ${cuota24.toFixed(
    2
  )} usd a 24 meses - ${cuota36.toFixed(2)} usd a 36 meses`
)
