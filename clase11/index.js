// buscar elementos en el DOM

const nombreInput = document.getElementById('nombre')
const apellidoInput = document.getElementById('apellido')
const botonIngresar = document.getElementById('ingresar')
const divTitulo = document.getElementById('divTitulo')
const divSaludo = document.getElementById('divSaludo')
const divInversion = document.getElementById('divInversion')
const divResultado = document.getElementById('divResultado')
// arreglo con los riesgos
const riesgos = [
  {
    tipo: 'bajo',
    tasa: 0.5,
  },
  {
    tipo: 'medio',
    tasa: 0.8,
  },
  {
    tipo: 'alto',
    tasa: 1.5,
  },
]

// clase Banco
class Banco {
  constructor(nombre) {
    this.nombre = nombre
    this.rendimiento = Math.floor(Math.random() * 20) + 1
  }
}

const bancos = []

bancos.push(new Banco('Itau'))
bancos.push(new Banco('NuBank'))
bancos.push(new Banco('Scotiabank'))
bancos.push(new Banco('Bancolombia'))

console.log(bancos)

// pasar a parte de inversion si hay usuario en localStorage
// const usuario = JSON.parse(localStorage.getItem('usuario'))
// if(usuario){
//     mostrarPantallaInversion(usuario)
// }

// escuchar evento click del boton ingresar
botonIngresar.onclick = () => {
  // bancos.push(new Banco(`${nombreInput.value}`))
  // console.log(bancos)

  if (nombreInput.value || apellidoInput.value) {
    const usuario = {
      nombre: nombreInput.value,
      apellido: apellidoInput.value,
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))

    mostrarPantallaInversion(usuario)
    const botonCalcular = document.getElementById('calcular')
    botonCalcular.onclick = () => {
      // cogiendo la informacion del input monto y del select riesgo
      const montoAInvertir = document.getElementById('inputMonto').value
      const riesgoEscogido = document.getElementById('selectRiesgo').value
      console.log(montoAInvertir, riesgoEscogido)
      const tasaRiesgo = riesgos.find(
        (riesgo) => riesgo.tipo === riesgoEscogido
      ).tasa
      console.log(tasaRiesgo)

      bancos.forEach((banco) => {
        const rendimientoConRiesgo = banco.rendimiento * tasaRiesgo
        const utilidad = montoAInvertir * rendimientoConRiesgo
        const parrafo = document.createElement('p')
        parrafo.innerText = `El banco ${banco.nombre} te ofrece un rendimiento anual de ${rendimientoConRiesgo}% lo que te generaria unas utilidades de ${utilidad}`
        divResultado.append(parrafo)
      })
    }
  }
}

function mostrarPantallaInversion(u) {
  // eliminar un div
  divTitulo.remove()

  // agregar elemento al DOM
  const tituloSaludo = document.createElement('h2')
  tituloSaludo.innerText = `Bienvenido ${u.nombre} ${u.apellido}, estas listo para invertir?`
  divSaludo.append(tituloSaludo)

  //crear input monto a invertir
  const inputMonto = document.createElement('input')
  inputMonto.setAttribute('type', 'number')
  inputMonto.setAttribute('id', 'inputMonto')

  // crear boton Calcular
  const botonCalcular = document.createElement('button')
  botonCalcular.setAttribute('id', 'calcular')
  botonCalcular.innerText = 'CALCULAR'

  // crear parrafo
  const parrafoInvertir = document.createElement('p')
  parrafoInvertir.innerText =
    'Coloca el monto a invertir y el tipo de riesgo que quieres asumir'

  // crear un select
  const select = document.createElement('select')
  select.setAttribute('id', 'selectRiesgo')

  // crear las opciones de riesgo
  riesgos.forEach((riesgo) => {
    const optionRiesgo = document.createElement('option')
    optionRiesgo.innerText = `${riesgo.tipo}`
    select.append(optionRiesgo)
  })

  divInversion.append(parrafoInvertir, inputMonto, select, botonCalcular)
}

function calcular() {}
