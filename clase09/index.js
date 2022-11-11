const botonPrincipal = document.getElementById('botonPrincipal')
//console.log(botonPrincipal)

// addEventListener

// botonPrincipal.addEventListener('click',()=>{
//     console.log('Hiciste click en el boton')
// })

// function clickFunction() {
//   console.log('Hiciste click en el boton')
// }

// // prefijo on

// botonPrincipal.onclick = () => {
//   alert('Hiciste click en el boton')
// }

const divMouse = document.getElementById('divMouse')
// mouse

// const divMouse = document.querySelector('#divMouse')

//divMouse.onmouseover = () => console.log('Mouse over')
//divMouse.onmouseout = () => console.log('mouse out')
//divMouse.onmousemove = () => console.log('mouse move')
divMouse.onmousedown = () => console.log('mouse down')
divMouse.onmouseup = (e) => console.log(e)

// teclado

const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')

//inputTeclado.onkeydown = (e) => console.log(e.key)
//inputTeclado.onkeyup = (e) => console.log(e.key)
//inputTeclado.oninput = (e) => console.log(e.target.value)
//inputTeclado.onchange = (e) => console.log(e.target.value)
const infoUsuario = {}
botonPrincipal.onclick = () =>{
    infoUsuario.nombre = inputNombre.value
    infoUsuario.apellido = inputApellido.value
    alert(`Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}`)
    console.log(infoUsuario)
}
