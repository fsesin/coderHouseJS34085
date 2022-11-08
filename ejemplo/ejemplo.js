let productoEscogido = parseInt(
  prompt(
    'Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let totalCompra = 0
let seguirComprando = true
let decision

//lista productos

//clase producto
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
console.log(productosExistentes)

while (seguirComprando === true) {

  const productoCLiente = productosExistentes.find(producto => producto.id === productoEscogido)
  if (productoCLiente) {
    totalCompra = totalCompra + productoCLiente.precio
  } else {
    productoEscogido = parseInt(
      prompt(
        'Escoge un producto habilitado: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
    continue
  }
  console.log(productoCLiente)

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    producto = parseInt(
      prompt(
        'Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else {
    seguirComprando = false
  }
}
alert(`El total de tu compra es ${totalCompra}`)
//alert('El total de tu compra es '+totalCompra)

// 1.Iphone: 500
// 2.TV: 1000
// 3.Ipad: 200
// 4.Computador: 800
