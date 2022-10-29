// // animal1

// const tipoAnimal1 = 'perro'
// const nombreAnimal1 = 'Firulais'
// const edadAnimal1 = 4

// // animal2
// const tipoAnimal2 = 'gato'
// const nombreAnimal2 = 'Mishu'
// const edadAnimal2 = 5

// // objeto animal1
// const animal1Obj = {
//   tipo: 'perro',
//   nombre: 'Firulais',
//   edad: 4,

// }

// //objeto animal2
// const animal2Obj = {
//   tipo: 'gato',
//   nombre: 'Mishu',
//   edad: 5,
// }
//console.log(animal2Obj)
//console.log(animal1Obj)

// llamar propiedad en particular de un objeto

// 1. metodo
//console.log(animal1Obj.edad)
//console.log(animal1Obj.nombre)

// 2. metodo
//console.log(animal2Obj['edad'])
//console.log(animal2Obj['nombre'])

// console.log(
//   `Tengo dos objetos animales, uno es un ${animal1Obj.tipo} y el otro es un ${animal2Obj.tipo}`
// )

// quiero anadir una propiedad a animal1

// animal1Obj.esAdoptado = true
// animal1Obj['color'] = 'blanco'

// // modificar propiedades de un objeto
// animal2Obj.nombre = 'Petruska'

// //console.log(animal1Obj)

// // eliminar una propiedad de animal1
// delete animal1Obj.color
// delete animal1Obj.nombre

// console.log(animal1Obj)
// //console.log(animal2Obj)

// // crear funcion constructora

// function Animal(tipo,nombre,edad){
//     this.tipo = tipo
//     this.nombre = nombre
//     this.edad = edad
// }

// const animal3Obj = new Animal('gallina','turuleca',2)
// const animal4Obj = new Animal('raton','perez',10)
// console.log(animal3Obj)
// console.log(animal4Obj)

/*
const animal1Obj = {
  tipo: 'perro',
  nombre: 'Firulais',
  edad: 4,
  
}
*/

// ejercicio
function NuevoUsuario(nombre, email, password) {
  this.nombre = nombre
  this.email = email
  this.password = password
  this.tieneEmail = function () {
    if (this.email) {
      return true
    } else {
      return false
    }
  }
}

const usuario1 = new NuevoUsuario('Facundo', 'facundo@mail.com', '12345')
const usuario2 = new NuevoUsuario('Jaider', 'jaider@mail.com', 'abcde')
const usuario3 = new NuevoUsuario('Alan', null, '123abc')

console.log(usuario1, usuario2, usuario3)

// function tieneEmail(user) {
//   if (user.email) {
//     return true
//   } else {
//     return false
//   }
// }

//console.log(tieneEmail(usuario3))
console.log(usuario1.tieneEmail())
console.log(usuario2.tieneEmail())
console.log(usuario3.tieneEmail())

// clases

// function Animal(tipo,nombre,edad){
//     this.tipo = tipo
//     this.nombre = nombre
//     this.edad = edad
// }

class Animal {
  constructor(tipo, nombre, edad) {
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
  }
}

const animal5Obj = new Animal('pajaro', 'carpintero', 8)
console.log(animal5Obj)

/*
function NuevoUsuario(nombre, email, password) {
  this.nombre = nombre
  this.email = email
  this.password = password
  this.tieneEmail = function () {
    if (this.email) {
      return true
    } else {
      return false
    }
  }
}
*/
class NuevoUsuarioClass {
  constructor(nombre, email, password) {
    this.nombre = nombre
    this.email = email
    this.password = password
  }
  tieneEmail() {
    if (this.email) {
      return true
    } else {
      return false
    }
  }
}

const usuario4 = new NuevoUsuarioClass('Fatima', 'fatima@mail.com', '123abc')
//console.log(usuario4.tieneEmail())

//console.log('esAdoptado' in usuario4)
//console.log(Object.keys(usuario4))

for (const p in usuario4) {
  console.log(`El valor del ${p} es ${usuario1[p]}`)
}
