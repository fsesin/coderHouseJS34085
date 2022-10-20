//let numero1 = 5
//let numero2 = 7
//const resultado = numero1+numero2;
//console.log(resultado);

// 'si' '(manana no llueve)' 'entonces' vamos a la playa
// if (numero2 == 6) {
//   console.log('la condicion se cumple')
// }

// // 'si' '(manana no llueve)' 'entonces' vamos a la playa 'sino' vamos al cine
// if(condicion){
//     // bloque de codigo si la condicion se cumple
// } else {
//     // bloque de codigo si la condicion no se cumple
// }

// ejemplo 1
// if (numero2 == 6) {
//   console.log('Numero igual a 6')
// } else {
//   console.log('Numero distinto de 6')
// }

// ejemplo 2
// const nombre = prompt('Ingresa tu nombre')
// if(nombre.toLowerCase()=='alan'){
//     alert('Bienvenido Alan')
// } else {
//     alert('No eres bienvenido a esta cuenta')
// }

/*
alan => alan
ALAN => alan
Alan => alan
*/

// if (condicion) {
//   // bloque de codigo si la condicion se cumple
// } else if (condicon2) {
//   // bloque de codigo si la condicion2 se cumple
// } else if (condicion3) {
//   // bloque de codigo si la condicion3 se cumple
// } else {
//   // bloque de codigo si ninguna condicion se cumple
// }

// ejemplo 3
// const nombre = prompt('Ingresa tu nombre')
// if (nombre.toLowerCase() == 'alan') {
//   alert('Bienvenido Alan')
// } else if (nombre.toLowerCase() == 'facundo') {
//   alert('Bienvenido Facundo')
// } else if (nombre.toLowerCase() == 'bernardo') {
//   alert('Bienvenido Bernardo')
// } else {
//   alert('No eres bienvenido a esta cuenta')
// }

// ejemplo4

// const profesion = prompt('Eres ingeniero o medico')
// let valorHora
// if(profesion == 'medico'){
//     valorHora = 10
// } else if(profesion == 'ingeniero'){
//     valorHora = 15
// } else {
//     valorHora = 1
// }

// alert('Hola, te vamos a pagar por hora '+valorHora)

// ejemplo 5

// const seguirComprando = prompt('Quieres seguir comprando')

// if(seguirComprando == 'si'){
//     alert('Escoge el siguiente producto')
// } else {
//     alert('Este es el total de tu compra')
// }

// ejemplo calculador
// const numero1 = parseInt(prompt('Ingresa un numero'))
// const numero2 = parseInt(prompt('Ingresa otro numero'))
// const operacion = prompt('Que operacion quieres hacer? sum-rest-mult-div')
// let resultado
// if (operacion === 'sum') {
//   resultado = numero1 + numero2
// } else if (operacion === 'rest') {
//   resultado = numero1 - numero2
// } else if (operacion === 'mult') {
//   resultado = numero1 * numero2
// } else {
//   resultado = numero1 / numero2
// }
// alert('El resultado de tu operacion es:'+resultado)
// 5    -   '5'

// == vs ===
//const num1 = '5'

// if(num1===5){
//     console.log('es igual')
// } else{
//     console.log('es diferente')
// }

// if(num1!==5){
//     console.log('es diferente')
// } else{
//     console.log('es igual')
// }

// if(num1>=5){
//     console.log('este numero es mayor o igual a a 5')
// } else {
//     console.log('este numero es menor')
// }

// const num1 = 25
// if(num1>=10 && num1<=50){
//     console.log('condicion es true')
// } else {
//     console.log('condicion es false')
// }

// && => y
// || => o


// numero ** 2 => cuadrado
// numero ** 3 => cubo

//console.log('Hola '+nombre+' puedes jugar')
//console.log(`Hola ${nombre} puedes jugar`)

// const edadMenor = 18
// const edadMayor = 65

// const edad = parseInt(prompt("¿Que edad tienes?"))
// let resultado
// if(resultado>=edadMenor && resultado<=edadMayor){
//     alert("Bienvenido a nuestra web")
// }
// else{
//     alert("Tu edad no cumple con las condiciones")
// }

const dia = prompt ("Ingrese un día de semana")
if (dia === "lunes" ||  "jueves") {
	(console.log("El dia de hoy tenemos Gimnasia"))
} else if (dia === "martes"){
	(console.log("El dìa de hoy tenemos Matemáticas"))
} else if (dia === "miércoles"){
	(console.log("El dìa de hoy tenemos Castellano"))
} else if (dia === "viernes"){
	(console.log("¡Hoy tenemos el dìa libre!"))
} else if  (dia === "sabado" || "domingo"){
	(console.log("Es fin de semana, no se estudia"))
} else (console.log("Por favor, introducir un dìa correcto"))