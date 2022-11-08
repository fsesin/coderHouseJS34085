//const primerArray = [] // vacio
const segundoArray = ['hola',true,5,'hi',10] // elementos => 5
// index =>             0      1  2   3   4
//console.log(segundoArray)

//console.log(segundoArray[4])

// propiedad array
//console.log(segundoArray.length)

// for(let i=0;i<segundoArray.length;i++){
//     console.log(segundoArray[i])
// }

// METODOS

//Agregar

//.push
segundoArray.push('nuevo elemento')
//.unshift
segundoArray.unshift(10000)
//console.log(segundoArray)

// Eliminar
//.pop
segundoArray.pop()
segundoArray.pop()
//.shift
segundoArray.shift()
segundoArray.shift()
//console.log(segundoArray)

// .splice

const animales1 = ['gato','perro','serpiente','caballo','raton']
//animales.splice(1,1) => eliminar a perro
//animales.splice(1,2,'pajaro')    // reemplazar a perro por pajaro
//animales.splice(1,0,'pajaro','pez')// anadir a pajaro

//console.log(animales1)

// .join

const animalesJoin = animales1.join(', ')
//console.log(`Los animales de la granja son: ${animalesJoin}`)

// .concat

const animales2 = ['toro','cerdo','vaca']

animales2.indexOf('toro') // 0
animales2.indexOf('vaca') // 2
animales2.indexOf('burro') // -1



const animalesTodos = animales1.concat(animales2)
console.log(animalesTodos)

//.slice
const nuevosAnimales = animalesTodos.slice(2,4)
//console.log(nuevosAnimales)

// .indexOf

const index = animalesTodos.indexOf('cerdo') // 6
console.log(animalesTodos[index])

// .includes

console.log(animalesTodos.includes('cerdo'))