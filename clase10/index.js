// // guardar info en storage

// //const nombre = prompt('Ingresa un nombre')

// localStorage.setItem('nombre','Alan')
// sessionStorage.setItem('apellido','Natera')

// localStorage.setItem('edad',35)
// localStorage.setItem('esCasado',null)

// // buscar info del storage

// const edadValue = localStorage.getItem('edad') // '35'
// if(parseInt(edadValue) === 35){
//     console.log('es igual')
// } else {
//     console.log('es diferente')
// }

// console.log(sessionStorage.getItem('apellido'))
// // eliminar info del storage

// // eliminar una clave en particular
// localStorage.removeItem('esCasado')
// sessionStorage.removeItem('apellido')
// // eliminar toda la info
// localStorage.clear()

const inputUsuario = document.getElementById('usuario')
const inputPassword = document.getElementById('password')
const botonIngresar = document.getElementById('ingresar')
const titulo = document.getElementById('titulo')
const divLogin = document.getElementById('divLogin')
const botonPrueba = document.getElementById('prueba')
botonIngresar.onclick = () => {
    // localStorage.setItem('usuario',inputUsuario.value)
    // localStorage.setItem('password',inputPassword.value)
    // localStorage.setItem('edad',35)
    const infoUsuario = {
        usuario: inputUsuario.value,
        password: inputPassword.value,
        edad: 35
    }
    const infoUsuarioJSON = JSON.stringify(infoUsuario)
    //const array = [infoUsuario]
    localStorage.setItem('infoUsuario',infoUsuario)
    localStorage.setItem('infoUsuarioJSON',infoUsuarioJSON)
    //localStorage.setItem('array',array)
}

//console.log(localStorage.getItem('password'))
// const nombreUsuario = localStorage.getItem('usuario')
// if(nombreUsuario){
// titulo.innerText = `Bienvenido ${nombreUsuario} `
// divLogin.remove()
// }

// // .length
// console.log(localStorage.length)
// // .key(posicion)
// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))

// for(let i=0;i<localStorage.length;i++){
//     //console.log(localStorage.key(i))
//     const keyName = localStorage.key(i)
//     const keyValue = localStorage.getItem(keyName)
//     console.log(keyName,keyValue)
// }
// console.log(localStorage.getItem('infoUsuario'))

// const infoUsuario = {
//     usuario: 'frueda',
//     password: 12345,
//     edad: 35
// }

// const infoUsuarioJSON = JSON.stringify(infoUsuario)
// console.log(infoUsuarioJSON)
// console.log(JSON.parse(infoUsuarioJSON))

botonPrueba.onclick = () =>{
    const infoUsuarioJSON = JSON.parse(localStorage.getItem('infoUsuarioJSON'))
    const infoUsuario = localStorage.getItem('infoUsuario')
    console.log(infoUsuarioJSON,infoUsuario)
}