class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}
const iphone = new Producto(1, 'Iphone', 500)
//productosExistentes.push(iphone)
const tv = new Producto(2, 'TV', 1000)
//productosExistentes.push(tv)
const ipad = new Producto(3, 'Ipad', 200)
//productosExistentes.push(ipad)
const computador = new Producto(4, 'Computador', 800)
//productosExistentes.push(computador)

const productosExistentes = [iphone, tv, ipad, computador]
//console.log(productosExistentes)

// manipulando el DOM
const selectProds = document.getElementById('lista')
const botonAgregar = document.getElementById('agregar')


productosExistentes.forEach((producto) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${producto.nombre}: ${producto.precio}`
    selectProds.append(optionProd)
})


const carrito = []

botonAgregar.onclick = () => {
   const indexProd = selectProds.selectedIndex
const productoSeleccionado = productosExistentes[indexProd]
carrito.push(productoSeleccionado)
console.log(carrito)
}