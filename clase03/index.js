// for

// for(let i = 1;i<=10;i++){
//     console.log('saludar')
// }

// inicia en 1
// finaliza en 10
// 1-2-3-4-5-6-7-8-9-10

//inicia 1
// finaliza en 10
// 1 - 3- 5 -7 -9

// i=i+1 ===> i++

// const inicioContador = parseInt(prompt('Inicio contador?'))
// const finalContador = parseInt(prompt('Final contador?'))
// for (let i = inicioContador; i <= finalContador; i++) {
//   alert(i)
// }

// for (let i = finalContador; i >= inicioContador; i--) {
//     if(i===inicioContador){
//         alert(i)
//     }
//   }

// while

// while(condicion){
//     //bloque de codigo a ejecutar n numero de veces
// }

// let nombre = prompt('Ingresa tu nombre')

// while(nombre!=='tomas'){
//    alert('bienvenido')
//    nombre = prompt('Ingresa tu nombre')
// }

// let numero = parseInt(prompt('Ingresa un numero'))

// while(numero<10 || numero >20){
//     alert('no es el numero correcto')
//     numero = parseInt(prompt('Ingresa un numero'))
// }
// alert(`El numero ingresado es ${numero}`)

// sentencia break

// for(let i = 1;i<=10;i++){
//     if(i===5){
//         console.log('se acabo el ciclo antes de tiempo')
//         break
//     }
//     console.log(i)
// }

// let numero = parseInt(prompt('Ingresa un numero'))

// while(numero<10 || numero >20){
//     if(numero===100){
//         break
//     }
//     alert('no es el numero correcto')
//     numero = parseInt(prompt('Ingresa un numero'))
// }
// alert(`El numero ingresado es ${numero}`)

// continue

let nombre = prompt('Ingresa tu nombre')

// while(nombre!=='tomas'){
//     if(nombre==='ricardo'){
//     nombre = prompt('Ingresa tu nombre')
//         continue
//     }
//    alert('aqui tienes una copa de vino')
//    nombre = prompt('Ingresa tu nombre')
// }

// do while
do {
    if(nombre==='ricardo'){
    nombre = prompt('Ingresa tu nombre')
        continue
    }
   alert('aqui tienes una copa de vino')
   nombre = prompt('Ingresa tu nombre')
}while(nombre!=='tomas')

