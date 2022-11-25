// operador ++

// i++
// i = i + 1

let total = 20
total = total + 1
total += 1
total++

// operador ternario

// if ... else
// if (total >= 20) {
//   console.log('mayor o igual a 20')
// } else {
//   console.log('menor a 20')
// }

// total >= 20 ? console.log('mayor o igual a 20') : console.log('menor a 20')

// if ... else if ... else

// if (total >= 20 && total <= 40) {
//   console.log('entre 20 y 40')
// } else if (total > 40) {
//   console.log('mayor a 40')
// } else if (total >= 10 && total <= 19) {
//   console.log('entre 10 y 19')
// } else {
//   console.log('menor a 10')
// }

// total >= 20 && total <= 40
//   ? console.log('entre 20 y 40')
//   : total > 40
//   ? console.log('mayor a 40')
//   : total >= 10 && total <= 19
//   ? console.log('entre 10 y 19')
//   : console.log('menor a 20')

// Operador AND

// if(total > 20){
//     console.log('numero correcto')
// }

// let numero
// if(total > 20){
//    numero = 50
// }
// total>20 && console.log('numero correcto')

// let numero = total>20 && 50
// let numero2 = total>20 ? 50 : 0
// console.log(numero2)

// Operador OR

// function resultadoOR(parametro){
//     //return parametro || 0
//     return parametro ?? 0
// }

// console.log(resultadoOR())
// console.log(resultadoOR(5))

// const array = [1,2,3,4,5]

// const numeroBuscado = array.find(num=>num===5) // undefined
// if(numeroBuscado){
//     console.log('numero existe')
// } else {
//     console.log('numero no existe')
// }

// acceso condicional a un objeto

const objetos = [
  {
    nombre: ' Pilar',
    apellido: 'Franco',
    edad: 50,
    idioma: 'Espanol',
    curso: 'JS'
  },
  {
    nombre: ' Diego',
    apellido: 'Linares',
    edad: 45,
  }
]

//console.log(objetos[2]?.edad || 'esta persona no existe')

// desestructuracion
function frase(obj){
    return `El nobre de la persona es ${obj.nombre} ${obj.apellido}, tiene ${obj.edad} anos de edad y esta
    cursando ${obj.curso}`
}

function fraseDes(obj){
    const {apellido,nombre,edad,curso} = obj
    // const apellido = obj.apellido
    // const nombre = obj.nombre
    // const edad = obj.edad
    // const curso = obj.curso

    return `El nombre de la persona es ${nombre} ${apellido} , tiene ${edad} anos de edad y esta
    cursando ${curso}`
}


//console.log(fraseDes(objetos[0]))
// const animales = ['perro','gato','elefante','raton','gallina','toro']
// //                   0 .    1 .     2 .        3 .     4 .       5
// function arrayDes(array){
//     const [,,,,,anim4] = array
//     console.log(anim4)

// }
// arrayDes(animales)

// ...
const animales1 = ['perro','gato','elefante','raton','gallina','toro']
const animales2 = ['guacamaya','titi','iguana','loro']

const animales = animales1.concat(animales2)
const animalesSpread = [...animales1,...animales2]
//console.log(animales)

const estudiante1 = {
    nombre: ' Pilar',
    apellido: 'Franco',
    edad: 50,
    idioma: 'Espanol',
    curso: 'JS',
    hincha: 'Brasil'
  }

  const estudiante2 = {...estudiante1,edad:40,fueAlMundial:true}
  estudiante2.hincha = 'Argentina'
  console.log(estudiante2)
  //console.log(estudiante1)
